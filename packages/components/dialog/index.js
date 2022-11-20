export * from './src/dialog';
export { RyDialog };
import RyDialog from './src/dialog.vue';

RyDialog.install = app => {
  app.component(RyDialog.name, RyDialog);
};
export default RyDialog;
