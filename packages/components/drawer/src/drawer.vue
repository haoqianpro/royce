<template>
  <PopperMask
    :caleClass="caleClass"
    :open="open"
    @click.self="closeMask(false)"
  >
    <div class="drawer-content" :class="caleClass">
      <span @click="closeMask(false)">X</span>
      <slot></slot>
    </div>
  </PopperMask>
</template>

<script>
import { defineComponent } from 'vue';
import PopperMask from '../../popper-mask/src/popper-mask.vue'
import './drawer.scss'
export default defineComponent({
  name: 'Drawer',
  components: {
    PopperMask
  },
  props: {
    // 绑定遮罩打开关闭参数
    open: {
      type: Boolean,
      default: false
    },
    // 遮罩内部内容出现位置
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  // 将值传给父元素的open
  emits: ['change:chanegOpen'],
  data() {},
  computed: {
    // 遮罩及其子元素的css样式
    caleClass() {
      return [
        this.placement,
        {'open': this.open},
        {'close': !this.open},        
      ]
    }
  },
  methods: {
    // 关闭遮罩
    closeMask(val) {
      this.$emit('change:changeOpen', val)
    }
  }
})
</script>