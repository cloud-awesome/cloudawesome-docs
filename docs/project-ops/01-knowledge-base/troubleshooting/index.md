---
title: Troubleshooting
sidebar_position: 1
description: Troubleshooting entry point for Project Operations diagnostics and support playbooks.
tags: [project-operations, troubleshooting, diagnostics]
custom_edit_url: null
source_reviewed: '2026-10-12'
verification_status: working-draft
---

# Troubleshooting

Troubleshooting pages should turn observed symptoms into evidence-led diagnosis.

## Diagnostic pattern

1. Record the symptom, affected legal entities, projects, users and time period.
2. Confirm the deployment model and installed versions.
3. Identify the lifecycle stage: setup, planning, transaction entry, approval, actuals, billing, posting or reconciliation.
4. Capture source evidence from Dataverse, Finance, dual-write and logs where available.
5. Separate product limitation, configuration issue, data quality issue, customisation defect and user/process issue.
6. Define a supported correction and validation route.

:::warning[Read-only first]

For inherited implementations, start diagnostics read-only. Do not correct records until ownership, supported lifecycle operations and financial consequences are understood.

:::
