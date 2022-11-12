export * from './src/tag';
export { RyTag };
import RyTag from './src/tag.vue';

RyTag.install = app => {
  app.component(RyTag.name, RyTag);
};
export default RyTag;
