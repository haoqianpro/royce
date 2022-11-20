<template>
  <transition name="dialog-fade">
    <div class="ry-dialog_wrapper" v-show="visible">
      <div class="ry-dialog" :style="{ width: width, top: top }">
        <!-- ry-dialog的头部header -->
        <div class="ry-dialog_header">
          <slot name="title">
            <span class="ry-dialog_title">{{ title }}</span>
          </slot>
          <button class="ry-dialog_headerbtn" @click="handleClose">
            <i class="g-icon">✕</i>
          </button>
        </div>
        <!-- ry-dialog的内容body -->
        <div class="ry-dialog_body">
          <slot></slot>
        </div>
        <!-- ry-dialog的底部footer -->
        <div class="ry-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RyDialog",
  components: {},
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "200px",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    handleClose() {
      this.$emit("close", false);
    }
  }
};
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */

.ry-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .ry-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .ry-dialog_title {
        line-height: 24px;
        font-size: 20px;
        font-weight: bold;
        color: #303133;
      }
      .ry-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .cy-icon-close {
          color: red;
        }
      }
    }
    &_body {
      padding: 30px 100px;
      color: #606266;
      font-size: 16px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      :deep(.one-button:first-child) {
        margin-right: 20px;
      }
    }
  }
}
// 显示动画
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
// 动画消失
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;//100%-0%
}

// @keyframes定义fade的动画，使用animation调用
@keyframes fade {
  // 动画开始
  0% {
    opacity: 0;
    transform: translateY(-20px);//往上平移
  }
  // 动画完成
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
