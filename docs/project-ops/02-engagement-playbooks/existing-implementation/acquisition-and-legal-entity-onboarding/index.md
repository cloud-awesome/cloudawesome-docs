---
title: Acquisition and Legal-entity Onboarding
sidebar_position: 1
description: Sub-playbook for onboarding acquired companies or new legal entities into an existing Project Operations setup.
tags: [project-operations, acquisition, legal-entity, playbook]
custom_edit_url: null
source_reviewed: '2026-10-12'
verification_status: working-draft
---

# Acquisition and Legal-entity Onboarding

This is a sub-playbook under existing implementation work. Do not treat acquisition onboarding as a separate knowledge domain.

## Decision areas

- New legal entity, operating unit, organisational unit or security boundary?
- New contracting company, resourcing company or both?
- Currency, tax, dimensions, WIP and revenue recognition differences.
- Dual-write setup and map dependencies.
- Data migration or coexistence requirement.
- Process regression and acceptance criteria.

:::warning[One legal entity does not imply one Dataverse business unit]

Assess legal, accounting, resource, security and reporting requirements separately before changing Dataverse business-unit structure.

:::
