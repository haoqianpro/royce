<template>
  <button
    :disabled="disabled"
    :type="nativeType"
    :class="buttonClass"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { buttonProps } from './button';

defineOptions({
  name: 'RyButton',
});

const props = defineProps(buttonProps);
const emit = defineEmits(['click']);

const buttonClass = computed(() => [
  'ry-btn',
  { 'ry-btn-primary': props.type === 'primary' },
]);

const handleClick = evt => {
  emit('click', evt);
};
</script>

<style lang="scss">
@import 'button.scss';
</style>
