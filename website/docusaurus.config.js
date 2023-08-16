// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BASED ANALYTICS - IANA SYSTEMS',
  tagline: ' A mix of Human and AI Hybrid Analysis - Predictive and recorded future, deep and based analysis that matter most ',
  url: 'https://analytics.iana.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  favicon: 'img/Gloo-Logo.ico',
  organizationName: 'ianaio - IANA SYSTEMS',
  projectName: 'analyticsdotianaio',
  themeConfig: {
    navbar: {
      title: 'iana.io',
      logo: {
        alt: 'IANA SYSTEM at www.iana.io',
        src: 'img/ianaio-logo.webp',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/analysis', label: 'Analysis', position: 'left'},
        {
          type: 'dropdown',
          label: 'iana.io',
          position: 'right',
          items: [
            {
              label: 'gloo',
              href: 'https://iana.io/gloo',
            },
            {
              label: 'dialogs',
              href: 'https://iana.io/gloo-dialogs/',
            },
            {
              label: 'events',
              href: 'https://iana.io/gloo-events/',
            },
            {
              label: 'file',
              href: 'https://iana.io/gloo-file/',
            },
            {
              label: 'history',
              href: 'https://iana.io/gloo-history/',
            },
            {
              label: 'net',
              href: 'https://iana.io/gloo-net/',
            },
            {
              label: 'render',
              href: 'https://iana.io/gloo-render/',
            },
            {
              label: 'storage',
              href: 'https://iana.io/gloo-storage/',
            },
            {
              label: 'timers',
              href: 'https://iana.io/gloo-timers/',
            },
            {
              label: 'utils',
              href: 'https://iana.io/gloo-utils/',
            },
            {
              label: 'worker',
              href: 'https://iana.io/gloo-worker/',
            }
          ],
        },
        {
          href: 'https://www.iana.io',
          label: 'Back to www.iana.io',
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
              label: 'Discord',
              href: 'https://discord.gg/DFgkjhkh898', // #gloo in Yew server
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Analysis',
              to: '/analysis',
            },
            {
              label: 'IANA SYSTEM',
              href: 'https://github.com/ianaio/analytics',
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['rust', 'toml'],
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ianaio/analytics/blob/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ianaio/analytics/blob/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
