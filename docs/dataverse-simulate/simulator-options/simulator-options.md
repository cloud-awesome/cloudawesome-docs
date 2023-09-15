# Simulator options

## Set the system time

So that you can include datetime assertions in your tests

## Set the logged in user

So you can test things like createdby/modifiedby

## Simulate other business logic when creating/updating records

Isolate your code under test but feed in dependent logic such as business rules, flows and other plugins

## Feed in the plugin execution context

Isolate your plugin code but feed in required fields such as the initiating target record, or the triggering message

## Fake service failures

Validate that your guard clauses work by simulating the failure of `IServiceProvider.GetService()`