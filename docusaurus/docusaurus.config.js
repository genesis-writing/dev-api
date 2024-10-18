// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dev API Docs',
  tagline: 'Open-source API endpoints for (unofficial) data on ' +
  'The Ohio State University',
  favicon: 'img/favicon.ico',

  // Production url of the docs site
  url: 'https://docs.api.osu.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',
  // Throw error when broken link detected
  onBrokenLinks: "throw",
  // Throw error when anchor detected
  onBrokenAnchors: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false, // Disabled since we don't need it for our purposes
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi', // plugin id
        docsPluginId: 'classic', // configured for preset-classic
        config: {
          dev_api_versioned: {
            // General configuration for the API docs
            specPath: '../docs/openapi.yaml', // Path to OpenAPI spec file (currently it's 1.0.0)
            outputDir: './docs/api-docs/1.0.0', // Directory for the current version's generated API docs
            sidebarOptions: {
              groupPathsBy: 'tag', // Group by tags defined in the OpenAPI spec
            },
            // Versioning config
            version: '1.0.0', // Current version (should match the actual current version)
            label: 'v1.0.0', // Displayed label for the version
            baseUrl: '/docs/api-docs/1.0.0', // Leading slash is important, direct to current API version ( set up a redirect in future?)
            versions: {
              // Ordered oldest to newest
              '1.0.0': {
                specPath: '../docs/openapi.yaml', // Path to V1.0.0 OpenAPI spec file
                outputDir: './docs/api-docs/1.0.0', // No trailing slash, where the v1.0.0 generated API docs go
                label: 'v1.0.0', // Displayed label for this version
                baseUrl: '/docs/api-docs/1.0.0', // Leading slash is important, versioned path
              },
              // Add future versions in this object, following this format
              // '2.0.0': {
              //   specPath: '../docs/openapi_v2.yaml',
              //   outputDir: './docs/api-docs/2.0.0',
              //   label: 'v2.0.0',
              //   baseUrl: '/docs/api-docs/2.0.0',
              // },
            },
          },
        },
      },
    ]
  ],

  themes: ['docusaurus-theme-openapi-docs'], // export theme components

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Website Logo',
          src: 'img/logo.svg',
        },
        // Sidebar
        items: [
          {
            href: '/docs/contributors',
            label: 'Contributors',
            position: 'right',
          },
          {
            href: 'https://github.com/devosu/dev-api',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: '/docs/api-docs/1.0.0',
            label: 'API Reference',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'DEV at OSU',
                href: 'https://osu.dev/',
              },
              {
                label: 'Contact',
                href: 'https://api.osu.dev/dev@osu.edu',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/devosu/dev-api',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} dev-api Docs Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      languageTabs: [ // Determines displayed languages and order
        {
          language: 'curl',
        },
        {
          language: 'java',
        },
        {
          language: 'kotlin',
        },
        {
          language: 'objective-c',
        },
        {
          language: 'javascript',
        },
        {
          language: 'csharp',
        },
        {
          language: 'php',
        },
        {
          language: 'python',
        },
      ],
    }),
};

export default config;
