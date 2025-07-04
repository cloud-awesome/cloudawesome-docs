# Documents and Document Sets

## The `MdDocument` class

An `MdDocument` is the base container for content. 

You can start with a new `MdDocument` instance and add to it as you progress through the logic of your application, or create all the required page components and add them to a new `MdDocument` instance at the end.

The expected use case for`mardown-maker` is for a parent application to either query a database for required content and/or take user input and then create a markdown document based on the application's logic.

An `MdDocument` instance can then either generate a .md file on your file system or you can use the generated markdown as a string to store where required.

There are three constructors to use for your specific use case:
1. `public MdDocument(string fileName)` : Provide a fileName to create a document on local file system. This can be used if you just want the markdown string, but the file name is ignored and is redundant.
2. `public MdDocument()` : Use the empty constructor if all you want is the generated markdown string. An `InvalidOperationException` will be thrown if you try to save this to the file system.
3. `public MdDocument(string fileName, IFileSystem fileSystem)` : Inject a mocked `IFileSystem` when writing unit tests.

### Generating a document on file system

```cs
var outputFilePath = "C:\\output1.md";

var document = new MdDocument(outputFilePath);

document
    .Add(new MdHeader("The header", 1))
    .Save();
```

The `.Save()` method will throw an `InvalidOperationException` if no valid file path has been provided. Though there is an override to provide a file path if your application logic does not know the file name until this point, or if it needs to be overwritten. 

```cs
document
    .Add(new MdHeader("The header", 1))
    .Save(outputFilePath);
```

### Generating a string of markdown

```cs
var document = new MdDocument(outputFilePath);

var markdown = 
    document
    .Add(new MdHeader("The header", 1))
    .ToString();
```

This string can then be used downstream in your application (writing to a database attribute, writing to a GitHub PR comment, etc.).

## The `MdDocumentSet` class

To prepare and create multiple files in a single loop or action, you can use the `MdDocumentSet` class.

```cs
var sampleDataList = GetSampleDataFromExternalDataSource();

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

:::warning File paths 
N.B. If you are generating a single document, the `filePath` can be a fully qualified path.

However if an `MdDocument` is included in an `MdDocumentSet`, then it must be just the file name.

If a filepath is included in a set, then an `MdInputValidationException` will be thrown.
:::

:::info
At present, an `MdDocumentSet` only supports writing files to a single directory. Multiple sets are required if you want to output into different directories.
:::