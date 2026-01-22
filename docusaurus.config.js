// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Awesome Docs',
  tagline: 'Documentation for each project available on NuGet and Github',
  favicon: 'img/awe-logo.png',

  url: 'https://docs.cloudawesome.uk',
  baseUrl: '/',

  organizationName: 'cloudawesome.uk',
  projectName: 'cloudawesome-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Cloud-Awesome/cloudawesome-docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Cloud Awesome',
        logo: {
          alt: 'logo',
          src: 'img/awe-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://cloudawesome.uk',
            position: 'right',
            label: 'Home',
          },
          {
            href: 'https://github.com/Cloud-Awesome/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.nuget.org/profiles/CloudAwesome/',
            label: 'Nuget',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Nuget',
            items: [
              {
                label: 'CloudAwesome.Xrm.Simulate',
                href: 'https://www.nuget.org/packages/CloudAwesome.Xrm.Simulate',
              },
              {
                label: 'MarkdownMaker',
                href: 'https://www.nuget.org/packages/CloudAwesome.MarkdownMaker',
              },
              {
                label: 'CloudAwesome.Dataverse.Cli',
                href: 'https://www.nuget.org/packages/CloudAwesome.Dataverse.Cli',
              },
            ],
          },
          {
            title: 'Source',
            items: [
              {
                label: 'dataverse-simulate',
                href: 'https://github.com/cloud-awesome/dataverse-simulate',
              },
              {
                label: 'markdown-maker',
                href: 'https://github.com/cloud-awesome/markdown-maker',
              },
              {
                label: 'dataverse-customisation',
                href: 'https://github.com/cloud-awesome/dataverse-customisation',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://cloudawesome.uk',
              },
              {
                label: 'Schema',
                href: 'https://schema.cloudawesome.xyz/plugin-manifest-schema.json',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Cloud-Awesome',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cloud Awesome Limited. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'bash', 'powershell'],
      },
    }),
};

module.exports = config;
