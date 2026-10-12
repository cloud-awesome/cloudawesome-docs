---
title: Fast Refresh
sidebar_position: 2
description: One-day route for reacclimatising to Project Operations before an engagement.
tags: [project-operations, refresher, engagement-prep]
custom_edit_url: null
source_reviewed: '2026-10-12'
verification_status: working-draft
---

# Fast Refresh

Use this route when returning to Project Operations after time away, or before the first workshop on a new client engagement.

## One-day route

1. Read [Deployment Models](./deployment-models.md) and confirm which deployment family is in scope.
2. Read [System Map](./system-map.md) to reset the Dataverse, Finance, dual-write and tooling boundaries.
3. Read [Organisation Concepts](../01-knowledge-base/architecture/business-units-org-units-legal-entities.md) before making any assumptions about companies, business units or resource organisations.
4. Review [Dual-write Architecture](../01-knowledge-base/integration/dual-write-architecture.md) if Finance integration is in scope.
5. Review [Integrated Workflow](../01-knowledge-base/processes/sales-to-financial-posting.md) to trace the end-to-end business lifecycle.
6. Pick the relevant playbook: [New Implementation](../02-engagement-playbooks/new-implementation/index.md) or [Existing Implementation](../02-engagement-playbooks/existing-implementation/index.md).

:::warning[Do not skip deployment model confirmation]

Project Operations Core, Integrated with ERP and manufacturing-based scenarios have materially different ownership, accounting and integration implications. Validate the deployment model before reusing assumptions from another engagement.

:::

## First questions to answer

| Question | Why it matters |
| --- | --- |
| Which deployment type is used or proposed? | It changes invoicing, Finance ownership, dual-write and reconciliation work. |
| Which legal entities are in scope? | Legal-entity decisions affect Finance data, security, accounting and onboarding. |
| Which organisational units employ billable resources? | Organisational units drive cost context and should not be confused with Dataverse business units. |
| Which systems create and own each major record? | This avoids unsupported edits and broken integration assumptions. |
| What evidence is available read-only? | Existing-implementation work should begin from evidence rather than opinion. |
