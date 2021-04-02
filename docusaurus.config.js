module.exports = {
  title: 'Scriptable For Dummies',
  tagline: 'Easy Guide To Automate iOS using JavaScript!',
  url: 'https://scriptable-for-dummies.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/icons/favicon.ico',
  organizationName: 'Himawari', // Usually your GitHub org/user name.
  projectName: 'Scriptable-For-Dummies', // Usually your repo name.
  themeConfig: {
    hideableSidebar: false,
    sidebarCollapsible: true,
    navbar: {
      title: 'Scriptable For Dummies',
      hideOnScroll: true,
      logo: {
        alt: 'Scriptable Logo',
        src: 'img/icons/appicon.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'API',
          position: 'left',
        },
        {
          to: 'version/',
          label: 'Version',
          position: 'left',
        },
        {
          to: '/team',
          label: 'Team',
          position: 'right',
          activeBaseRegex: `/community/`,
        },
        {
          href: 'https://github.com/IssamElNass/Scriptable-For-Dummies',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://discord.gg/7KbjfTV',
          position: 'right',
          className: 'header-discord-link',
          'aria-label': 'Discord Server',
        },
      ],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,

      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '🌞',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/IssamElNass/Scriptable-For-Dummies/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
  ]
};
