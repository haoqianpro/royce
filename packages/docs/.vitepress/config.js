const sidebar = require('./sidebar.js');
export const config = {
  title: 'Royce',
  description: 'a Vue 3 based component library for designers and developers',
  themeConfig: {
    logo: '/images/vite.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT vangleer and Vangle contributors',
    },
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name',
    },
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/component/button' },
    ],
    markdown: {
      anchor: { permalink: false },
      toc: { includeLevel: [1, 2] },
      config: md => {
        const { demoBlockPlugin } = require('vitepress-theme-demoblock');
        md.use(demoBlockPlugin);
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vangleer' }],
    sidebar,
  },
};

export default config;
