---
title: Terminology
sidebar_position: 5
description: Initial glossary for Project Operations architecture and engagement language.
tags: [project-operations, glossary, terminology]
custom_edit_url: null
source_reviewed: '2026-10-12'
verification_status: working-draft
---

# Terminology

This glossary favours practical consulting usage. Product-specific terms should be checked against Microsoft documentation before being used as formal client guidance.

| Term | Working meaning |
| --- | --- |
| Project Operations Core | Dataverse-focused deployment for project sales through proforma invoicing without Finance-backed project accounting as the main model. |
| Project Operations Integrated with ERP | Deployment that extends Finance and uses dual-write to integrate Dataverse and Finance responsibilities. |
| Manufacturing-based scenario | Project Operations scenario involving manufacturing, stocked materials or production-order capabilities. |
| Dataverse business unit | Dataverse security boundary used with security roles, teams and ownership. It is not the same as a PjO organisational unit or Finance legal entity. |
| Project Operations organisational unit | PjO concept for grouping billable resources and cost structures, including currency and cost price lists. |
| Finance legal entity | Finance organisation with legal/accounting responsibility and company ID/DataAreaId implications. |
| Dual-write | Microsoft integration capability used to synchronise data between Dataverse and finance and operations apps. |
| Actual | Project transaction outcome used for downstream financial, billing and reconciliation processes. Details vary by deployment model. |
| Proforma invoice | Project manager-facing invoice review construct before customer-facing invoicing in relevant scenarios. |
| Evidence manifest | Engagement record of artefacts, screenshots, exports, source queries and observations supporting findings. |
| Verification status | Page-level indicator showing whether claims are source-backed, reviewed, working draft or awaiting technical review. |

:::note[Glossary discipline]

Do not collapse similarly named concepts. "Business unit" in Dataverse security, "business unit" as a Finance operating unit type and a generic client business unit may mean different things.

:::
