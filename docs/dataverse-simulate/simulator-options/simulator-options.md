# Simulator options

## [Initialise data store](initialise-data.md) 

Pass through a `Dictionary<string, List<Entity>>` of mocked crm data (where the string is the entity logical name) during initialisation to be consumed during tests.

:::info
N.B. While adding data to the mocked data store using SDK requests also runs logic such as creating the primary GUID, setting created/modified by and on etc., the same logic is not run when initialising data here, so you have to ensure that any and all attributes should be set manually.   
:::

## [Set the mocked system time](setting-system-time.md)

So that you can include datetime assertions in your tests (instead of using `System.DateTime` which typically produces flaky tests)

The library provides a `MockSystemTime(DateTime now): IClockSimulator` class that can be used, but you can also feed your own implementation of `IClockSimulator` if you want to extend any logic or additional members/data etc.

## [Set the logged in user](setting-authenticated-user.md)

So you can test things like createdby/modifiedby.

The user record is also added to the system user entity in the mocked data store so can be accessed in any queries included in your system under test.

If no user is passed through here, a default "Simulated User" is created and used instead.

## [Simulate other system business logic](setting-entity-processors.md)

Isolate your code under test but feed in dependent logic such as business rules, flows and other plugins

Allows you to simulate any other system logic expected in your system (e.g. other plugins or Business Rules) to be executed on Create or Update.

## [Feed in the plugin execution context](setting-plugin-context.md)

Isolate your plugin code but feed in required fields such as the initiating target record, or the triggering message

The `PluginExecutionContextMock` class provided implements the `IPluginExecutionContext` allowing you to set any of the data required for testing your plugin, such as the triggering Message ("Create", "Update", "new_CustomApi"), InputParameters (such as the Target entity or entity reference), pre and post-entity images 

## [Fake service failures](faking-service-failures.md)

Validate that your guard clauses work by simulating the failure of `IServiceProvider.GetService()`