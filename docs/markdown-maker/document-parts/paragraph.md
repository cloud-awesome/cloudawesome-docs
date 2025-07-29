# Paragraphs

Includes plain text and/or [single line parts](../content-types#isinglelinepart) to output a paragraph with appropriate white space.

Must include at least one input.

```cs

    var paragraph = 
        new MdParagraph()
            .Add("This is some")
            .Add(new MdBoldText("important"))
            .Add("instruction, which")
            .Add(new MdItalicText("should"))
            .Add("work. ")
            .Add(new MdLink("See more", "https://google.com/search?q=markdown"))

    // Output: 
    // This is some **important** instruction, which _should_ work. [See more](https://google.com/search?q=markdown) \n
    
```