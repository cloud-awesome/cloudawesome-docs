# Introduction

`markdown-maker` is a lightweight library designed to help with creation/generation of markdown content, either in .md files or complex markdown strings.

## Example usage

```cs
    
    // Everything starts with an MdDocument
    // Nothing is written to file system until calling the .Save() method
    var outputFilePath = "C:\\output.md";
    var document = new MdDocument(outputFilePath);
    
    var firstHeader = new MdHeader("The header", 1);
    
    var table = new MdTable()
        // Define the table's columns. Others could be added later
        .AddColumn("First Column")
        .AddColumn("Second Column")
        .AddColumn("Third Column");

    table
        .AddRow(new MdTableRow()
            // Use AddCell ...
            .AddCell("1")
            .AddCell("2")
            .AddCell("3"))
        .AddRow(new MdTableRow
        {
            // ... or use a Cell object
            Cells =
            {
                new MdPlainText("4"),
                new MdPlainText("5"),
                new MdPlainText("6")
            }
        });

    var quote = new MdQuote()
        .AddLine("All the world’s a stage, and all the men and women merely players.")
        .AddLine("They have their exits and their entrances;")
        .AddLine("And one man in his time plays many parts.");

    var bulletList = new MdList(MdListType.Unordered)
        .AddItem("First point")
        .AddItem("Second point")
        .AddItem("Third point")
        .AddItem("Fourth point");
    
    var numberedList = new MdList(MdListType.Ordered)
        .AddItem("First point")
        .AddItem("Second point")
        .AddItem("Third point")
        .AddItem("Fourth point");

    var todoList = new MdList(MdListType.Todo)
        .AddItem("Build something")
        .AddItem("Test it")
        .AddItem("Push it");
    
    document
        .Add(docFxHeader)
        .Add(firstHeader)
        // Include markdown inline
        .Add(new MdParagraph("This is a paragraph of interesting text..."))
        .Add(new MdHorizontalLine())
        .Add(table)
        .Add(quote)
        .Add(bulletList)
        .Add(numberedList)
        // Validate and save to file system
        .Save();
        // Or just return the markdown content
        // .ToString();
        
```
See [CloudAwesome.MarkdownMaker.Tests](https://github.com/cloud-awesome/markdown-maker/tree/main/src/CloudAwesome.Markdown/CloudAwesome.MarkdownMaker.Tests) for more samples

Any [bug reports or feature requests](https://github.com/Cloud-Awesome/markdown-maker/issues/new/choose) are greatly appreciated!
