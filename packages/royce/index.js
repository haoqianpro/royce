export * from '../components';
import { RyTag, Popover } from '@royce/components';
const components = [RyTag, Popover];

const INSTALLED_KEY = Symbol('INSTALLED_KEY');
export const install = app => {
  if (app[INSTALLED_KEY]) return;
  app[INSTALLED_KEY] = true;
  components.forEach(comp => app.use(comp));
};

export default {
  install,
};
