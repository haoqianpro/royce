export * from './src/checkboxGroup';
export { RyCheckboxGroup };
import RyCheckboxGroup from './src/checkboxGroup.vue';

RyCheckboxGroup.install = app => {
  app.component(RyCheckboxGroup.name, RyCheckboxGroup);
};
export default RyCheckboxGroup;
