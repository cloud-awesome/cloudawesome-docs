---
title: Maturity Model and Open Questions
sidebar_position: 8
---

# Maturity Model

This maturity model is intentionally lightweight. It describes increasing capability, not certification levels.

| Level | Characteristics |
|---|---|
| 0 — Output-led | Success primarily means delivery of scope, dates or technical outputs |
| 1 — Outcome-aware | Objectives and intended outcomes are visible, but causality and measurement are weak |
| 2 — Traceable | Features and architecture decisions trace to benefit hypotheses and outcomes |
| 3 — Observable | Baselines, leading indicators, outcome measures and benefit telemetry are designed deliberately |
| 4 — Adaptive | Evidence regularly changes backlog, architecture and investment decisions |
| 5 — Institutionalised | The approach spans products/portfolios, with consistent decision language and longitudinal benefit evidence |

## Anti-patterns

### Benefits wallpaper

A polished benefits map exists but does not affect priority or design decisions.

### Financial fiction

Every Feature is assigned a precise monetary value regardless of evidence or attribution.

### Architecture theatre

Technology options are already decided before outcome framing, and the benefit model is reverse-engineered to justify them.

### Telemetry afterthought

The team discovers after go-live that it cannot measure the claimed behavioural or business changes.

### Adoption equals benefit

Login counts or licences assigned are reported as realised value.

### WAF equals value

A highly Well-Architected workload is assumed to be a good investment irrespective of whether the workload solves the right problem.

### Benefits owner by convenience

The architect or Product Owner becomes the nominal benefit owner because the real operational owner is unavailable.

### Story-level traceability overload

Every User Story is forced to carry a direct financial benefit, producing meaningless metadata and maintenance cost.

# Open design questions for future versions

The following areas need deliberate development and field testing.

## Benefit valuation

- How much financial modelling belongs in the toolkit?
- When should released capacity be treated separately from cash-releasing saving?
- How should benefit ranges and confidence be represented?
- What is the minimum useful treatment of NPV, discounting, and cost of delay?

## Attribution

- When can a product reasonably claim contribution rather than causation?
- When is a counterfactual necessary?
- How should external factors be recorded?

## Portfolio alignment

- How should multiple products contribute to one benefit?
- How should competing benefit hypotheses be prioritised across a portfolio?
- How should architecture runway and platform investment be represented?

## Tooling

- Which concepts deserve first-class Azure DevOps work-item types?
- Which should remain tags, links, Markdown, ADR metadata or dashboards?
- Can Mermaid source be generated from work-item relations?
- Can benefit evidence be pulled automatically into Power BI or Fabric?

## Governance

- Which decisions require formal benefit-owner sign-off?
- When does Benefit Framing become business-case work rather than product discovery?
- What evidence threshold should trigger architecture reconsideration?

# Draft validation approach

The method should be validated against several project types:

1. greenfield Azure custom application;
2. Power Platform / Dynamics implementation;
3. legacy modernisation;
4. integration programme;
5. data / analytics platform;
6. AI-enabled product;
7. regulatory / mandatory change where benefits are partly risk avoidance.

For each case, test whether the toolkit:

- improves decisions;
- exposes hidden assumptions;
- reduces technology-first bias;
- creates usable evidence;
- remains lightweight enough for the team to maintain.
