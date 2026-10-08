# Supported SDK messages

## Introduction

`dataverse-simulate` currently supports the SDK messages listed in the below table.

If your code-under-test requires any other messages to be mocked, you can [inject your own message handler](inject-custom-organization-requests.md). 

While all the messages are designed to fail gracefully if no data or configuration is provided (useful if the target message is not the subject of the test), several of the groups require [simulator option configuration](../simulator-options/simulator-options.md) if the results are under test:

- Queue Management: To set up Queues and Queue Items, see [Queue simulation](../simulator-options/queue-simulation.md).
- Metadata: To configure metadata (entities, attributes, optionset values, relationships), see [dataverse metadata](../dataverse-metadata/dataverse-metadata.md). In addition to metadata-specific SDK messages, metadata is consumed throughout other messages (e.g. validating string attribute legnth during `CreateRequest` or `UpdateRequest`, validating a relationship exists during an `AssociateRequest`)
- Security: To configure security configuration (business units, teams, users, security roles, entity privileges), see [security model](../security-model/security-model.md).  In addition to the security-specific SDK messages, seucirty can be enforced throughout other messages (e.g. does the user have permissions to create, query, read records owned by a specific user or team in a specific business unit)

## Supported messages

| Group           | Message                           |
|-----------------|-----------------------------------|
| Core requests   | Create                            |
|                 | Update                            |
|                 | Upsert                            |
|                 | Delete                            |
|                 | Retrieve                          |
|                 | RetrieveMultiple                  |
|                 | Associate                         |
|                 | Disassociate                      |
|                 | Assign                            |
|                 | SetState                          |
| Transactions    | ExecuteMultiple                   |
|                 | ExecuteTransaction                |
| QueueManagement | AddToQueue                        |
|                 | PickFromQueue                     |
|                 | ReleaseToQueue                    |
|                 | RemoveFromQueue                   |
|                 | RouteTo                           |
| Security        | AddMembersTeam                    |
|                 | RemoveMembersTeam                 |
|                 | GrantAccess                       |
|                 | ModifyAccess                      |
|                 | RevokeAccess                      |
|                 | RetrievePrincipalAccess           |
|                 | RetrieveSharedPrincipalsAndAccess |
|                 | WhoAmI                            |
| Metadata        | RetrieveAllEntities               |
|                 | RetrieveEntity                    |
|                 | RetrieveAttribute                 |
|                 | RetrieveRelationship              |

