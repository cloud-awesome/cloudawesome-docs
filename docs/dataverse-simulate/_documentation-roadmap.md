# dataverse-simulate documentation roadmap

Status: proposed plan, ready for review. Creating this roadmap does not start the documentation rewrite.

Prepared: 28 October 2026.

## 1. Objective and working agreement

Bring the Docusaurus documentation under `docs/dataverse-simulate/` into line with the current local library implementation. Help readers move from a small working test to the precise configuration and assertions their tests need.

### Source of truth

- Library repository: `../dataverse-simulate/`, relative to the documentation repository root.
- Audit snapshot: branch `main`, commit `0386d7c3860ef61528b1122ac6c2a7c2da664d99`.
- The audit found no staged or tracked working-tree differences at that snapshot. Repository metadata was read directly; no Git commands were invoked.
- Use the actual working tree when writing each section, including subsequent uncommitted changes. Recheck the relevant implementations before relying on this snapshot.
- Public APIs and implementations establish behaviour. Relevant tests outside `DocumentationCode/` provide corroborating examples and regression expectations; their existence does not establish that they currently pass.
- The audit was static. No library tests, live Dataverse calls or Docusaurus build were run.

### Agreed scope

| Item | Decision |
| --- | --- |
| Documentation content | May be rewritten, consolidated, split, moved and renamed within `docs/dataverse-simulate/`, after plan review. |
| Existing URLs | No compatibility requirement. Choose the clearest structure now; redirects are not a default requirement. |
| Local navigation | `docs/dataverse-simulate/sidebar.js` and navigation within this documentation directory are in scope. |
| Top-level navigation | Changes to the repository-root `sidebars.js` require confirmation. Identify any need without changing it. |
| Other files outside the target directory | Do not change site configuration, manifests, other projects' documentation or other files without separate authorization. |
| Library repository | Read-only. Do not modify it or run Git operations against it. |
| Fluent configuration | Document the APIs that exist. Do not imply that a universal fluent options API is implemented. |
| Existing documentation tests | Ignore `DocumentationCode/` as a source, dependency and acceptance gate for this work. |
| Future sample testing | Write documentation first. The owner will manually port its samples into the library repository for testing and regression protection. |
| This roadmap | Planning artifact only. The owner will exclude `_documentation-roadmap.md` from the site build. Do not add it to navigation. |

The user's scope decisions above supersede the blanket restriction on local sidebars in `AGENTS.md`. They do not authorize changes to the top-level `sidebars.js` or other out-of-directory files. Do not edit `AGENTS.md` as part of creating this roadmap.

## 2. Outcomes and priorities

The audit found 30 content pages, 16 containing only a heading, plus placeholder entity-data and release-note content. The current SDK request list already matches all 29 registered request types; retain that coverage while documenting its limits.

| Priority | Outcome |
| --- | --- |
| P0: correctness | Remove broken API calls, misleading support claims and descriptions that exceed the implementation. |
| P1: usable coverage | Document the entry points, options, requests, queries, plugins, security, metadata, queues and captured outputs with concrete examples. |
| P2: coherence | Give every topic a canonical home, remove placeholders and duplication, and connect reference pages with practical patterns. |

Completion means that a reader can:

1. Install the library and write a small organization-service or plugin test.
2. Choose the correct `.Simulate()` and `.Simulated()` APIs for their entry point.
3. Configure fixtures without confusing raw data access with simulated SDK behaviour.
4. Determine whether a request or query shape is supported and what setup it needs.
5. Configure security, metadata and queues using public APIs.
6. Assert on entity data, audits, traces, telemetry and endpoint messages.
7. Identify deliberate simulation limits and incomplete public functionality.

## 3. Editorial and example conventions

- Start each page with one short paragraph explaining its purpose, followed by a small example where useful.
- Keep Home short: a roughly six-line plugin example first, the two entry points, then a roughly 20-line configured example. Prefer clarity and complete dependencies over an exact line count.
- Show a real plugin execution and one assertion in the first example. Define the small plugin on the same page or link prominently to its complete definition; do not hide it behind an unexplained sample fixture.
- Use self-contained late-bound entities for introductory examples. Show early-bound usage separately and explain that generated entity types belong to the consumer's test project.
- State required namespaces, package/test-framework dependencies and supporting types. Assertion libraries are example choices, not library requirements.
- Use public APIs only in runnable samples. Preserve exact API spellings, including `OrganisationServiceSimulated`, SDK `IOrganizationService`, `Audit()` and `Audits()`.
- Do not copy assertions about behaviour from old documentation or source comments without checking the implementation.
- Distinguish verified behaviour, explicitly unsupported behaviour and unresolved questions. Avoid turning a source TODO into a feature promise.
- Prefer short task pages, tables and linked examples to long narrative pages. Use British English in prose and exact spellings in code.
- Link setup to behaviour and behaviour to assertions. Keep one canonical explanation of each API rather than reproducing it in several sections.
- Do not publish headings-only pages or lorem ipsum as completed documentation.
- State that the project is free and open source and link the repository licence. Treat “will always be free” as an owner-approved project commitment, not a conclusion derived from source inspection.
- Describe the checked-out implementation separately from published package availability. The local project currently declares .NET 8, C# 12 and version `1.1.1`; these facts do not establish the latest NuGet release.

## 4. Proposed directory and navigation structure

This is the intended final structure, not a requirement to create empty pages in advance. Add each page when it contains useful content. Local `sidebar.js` should follow the same grouping and order.

```text
dataverse-simulate/
  _documentation-roadmap.md             # excluded planning artifact
  AGENTS.md
  sidebar.js
  index.md                             # Home
  getting-started.md                    # Installation and prerequisites
  support-and-limitations.md
  organization-service/
    index.md
    requests/
      index.md                         # Supported request matrix
      core-requests.md
      upsert.md
      batches-and-transactions.md
      custom-requests.md
    queries/
      index.md                         # Query support matrix
      query-expression.md
      query-by-attribute.md
      fetchxml.md
      joins-and-aliases.md
      paging.md
      aggregates.md
  plugins/
    index.md
    execution-context.md
    organization-service-factory.md
    tracing-and-telemetry.md
    service-endpoint-notifications.md
  configuration/
    index.md                           # All options and defaults
    data.md
    identity.md
    time-and-fiscal-settings.md
    service-failures.md
    test-isolation.md
  entity-processors/
    index.md
    create.md
    update.md
  security/
    index.md
    model-and-privileges.md
    roles-and-teams.md
    sharing.md
    ownership.md
  metadata/
    index.md
    loading.md
    validation.md
    retrieving.md
  queue-management/
    index.md
    setup.md
    operations.md
  assertions/
    index.md
    data.md
    audits.md
    logs.md
    telemetry.md
    service-bus.md
  patterns/
    index.md
    fixtures.md
    dependent-behaviour.md
    failure-paths.md
  release-notes/
    index.md                           # Add with verified release information
    <verified-version>.md              # Only verified releases
```

### Canonical ownership of overlapping topics

| Topic | Canonical home | Other pages should do this |
| --- | --- | --- |
| Full options inventory and defaults | `configuration/index.md` | Link to the appropriate option or domain recipe. |
| Data seeding and relationship fixtures | `configuration/data.md` | Link from service introductions, queues and patterns. |
| Raw data inspection and mutations | `assertions/data.md` | Explain the SDK/fixture boundary briefly, then link. |
| Plugin context setup and projection | `plugins/execution-context.md` | Options reference links here instead of duplicating context tables. |
| Connection user versus effective caller | `plugins/organization-service-factory.md` | Identity setup and security link to the identity table. |
| Security configuration and semantics | `security/` | Configuration overview gives a small example and links here. |
| Metadata configuration and semantics | `metadata/` | Configuration overview links to loading and validation. |
| Queue configuration and semantics | `queue-management/` | Configuration overview links to setup. |
| Processor registration | `entity-processors/index.md` | Configuration overview links to this page. |
| Consuming tracing, telemetry and endpoint services | `plugins/` | Link to captured-output reference pages for assertions. |
| Captured-output APIs | `assertions/` | Plugin and pattern pages use short examples and links. |
| Support boundaries | Domain support matrices | Root limitations page summarizes and links; it does not repeat every matrix. |

“Assertions” means examples using ordinary test-framework assertions over simulator output, and what helper functions are provided within the library to ease the construction of assertions regardless of test framework. Do not imply a new built-in assertion DSL exists.

## 5. Page-by-page backlog

Evidence IDs refer to the source register in section 11. All paths in this section are final documentation paths relative to this directory.

### 5.1 Home, installation and support boundaries

| Page                         | Planned content and acceptance criteria                                                                                                                                                                                                                                                                        | Evidence               |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| `index.md`                   | Explain what the library simulates and why to use it; small plugin example; `.Simulate()` versus `.Simulated()`; configured example; free/open-source statement; links to the two entry-point guides and major capabilities. Remove unexplained `Arthur.Contact()` dependencies and “four stores” assumptions. | E01–E04, E10, E13, E18 |
| `getting-started.md`         | Package ID and installation command; local implementation's target framework; example language requirements; essential namespaces; test framework choice; links to complete first service/plugin tests. Do not present project version as the latest published release.                                        | E01, E02, E18          |
| `support-and-limitations.md` | Entry-point capability table; synchronous support; unsupported async interfaces in this checkout; the five provider service types; unsupported direct organization-service resolution; raw fixture access caveat; links to query, metadata, security and audit limitations.                                    | E01–E04, E06–E10, E13  |

### 5.2 Organization service and requests

| Page                                                        | Planned content and acceptance criteria                                                                                                                                                                                                                                                                                           | Evidence          |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| `organization-service/index.md`                             | Complete minimal test; direct CRUD/association methods; `Execute`; available `.Simulated()` helpers; assign the returned `.Simulate()` value; cross-link lifecycle, configuration and assertions. Explain that only supported SDK behaviour is simulated.                                                                         | E01, E03, E05     |
| `organization-service/requests/index.md`                    | Matrix for all 29 registered types, grouped by core, batches, queues, security and metadata. Add request class/namespace, response type, prerequisites, behavioural scope, audit coverage and links. Explain unsupported request exceptions.                                                                                      | E01, E05, E09–E12 |
| `organization-service/requests/core-requests.md`            | Direct methods and equivalent request types; Create/Update/Delete/Retrieve/Associate/Disassociate, Assign and SetState; generated fields; selected-column retrieval; missing records, duplicate IDs and SDK fault shapes. Link to security, metadata, ownership and relationships rather than claiming complete Dataverse parity. | E05, E09, E10     |
| `organization-service/requests/upsert.md`                   | Create/update selection; primary-ID precedence; `KeyAttributes`; metadata-declared keys; ambiguous matches; response `RecordCreated`/`Target`; processor invocation; input isolation and audit behaviour. Describe the current unmatched-key versus matching-key distinction precisely.                                           | E05, E11          |
| `organization-service/requests/batches-and-transactions.md` | ExecuteMultiple settings and response ordering; caught SDK faults versus other exceptions; ExecuteTransaction default response behaviour, rollback and fault indexes; nested-batch rejection. State the stores/model covered by rollback without promising rollback of arbitrary external custom-handler effects.                 | E12               |
| `organization-service/requests/custom-requests.md`          | Public registration API; complete request/response classes; typed response example; context data/options/audit access; CLR-type dispatch; duplicate/built-in registration rejection; unsupported request exception; registration scope; manual auditing. Fix the existing missing semicolon and avoid undefined supporting types. | E05, E11, E12     |

### 5.3 Queries

| Page                                                 | Planned content and acceptance criteria                                                                                                                                                                                                                                                           | Evidence      |
|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `organization-service/queries/index.md`              | Three supported query forms; feature matrix and condition-operator matrix derived from actual registries/parsers; projection, joins, ordering, distinct, paging, aggregates and explicit rejection cases. Include one small query and links to detailed pages.                                    | E06–E08       |
| `organization-service/queries/query-expression.md`   | Filtering including nested AND/OR; columns and primary IDs; SDK value types; order before projection; distinct identity behaviour; `TopCount`; supported `AttributeExpressions`. Link to specialized pages for joins, paging and aggregates.                                                      | E06–E08       |
| `organization-service/queries/query-by-attribute.md` | Attribute/value equality pairs combined with AND; columns, SDK value comparisons, ordering, top and paging. Do not imply arbitrary filter or join syntax is available.                                                                                                                            | E06, E07      |
| `organization-service/queries/fetchxml.md`           | Complete FetchExpression example; supported XML condition names and mappings; columns/default projection; nested filters and links; top/count/page/cookie options; aggregation links. Explicitly document rejected `entityname`, `valueof`, child `<value>` conditions and non-aggregate aliases. | E06–E08       |
| `organization-service/queries/joins-and-aliases.md`  | Inner/left-outer joins, nested/sibling links, `AliasedValue` shape, selected linked columns, link criteria and ordering. Explain unsupported joins, qualified inputs and Any/All filter links. Include readable examples of supported unqualified `LinkCriteria` and `LinkEntity.Orders`.         | E06, E07, E09 |
| `organization-service/queries/paging.md`             | `PageInfo`, `MoreRecords`, `PagingCookie`, total counts and limit flag; default/capped page size 5,000; supported cookie query shapes; simulator-generated cookie restrictions; simple-paging offset boundary; incompatible `TopCount` combinations. Show a full continuation loop.               | E07           |
| `organization-service/queries/aggregates.md`         | Sum/average/min/max/count/count-column; aliases and result value types; grouped/empty results; distinct count-column; date/fiscal grouping; aggregate record limits and failures. Cover both QueryExpression and FetchXML forms without implying every Dataverse aggregation option is available. | E08, E04      |

### 5.4 Plugins

| Page                                        | Planned content and acceptance criteria                                                                                                                                                                                                                                      | Evidence           |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `plugins/index.md`                          | Complete small `IPlugin` and test; supported provider services; passing options; explicit invocation of the plugin under test; output helpers. Explain that setting Stage or MessageName supplies context and does not create an automatic plugin-registration pipeline.     | E02, E03, E13      |
| `plugins/execution-context.md`              | Options setup; Target as Entity/EntityReference; message, stage, depth, parameters, shared variables and entity images; identity/time sources; complete configurable/projected/generated/unsupported member table; context replacement and fresh service resolution.         | E13                |
| `plugins/organization-service-factory.md`   | Obtain factory; `CreateOrganizationService` identity table for explicit GUID, `Guid.Empty` and `null`; required user records; connection versus effective identity; shared data/audits; isolated callers; SYSTEM bypass boundaries. Show assertions on the effective caller. | E01, E02, E09, E13 |
| `plugins/tracing-and-telemetry.md`          | Resolve `ITracingService` and plugin `ILogger`; supported calls; formatting expectations; minimal producer examples and links to log/telemetry assertion pages. Avoid claiming full Application Insights emulation.                                                          | E14                |
| `plugins/service-endpoint-notifications.md` | Resolve and call notification service; required `serviceendpoint` reference; captured context JSON and simulated return string; limitations of endpoint delivery emulation; links to service-bus assertions and failure configuration.                                       | E15                |

### 5.5 Configuration and entity processors

| Page                                        | Planned content and acceptance criteria                                                                                                                                                                                                                                                   | Evidence                |
|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| `configuration/index.md`                    | Full 13-property `ISimulatorOptions`/`SimulatorOptions` table: types, defaults, initialization timing, affected entry points and canonical setup links. Describe available domain builders without inventing a universal fluent options builder.                                          | E03, E04                |
| `configuration/data.md`                     | Single/bulk fixtures through `InitialiseData`; IDs and required fixture attributes; raw seeding versus SDK Create; dictionary replacement; seeded reference records; `InitialiseRelationships` and `SetRelationship`; existence prerequisites and security bypass implications.           | E04, E05                |
| `configuration/identity.md`                 | AuthenticatedUser, BusinessUnit and Organization; default records; queryable seeded rows; explicit IDs and required links; relationship between these options, plugin context and security-model principals. Link to factory identity semantics.                                          | E04, E09, E13           |
| `configuration/time-and-fiscal-settings.md` | `MockSystemTime`, `IClockSimulator`, initialization-time capture, generated timestamps and relative date queries; fiscal start month, start/end-year naming and prefix with defaults; examples linked to aggregate grouping.                                                              | E04, E08                |
| `configuration/service-failures.md`         | Five provider-null switches; request exception settings and exact request names; `FailingRecords`; default exception; per-record versus whole-request failure; unsupported-request/custom-handler boundaries; assertion recipes.                                                          | E16                     |
| `configuration/test-isolation.md`           | New simulation per test; instance-scoped stores; factory services sharing state; supplied data-service reset; mutable fixtures/options; each `Reinitialise` overload's actual behaviour; distinguish context replacement from full reset and recommend fresh simulation for a full reset. | E01, E02, E04, E05, E13 |
| `entity-processors/index.md`                | `IEntityProcessor.Process(Entity)` and dictionary registration by `ProcessorType`; only Create/Update messages; dependent-business-rule use case; processing order and scope; Upsert selects the underlying processor.                                                                    | E05, E11, E17           |
| `entity-processors/create.md`               | Complete Create processor and test arrangement; input after framework preprocessing/defaults; output committed through ownership processing; cloned service boundary; limitations. Correct the current “Update” heading.                                                                  | E05, E17                |
| `entity-processors/update.md`               | Complete Update processor; patch semantics rather than assuming a full stored record; validation and invocation order; raw-store update distinction. Correct the current “Create” heading.                                                                                                | E05, E17                |

### 5.6 Security

| Page                               | Planned content and acceptance criteria                                                                                                                                                                                                                                      | Evidence |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| `security/index.md`                | Small working setup and denial example; optional enforcement; complete-model requirements; `IgnoreMissingEntities` default and strict setup; supported model implementation; supported/unsupported security scope. Replace blanket “in development” claims.                  | E09      |
| `security/model-and-privileges.md` | Eight privileges and None/User/BusinessUnit/ParentChild/Organization depths; business-unit hierarchy, users, validation, table versus record checks; direct retrieval denial versus query filtering; linked-row security before downstream query processing.                 | E09      |
| `security/roles-and-teams.md`      | Named roles, user/team assignments, owner/access team distinctions, membership, privilege merging, XML import variants and logical-name overrides; seeded principal/role/membership rows; business-unit-specific role instances and role associations.                       | E09      |
| `security/sharing.md`              | Grant/modify/revoke, retrieve principal/shared access; user/team shares; required table privileges; share permissions; state changes in the configured security model and prerequisite records. Avoid implying a share creates missing table privileges.                     | E09      |
| `security/ownership.md`            | Default owner and derived owning fields; Assign and owner changes via Update/Upsert; owner teams and assignee requirements; required caller/new-owner permissions; organization-owned tables; unsupported independent owning-business-unit changes and modernized ownership. | E09      |

### 5.7 Metadata and queues

| Page                             | Planned content and acceptance criteria                                                                                                                                                                                                                                                                                                                         | Evidence      |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `metadata/index.md`              | Small metadata-backed example; permissive operation without metadata versus configured validation; links to load, inspect, validate and retrieve metadata; explain that metadata is not a live environment connection.                                                                                                                                          | E10           |
| `metadata/loading.md`            | Contract version `1.0`; inline `entities` and split `entityFiles`; relative file resolution; complete minimal JSON fixture; `SimulatedMetadata.Load`, options injection and org-service `.Metadata().Load`; `Current`/`IsLoaded`; error conditions. For plugins use options or a factory-created service, since the provider facade has no `Metadata()` helper. | E03, E10      |
| `metadata/validation.md`         | Enforced entity/attribute existence, create/update/read flags, required-create rules, lengths, numeric range/precision, lookup target types, options, state/status defaults and validation; query validation; queue capability. Explicitly separate parsed/projected fields from enforced behaviour, including `IsSecured` and `ValidMessages`.                 | E10, E06, E08 |
| `metadata/retrieving.md`         | Four SDK metadata retrieval requests, typed results, supported selectors/filters, configured metadata prerequisite and lack of table-read security requirement. Do not imply full SDK metadata fidelity or selector support without inspecting each handler/projection.                                                                                         | E10           |
| `queue-management/index.md`      | Supported queue lifecycle and two entry styles: `.Simulated().Queues()` helpers and SDK requests. Small example and links to setup/operations/assertions.                                                                                                                                                                                                       | E03, E08      |
| `queue-management/setup.md`      | `SimulatedQueueModel`, WithQueue/WithQueueItem overloads, required target/worker/queue records, seeded rows/defaults, duplicate/conflicting IDs, metadata prerequisites and security setup.                                                                                                                                                                     | E08, E09, E10 |
| `queue-management/operations.md` | Add/move/pick/release/remove/route; response shapes, worker/remove flags, route targets, required privileges, faults and audits. Show identity-preserving moves and consistent helper/SDK behaviour. Use the current consistency tests rather than assuming older test names fully describe the implementation.                                                 | E08           |

### 5.8 Assertions, patterns and releases

| Page                                                | Planned content and acceptance criteria                                                                                                                                                                                                                                                                    | Evidence                                |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| `assertions/index.md`                               | Output capability matrix by entry point; arrange/act/assert example; `Audit()` versus `Audits()`; five captured-output categories; fixtures versus observed SDK output.                                                                                                                                    | E03, E05, E14, E15                      |
| `assertions/data.md`                                | Get-all/table/ID/reference/typed overloads; mutable raw entities; typed retrieval constraints; direct add/upsert/update/delete caveats; no SDK security or metadata validation; ID/timestamp assertions and service-result isolation.                                                                      | E05                                     |
| `assertions/audits.md`                              | Entry-point spelling; message/ID filters; record shape; clear; per-operation coverage matrix; successful versus failed operations; batch/transaction rollback; manual custom-handler audit entries. Never describe this as an automatic journal of every request.                                          | E05, E11, E12                           |
| `assertions/logs.md`                                | Get all, substring filtering, clear, formatted trace messages and ordering; a complete plugin trace assertion.                                                                                                                                                                                             | E14                                     |
| `assertions/telemetry.md`                           | Get all/by level/by exact template, clear; `MessageFormat`, `Args`, `LogLevel`, `FormattedMessage`; supported logger calls and formatting limitations.                                                                                                                                                     | E14                                     |
| `assertions/service-bus.md`                         | Get all/by substring, clear; captured context JSON; meaningful assertions on payloads; fields omitted by serialization and no real delivery guarantee.                                                                                                                                                     | E15                                     |
| `patterns/index.md`                                 | Small catalogue linking to specific recipes and the underlying reference pages. Do not duplicate API inventories.                                                                                                                                                                                          | Relevant domain evidence                |
| `patterns/fixtures.md`                              | Fresh simulator per test, shared fixture construction with isolated state, early/late-bound records, metadata fixture files, coherent security identities; cross-link reset caveats.                                                                                                                       | E01–E05, E09, E10                       |
| `patterns/dependent-behaviour.md`                   | Choosing a processor versus custom request versus direct fixture setup; table-driven arrangements; plugin-context examples; clearly scoped simulation of dependencies.                                                                                                                                     | E11, E13, E17                           |
| `patterns/failure-paths.md`                         | Missing provider service, injected request failure, security denial, metadata rejection and transaction rollback, each with an appropriate assertion.                                                                                                                                                      | E09, E10, E12, E16                      |
| `release-notes/index.md` and verified version pages | Replace template content with evidence-backed release information. Record provenance for each release. If release history cannot be established locally, keep the category unpublished and track the missing evidence here; do not invent a release or call all current behaviour `1.1.1` release content. | E18 and owner-supplied release evidence |

## 6. API coverage checkpoints

### Entry-point matrix

This matrix is verified against the two public facade classes at the audit snapshot.

| Helper                      | Organization service  | Service provider |
|-----------------------------|-----------------------|------------------|
| Entity data                 | `Data()`              | `Data()`         |
| Simulator audits            | `Audit()`             | `Audits()`       |
| Traces                      | —                     | `Logs()`         |
| Telemetry                   | —                     | `Telemetry()`    |
| Endpoint message capture    | —                     | `ServiceBus()`   |
| Queue operations            | `Queues()`            | `Queues()`       |
| Metadata loading/inspection | `Metadata()`          | —                |
| Security model builder      | `SecurityModel()`     | —                |
| Custom request registration | `CustomOrgRequests()` | —                |

Do not infer that absent provider helpers make their domains unusable in plugin tests: options can configure those domains, and a factory-created organization service exposes its own facade.

### Options inventory

Every row must have a documented type, default, timing and example or linked recipe.

| Option                       | Canonical page                              |
|------------------------------|---------------------------------------------|
| `ClockSimulator`             | `configuration/time-and-fiscal-settings.md` |
| `AuthenticatedUser`          | `configuration/identity.md`                 |
| `BusinessUnit`               | `configuration/identity.md`                 |
| `Organization`               | `configuration/identity.md`                 |
| `EntityProcessors`           | `entity-processors/index.md`                |
| `PluginExecutionContextMock` | `plugins/execution-context.md`              |
| `FakeServiceFailureSettings` | `configuration/service-failures.md`         |
| `InitialiseData`             | `configuration/data.md`                     |
| `InitialiseRelationships`    | `configuration/data.md`                     |
| `SimulatedSecurityModel`     | `security/index.md`                         |
| `FiscalYearSettings`         | `configuration/time-and-fiscal-settings.md` |
| `Metadata`                   | `metadata/loading.md`                       |
| `Queues`                     | `queue-management/setup.md`                 |

### Request inventory

The final request matrix must account for these 29 registered types. Registration is verified; full parameter/response coverage must be checked while writing each row.

| Group                 | Requests                                                                                                                                       |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Core                  | Create, Update, Upsert, Delete, Retrieve, RetrieveMultiple, Associate, Disassociate, Assign, SetState                                          |
| Batches               | ExecuteMultiple, ExecuteTransaction                                                                                                            |
| Queues                | AddToQueue, PickFromQueue, ReleaseToQueue, RemoveFromQueue, RouteTo                                                                            |
| Security and identity | AddMembersTeam, RemoveMembersTeam, GrantAccess, ModifyAccess, RevokeAccess, RetrievePrincipalAccess, RetrieveSharedPrincipalsAndAccess, WhoAmI |
| Metadata              | RetrieveAllEntities, RetrieveEntity, RetrieveAttribute, RetrieveRelationship                                                                   |

### Query matrix dimensions

- [ ] Three query forms and their shared execution path.
- [ ] Complete supported condition list from the handler registry and separate FetchXML operator mappings.
- [ ] Nested AND/OR filters and unsupported qualified/column-comparison/AnyAll shapes.
- [ ] Base/linked projection, primary IDs, SDK wrappers and `AliasedValue` results.
- [ ] Inner/left-outer, nested/sibling links and supported linked ordering.
- [ ] Distinct projection and result identity, including empty-column cases.
- [ ] Ordering, top, paging, cookies, counts and interaction restrictions.
- [ ] Aggregate types, aliases, grouping, fiscal options, result types and limits.
- [ ] Metadata validation and security filtering order.
- [ ] Explicit exceptions versus potentially ignored/unimplemented fields. Do not classify an SDK option as supported merely because no exception is thrown.

## 7. Existing-page disposition

Every existing content page has a destination below. Moves are intentional; update all in-scope links and local sidebar IDs together. Do not preserve empty old pages solely to preserve URLs.

| Existing path                                                  | Disposition and destination                                                                                  |
|----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `index.md`                                                     | Rewrite as concise Home; distribute long examples to the two entry-point introductions.                      |
| `mocking-for-the-organization-service.md`                      | Replace with `organization-service/index.md`.                                                                |
| `mocking-for-plugins.md`                                       | Replace with `plugins/index.md`.                                                                             |
| `data-stores/data-stores.md`                                   | Replace with `assertions/index.md`; distinguish five captured-output categories and facade differences.      |
| `data-stores/entity-data/index.md`                             | Replace placeholder with `assertions/data.md`; move arrangement material to `configuration/data.md`.         |
| `data-stores/plugin-traces/index.md`                           | Replace with `assertions/logs.md`.                                                                           |
| `data-stores/application-telemetry/index.md`                   | Replace with `assertions/telemetry.md`.                                                                      |
| `data-stores/simulator-audits/index.md`                        | Replace with `assertions/audits.md`.                                                                         |
| `dataverse-metadata/dataverse-metadata.md`                     | Replace with the `metadata/` section.                                                                        |
| `entity-processors/entity-processors.md`                       | Replace with `entity-processors/index.md`.                                                                   |
| `entity-processors/create.md`                                  | Retain path, replace placeholder and correct reversed heading.                                               |
| `entity-processors/update.md`                                  | Retain path, replace placeholder and correct reversed heading.                                               |
| `organization-requests/supported-sdk-messages.md`              | Move/rewrite as `organization-service/requests/index.md`; retain verified 29-request coverage.               |
| `organization-requests/inject-custom-organization-requests.md` | Move/revise as `organization-service/requests/custom-requests.md`; keep useful examples after source checks. |
| `security-model/security-model.md`                             | Replace with `security/index.md` and detailed security pages.                                                |
| `simulator-options/simulator-options.md`                       | Replace with `configuration/index.md`; all 13 options.                                                       |
| `simulator-options/initialise-data.md`                         | Replace with `configuration/data.md`; fix API/types and explain replacement semantics.                       |
| `simulator-options/setting-authenticated-user.md`              | Consolidate into `configuration/identity.md`.                                                                |
| `simulator-options/configure-user-business-unit.md`            | Consolidate into `configuration/identity.md`.                                                                |
| `simulator-options/configure-organization.md`                  | Consolidate into `configuration/identity.md`.                                                                |
| `simulator-options/setting-plugin-context.md`                  | Replace with `plugins/execution-context.md`.                                                                 |
| `simulator-options/setting-system-time.md`                     | Consolidate into `configuration/time-and-fiscal-settings.md`.                                                |
| `simulator-options/configure-fiscal-year-settings.md`          | Consolidate into `configuration/time-and-fiscal-settings.md`.                                                |
| `simulator-options/simulate-security-model.md`                 | Remove obsolete warning; replace with `security/index.md`; link from configuration overview.                 |
| `simulator-options/queue-simulation.md`                        | Replace with `queue-management/setup.md`.                                                                    |
| `simulator-options/setting-entity-processors.md`               | Consolidate into `entity-processors/index.md`.                                                               |
| `simulator-options/faking-service-failures.md`                 | Replace with `configuration/service-failures.md`.                                                            |
| `release-notes/2023.8.1.1.md`                                  | Remove placeholder; replace only if actual release evidence is available.                                    |
| `release-notes/2023.9.6.1.md`                                  | Remove placeholder; replace only if actual release evidence is available.                                    |
| `release-notes/2023.9.8.1.md`                                  | Remove placeholder; replace only if actual release evidence is available.                                    |

Other existing files: rewrite local `sidebar.js` incrementally for completed pages; leave `AGENTS.md` unchanged unless separately requested. Retain this roadmap as the working tracker.

## 8. Phased delivery roadmap

Use the phase IDs when requesting or reporting work. Check off tasks only when the deliverable exists and its acceptance criteria have been reviewed. Sample writing and manual test porting have separate statuses.

### R0 — Review and establish the baseline

Dependencies: none. Priority: planning.

- [x] Review this roadmap and agree any page-boundary changes.
- [x] Confirm the documentation target remains the current local working tree, rather than a particular published release.
- [ ] When implementation starts, recheck source identity and changes relevant to the first section without library Git operations.
- [x] Confirm the owner has excluded this roadmap from the site build; never add it to local navigation.

Exit: plan reviewed; source baseline and documentation boundaries recorded. Do not use completion of the roadmap file itself as authorization to rewrite the docs.

### R1 — Foundation, local navigation and urgent corrections

Dependencies: R0. Priority: P0/P1.

- [ ] Write Home, Getting started and Support and limitations.
- [ ] Write organization-service and plugin introductions with complete minimal examples.
- [ ] Write the options overview and facade capability matrix.
- [ ] Correct or retire all superseded claims: nonexistent `.Simulated().Add`, blanket security warning, “every message” audits, association-metadata validation, configuration-free requests and unrestricted context configuration.
- [ ] Introduce the new local sidebar groups, adding only completed pages.
- [ ] When moving an existing page, update/remove its old local navigation entry and all in-scope links in the same batch. Keep unfinished existing pages reachable until their planned replacement or removal is ready.
- [ ] Record first-batch samples in the handoff register.

Exit: entry points and configuration overview are usable; no completed page repeats a known misleading claim; local navigation resolves to existing pages.

### R2 — Configuration, entity data and processors

Dependencies: R1. Priority: P0/P1.

- [ ] Write configuration data, identity, time/fiscal, failures and isolation pages.
- [ ] Write the entity-data assertion reference and relationship fixture examples.
- [ ] Write processor overview/Create/Update pages and correct reversed headings.
- [ ] Document raw mutable access, dictionary replacement, typed retrieval and clone boundaries.
- [ ] Document reset overload limits without promising option restoration.
- [ ] Consolidate/remove replaced simulator-options and data-store pages; update local links/navigation.

Exit: all 13 options have a destination and their non-domain setup is complete; readers can arrange and inspect a deterministic test.

### R3 — Requests, queries and transactions

Dependencies: R2. Priority: P1.

- [ ] Write the request matrix and core request reference.
- [ ] Write Upsert, batches/transactions and revised custom-request guidance.
- [ ] Write all query pages and the supported-condition/feature matrices.
- [ ] Add paging-loop, join/alias, aggregate and rollback examples.
- [ ] Verify fault types, response shapes, audit coverage and unsupported-input behaviour against handlers.
- [ ] Cross-link metadata/security-dependent behaviour, completing those links as R4/R5 pages land.

Exit: each registered request is represented, query support has explicit boundaries, and generic “Dataverse parity” claims have been replaced with precise scope.

### R4 — Metadata

Dependencies: R2; integrate with R3. Priority: P1.

- [ ] Write metadata overview/loading/validation/retrieval pages.
- [ ] Include complete minimal inline and split-file JSON examples using contract `1.0`.
- [ ] Explain permissive versus configured behaviour and parsed versus enforced fields.
- [ ] Verify supported selectors and result projection for all four metadata requests.
- [ ] Link query, ownership and queue metadata requirements to the relevant pages.

Exit: a reader can create/load a metadata fixture and understand which operations it changes.

### R5 — Security and caller identity

Dependencies: R2–R4 for integrated examples. Priority: P1.

- [ ] Write all security pages and the factory identity guide.
- [ ] Include a strict model example with coherent business-unit/user/owner IDs.
- [ ] Cover roles, teams, XML import, seeded security rows and privilege merging.
- [ ] Cover sharing, ownership and linked-query filtering with explicit limitations.
- [ ] Verify connection/effective/SYSTEM identity wording against current implementation.
- [ ] Explain custom `ISecurityModel` rejection and missing-entity defaults.

Exit: positive and negative security scenarios can be arranged without relying on permissive defaults accidentally.

### R6 — Queue management

Dependencies: R2, R4 and R5. Priority: P1.

- [ ] Write queue overview/setup/operations.
- [ ] Show equivalent helper and SDK workflows.
- [ ] Cover seed defaults, prerequisite records, metadata capability and security permissions.
- [ ] Include identity-preserving move, pick/remove, release and route examples.
- [ ] Verify failed-operation state and transaction rollback descriptions.

Exit: the five queue requests and public queue helpers are documented with consistent terminology and state transitions.

### R7 — Plugin services and remaining assertions

Dependencies: R1/R2; integrate R3–R6. Priority: P1.

- [ ] Complete execution-context projection/configuration table.
- [ ] Write producer guides for tracing, telemetry and endpoint notifications.
- [ ] Write assertion overview/audits/logs/telemetry/service-bus pages.
- [ ] Build the per-operation audit coverage table from actual handler calls/delegation.
- [ ] Verify exact-template versus substring matching and clearing semantics.
- [ ] Remove replaced data-store/plugin stubs and complete local cross-links.

Exit: every public facade helper has a useful reference and example; audit coverage and context limitations are explicit.

### R8 — Patterns, release information and editorial completion

Dependencies: R1–R7. Priority: P2.

- [ ] Write the three pattern recipes and their catalogue.
- [ ] Remove remaining placeholder release notes.
- [ ] Publish release pages only with verified release evidence; record any evidence gap as pending.
- [ ] Review Home examples and introduction links against the completed structure.
- [ ] Check terminology, page length, duplication, headings and example dependencies.

Exit: the documentation is navigable by task and domain, contains no unfinished placeholder pages, and does not invent release history.

### R9 — Final verification and sample handoff

Dependencies: R1–R8 for implemented scope. Priority: completion.

- [ ] Review all changed paths; confirm no library or out-of-scope site files changed.
- [ ] Verify local sidebar syntax and every referenced doc ID.
- [ ] Check internal links, fragments, relative assets and orphaned pages across the target directory.
- [ ] Validate JSON/XML examples and review C# signatures/types against current public source APIs.
- [ ] Run the existing Docusaurus build if dependencies and output handling allow it without unauthorized configuration/source changes. Record the actual command/result. If blocked or requiring broader scope, state that clearly rather than claiming a successful build.
- [ ] Confirm the roadmap is excluded by the owner's build configuration and absent from navigation.
- [ ] Deliver the sample register with exact page/heading locations, dependencies, expected outcomes and validation status.
- [ ] Record remaining implementation ambiguities and external work separately from completed documentation.

Exit: documentation checks have explicit results; samples are ready for manual porting. Do not claim samples are regression-tested until the owner has ported and run them.

## 9. Code-sample handoff register

Maintain this table as pages are written. These are proposed sample groups, not code already authored. Split a group into individual rows when it yields multiple runnable samples.

For each authored sample, add its final heading/anchor, supporting types/files, namespaces, fixture data, chosen test/assertion framework, expected outcome and status. Use: `planned`, `written / source-reviewed`, `isolated compile/run verified`, `handed off`, `owner ported/tested`. Never imply a later status from an earlier one.

| ID | Destination | Sample and expected outcome | Status |
| --- | --- | --- | --- |
| S01 | `index.md` | Minimal plugin execute plus one assertion; supporting plugin available. | Planned |
| S02 | `index.md` | Configured example demonstrating completed options/builders, with defined fixture dependencies. | Planned |
| S03 | `organization-service/index.md` | Create/retrieve/assert through the service and `.Simulated().Data()`. | Planned |
| S04 | `plugins/index.md` | Complete small plugin, provider simulation and output assertion. | Planned |
| S05 | `configuration/data.md` | Raw fixtures, bulk replacement and seeded relationships. | Planned |
| S06 | `configuration/identity.md` | Explicit user/business unit/organization reflected in output. | Planned |
| S07 | `configuration/time-and-fiscal-settings.md` | Fixed time and fiscal grouping settings. | Planned |
| S08 | `configuration/service-failures.md` | Missing provider service and configured per-request/per-record exceptions. | Planned |
| S09 | `configuration/test-isolation.md` | Separate instances and documented context/reset behaviour. | Planned |
| S10 | `organization-service/requests/custom-requests.md` | Complete custom request/response, handler registration, mutation and manual audit. | Planned |
| S11 | `organization-service/requests/upsert.md` | Create/update paths and metadata-backed key matching. | Planned |
| S12 | `organization-service/requests/batches-and-transactions.md` | Batch fault handling and transaction rollback/fault index. | Planned |
| S13 | `organization-service/queries/` | One complete example per query form, using supported input shapes. | Planned |
| S14 | `organization-service/queries/joins-and-aliases.md` | Join, supported linked filter/order and typed aliased-value assertion. | Planned |
| S15 | `organization-service/queries/paging.md` | Continuation loop and total-count/limit assertions. | Planned |
| S16 | `organization-service/queries/aggregates.md` | Typed aggregate, grouping/fiscal result and limit failure. | Planned |
| S17 | `plugins/execution-context.md` | Target, images, parameters and explicit initiating user. | Planned |
| S18 | `plugins/organization-service-factory.md` | Explicit/empty/null caller identities and shared-state assertions. | Planned |
| S19 | `entity-processors/create.md`, `update.md` | Complete processor types, registration and observable transformation. | Planned |
| S20 | `metadata/` | Complete JSON files, loading, validation failure and SDK metadata response. | Planned |
| S21 | `security/` | Strict privileges, roles/teams, sharing, ownership and denied access. | Planned |
| S22 | `queue-management/` | Complete queue fixtures and helper/SDK lifecycle with preserved move identity. | Planned |
| S23 | `assertions/data.md`, `audits.md` | Mutable fixture versus SDK result and actual audit coverage. | Planned |
| S24 | `plugins/tracing-and-telemetry.md`, `assertions/logs.md`, `telemetry.md` | Produce and inspect trace/telemetry values using documented filters. | Planned |
| S25 | `plugins/service-endpoint-notifications.md`, `assertions/service-bus.md` | Produce and inspect a serialized endpoint context message. | Planned |
| S26 | `patterns/` | Reusable arrangements and failure recipes linked to canonical examples. | Planned |

Manual porting into the library is the owner's later work. Do not modify the library, create/update `DocumentationCode/` tests or make their existing contents an acceptance gate for documentation delivery.

## 10. Known limits, decisions and external work

| Item | Current status | Documentation action / follow-up |
| --- | --- | --- |
| Universal fluent configuration | Incomplete; domain-specific fluent APIs exist. | Document the implemented options/facades/builders only. No universal configuration-chain sample. |
| Async organization-service support | No async/Async2 simulation implementation found in the audited public surface. | State unsupported for this snapshot. Do not publish an implementation date. |
| Direct provider organization-service resolution | Provider switch supports five service types and rejects other requested types. | Direct readers to the factory; do not imply direct resolution now works. |
| `Reinitialise(ISimulatorOptions)` | Clears entity/relationship data; does not restore the supplied options. | Describe its actual limit and recommend fresh simulation for complete reset. Any library fix is separate work. |
| Context configurability | Only a subset of the interface is projected; some members are generated/read-only. | Publish an exact table; distinguish new resolution after replacement from already-resolved context objects. |
| Audits | Not every handler adds entries. | Publish an operation matrix, including failures/rollback/custom handlers. Do not turn incomplete coverage into a false guarantee. |
| Metadata enforcement | Parsed metadata is broader than enforced runtime behaviour. | Verify field by field. Do not infer field security, message validation or relationship-schema enforcement from stored metadata fields. |
| Metadata selectors and SDK projection | Handler/projection-specific subset. | Inspect each retrieval handler and projection while writing; document supported selectors only. |
| Create override timestamp spelling | `EntityConstants` currently uses `overridencreatedon`, whereas the conventional SDK attribute is `overriddencreatedon`. | Treat as a source discrepancy requiring separate maintainer review. Do not promise conventional override handling or teach the typo as a Dataverse feature. |
| Published package/release history | Local version declaration is known; published availability and historical release contents were not verified. | Use owner-supplied/local release evidence; avoid “latest” or invented changelog claims. |
| Permanent free availability statement | Project-policy wording, not implementation evidence. | Use free/open-source wording with the licence; owner may approve a stronger commitment during review. |
| Top-level `sidebars.js` | Outside authorized automatic edits. | If the local section cannot be wired in without changing it, present the exact proposed change and request confirmation then. |
| Roadmap build exclusion | Owner-managed. | Do not add navigation entries or change site configuration to exclude this file. |
| Sample test porting | Owner's later manual step. | Supply the complete register; report untested/verified statuses accurately. |
| Other site files and inbound links | Outside this documentation assessment. | Flag discovered dependencies or links requiring changes outside the target directory. No backward-URL guarantee or redirect project is assumed. |

## 11. Source evidence register

Links below are repository-relative for local review. They point into the authoritative sibling library repository, not a published API version. Symbol names identify the relevant evidence if lines move. Non-documentation test files are corroborating evidence; no test result is claimed.

| ID | Source evidence | Corroborating tests / verification focus |
| --- | --- | --- |
| E01 | [OrganisationServiceSimulator.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/OrganisationServiceSimulator.cs): `Simulate`, state initialization, `Simulated`, registered requests. | [OrganisationServiceSimulatorTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/OrganisationServiceSimulatorTests.cs): options/data/relationship initialization. |
| E02 | [ServiceProviderSimulator.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceProviderSimulator.cs): provider state, supported service switch, initialization. | [ServiceProviderSimulatorTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceProviderSimulatorTests.cs): instance isolation, services, null failures, shared factory state. |
| E03 | [OrganisationServiceSimulated.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataServices/OrganisationServiceSimulated.cs), [ServiceProviderSimulated.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataServices/ServiceProviderSimulated.cs), [ISimulatorOptions.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/Interfaces/ISimulatorOptions.cs), [SimulatorOptions.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/SimulatorOptions.cs). | Verify every helper and all 13 options directly; retain facade spelling differences. |
| E04 | [SimulatorOptionsProcessor.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/SimulatorOptionsProcessor.cs), [MockSystemTime.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/MockSystemTime.cs), [FiscalYearSettings.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataStores/FiscalYearSettings.cs). | Default records, initialization order, captured time and fiscal defaults; recheck each entry point. |
| E05 | [MockedEntityDataService.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataServices/MockedEntityDataService.cs), [MockedEntityDataStore.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataStores/MockedEntityDataStore.cs), [ServiceRequests](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests), [SimulatorAuditService.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataServices/SimulatorAuditService.cs). | [EntityDataServiceTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/DataServicesTests/EntityDataServiceTests.cs), [CrudIsolationTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/BasicServiceRequestTests/CrudIsolationTests.cs), [EntityAssociatorTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceRequestsTests/EntityAssociatorTests.cs). |
| E06 | [EntityMultipleRetriever.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/EntityMultipleRetriever.cs), [QueryParsers](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/QueryParsers): QueryExpression/QueryByAttribute/FetchExpression parsers, `ConditionHandlerFactory`, `QueryInputValidator`, projection and links. | [QueryParserTests](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/QueryParserTests), especially `QueryInputOutputSemanticsTests`, `LinkedEntityTests`, `FetchExpressionLinkedEntityFidelityTests` and `P1CloseoutQueryTests`. |
| E07 | [QueryPaging.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/QueryParsers/QueryPaging.cs), [QueryExpressionParser.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/QueryParsers/QueryExpressionParser.cs). | [PagingAggregateRegressionTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/QueryParserTests/PagingAggregateRegressionTests.cs): cookies, counts, top/page interactions and distinct. |
| E08 | [Aggregates.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/QueryParsers/Aggregates.cs), [FetchXmlAggregateOptions.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/QueryParsers/FetchXmlAggregateOptions.cs), [Queues](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/Queues). | Aggregate tests in [QueryParserTests](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/QueryParserTests); [QueueSimulationTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/QueueSimulationTests.cs), [QueueMutationConsistencyTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/QueueMutationConsistencyTests.cs). |
| E09 | [SecurityModel](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/SecurityModel), [SimulatedSecurityEnforcer.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/SimulatedSecurityEnforcer.cs), [RecordOwnership.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/RecordOwnership.cs) and security request handlers. | [SecurityModelTests](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/SecurityModelTests): permissions, fixtures, role replication, enforcement, sharing and identity regressions. |
| E10 | [Metadata](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/Metadata), including loader, service, validator and SDK projection; four retrieval handlers in [OrganizationRequests](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/OrganizationRequests). | [MetadataSimulationTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/MetadataSimulationTests.cs), [TestMetadata](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/TestMetadata). |
| E11 | [UpsertRequestHandler.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/OrganizationRequests/UpsertRequestHandler.cs), [CustomOrganizationRequestRegistry.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/CustomOrganizationRequestRegistry.cs), [RequestHandlerRegistry.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/RequestHandlerRegistry.cs), custom context/adapter. | [UpsertConsistencyTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceRequestsTests/OrganizationRequestsTests/UpsertConsistencyTests.cs), [CustomOrganizationRequestTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceRequestsTests/OrganizationRequestsTests/CustomOrganizationRequestTests.cs), [UnsupportedOrganizationRequestTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceRequestsTests/OrganizationRequestsTests/UnsupportedOrganizationRequestTests.cs). |
| E12 | [ExecuteMultipleRequestHandler.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/OrganizationRequests/ExecuteMultipleRequestHandler.cs), [ExecuteTransactionRequestHandler.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/OrganizationRequests/ExecuteTransactionRequestHandler.cs). | [CoreOrganizationRequestTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceRequestsTests/OrganizationRequestsTests/CoreOrganizationRequestTests.cs), [MutationConsistencyTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceRequestsTests/OrganizationRequestsTests/MutationConsistencyTests.cs). |
| E13 | [PluginExecutionContextMock.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceProviders/PluginExecutionContextMock.cs), [PluginExecutionContextSimulator.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceProviders/PluginExecutionContextSimulator.cs), [OrganisationServiceFactorySimulator.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceProviders/OrganisationServiceFactorySimulator.cs). | [PluginExecutionContextSimulatorTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceProvidersTests/PluginExecutionContextSimulatorTests.cs), [SecurityIdentityRegressionTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/SecurityModelTests/SecurityIdentityRegressionTests.cs). |
| E14 | [TracingServiceSimulator.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceProviders/TracingServiceSimulator.cs), [TelemetrySimulator.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceProviders/TelemetrySimulator.cs), [MockedLoggingService.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataServices/MockedLoggingService.cs), [MockedTelemetryService.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataServices/MockedTelemetryService.cs), `TelemetryMock`. | Trace/telemetry tests in [ServiceProvidersTests](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceProvidersTests). |
| E15 | [ServiceEndpointNotificationSimulator.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceProviders/ServiceEndpointNotificationSimulator.cs), [MockedServiceBusService.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataServices/MockedServiceBusService.cs). | [ServiceEndpointNotificationSimulatorTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceProvidersTests/ServiceEndpointNotificationSimulatorTests.cs). |
| E16 | [FakeServiceFailureSettings.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataStores/FakeServiceFailureSettings.cs), [RequestFailureSetting.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/DataStores/RequestFailureSetting.cs), [RequestFailureHandler.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/RequestFailureHandler.cs). | [RequestFailureSettingTests](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/ServiceRequestsTests/RequestFailureSettingTests), provider-null tests and queue consistency tests. |
| E17 | [IEntityProcessor.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/Interfaces/IEntityProcessor.cs), [ProcessorType.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/ProcessorType.cs), [ProcessorMessage.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/ServiceRequests/ProcessorMessage.cs), Create/Update implementations. | [CreateTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/BasicServiceRequestTests/CreateTests.cs), [UpdateTests.cs](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.Test/BasicServiceRequestTests/UpdateTests.cs), Upsert consistency tests. |
| E18 | [CloudAwesome.Xrm.Simulate.csproj](../../../dataverse-simulate/src/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate/CloudAwesome.Xrm.Simulate.csproj), [LICENSE](../../../dataverse-simulate/LICENSE). | Local framework/language/package declarations and licence only; not published release history. |

## 12. Progress log

Append an entry after each completed batch. Record actual work and verification, not anticipated results.

| Date | Phase / pages | Source snapshot | Samples | Verification | Remaining issues |
| --- | --- | --- | --- | --- | --- |
| 2026-10-28 | Roadmap created; documentation rewrite not started | `main` / `0386d7c3860ef61528b1122ac6c2a7c2da664d99` | S01–S26 proposed; no samples authored | Planning artifact checks recorded in delivery response; no library tests or site build | Roadmap review, owner-managed build exclusion and phase R0 |
