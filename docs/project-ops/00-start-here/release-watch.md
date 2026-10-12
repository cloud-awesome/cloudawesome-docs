---
title: Release Watch
sidebar_position: 6
description: Review queue for Project Operations release changes and source verification.
tags: [project-operations, releases, maintenance]
custom_edit_url: null
source_reviewed: '2026-10-12'
verification_status: working-draft
---

# Release Watch

Use this page to track source review and release-driven maintenance. It is not a substitute for reading the release notes before a material engagement decision.

## Review cadence

| Trigger | Action |
| --- | --- |
| New client engagement | Re-check deployment model, versions, release notes and known integration limitations. |
| Monthly Project Operations update | Scan Microsoft release notes for affected pages. |
| Finance platform update | Re-check integrated ERP, actuals, invoices, reconciliation and integration workspace pages. |
| New finding from an engagement | Add an open question or sanitised reusable pattern after removing client-identifying detail. |

## Source register

| Source | Review use |
| --- | --- |
| [Project Operations updates](https://learn.microsoft.com/en-us/dynamics365/project-operations/whats-new/project-operations-updates) | Monthly Dataverse and Finance-related Project Operations changes. |
| [Determine your deployment type](https://learn.microsoft.com/en-us/dynamics365/project-operations/environment/determine-deployment-type) | Deployment model baseline. |
| [Project Operations dual-write integration overview](https://learn.microsoft.com/en-us/dynamics365/project-operations/environment/resource-dual-write-overview) | Dataverse and Finance integration boundary. |
| [Power Platform ALM](https://learn.microsoft.com/en-us/power-platform/alm/) | Solution and environment lifecycle guidance. |

## Open review queue

- Verify logical names for the initial entity catalogue before presenting them as fact.
- Verify current dual-write map names and versions before building reference matrices.
- Confirm current minimum versions for integration workspace and actuals reconciliation pages.
- Add page-level review dates as substantial pages are completed.
