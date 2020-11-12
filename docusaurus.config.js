module.exports = {
  title: 'Scriptable For Dummies',
  tagline: 'Easy Guide To Automate iOS using JavaScript!',
  url: 'https://scriptable-for-dummies.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Himawari', // Usually your GitHub org/user name.
  projectName: 'Scriptable-For-Dummies', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Scriptable For Dummies',
      hideOnScroll: true,
      logo: {
        alt: 'Scriptable Logo',
        src: 'img/appicon.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
       // { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://discord.gg/7KbjfTV',
          label: 'Help',
          position: 'right',

        },
        {
          href: 'https://github.com/IssamElNass/Scriptable-For-Dummies',
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
              to: 'docs/getting-started',
            },
            {
              label: 'Popular Topics',
              to: 'docs/transparant-backgrounds',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/Scriptable/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/7KbjfTV',
            },
            {
              label: 'Automators Forum',
              href: 'https://talk.automators.fm/c/scriptable/13',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Himawari.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/IssamElNass/Scriptable-For-Dummies/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/IssamElNass/Scriptable-For-Dummies/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
