# Plain Text

Non-breaking plain text with no formatting. Input text can't be an empty string.

```cs

    var text = new MdPlainText("This is standard, plain text");
    
    // Output:
    // This is standard, plain text
    
```

No carriage returns are included in this component: If two `MdPlainText`s are used consecutively, they will be merged on the same line. To separate paragraphs with appropriate white space, use the [MdParagraph](./paragraph.md) component.

This is also the default used by most of the document parts when a [single line part](../content-types#isinglelinepart) is not specified.
