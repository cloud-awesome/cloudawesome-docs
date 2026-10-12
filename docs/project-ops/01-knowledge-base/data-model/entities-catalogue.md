---
title: Entities Catalogue
sidebar_position: 2
description: Initial catalogue skeleton for Project Operations entities and configuration records.
tags: [project-operations, data-model, entities]
custom_edit_url: null
source_reviewed: '2026-10-12'
verification_status: skeleton
deployment: [core, integrated-erp, manufacturing]
---

# Entities Catalogue

This page is a catalogue skeleton, not a verified logical schema. Fill it by checking Microsoft documentation, Dataverse metadata, Finance entities and real environment evidence.

## Catalogue structure

| Domain | Record or configuration | System area | Verification status | Notes |
| --- | --- | --- | --- | --- |
| Organisation | Legal entity | Finance | Needs verification | Confirm company ID/DataAreaId and project accounting relevance. |
| Organisation | Dataverse business unit | Dataverse | Source-linked | Security boundary; see Dataverse security docs. |
| Organisation | Project Operations organisational unit | Dataverse / PjO | Source-linked | Cost context for billable resources. |
| Sales | Account, opportunity, quote, quote line | Dataverse / Sales | Needs verification | Confirm Project Operations-specific fields and lifecycle. |
| Contract | Project contract and contract line | Dataverse, synced where integrated | Needs verification | Microsoft states these are created in Dataverse for integrated setup/configuration data integration. |
| Project | Project, task, project team | Dataverse / Project scheduling | Needs verification | Confirm scheduling ownership and supported APIs before edits. |
| Resource | Bookable resource, role, skill, requirement, booking | Dataverse / URS | Needs verification | Confirm relationships and assignment lifecycle. |
| Pricing | Sales price list, cost price list, categories, rates | Dataverse and/or Finance by scenario | Needs verification | Mark deployment applicability carefully. |
| Delivery | Time, expense, material usage | Dataverse and/or Finance by scenario | Needs verification | Approval and correction paths are deployment-sensitive. |
| Actuals | Actual, transaction connection | Dataverse / Finance integration | Needs verification | Treat as financial lifecycle records. |
| Billing | Proforma, invoice proposal, customer invoice | Dataverse and Finance by scenario | Needs verification | Distinguish proforma review from posted customer invoices. |
| Integration | Dual-write maps and errors | Dual-write | Needs verification | Confirm installed map versions and status. |

## Per-record template

Use this structure when expanding a record:

```md
## Record name

- Business meaning:
- Deployment applicability:
- Dataverse logical name:
- Finance entity/table equivalent:
- System of record:
- Created by:
- Updated by:
- Key relationships:
- Lifecycle states:
- Security ownership:
- Integration/dual-write behavior:
- Supported extension points:
- Common failure modes:
- Validation evidence:
- Primary Microsoft sources:
- Open questions:
```

## Primary Microsoft documentation

- [Project Operations documentation](https://learn.microsoft.com/en-us/dynamics365/project-operations/)
- [Project Operations setup and configuration data integration](https://learn.microsoft.com/en-us/dynamics365/project-operations/environment/resource-dual-write-setup-integration)
- [Security concepts in Microsoft Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/wp-security-cds)
