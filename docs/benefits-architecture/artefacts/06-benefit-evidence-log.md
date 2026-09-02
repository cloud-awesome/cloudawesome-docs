---
title: Benefit Evidence Log
sidebar_position: 6
---

# Artefact 6 — Benefit Evidence Log

## Purpose

Maintain a concise empirical history of what the team has learned about material benefit hypotheses and interventions.

This should support decisions, not become a diary.

## Copy/paste template

```markdown
# Benefit Evidence Log

| Date / Sprint | Hypothesis / link | Evidence | Interpretation | Confidence change | Decision / action |
|---|---|---|---|---|---|
| | BEN- | | | | |
```

## Example

| Date / Sprint | Hypothesis                                     | Evidence                             | Interpretation                       | Confidence      | Decision                   |
|---------------|------------------------------------------------|--------------------------------------|--------------------------------------|-----------------|----------------------------|
| Sprint 4      | BEN-01 Self-service reduces staff intervention | 58% of pilot users completed unaided | Directionally positive; below target | Medium → Medium | Improve validation UX      |
| Sprint 5      | Validation UX limits completion                | Unaided completion rose to 72%       | Hypothesis supported                 | Medium → High   | Continue                   |
| Sprint 7      | Lower intervention reduces staff effort        | 95 → 61 min average effort           | Benefit emerging                     | Medium → High   | Expand pilot cohort        |
| Sprint 10     | Automation can achieve under 40 min            | 47 min                               | Partial realisation                  | High → Medium   | Investigate exception path |

# Evidence quality

Record enough context to distinguish:

- anecdote;
- qualitative user evidence;
- sample;
- production telemetry;
- operational KPI;
- financial evidence;
- controlled comparison;
- longitudinal result.

# Decision discipline

Evidence should be capable of producing a decision.

Typical decisions:

- continue;
- change Feature;
- reorder backlog;
- run a spike or experiment;
- change architecture;
- revise target;
- reduce benefit confidence;
- identify a new dependency;
- stop investment.

If the Evidence Log never changes decisions, it is probably administrative overhead.
