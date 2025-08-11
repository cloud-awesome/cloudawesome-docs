# Simulator options

## [Initialise data store](initialise-data.md) 

Pass through a `Dictionary<string, List<Entity>>` of mocked crm data (where the string is the entity logical name) during initialisation to be consumed during tests.

:::info
N.B. While adding data to the mocked data store using SDK requests also runs logic such as creating the primary GUID, setting created/modified by and on etc., the same logic is not run when initialising data here, so you have to ensure that any and all attributes should be set manually.   
:::


## [Set the logged in user](setting-authenticated-user.md)

So you can test things like createdby/modifiedby.

The user record is also added to the system user entity in the mocked data store so can be accessed in any queries included in your system under test.

If no user is passed through here, a default "Simulated User" is created and used instead.


## [Set user's Business Unit](configure-user-business-unit.md)

Similar to setting the logged in user. 

If you have any logic under test that needs to confirm the authenticated user's business unit, it can be set here.

If no Business Unit is passed through, a default "Simulated Root Business Unit" is created and used instead.

## [Feed in the plugin execution context](setting-plugin-context.md)

Isolate your plugin code but feed in required fields such as the initiating target record, or the triggering message

The `PluginExecutionContextMock` class provided implements the `IPluginExecutionContext` allowing you to set any of the data required for testing your plugin, such as the triggering Message ("Create", "Update", "new_CustomApi"), InputParameters (such as the Target entity or entity reference), pre and post-entity images


## [Set the mocked system time](setting-system-time.md)

So that you can include datetime assertions in your tests (instead of using `System.DateTime` which typically produces flaky tests)

The library provides a `MockSystemTime(DateTime now): IClockSimulator` class that can be used, but you can also feed your own implementation of `IClockSimulator` if you want to extend any logic or additional members/data etc.


## [Simulate other system business logic](setting-entity-processors.md)

Isolate your code under test but feed in dependent logic such as business rules, flows and other plugins

Allows you to simulate any other system logic expected in your system (e.g. other plugins or Business Rules) to be executed on Create or Update.


## [Configure Fiscal Year Settings](configure-fiscal-year-settings.md)

Configure the fiscal year settings used in DateTime GroupBy aggregates in query expressions.

Supports:
- setting the first month of the fiscal year (e.g. January or April)
- setting the fiscal year label to either be the start or end year of the fiscal year (i.e. either 2024 or 2025 FY 2024-25)
- setting the prefix of the fiscal year label (typically "FY")


## [Set the Environment's Organization](configure-organization.md)

If you have any logic under test that needs to confirm Organization details of the present environment, it can be configured here.

If no Organization is passed through, a default "Simulated Organization" is created and used instead.


## [Fake service failures](faking-service-failures.md)

Validate that your guard clauses work by simulating the failure of `IServiceProvider.GetService()`


## [~~Simulate Dataverse security model~~](simulate-security-model.md)

:::warning Security model simulation in development 
Currently under development, not ready for prime time! 

Watch this space 👀
:::

Simulates granular entity permissions in conjunction with the simulated user and business unit so that tests can be written when insufficient privelege exceptions are through.

For example, allows the developer to write tests where 
- the simulated user has read permissions against a specific entity but not write permissions
- a query expression does not return a record because the authentication user does not have read permissions to it
- advanced: sharing a record overrides the defined security permissions
