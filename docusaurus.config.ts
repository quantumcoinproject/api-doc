import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'QuantumCoin JSON RPC APIs',
  tagline: 'A JSON-RPC specification for QuantumCoin',
  favicon: 'https://static.quantumscan.com/v2/assets/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://apidoc.quantumcoin.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quantumcoinproject', // Usually your GitHub org/user name.
  projectName: 'api-doc', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [

  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Execution APIs',
       logo: {
         alt: 'QuantumCoin',
         src: 'https://static.quantumscan.com/v2/assets/img/icon.png',
       },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          href: 'https://github.com/quantumcoinproject/api-doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/quantumcoinproject/api-doc',
            },
          ],
        },
      ],
      copyright: `Copyright and related rights waived via CC0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
