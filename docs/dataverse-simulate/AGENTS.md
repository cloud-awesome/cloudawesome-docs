# Dataverse Simulate Documentation

## Purpose

This directory contains the Docusaurus documentation for the dataverse-simulate NuGet library.

## Authoritative source

The library source code is located in the sibling repository:

../../../dataverse-simulate/

Resolve this relative to the current directory.

Use the local working tree as the source of truth, including uncommitted changes, unless a release version or Git reference is explicitly specified.

Consult:
- Public API implementations
- Unit tests and usage examples
- Library README and source documentation (as appropriate)

Do not infer unsupported behaviour from existing documentation alone.

## Editing boundaries

Only modify files under docs/dataverse-simulate/.

Do not modify:
- Other projects' documentation
- Source files in the library repository
- Docusaurus configuration
- Site navigation or sidebars
- Package manifests

If changes outside this directory are necessary, report them and request separate approval.

## Documentation requirements

- Preserve existing Docusaurus conventions.
- Use verified public APIs in code examples.
- Identify obsolete features and API changes.
- Report ambiguities rather than inventing behaviour.

## Style

- Prefer concise introductions on each page, followed by a sample code snippet, before progressing to explaining detailed usage.
- Include extensive links throughout the docs to help users (and agents/web search/etc.) find what they're after.
- Keep documentation fairly code-heavy and more concise on prose descriptions, where appropriate.
- Have a preference for gov.uk GDS style, e.g.
  - The home page gives a short, but comprehensive summary 
  - Each other page describes what the page is telling you about 
  - Lots of (code) examples, no long paragraphs 
  - Generally prefer more pages, rather than longer pages 
  - Text, visualisations, examples together are great. 
  - Defined patterns for usage are great (c.f. the GDS design system) 

## Verification

- Review all changed file paths before completion. 
- Validate documentation examples against source code.
- Report any build errors or unresolved links.
- Report a list of any new or changed code samples, so that they can be included in the library's unit tests.