import Royce from 'alcohol-filled-chocolate';
import 'alcohol-filled-chocolate/dist/style.css';
// 组件注册就和我们平时开发vue项目一样
import 'vitepress-theme-demoblock/theme/styles/index.css';
import theme from 'vitepress/dist/client/theme-default/index';
// Demo组件和DemoBlock是两个vue组件，等会我们要在md文件中使用他来展示组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';

export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(Royce);
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
  },
};
