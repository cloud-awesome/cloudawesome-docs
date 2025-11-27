---
sidebar_position: 1
---

# Front matter

`CloudAwesome.MarkdownMaker.Docusaurus` provides basic support for the [three official plugins](https://docusaurus.io/docs/markdown-features#front-matter) provided in `@docusaurus/preset-classic` (Docs, Blogs, and Pages).

## Docs
Create a new instance of `MdDocuFrontMatterDocs`, which implements `IFrontMatter` and populate any properties you require. 

Any `null` properties left unpopulated will not be rendered in the output.

```csharp
var doc = new MdDocument();
doc.Add(new MdFrontMatter(new MdDocuFrontMatterDocs
{
    title = "This is a doc title",
    hide_title = true,
    toc_min_heading_level = 4
}));
doc.Add(new MdHeader("This is a header", HeaderLevel.H1));
var result = doc.ToString();
```

Will output the following markdown:

```markdown
---
title: This is a doc title
hide_title: true
toc_min_heading_level: 4
---

# This is a header


```

View the official [Docusaurus plugin docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter) for more information.

## Blog

:::note Todo

Not yet implemented

:::

## Pages

:::note Todo

Not yet implemented

:::