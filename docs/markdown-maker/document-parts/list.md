# Lists

Generates a list of inputs.

Accepted types of list are:
- Ordered (1., 2., 3.)
- Unordered (bullet points)
- Todo (checkboxes/tickboxes)

The list must have at least one input, it can't be an empty list.

## Ordered List

While each list item starts with "1.", this is valid markdown and the rendering engine manages the correct numbering

```cs
    
    var list = 
        new MdList(MdListType.Ordered)
            .AddItem(new MdPlainText("First Item")
            .AddItem(new MdPlainText("Second Item"));
    
    // Output:
    // 1. First Item
    // 1. Second Item
    
```

## Unordered List

```cs
    
    var list = 
        new MdList(MdListType.Unordered)
                .AddItem(new MdPlainText("First Item")
                .AddItem(new MdPlainText("Second Item"));
    
    // Output:
    // - First Item
    // - Second Item
    
```

## Todo's

```cs
    
    var list = 
        new MdList(MdListType.Todo)
                .AddItem(new MdPlainText("First Item")
                .AddItem(new MdPlainText("Second Item"));
    
    // Output:
    // - [ ] First Item
    // - [ ] Second Item
    
```

## Hierarchical Lists

Hierarchical lists of supported. There is no enforced number of child levels supported.

```cs 

    var list = 
        new MdList(MdListType.Ordered)
            .AddItem("Item 1")
            .AddItem("Item 2")
            .AddChildList(
                new MdList(MdListType.Ordered)
                    .AddItem("Sub-Item 1")
                    .AddItem("Sub-Item 2"))
            .AddItem("Item 3");
    
    // Output:
    // 1. Item 1
    // 1. Item 2
    //      1. Sub-Item 1
    //      1. Sub-Item 2
    // 1. Item 3
    
```

Different list types can be used at different levels

```cs 

    var list = 
        new MdList(MdListType.Ordered)
            .AddItem("Item 1")
            .AddItem("Item 2")
            .AddChildList(
                new MdList(MdListType.Unordered)
                    .AddItem("Child 1, Item 1")
                    .AddItem("Child 1, Item 2"))
            .AddItem("Item 3")
            .AddChildList(
                new MdList(MdListType.Unordered)
                    .AddItem("Child 2, Item 1")
                    .AddChildList(
                        new MdList(MdListType.Ordered)
                            .AddItem("Grandchild 1, Item 1")
                            .AddItem("Grandchild 1, Item 2")
                    )
                    .AddItem("Child 2, Item 2")
                    .AddChildList(
                        new MdList(MdListType.Todo)
                            .AddItem("Grandchild 2, Item 1")
                            .AddItem("Grandchild 2, Item 2")
                    )
            )
            .AddItem("Item 4");
    
    // Output:
    // 1. Item 1
    // 1. Item 2
    //    - Child 1, Item 1
    //    - Child 1, Item 2
    // 1. Item 3
    //    - Child 2, Item 1
    //        1. Grandchild 1, Item 1
    //        1. Grandchild 1, Item 2
    //    - Child 2, Item 2
    //        - [ ] Grandchild 2, Item 1
    //        - [ ] Grandchild 2, Item 2
    // 1. Item 4
    
```