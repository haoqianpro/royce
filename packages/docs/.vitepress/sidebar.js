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
          text: 'Popover 弹出框',
          link: '/component/popover'
        },
        {
          text: 'Drawer 抽屉',
          link: '/component/drawer'
        }
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
