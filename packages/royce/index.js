export * from '../components';
import { RyTag } from '@royce/components';
import { TButton } from '@royce/components';

const components = [RyTag,TButton];

const INSTALLED_KEY = Symbol('INSTALLED_KEY');
export const install = app => {
  if (app[INSTALLED_KEY]) return;
  app[INSTALLED_KEY] = true;
  components.forEach(comp => app.use(comp));
};

export default {
  install,
};
