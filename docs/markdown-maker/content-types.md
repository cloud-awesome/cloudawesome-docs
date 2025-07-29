# Content Types

## IDocumentPart

All types which can be added directly to an `MdDocument`

See 'Document Parts' list for details on each available component.  

## ISingleLinePart

Content types which don't cause a carriage return and can be embedded within a single line or paragraph

- [MdPlainText](./document-parts/text.md)
- [MdBoldText](./document-parts/bold.md)
- [MdItalicText](./document-parts/italic.md)
- [MdLink](./document-parts/link.md)
- [MdStrikethroughText](./document-parts/strikethrough.md)

```cs

    var document = new MdDocument();
    
    document
        .Add(
            new MdParagraph()
                .Add("This is some")
                .Add(new MdBoldText("important"))
                .Add("instruction, which")
                .Add(new MdItalicText("should"))
                .Add("work. ")
                .Add(new MdLink("See more", "https://google.com/search?q=markdown"))
        )
        .ToString();
    
    // Output: 
    // "This is some **important** instruction, which _should_ work. [See more](https://google.com/search?q=markdown) \n"
    
```