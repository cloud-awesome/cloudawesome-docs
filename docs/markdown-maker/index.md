# Introduction

`markdown-maker` is a lightweight library designed to help with creation/generation of markdown content, either in .md files or complex markdown strings to be used downstream in your application.

## Quick start

### Create a .md on your local file system

```cs
    
    var outputFilePath = "C:\\output.md";
    var document = new MdDocument(outputFilePath);
    
    document
        .Add(new MdHeader("This is a top level header", 1))
        .Add(new MdHeader("This is a sub-heading", 2))
        .Add(new MdParagraph("This is some standard paragraph text"))
        .Save();
        
```

### Create an in-memory markdown string

```cs

    var document = new MdDocument();
    
    document
        .Add(new MdHeader("This is a top level header", 1))
        .Add(new MdHeader("This is a sub-heading", 2))
        .Add(new MdParagraph("This is some standard paragraph text"))
        .ToString();
    
    // Use downstream in your application
    // externalSystem.AddComment(document);
    
```

### Mix text types within a paragraph

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
    // This is some **important** instruction, which _should_ work. [See more](https://google.com/search?q=markdown) \n
    
```

### Create a table in markdown format

```cs

    var document = new MdDocument();
    
    document
        .Add(
            new MdTable()
                .AddColumns("First column", "Second column", "Third column", "Fourth column")
                // columns can be added individually using .AddColumn()
                .AddRowCells("Datum 1", "Datum 2", "Datum 3", "Datum 4")
                // rows and cells can be added individually using .AddRow() and .AddCell()
        )
        .ToString();
    
    // Output: 
    // | First column | Second column | Third column | Fourth column | 
    // |---|---|---|---|
    // | Datum 1 | Datum 2 | Datum 3 | Datum 4 | 
    // 
    
```

### Generate multiple documents in a single folder

```cs

    // var sampleDataList = GetExternalDataSet();

    var folderPath = "C:/OutputFolder/DataModel/";
    var documentSet = new MdDocumentSet(folderPath);
    
    foreach (var sampleData in sampleDataList)
    {
        documentSet.AddDocument(
            new MdDocument($"{sampleData.Name}.md")
                .Add(new MdHeader(sampleData.Name, 1))
                .Add(new MdParagraph(sampleData.Description))
            );
    }
    
    documentSet.Generate();

```

### Longer-form example

```cs

    // Everything starts with an MdDocument
    // Nothing is written to file system until calling the .Save() method
    
    var outputFilePath = "C:\\output.md";
    var document = new MdDocument(outputFilePath);
    
    var firstHeader = new MdHeader("The header", 1);
    
    var table = new MdTable()
        // Define the table's columns. Others can be added later
        .AddColumn("First Column")
        .AddColumn("Second Column")
        .AddColumn("Third Column");

    table
        .AddRow(new MdTableRow()
            // Use AddCell ...
            .AddCell("Column 1")
            .AddCell("Column 2")
            .AddCell("Column 3"))
        .AddRow(new MdTableRow
        {
            // ... or use a Cell object
            Cells =
            {
                new MdPlainText("Col 1, Row 1"),
                new MdPlainText("Col 2, Row 1"),
                new MdPlainText("Col 3, Row 1")
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
        
        // Filepath can input/overwritten before generating output
        // .Save(outputFilePath);
        
        // Or just return the markdown content
        // .ToString();

```
See [CloudAwesome.MarkdownMaker.Tests](https://github.com/cloud-awesome/markdown-maker/tree/main/src/CloudAwesome.Markdown/CloudAwesome.MarkdownMaker.Tests) for more samples

Any [bug reports or feature requests](https://github.com/Cloud-Awesome/markdown-maker/issues/new/choose) are greatly appreciated!
