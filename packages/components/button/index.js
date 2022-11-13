
// import * from './src/button';
export { TButton };
import TButton from './src/button.vue';
TButton.install = app => {
  app.component(TButton.name, TButton);
};
export default TButton 