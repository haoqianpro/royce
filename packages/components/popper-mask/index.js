export * from './src/popper-mask';
export { PopperMask };
import PopperMask from './src/popper-mask.vue';

PopperMask.install = app => {
  app.component(PopperMask.name, PopperMask);
};
export default PopperMask;
