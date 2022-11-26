<template>
  <div class="popper-mask" :class="caleClass">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import './popper-mask.scss'
export default defineComponent({
  name: 'PopperMask',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 遮罩的css样式
    caleClass() {
      return [
        {'open': this.open},
        {'close': !this.open}
      ]
    }
  }
})
</script>