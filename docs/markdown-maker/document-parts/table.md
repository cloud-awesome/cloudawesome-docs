# Tables

Creates a markdown table.

An MdTable must have at least one header and at least one row of data.

## Basic usage

The basic usage of an MdTable is a fluent interface that allows you to add columns and rows.

```cs
var table = new MdTable()
    .AddColumn("First column")
    .AddColumn(new MdPlainText("Second column"))
    .AddRow(new MdTableRow()
        .AddCell("Row 1, Column 1")
        .AddCell("Row 1, Column 2"))
    .AddRow(new MdTableRow()
        .AddCell("Row 2, Column 1")
        .AddCell("Row 2, Column 2"));

// Output:
// | First column | Second column |
// | --- | --- |
// | Row 1, Column 1 | Row 1, Column 2 |
// | Row 2, Column 1 | Row 2, Column 2 |
//  
```

However, there are helper methods that make it easier to create columns and rows in a single call, such as:

```cs
var table = new MdTable()
    .AddColumns("First column", "Second column", "Third column", "Fourth column")
    .AddRowCells("Datum 1", "Datum 2", "Datum 3", "Datum 4")
    .AddRowCells("Datum 5", "Datum 6", "Datum 7", "Datum 8");

// Output:
// | First column | Second column | Third column | Fourth column |
// |---|---|---|---|
// | Datum 1 | Datum 2 | Datum 3 | Datum 4 |
// | Datum 5 | Datum 6 | Datum 7 | Datum 8 |
//
```

All fluent methods (`.AddColumn()`, `.AddColumns()`, `.AddRowCells()`) accept either string inputs or [`ISingleLinePart`](../content-types.md#isinglelinepart) inputs to support various.typographies (bold, italic, links, etc.)

```cs
var table = new MdTable()
    .AddColumns(new MdBoldText("First column"), new MdPlainText("Second column"),
        new MdItalicText("Third column"), new MdBoldText("Fourth column"))
    .AddRowCells(new MdBoldText("Datum 1"), new MdPlainText("Datum 2"), 
        new MdItalicText("Datum 3"), new MdBoldText("Datum 4"));

// Output:
// | **First column** | Second column | _Third column_ | **Fourth column** |
// |---|---|---|---|
// | **Datum 1** | Datum 2 | _Datum 3_ | **Datum 4** |
//  
```

## Convert `IEnumerable<T>` to MdList

There is also an extension method to convert a `IEnumerable<T>` to `MdTable` markdown.

The purpose is to enable the calling code to assemble a collection of custom data objects (either from a database, file, or in the calling code's internal logic) and then output it to a markdown table.

For example, using the following data object:

```cs
// Sample data object
public class TestObject
{
    public string Name { get; set; }
    public int Year { get; set; }
    public string? Description { get; set; }
    public double? Price { get; set; }
}
```

The following code will output the data to a markdown table:

```cs
var collection = new[]
{
    new TestObject { Name = "Test", Year = 2021, Description = "This is a test", Price = 100.00 },
    new TestObject { Name = "Test2", Year = 2022, Description = "This is a test2", Price = 200.00 },
    new TestObject { Name = "Test3", Year = 2023, Description = "This is a test3", Price = 300.00 },
    new TestObject { Name = "Test4", Year = 2024, Description = "This is a test4", Price = 400.00 }
};	

var result = collection.ToMdTable();

// Output:
// | Name | Year | Description | Price |
// |---|---|---|---|
// | Test | 2021 | This is a test | 100.00 |
// | Test2 | 2022 | This is a test2 | 200.00 |
// | Test3 | 2023 | This is a test3 | 300.00 |
// | Test4 | 2024 | This is a test4 | 400.00 |
//
```

By default, if the collection has a property with no populated data, the column will be omitted from the output.

```cs
// The `Description` property is not populated in any instance of the collection
var collection = new[]
{
    new TestObject { Name = "Test", Year = 2021, Price = 100.00 },
    new TestObject { Name = "Test2", Year = 2022, Price = 200.00 },
    new TestObject { Name = "Test3", Year = 2023, Price = 300.00 },
    new TestObject { Name = "Test4", Year = 2024, Price = 400.00 }
};

var result = collection.ToMdTable();

// Output:
// | Name | Year | Price |
// |---|---|---|
// | Test | 2021 | 100.00 |
// | Test2 | 2022 | 200.00 |
// | Test3 | 2023 | 300.00 |
// | Test4 | 2024 | 400.00 |
    //
```

This can be overridden by setting the `ignorePropertiesWithOnlyNullValues` parameter to `false`.

```cs
// The `Description` property is not populated in any instance of the collection
var result = collection.ToMdTable(ignorePropertiesWithOnlyNullValues: false);

// Output:
// | Name | Year | Description | Price |
// |---|---|---|---|
// | Test | 2021 | (empty) | 100.00 |
// | Test2 | 2022 | (empty) | 200.00 |
// | Test3 | 2023 | (empty) | 300.00 |
// | Test4 | 2024 | (empty) | 400.00 |
//
```