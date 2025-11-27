# Front matter

The front matter is used to define the metadata for the document on certain platforms. There should only ever be one instance of this document type in a document, and it will always be the first item in the document.

The `MdFrontMatter` document type takes in an input of a class inheriting from `IFrontMatter`.

Each non-null property of the class will be added to the front matter in yaml format, e.g.

```yaml
---
Title: My Document
Description: My document description
LastUpdate: 
  Date: 2020-01-01
  Author: arthur
---
```

`CloudAwesome.MarkdownMaker` doesn't provide any default implementations of `IFrontMatter`, so you have to create your own to define the data model required for your front matter, e.g.

```csharp
public class MyFrontMatter: IFrontMatter
{
    public string Title { get; set; }
    public string Description { get; set; }
    public LastUpdate LastUpdate { get; set; }
}

public class LastUpdate
{
    public string Date { get; set; }
    public string Author { get; set; }
}
```

Some implementations of `IFrontMatter` are provided in extension libraries, e.g. `CloudAwesome.MarkdownMaker.Docusarus` for the Docusaurus Blog, Docs and Pages APIs. See further documentaton in [Platform extensions](/platform-extensions)