---
title: New Implementation
sidebar_position: 1
description: Discovery-to-handover route for new Project Operations implementations.
tags: [project-operations, implementation, playbook]
custom_edit_url: null
source_reviewed: '2026-10-12'
verification_status: working-draft
---

# New Implementation

Use this playbook for greenfield or substantial redesign work.

```mermaid
flowchart LR
    DISC[Discovery] --> MODEL[Deployment model decision]
    MODEL --> ORG[Organisation and security design]
    ORG --> CONFIG[Configuration and integration design]
    CONFIG --> BUILD[Implementation and migration]
    BUILD --> TEST[End-to-end validation]
    TEST --> HAND[Handover and support readiness]
```

## Minimum outputs

- Requirements and decision register.
- Deployment model rationale.
- Organisation, legal entity, resource and security model.
- Configuration workbook.
- Integration ownership matrix.
- ALM and support approach.
- End-to-end test evidence and handover pack.

## Reference pages

- [Deployment Models](../../00-start-here/deployment-models.md)
- [Business Units, Organisational Units and Legal Entities](../../01-knowledge-base/architecture/business-units-org-units-legal-entities.md)
- [Dependency Map](../../01-knowledge-base/configuration/dependency-map.md)
