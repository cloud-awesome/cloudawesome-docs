# Plugin registration

> API and Command line application to register plugin assemblies, service endpoints, steps and entity images from an XML manifest.
>
> Write your plugins and service bus message code then comit to your repo alongside a manifest to register them without needing the Plugin registration tool to manually register each step

## Manifest

:::tip[Deprecation notice]
The XML version of all manifests are in the process of being deprecated

In the next release, they will be replaced with JSON manifests. The working sample can be viewed at [https://schema.cloudawesome.xyz/plugin-manifest-schema.json](https://schema.cloudawesome.xyz/plugin-manifest-schema.json)  

Apart from the new file format, the structure of the new version manifests will remain the same but will benefit from improved validation and intelisense while writing 
:::

### XSD

The correct version of manifest schema definition (xsd) is included in the related release of source/cli.

The manifest consists of the following top-level nodes:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<PluginManifest>

  <SolutionName>PluginRegistrationSandbox</SolutionName>
  <Clobber>true</Clobber>
  
  <!-- Doesn't process types, steps or images, only updates the assembly code -->
  <UpdateAssemblyOnly>false</UpdateAssemblyOnly>
  
  <!-- Plugin assemblies, plugins (PluginType), Steps, and Entity Images -->
  <PluginAssemblies></PluginAssemblies>

  <!-- Service bus queues, Steps, and Entity Images -->
  <ServiceEndpoints></ServiceEndpoints>

  <!-- Not yet implemented -->
  <Webhooks></Webhooks>
  
  <!-- Not yet implemented (due to general move away from workflows, may never be implemented) -->
  <Workflows></Workflows>

  <!-- Define how the app connects to the target CDS environment. Can also be overriden in CLI actions -->
  <CdsConnection></CdsConnection>

  <!-- Define pre-rolled logging outputs -->
  <LoggingConfiguration></LoggingConfiguration>

</PluginManifest>
```

None of the above nodes are mandatory - either leave them blank or omit them entirely if they are not relevant to your requirements

### Plugin Assemblies

```xml
<PluginAssemblies>
  <PluginAssembly>
    <Name>SamplePluginAssembly</Name>
    <FriendlyName>Account and Contact Plugins</FriendlyName>
    <Assembly>../../../SamplePluginAssembly/bin/release/SamplePluginAssembly.dll</Assembly>
    <!--<SolutionName>PluginRegistrationSandbox</SolutionName>-->
    <Plugins>
      <Plugin>
        <Name>SamplePluginAssembly.ContactPlugin</Name>
        <FriendlyName>Contact Plugin</FriendlyName>
        <!--<Description>...</Description>-->
        <Steps>
          <Step>
            <Name>Update Contact: On Update of Contact</Name>
            <FriendlyName>Update Contact: On Update of Contact</FriendlyName>
            <!--<Description>...</Description>-->
            <Stage>Postoperation</Stage>
            <ExecutionMode>Synchronous</ExecutionMode>
            <Message>update</Message>
            <PrimaryEntity>contact</PrimaryEntity>
            <!--<ExecutionOrder>1</ExecutionOrder>-->
            <!--<AsyncAutoDelete>false</AsyncAutoDelete>-->
            <!--<FilteringAttributes>
              <Attribute>firstname</Attribute>
              <Attribute>middlename</Attribute>
              <Attribute>lastname</Attribute>
            </FilteringAttributes>-->
            <!--<UnsecureConfiguration>...</UnsecureConfiguration>-->
            <!--<EntityImages>
              <EntityImage>
                <Name>ContactImage</Name>
                <Type>PreImage</Type>
                <Attributes>
                  <Attribute>firstname</Attribute>
                  <Attribute>middlename</Attribute>
                  <Attribute>lastname</Attribute>
                </Attributes>
              </EntityImage>
            </EntityImages>-->
          </Step>
        </Steps>
      </Plugin>
    </Plugins>
  </PluginAssembly>
</PluginAssemblies>
```

### Service Endpoints

```xml
<ServiceEndpoints>
  <ServiceEndpoint>
    <Name>TesterQueue</Name>
    <NamespaceAddress>sb://yournamespace.servicebus.windows.net/</NamespaceAddress>
    <!-- Currently only persistent queue contracts are supported. Other options such as EventHubs are not tested and may fail -->
    <Contract>Queue_Persistent</Contract> 
    <Path>Tester</Path>
    <!--<MessageFormat>Json</MessageFormat>-->
    <AuthType>SASKey</AuthType>
    <SASKeyName>RootManageSharedAccessKey</SASKeyName>
    <SASKey>6notREAL7CuN1aQwi1dQWERiRu3FAKE!kEy2yv4Y0=</SASKey>
    <UserClaim>UserId</UserClaim>
    <!--<Description>This is the TesterQueue's description</Description>-->
    <Steps>
      <Step>
        <Name>Tester Queue: On Update of Contact</Name>
        <FriendlyName>Tester Queue: On Update of Contact</FriendlyName>
        <!--<Description>...</Description>-->
        <Stage>Postoperation</Stage>
        <ExecutionMode>Asynchronous</ExecutionMode>
        <Message>update</Message>
        <PrimaryEntity>contact</PrimaryEntity>
        <ExecutionOrder>1</ExecutionOrder>
        <!--<AsyncAutoDelete>false</AsyncAutoDelete>-->
        <!--<FilteringAttributes>
          <Attribute>firstname</Attribute>
          <Attribute>middlename</Attribute>
          <Attribute>lastname</Attribute>
        </FilteringAttributes>-->
        <!--<UnsecureConfiguration>...</UnsecureConfiguration>-->
        <!--<EntityImages>
          <EntityImage>
            <Name>ContactImage</Name>
            <Type>PreImage</Type>
            <Attributes>
              <Attribute>firstname</Attribute>
              <Attribute>middlename</Attribute>
              <Attribute>lastname</Attribute>
            </Attributes>
          </EntityImage>
        </EntityImages>-->
      </Step>
    </Steps>
  </ServiceEndpoint>
</ServiceEndpoints>
```

Note that the `<Steps/>` node is not mandatory and can be omitted if only the empty service endpoint is required. Can be useful if alternative message posting methods are being used, e.g. custom plugin to service bus

### Webhooks

Not yet implemented, but will be follow a very similar format to the `<ServiceEndpoints/>` schema

### Custom Workflow Assemblies

Not yet implemented. Due to the general move away from workflow use in favour of Logic Apps/Power Automate etc., this may not be implemented. Drop me a feature request if it would be still be useful!

## Options

### Clobber

Easier to delete all steps/images etc. and re-register than potentially have a registration failed due to badly merged plugin types

### Solutions

Structuring multiple manifests vs. multiple solutions vs. single manifests with solutions per `PluginAssembly` node to enable various team management, deployment and solution segregation strategies

See [Manifest Organisation Patterns](manifest-organisation-patterns.md) for more details

### Design decisions

- [ \\ todo] ...
- Why a manifest instead of decorating plugin code itself
- Why SolutionName in multiple places (see above)
- ..