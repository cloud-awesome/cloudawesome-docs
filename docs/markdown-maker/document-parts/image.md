# Images

Includes image using relative or absolute filepath. 

Some markdown rendering engines use the text as an alternative text for screenreaders, most ignore it. 

```cs

    var image = new MdImage("image of a tester", "/images/tester.png");
    
    // Output:
    // ![image of a tester](/images/tester.png)
    
```