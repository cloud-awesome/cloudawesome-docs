---
sidebar_position: 1
---

# Front matter

`CloudAwesome.MarkdownMaker.Docusaurus` provides basic support for the [three official plugins](https://docusaurus.io/docs/markdown-features#front-matter) provided in `@docusaurus/preset-classic` (Docs, Blogs, and Pages).

## Docs
Create a new instance of `MdDocuFrontMatterDocs`, which implements `IFrontMatter` and populate any properties you require. 

This class included all properties currently supported by the docs plugin. Any `null` properties left unpopulated will not be rendered in the output.

```csharp
MdDocument.Add(
    new MdFrontMatter(
        // highlight-start
        new MdDocuFrontMatterDocs
        {
            title = "This is a doc title",
            hide_title = true,
            toc_min_heading_level = 4
        }
        // highlight-end
    )
);
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