// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    require('./docs/dataverse-simulate/sidebar'),
    require('./docs/markdown-maker/sidebar'),
    require('./docs/react-build-monitor/sidebar'),
    require('./docs/cds-customisation/sidebar'),
    require('./docs/portal-gds-accelerator/sidebar'),
    require('./docs/portal-test-framework/sidebar'),
    require('./docs/gds-wireframe-stencils/sidebar'),
    // -- Non-dev Docs --
    // break
    {
      type: "html",
      value: "<hr/>"
    },
    require('./docs/benefits-architecture/sidebar'),
    require('./docs/project-ops/sidebar'),
    require('./docs/style-guide/sidebar'),
    // -- Personal Projects --
    //
    // break
    {
      type: "html",
      value: "<hr/>"
    },
    require('./docs/personal/obsidian-folk-tune-review/sidebar'),
  ],
};

{
  module.exports = sidebars;
}
