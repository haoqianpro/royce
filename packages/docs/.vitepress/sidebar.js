module.exports = {
  '/guide/': getGuideSidebar(),
  '/component/': getComponentSidebar(),
};

function getComponentSidebar() {
  return [
    {
      text: '基础组件',
      items: [
        {
          text: 'Tag 标签',
          link: '/component/tag',
        },
        {
          text: 'button按钮',
          link: '/component/button'
        },
      ],
    },
  ];
}

function getGuideSidebar() {
  return [
    {
      text: '基础',
      items: [
        {
          text: '安装',
          link: '/guide/install',
        },
      ],
    },
  ];
}
