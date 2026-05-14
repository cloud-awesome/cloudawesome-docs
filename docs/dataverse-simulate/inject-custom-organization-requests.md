# Custom organization request handlers

`dataverse-simulate` includes built-in [support for common Dataverse SDK messages](supported-sdk-messages.md) such as `CreateRequest`, `AssignRequest`, and `RetrieveMultipleRequest`.

There are many SDK messages, including some which are rarely used or newly introduced by Dataverse. If your code under test calls an `OrganizationRequest` which is not currently implemented, you can register a custom handler for that request in your test.

Custom organization request handlers let you:

- support an SDK message before it is implemented by `dataverse-simulate`
- support custom APIs and custom actions
- return the response shape your code under test expects
- read or update the in-memory Dataverse data store during the request
- avoid taking a direct dependency on the mocking framework used internally

Custom handlers are only used for messages sent through `IOrganizationService.Execute(...)`. Direct SDK methods such as `Create`, `Retrieve`, `Update`, `Delete`, `Associate`, and `Disassociate` are implemented internally.

## Register a custom request handler

Register custom organization requests after calling `.Simulate()` and before executing the code under test.

```csharp
private IOrganizationService _organizationService = null!;

[Test]
public void Code_Can_Execute_Custom_Request()
{
    //Arrange
    _organizationService = _organizationService.Simulate();

    _organizationService
        .Simulated()
        .CustomOrgRequests()
        .Add<new_CalculateAccountScoreRequest>((request, context) =>
        {
            var account = context.Data.Get(request.Target);
            account["new_score"] = 100;
            context.Data.Update(account);

            return new new_CalculateAccountScoreResponse
            {
                Results = new ParameterCollection
                {
                    ["Score"] = 100
                },
                ResponseName = request.RequestName
            };
        });

    var account = new Entity("account", Guid.NewGuid())
    {
        ["name"] = "Cloud Awesome"
    };

    _organizationService.Simulated().Data().Add(account);

    // Act
    var response = (new_CalculateAccountScoreResponse)
        _organizationService.Execute(
            new new_CalculateAccountScoreRequest
            {
                Target = account.ToEntityReference()
            }
        );

    // Assert
    response.Results["Score"].Should().Be(100);
    
    _organizationService.Simulated().Data()
        .Get(account.LogicalName, account.Id)["new_score"]
        .Should().Be(100);
}
```

The handler receives two arguments:

- `request` - the typed `OrganizationRequest` being executed
- `context` - access to the simulated data and runtime context for this test

The context exposes:

- `Data` - the [in-memory Dataverse data service](data-stores/entity-data)
- `Audit` - the [simulator audit service](data-stores/simulator-audits)
- `Options` - the [`SimulatorOptions`](simulator-options/simulator-options.md) used to configure the simulated organization service, if any

Of course, the handler can be declared as an independent method, and then consumed by multiple tests.

For example, the above implementation can be written as:

```csharp
private OrganizationResponse CalculateAccountScore(
        new_CalculateAccountScoreRequest request, 
        CustomOrganizationRequestContext context) {
        
    var account = context.Data.Get(request.Target);
    account["new_score"] = 100;
    context.Data.Update(account);

    return new new_CalculateAccountScoreResponse
    {
        Results = new ParameterCollection
        {
            ["Score"] = 100
        },
        ResponseName = request.RequestName
    };
}
```

And then registered in multiple tests:

```csharp
_organizationService
        .Simulated()
        .CustomOrgRequests()
        .Add<new_CalculateAccountScoreRequest>(CalculateAccountScore)
```

## Example request and response classes

If you are simulating a Dataverse custom API or custom action, your test project can define lightweight request and response classes.

```csharp
public sealed class new_CalculateAccountScoreRequest : OrganizationRequest
{
    public new_CalculateAccountScoreRequest()
    {
        RequestName = "new_CalculateAccountScore";
    }

    public EntityReference Target
    {
        get => (EntityReference)Parameters["Target"];
        init => Parameters["Target"] = value;
    }
}

public sealed class new_CalculateAccountScoreResponse : OrganizationResponse
{
    public int Score => (int)Results["Score"];
}
```

Your production code can call the request through the SDK as usual:

```csharp
public int CalculateScore(IOrganizationService service, EntityReference account)
{
    var response = (new_CalculateAccountScoreResponse)
        service.Execute(
            new new_CalculateAccountScoreRequest
            {
                Target = account
            }
        );

    return response.Score;
}
```

The test then controls exactly what the mocked Dataverse response should be.

## Returning SDK response types

For SDK messages which already have Dataverse request and response classes, register the SDK request type and return the matching SDK response type.

```csharp
_organizationService
    .Simulated()
    .CustomOrgRequests()
    .Add<CalculateRollupFieldRequest>((request, context) =>
    {
        var target = context.Data.Get(request.Target.LogicalName, request.Target.Id);
        target["new_totalvalue"] = new Money(5000m);
        context.Data.Update(target);

        return new CalculateRollupFieldResponse
        {
            Results = new ParameterCollection
            {
                ["Entity"] = target
            },
            ResponseName = "CalculateRollupField"
        };
    });
```

This is useful when the code under test casts the response returned from `Execute`.

```csharp
var response = (CalculateRollupFieldResponse)
    service.Execute(
        new CalculateRollupFieldRequest
        {
            Target = account.ToEntityReference(),
            FieldName = "new_totalvalue"
        }
    );
```

## Using simulator options

The custom request context includes the same `SimulatorOptions` instance passed to `.Simulate(...)`.

```csharp
var options = new SimulatorOptions
{
    ClockSimulator = new MockSystemTime(new DateTime(2026, 1, 1))
};

_organizationService = _organizationService.Simulate(options);

_organizationService
    .Simulated()
    .CustomOrgRequests()
    .Add<new_TimestampRequest>((request, context) =>
    {
        var now = context.Data.SystemTime;

        return new OrganizationResponse
        {
            ResponseName = request.RequestName,
            Results = new ParameterCollection
            {
                ["Timestamp"] = now
            }
        };
    });
```

Prefer `context.Data.SystemTime` when implementing date-sensitive behaviour, because it reflects the mocked system time configured for the test.

:::warning[Built-in handlers cannot be replaced]

Custom handlers are only for requests that are not already [supported](supported-sdk-messages.md) by `dataverse-simulate`.

If you try to register a custom handler for a built-in request, an exception will be thrown:

```csharp
// Throws InvalidOperationException
_organizationService
    .Simulated()
    .CustomOrgRequests()
    .Add<CreateRequest>((request, context) => new CreateResponse());
```

This prevents tests from accidentally changing the behaviour of the standard implementation.

The same request type can only be registered once for an organization service instance.

:::

