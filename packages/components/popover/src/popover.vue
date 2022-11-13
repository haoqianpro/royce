<template>
  <!-- <div class="latte-popover">
    <div class="latte-popover-content" v-show="visible">
      <div class="latte-popover-content-body">{{content}}</div>
      <div class="triangle"></div>
    </div>
    <slot name="reference" class="slot"></slot>
  </div> -->
  <div class="latte-popover">
    <!-- 添加弹出框动画 -->
    <transition>
      <!-- 弹出框部分 -->
      <div
        ref="popper"
        class="popover"
        v-show="visible"
      >
        <slot name="popover">
          <div>
            <h4>{{title}}</h4>
            <span>{{content}}</span>
          </div>
        </slot>
      </div>
    </transition>
    <!-- 显示主体部分 -->
    <div ref="wrapper" class="wrapper">
      <slot name="reference">主体内容</slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import './popover.scss'
export default defineComponent ({
  name: 'Popover',
  props: {
    // 弹出框的内容
    content: String,
    // 不同传入值决定主体显示弹出框的事件
    trigger: {
      type: String,
      default: 'click'
    },
    // 弹出框标题
    title: {
      type: String,
      default: 'title'
    },
    // 设置弹出框的宽度
    width: {
      type: Number,
      default: 200
    },
    // 弹框显示位置属性
    placement: {
      type: String,
      default: 'top-start'
    }
  },
  data() {
    return {
      // 弹出框显示属性，默认不显示
      visible: false,
      // 弹出框定位距离左边的距离
      popMarginLeft: 0,
      // 弹出框定位距离上方的距离
      popTop: 0
    } 
  },
  watch: {
    visible(val) {
      if (val) {
        this.getClient()
      }
    }
  },
  mounted() {
    // 获取弹出框元素
    const popper = this.$refs.popper
    // 取到显示主体的元素
    const reference = this.$refs.wrapper.children[0]
    const arrow = document.createElement('div')
    if (this.placement === 'top-start') {
      arrow.className = 'popover-arrow popover-arrow-top-start'
    } else if (this.placement === 'bottom') {
      arrow.className = 'popover-arrow popover-arrow-bottom'
    } else if (this.placement === 'right') {
      arrow.className = 'popover-arrow popover-arrow-right'
    }
    popper.appendChild(arrow)
    // 主体内容添加点击事件
    if (this.trigger === 'click') {      
      reference.addEventListener('click', this.showPopover)
    }
    // 主体事件添加鼠标移入移出事件
    else if (this.trigger === 'hover') {
      // 添加移入事件
      reference.addEventListener('mouseenter', this.showPopover)
      // 添加移出事件
      reference.addEventListener('mouseleave', this.showPopover)
    }
  },
  methods: {
    // 弹出框显示
    showPopover() {
      this.visible = !this.visible
      if (this.visible) {
        // 获取弹框组件中的第一个元素即插槽并给他的宽度一个值
        const popper = this.$refs.popper.children[0]
        popper.style.width = this.width + 'px'
      }
    },
    // 获取弹出框的定位属性
    getClient() {
      const popper = this.$refs.popper
      const temp = popper.style.display
      popper.style.display = 'block'
      const popWidth = popper.offsetWidth
      const popHeight = popper.offsetHeight
      popper.style.display = temp
      this.popMarginLeft = -(popWidth / 2)
      this.popTop = -popHeight
      // 当弹出框显示位置为上方时弹出框的属性
      if (this.placement === 'top-start') {
        popper.style.marginLeft = this.popMarginLeft + 'px'
        popper.style.top = this.popTop - 20 + 'px'
      }
      // 当弹出框显示位置为下方时弹出框的属性
      else if (this.placement === 'bottom') {
        popper.style.marginLeft = this.popMarginLeft + 'px'
        popper.style.bottom = this.popTop - 40 + 'px'
      }
      // 当弹出框显示位置为右方时弹出框的属性
      else if (this.placement === 'right') {
        popper.style.marginLeft = -this.popMarginLeft - 60 + 'px'
        popper.style.top = this.popTop / 2 + 'px'
      }
    }
  }
})
</script>
