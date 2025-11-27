---
sidebar_position: 2
---

# Admonitions

Docusaurus supports a [custom admonitions](https://docusaurus.io/docs/markdown-features/admonitions) syntax which also supports markdown content and a custom title.

e.g.

```markdown
:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

renders as:

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

Use the `MdDocusaurusAdmonition` component to render admonitions in your markdown files, as with any other `IDocumentPart`

## Use plain text entry

```csharp
MdDocument.Add(
    new MdDocusaurusAdmonition(
        AdmonitionType.Note, 
        "Here is some content for the note."
    )
);
```
will output the following markdown:
```markdown
:::note 

Here is some content for the note.

:::

```

## Use MdParagraph or other `IDocumentPart`

```csharp
MdDocument.Add(
    new MdDocusaurusAdmonition(
        AdmonitionType.Note, 
        new MdParagraph()
            .Add(new MdBoldText("Here is some content for the note."))
            .Add(new MdLink("And here is an extra link", "https://google.co.uk")), 
        "Custom Title"
    )
);
```
will output the following markdown:
```markdown
:::note Custom Title

**Here is some content for the note.** [And here is an extra link](https://google.co.uk) 

:::

```

The empty white spacing around the content is included to support [Prettier](https://prettier.io/) formatting as per [Docusaurus recommendation](https://docusaurus.io/docs/markdown-features/admonitions#usage-with-prettier). 