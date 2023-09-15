# Data captured by tests

## Entity data

An in-memory mock of the Dataverse database, containing entity data

## Plugin trace logs

An in-memory mock of the Dataverse plugin trace logs. Contains data written out by the ITracingService

## Application telemetry

An in-memory mock of Azure Application Insights. Contains data written out by a plugin consuming the ILogger service

## Simulator audits

Tracks every call to an API message called by the IOrganizationService, e.g. create, update, delete, assign