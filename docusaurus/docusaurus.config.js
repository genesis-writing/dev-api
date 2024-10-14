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
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        id: "openapi", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          dev_api_versioned: {
            specPath: "../docs/openapi.yaml", // Path to OpenAPI spec file
            outputDir: "./docs/api-docs", // Where the generated API docs go
            sidebarOptions: {
              groupPathsBy: "tag", // Controls how the API docs are grouped in the sidebar
            },
          },
        },
      },
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"], // export theme components

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
          // {
            // title: 'Docs',
            // items: [
              // {
                // label: 'Tutorial',
                // to: '/docs/intro',
              // },
            // ],
          // },
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
          language: "curl",
        },
        {
          language: "java",
        },
        {
          language: "kotlin",
        },
        {
          language: "objective-c",
        },
        {
          language: "javascript",
        },
        {
          language: "csharp",
        },
        {
          language: "php",
        },
        {
          language: "python",
        },
      ],
    }),
};

export default config;
