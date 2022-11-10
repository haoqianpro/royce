export * from '../components';
import { RyButton } from '@royce/components';
const components = [RyButton];

const INSTALLED_KEY = Symbol('INSTALLED_KEY');
export const install = app => {
  if (app[INSTALLED_KEY]) return;
  app[INSTALLED_KEY] = true;
  components.forEach(comp => app.use(comp));
};

export default {
  install,
};
