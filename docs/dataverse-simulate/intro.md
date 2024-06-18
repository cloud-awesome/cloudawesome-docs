# dataverse-simulate

Mock framework to simulate Dataverse (Power Platform/Dynamics 365 CE) environments to enable unit testing

`dataverse-simulate` uses [NSubstitute](https://nsubstitute.github.io/) to mock all the services provided by the Dataverse API and plugin services

- **IOrganizationService** - Methods for CRUD operations and executing commands against the Dataverse platform
- **IServiceProvider** - Access to service container with the following platform services tailored for the current plugin context
  - **IPluginExecutionContext** - Information about the runtime environment for the plugin
  - **ITracingService** - Enables plugins to log runtime information for debugging and analysis
  - **IOrganizationServiceFactory** - Generates instances of IOrganizationService tailored to specific user or system contexts
  - **ILogger** - Logging interface to be used for adding telemetry to Azure Application Insights
  - **IServiceEndpointNotificationService** - Sends notifications to an external service, such as Azure Service Bus about system events, such as entity changes
  - **IOrganizationService** - Not typically recommended - Instead of using the service factory, retrieves the orgService running under the SYSTEM user context  *(NOT YET IMPLEMENTED)*

To support functionality with the above, there are also four in memory data stores which simulate the functionality of Dataverse and related technologies

- **Entity Data** - The Dataverse database, such as Account, Contacts, and custom entities
- **Logging Data** - A mock of plugin traces, output from the ITracingService
- **Telemetry Data** - A mock of application telemetry, output from the plugin ILogger service
- **Simulator Audit** - A framework-specific audit of every message which has been executed, e.g. Create, RetrieveMultiple, WhoAmI

## Quick start

### Mocking the `IOrganizationService`

`dataverse-simulate` exposes two extension methods to the `IOrganizationService` which mocks standard org service functionality and messages

- Use `.Simulate()` to mock the IOrganizationService
- Use `.Simulated()` to access the mocked entity data and related, in memory data such as logs and telemetry 

```csharp
// This is never really accessed, it's only used to fluently access the simulate method in tests
private readonly IOrganizationService _organizationService = null!;

[Test]
public void Create_Contact_Saves_Record_To_Data_Store()
{
    // Create a mock of the org service
    // Each call to `.Simulate` creates a fresh new mock
    var orgService = _organizationService.Simulate();
    
    // Thereafter you can use any SDK methods on the org service as usual,
    //    or inject it into your code under test (sut)
    var contactId = orgService.Create(Arthur.Contact());
    
    // And use any testing frameworks you like to run assertions
    contactId.Should().NotBeEmpty();

    // Instead of executing a query against the org service, 
    //    you can retrieve or query the in memory data directly
    //    using the `.Simulated` extension
    var contacts = orgService.Simulated().Data().Get("contact");
    
    // And run your assertions on that data
    contacts.Count.Should().Be(1);
    contacts.SingleOrDefault()?.Id.Should().Be(contactId);
}
```

Options can be injected to the mocked service to facilitate unit tests

Use the [SimulatorOptions](simulator-options/simulator-options.md) class to inject any configuration required by your tests,
such as system time, current authenticated user, or other business logic to trigger on SDK message execution.  

```csharp
var userId = Guid.NewGuid();
var systemTime = new DateTime(2020, 8, 16);

var options = new SimulatorOptions
{
    // Inject a mocked system time to allow for date-based tests and assertions
    ClockSimulator = new MockSystemTime(systemTime),
    
    // Set the current authenticated user. 
    // This can use early or late-bound entities (`Entity` or `SystemUser`) 
    AuthenticatedUser = new Entity("systemuser", userId)
    {
        Attributes =
        {
            ["fullname"] = "Lynda Archer"
        }
    }
};

// Pass the options when you simulate the org service
var orgService = _organizationService.Simulate(options);

// Thereafter you can use org service methods as usual,
//    or inject it into your code under test (sut)
var contactId = orgService.Create(Arthur.Contact());
var contacts = orgService.Data().Get("contact");
    
// And assert on configuration as expected
contacts.Count.Should().Be(1);
var createdContact = contacts.SingleOrDefault()!;

createdContact.CreatedBy.Id.Should().Be(userId);
createdContact.ModifiedBy.Id.Should().Be(userId);

createdContact.CreatedOn.Should().Be(systemTime);
createdContact.ModifiedOn.Id.Should().Be(systemTime);

```

### Mocking the `IServiceProvider` to test plugins

`dataverse-simulate` exposes an extension method to the `IServiceProvider` interface to create a mock and also sets up mocks for the all the services which can be called

- Use `.Simulate()` to mock the IServiceProvider

```csharp
private readonly IServiceProvider _serviceProvider = null!;

[Test]
public void Follow_Up_Plugin_Creates_Activity_Record() 
{
    // Create a mock of the service providfer
    var service - _serviceProvider.Simulate();
    
    // Create a reference to the plugin you want to test
    // If your plugin has a constructor, it can be ued as normal
    var sut = new FollowUpPlugin();
    
    // The `IPlugin` interface enforces a `Execute(IServiceProvider serviceProvider)` method
    // Feed the mocked service provider and execute
    // All the other services you initialise in the plugin code will be mocked too 
    sut.Execute(service);
    
    // The `.Simulated` extension exposes 4 mocked data services to query outputs
    var tasks = service.Simulated().Data().Get("tasks");
    var traces = service.Simulated().Logs().Get();
    
    // Then run your test assertions as usual
    tasks.Count.Should().Be(1);
    tasks.SingleOrDefault()!.Subject.Should().Be("Follow up on your call");
    
    traces.Count.Should().Be(2);
}

```

As with the org service, [SimulatorOptions](simulator-options/simulator-options.md) can be injected to the mocked service to facilitate unit tests

```csharp
private readonly IServiceProvider _serviceProvider = null!;

[Test]
public void Follow_Up_Plugin_Creates_Activity_Record() 
{
    var options = new SimulatorOptions
    {
        // Set the current authenticated user. 
        AuthenticatedUser = TestData.SystemUser(),
        
        // Set the plugin execution context, including the target entity of the triggered plugin
        // All other members of the `IPluginExecutionContext` such as registered message, 
        //    entity images, and stage can be set in here
        PluginExecutionContextMock = new PluginExecutionContextMock
        {
            InputParameters = [ new("Target", new Entity("contact", Guid.NewGuid())) ],
            PrimaryEntityName = "contact"
        }
    };

    // Create a mock of the service providfer
    var service - _serviceProvider.Simulate(options);
    
    // Create a reference to the plugin you want to test
    var sut = new FollowUpPlugin();
    sut.Execute(service);
    
    // The `.Simulated` extension exposes 4 mocked data services to query outputs
    var tasks = service.Simulated().Data().Get("tasks");
    var traces = service.Simulated().Logs().Get();
    
    // Then run your test assertions as usual
    tasks.Count.Should().Be(1);
    var followUpTask = tasks.SingleOrDefault()!;
    
    // Plugin has processed the injected target Contact
    followUpTask.Subject.Should().Be("Follow up on your call with 'TestData Contact'");
    followUpTask.Regarding.Should.Be(TestData.Contact().ToEntityReference());
    
    // Plugin has executed under the injected user
    followUpTask.OwnerId.Should.Be(TestData.SystemUser().ToEntityReference());
}
```