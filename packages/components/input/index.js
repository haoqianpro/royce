export * from './src/input';
export { RyInput };
import RyInput from './src/input.vue';

RyInput.install = app => {
  app.component(RyInput.name, RyInput);
};
export default RyInput;
