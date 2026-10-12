---
title: Tooling Interface
sidebar_position: 1
description: Desired Project Operations automation inputs, outputs and evidence concepts.
tags: [project-operations, tooling, dataverse-cli]
custom_edit_url: null
source_reviewed: '2026-10-12'
verification_status: working-draft
---

# Tooling Interface

This section describes desired automation inputs and outputs for the adjacent Dataverse tooling project. It should not document CLI implementation details.

## Desired capabilities

| Capability | Documentation concern |
| --- | --- |
| Provisioning support | Decision inputs, dependency checks, proposed changes and human-readable exception reports. |
| Environment inspection | Read-only inventory, configuration evidence, solution inventory, integration status and comparison outputs. |
| Evidence concepts | Rule IDs, applicability tags, source records, timestamps, confidence and incomplete-coverage markers. |
| Safety | Least privilege, redaction, scoped retrieval and avoidance of unsupported transaction manipulation. |

:::note[Separate project]

Implementation belongs in the related Dataverse customisation tooling repository. This docs site records what a useful output should mean to a consultant.

:::
