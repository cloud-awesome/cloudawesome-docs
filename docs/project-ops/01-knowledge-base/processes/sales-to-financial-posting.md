---
title: Sales to Financial Posting
sidebar_position: 2
description: Conceptual end-to-end flow from project sales through delivery, billing and financial consequences.
tags: [project-operations, processes, billing, finance]
custom_edit_url: null
source_reviewed: '2026-10-12'
verification_status: needs-technical-review
deployment: [core, integrated-erp]
---

# Sales to Financial Posting

This page gives a first-pass conceptual view of the project lifecycle. The exact record ownership and posting behaviour must be verified for the deployment model.

## Conceptual process

```mermaid
sequenceDiagram
    participant Sales as Sales / Account team
    participant PjO as Project Operations on Dataverse
    participant PM as Project manager
    participant Res as Resources
    participant Fin as Dynamics 365 Finance

    Sales->>PjO: Qualify opportunity and prepare project quote
    Sales->>PjO: Confirm project contract and contract lines
    PM->>PjO: Create project, schedule and team
    Res->>PjO: Submit time, expenses or material usage
    PM->>PjO: Review and approve transactions
    PjO->>PjO: Create actuals and corrections where required
    PjO->>PjO: Prepare proforma invoice
    PjO-->>Fin: Synchronise accounting-relevant records in integrated scenarios
    Fin->>Fin: Calculate tax, exchange rates, dimensions and postings
    Fin->>Fin: Generate/post customer-facing invoice where applicable
```

## Control points

| Stage | What to verify |
| --- | --- |
| Sales | Opportunity-to-quote-to-contract lifecycle, billing method and contract line design. |
| Planning | Project schedule ownership, task management approach and supported scheduling interfaces. |
| Resourcing | Resource roles, skills, requirements, bookings and assignments. |
| Delivery | Time/expense/material approvals, correction path and cut-off controls. |
| Actuals | Creation timing, transaction connection, correction/reversal route and reconciliation status. |
| Billing | Proforma review, invoice proposal, customer invoice and posting status. |
| Finance | Tax, dimensions, WIP, revenue recognition, ledger posting and reconciliation. |

:::warning[Deployment-sensitive billing]

Core and Integrated with ERP scenarios do not have the same downstream billing and accounting responsibilities. Confirm whether the client expects proforma-only review, Finance customer-facing invoicing, revenue recognition or ledger posting.

:::

## Related topics

- [Deployment Models](../../00-start-here/deployment-models.md)
- [Ownership Boundaries](../architecture/ownership-boundaries.md)
- [Dual-write Architecture](../integration/dual-write-architecture.md)
