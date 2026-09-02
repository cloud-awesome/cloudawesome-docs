---
title: Roles and Accountabilities
sidebar_position: 4
---

# Roles and Accountabilities

Benefits Architecture deliberately separates **benefit ownership** from **architecture stewardship**.

## Suggested accountability model

| Role | Primary accountability in Benefits Architecture |
|---|---|
| Sponsor / Senior Responsible Owner | Overall investment rationale and organisational outcome |
| Benefit Owner | Confirms the benefit, assumptions, target and realisation plan; remains accountable for realisation |
| Product Owner | Maximises product value; orders work in light of evidence and Product Goal |
| Technical / Solution Architect | Maintains integrity of the technology-to-value argument and architecture trade-offs |
| Business Analyst / Service Designer | Deepens process, user, service and behavioural understanding |
| Developers / Engineers | Build increments, contribute delivery evidence, expose technical constraints |
| Delivery Manager / Project Manager | Coordinates dependencies, governance, delivery risks and organisational actions where present |
| Data / Analytics Specialist | Designs defensible measures, baselines, attribution and reporting |
| Finance / Commercial Specialist | Validates financial classification, valuation and investment assumptions where material |

## The architect's role

The architect should be expected to:

### Before delivery

- challenge technology-first assumptions;
- facilitate causal mapping with stakeholders;
- identify capability and architecture options;
- expose technical, organisational, data, security and operational dependencies;
- make benefit-related architecture trade-offs explicit;
- design the evidence needed to observe the causal chain.

### During delivery

- keep material Features aligned to outcomes;
- maintain value-aware ADRs;
- ensure architecture supports incremental learning;
- distinguish enablers from outcomes;
- interpret technical and adoption evidence with the Product Owner;
- revisit architecture choices when evidence invalidates assumptions.

### After release

Help distinguish among:

- implementation failure;
- reliability/performance failure;
- adoption failure;
- process or operating-model failure;
- false benefit hypothesis;
- insufficient measurement;
- external changes that altered the original value case.

## Boundary of accountability

The architect should **not** become the de facto owner of operational benefits merely because they facilitated the model.

A useful formulation is:

> **The business owns whether the benefit is realised. The architect owns the integrity of the proposed technology-to-value mechanism.**

## RACI-style starting point

This is illustrative and should be tailored.

| Activity | Sponsor | Benefit Owner | PO | Architect | BA/Service | Delivery | Data |
|---|---:|---:|---:|---:|---:|---:|---:|
| Define objective | A | C | C | C | C | I | I |
| Define benefit | C | A | C | C | R | I | C |
| Establish baseline | I | A | C | C | C | I | R |
| Map causal chain | C | A | C | R | R | I | C |
| Explore interventions | I | C | A | R | C | C | C |
| Architecture decision | I | C | C | A/R | C | C | C |
| Order backlog | I | C | A/R | C | C | I | I |
| Design benefit telemetry | I | C | C | A/R | C | I | R |
| Review outcome evidence | I | A | R | R | C | I | R |
| Confirm benefit realised | C | A/R | C | C | C | I | R |
