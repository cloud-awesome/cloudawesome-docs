// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Awesome Docs',
  tagline: 'Documentation is cool!',
  favicon: 'img/awe-logo.png',

  // Set the production url of your site here
  url: 'https://docs.cloudawesome.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cloudawesome.uk', // Usually your GitHub org/user name.
  projectName: 'cloudawesome-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          alt: 'My Site Logo',
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
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
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
