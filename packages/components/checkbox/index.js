export * from './src/checkbox';
export { RyCheckbox };
import RyCheckbox from './src/checkbox.vue';

RyCheckbox.install = app => {
  app.component(RyCheckbox.name, RyCheckbox);
};
export default RyCheckbox;
