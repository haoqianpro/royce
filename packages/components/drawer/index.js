export * from './src/drawer';
export { Drawer };
import Drawer from './src/drawer.vue';

Drawer.install = app => {
  app.component(Drawer.name, Drawer);
};
export default Drawer;