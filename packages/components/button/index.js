export * from './src/button';
export { RyButton };
import RyButton from './src/button.vue';

RyButton.install = app => {
  app.component(RyButton.name, RyButton);
};
export default RyButton;
