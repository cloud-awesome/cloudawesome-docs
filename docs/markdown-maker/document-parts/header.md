# Headers

Outputs a header at the provided indentation.

Max indentation is level 6, which is the standard accepted in markdown.

```cs

    var header = new MdHeader("Top-level header", 1);
    
    // Output:
    // # Top-level header
    
```

```cs

    var header = new MdHeader("Way down the list header", 6);
    
    // Output:
    // ###### Way down the list header
    
```