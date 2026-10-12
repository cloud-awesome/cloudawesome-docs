---
title: Security
sidebar_position: 1
description: Security reference entry point for Project Operations.
tags: [project-operations, security, dataverse]
custom_edit_url: null
source_reviewed: '2026-10-12'
verification_status: working-draft
---

# Security

Project Operations security work must cover Dataverse security, app roles, teams, record ownership, Finance company access and operational segregation where applicable.

```mermaid
flowchart LR
    USER[User]
    TEAM[Team]
    ROLE[Security role]
    BU[Dataverse business unit]
    RECORD[Record access]
    FIN[Finance company access]

    USER --> TEAM
    USER --> ROLE
    TEAM --> ROLE
    ROLE --> RECORD
    BU --> ROLE
    USER -. integrated scenarios .-> FIN
```

## First-pass checklist

- Identify Dataverse business units, users, teams and assigned security roles.
- Confirm whether modernized business unit security is enabled.
- Test access using representative personas, not only administrator accounts.
- For integrated scenarios, confirm Finance roles and legal-entity/company access.
- Check segregation risks around project setup, approval, billing, correction and posting.

## Primary Microsoft documentation

- [Security concepts in Microsoft Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/wp-security-cds)
- [Security roles and privileges for Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges)
- [Assign security roles](https://learn.microsoft.com/en-us/power-platform/admin/assign-security-roles)
