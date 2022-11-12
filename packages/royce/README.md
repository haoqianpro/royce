Royce Vue3 组件库

目录结构

- packages 包目录

  - components 组件代码
  - docs vitepress 文档
  - royce 生成的 npm 包

- play 测试组件的 vue 项目

- scripts

  - build.js 生成 npm 包的脚本

- 开发流程
  - 可以仿照 tag 组件 创建目录编写代码，并在 components/index.js 中导出组件
  - 在 play 中测试组件不需打包，可直接在 play/src/App.vue 中导入组件并测试
  - 在 docs 中编写文档展示组件效果需要打包；在 docs/.vitepress/sidebar.js 中的 getComponentSidebar 新建项目;在 docs/component 下新建 md 文档，在其中使用组件不需导入
