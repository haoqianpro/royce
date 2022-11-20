<template>
  <div
    class="drawer-mask"
    :class="caleClass"
    @click.self="closeMask"
  >
    <div class="drawer-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import './drawer.scss'
export default defineComponent({
  name: 'Drawer',  
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
  data() {
    return {
      // 遮罩打开关闭
      isOpen: this.open
    }
  },
  watch: {
    // 监听open，如果变化将值传给isOpen
    open(val) {
      this.isOpen = val
    },
    // 监听isOpen，如果变化将值通过$emit传给open
    isOpen(val) {
      this.$emit('change:chanegOpen', val)
    }
  },
  computed: {
    // 遮罩及其子元素的css样式
    caleClass() {
      return [
        {'open': this.isOpen},
        {'close': !this.isOpen},
        this.placement
      ]
    }
  },
  methods: {
    // 关闭遮罩
    closeMask() {
      this.isOpen = !this.isOpen
    }
  }
})
</script>