/**
 * @type {import('@docusaurus/plugin-content-docs/lib/sidebars/types').SidebarItemCategoryConfig}
 */
module.exports = {
    type: 'category',
    label: 'cds-customisation',
    link: {
        type: "doc",
        id: 'cds-customisation/index'
    },
    items: [
        "cds-customisation/plugin-registration",
        "cds-customisation/manifest-organisation-patterns",
        "cds-customisation/generate-customisation",
        "cds-customisation/migrate-bulk-deletion-jobs",
        "cds-customisation/toggle-process-activation",
        "cds-customisation/documentation-generator",
        "cds-customisation/portal-generation",
    ]
}