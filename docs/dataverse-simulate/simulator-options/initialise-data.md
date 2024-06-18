# Initialise data

Bulk initialise mocked data during set up of the mocked service

```csharp
var options = new SimulatorOptions
{
    InitialiseData = new Dictionary<string, List<Entity>>
    {
        {   // You can use early bound entities
            Contact.EntityLogicalName,
            [
                new Contact
                {
                    contactid = Guid.Parse("22c4ba07-5df0-4bed-aacf-276270b75f2f"),
                    firstname = "Arthur",
                    lastname = "Nicholson-Gumuła",
                    birthdate = new DateTime(1984, 12, 14),
                    parentcustomerid = Arthur.Account().ToEntityReference(),
                    gendercode = Contact_gendercode.Male,
                    statuscode = Contact_StatusCode.Active,
                    overriddencreatedon = new DateTime(2023, 04, 18),
                    numberofchildren = 0
                },
                new Contact
                {
                    firstname = "Bruce",
                    lastname = "Purves",
                    gendercode = Contact_gendercode.Male,
                    statuscode = Contact_StatusCode.Active,
                    overriddencreatedon = new DateTime(2008, 01, 06),
                    numberofchildren = 2
                }
            ]
        },
        {   // Use late bound entities 
            "account",
            [
                new Entity("account", Guid.Parse("9b19f826-6ca7-456a-ae73-3ffbd687cd2b"))
                {
                    Attributes =
                    {
                        ["Id"] = Guid.Parse("9b19f826-6ca7-456a-ae73-3ffbd687cd2b"),
                        ["name"] = "Cloud Awesome Limited"
                    }
                }
            ]
        }
    }
};

var orgService = _organizationService.Simulate(options);
// or
// var serviceProvider = _serviceProvider.Simulate(options);

```

:::info
Remember that, when populating data through this `SimulatorOptions.InitialiseData`, no additional logic is applied to the entities you provide.

You must remember to set all the attributes that are required for your tests, such as the primary id, createdon, createdby, etc.
:::

:::tip
After initialisation, you can add a single record or in bulk using `.Simulated().Add(entityOrDictionary)`

See [Entity data](../data-stores/entity-data/intro.md) for more information
:::