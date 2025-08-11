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
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'MarkdownMaker',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'CloudAwesome.Xrm.Customisation',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'CloudAwesome.Xrm.Core',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Source',
            items: [
              {
                label: 'CloudAwesome.Xrm.Simulate',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'MarkdownMaker',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'CloudAwesome.Xrm.Customisation',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'CloudAwesome.Xrm.Core',
                href: 'https://twitter.com/docusaurus',
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
              {
                label: 'Twitter',
                href: 'https://twitter.com/arthur82',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cloud Awesome Limited. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
    }),
};

module.exports = config;
