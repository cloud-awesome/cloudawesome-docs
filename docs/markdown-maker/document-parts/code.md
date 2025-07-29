# Code Block

Outputs text in a code block. 

Language, used for syntax highlighting in some markdown renderers, is not mandatory.  

```cs

    var text = new MdCodeBlock("var code = new MdCodeBlock", "cs");
    
    // Output:
    // ```cs
    // var code = new MdCodeBlock
    // ```
    
```