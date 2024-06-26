# Introduction

Automate common, time-consuming and error-prone tasks during customisation and configuration of Dataverse (Dynamics 365/CDS)

## Features

- [Register plugins from XML manifest](plugin-registration.md)
    - Plugins, steps, service endpoints, workflow assemblies, webhooks
    - Keep plugin registration details in source alongside the plugin assemblies so don't need to open the Plugin Reg Tool and configure manually
- [Generate customisations from XML manifest](generate-customisation.md)
    - Entities, forms, views, optionsets
    - Security roles and field level security profiles
    - Model driven apps and sitemap
    - Quickly generate, test and tear down all artifacts during prototyping phases
- [Migrate Bulk Deletion Jobs between environments](migrate-bulk-deletion-jobs.md)
- [Toggle process status from XML manifest](toggle-process-activation.md)
    - Activate/Deactivate processes specified individually, included in solutions, or parented by assembly
    - Useful for data migrations/imports
    - Include in source control which processes should be disabled (or which shouldn't be re-enabled)
    - Supports plugin steps, workflows, modern flows and case creation rules
- [Generate metadata and system configuration documentation](documentation-generator.md)
    - Output system documentation as a PDF or a series of Markdown documents (standard markdown, GitHub, Docusaurus, Confluence)
    - Document entities and related data model, generating an entity relationship diagram 
    - Security roles, workflows and cloud processes
    - Generate documentation on a Power Pages site (sitemap, web roles and entity permissions hierarchy, etc.)
- [Generate Power Pages (portal) content from a Visio diagram](portal-generation.md)
    - Prototype your portal in a visio template and get business sign-off, add metadata to the pages then upload to generate:
      - Web pages (url, page template, parent page, display order)
      - Basic forms (page navigation, entity, system form)

## Installation

Two versions are available on Nuget.

1. To use a Console Application for stand alone use or for use within a pipeline install [CloudAwesome.Xrm.Customisation.Cli](https://www.nuget.org/packages/CloudAwesome.Xrm.Customisation.Cli/)
2. To integrate the API into your own solution, install the [CloudAwesome.Xrm.Customisation](https://www.nuget.org/packages/CloudAwesome.Xrm.Customisation/) package

## Example usage

[[[ More documentation is en route! ;) ]]]