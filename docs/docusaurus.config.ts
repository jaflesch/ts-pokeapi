import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TS-PokéAPI',
  tagline:
    'Zero dependency, lightweight, extensible, multipurpose TypeScript library.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ts-pokeapi/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jaflesch', // Usually your GitHub org/user name.
  projectName: 'ts-pokeapi', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

  trailingSlash: true,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        pages: {
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { converters: ['pnpm'] },
            ],
          ],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'TS-PokéAPI',
      logo: {
        alt: 'TS-PokéAPI logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/docs/guides/getting-started',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/poke-api/pokeapi-class',
          label: 'API',
          position: 'left',
          sidebarId: 'tutorialSidebar',
        },
        {
          href: 'https://github.com/jaflesch/ts-pokeapi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/guides/getting-started',
            },
            {
              label: 'PokéAPI',
              to: '/docs/guides/pokeapi-class',
            },
            {
              label: 'Contributing',
              to: '/docs/guides/contributing',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Report a bug',
              href: 'https://github.com/jaflesch/ts-pokeapi/issues/new?labels=type%3A+bug',
            },
            {
              label: 'Request a feature',
              href: 'https://github.com/jaflesch/ts-pokeapi/issues/new?labels=type%3A+feature-request',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jaflesch',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/jean-flesch-19a189104/',
            },
          ],
        },
        {
          title: 'Built with',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'GitHub Pages',
              href: 'https://pages.github.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © 2023-${new Date().getFullYear()} Jean Flesch`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'powershell'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
