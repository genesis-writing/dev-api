// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dev API Docs',
  tagline: 'API and SDK Documentation',
  favicon: 'img/favicon.ico',

  // Production url of the docs site
  url: 'https://docs.api.osu.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

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
            specPath: '../docs/openapi.yaml', // Path to OpenAPI spec file
            outputDir: './docs/api-docs/current', // Where the generated API docs go
            sidebarOptions: {
              groupPathsBy: 'tag', // Group by tags defined in the OpenAPI spec
            },
            // Versioning config
            version: '1.0.0', // Current version
            label: 'v1.0.0', // Current version label
            baseUrl: '/api-docs', // Leading slash is important, direct to current API version
            versions: {
              '1.0.0': {
                specPath: '../docs/openapi.yaml', // Path to V1.0.0 OpenAPI spec file
                outputDir: './docs/api-docs/1.0.0', // No trailing slash, where the V1 generated API docs go
                label: 'v1.0.0',
                baseUrl: '/docs/api-docs/1.0.0', // Leading slash is important, versioned path
              },
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
        items: [
          {
            href: 'https://github.com/devosu/dev-api',
            label: 'GitHub',
            position: 'right',
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
