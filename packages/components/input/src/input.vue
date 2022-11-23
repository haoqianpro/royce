<template>
  <div class="ry-input" :class="inputClass">
    <input
      :type="props.type"
      class="ry-input__inner"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { inputProps } from './input';

defineOptions({
  name: 'RyInput',
});

// 判断是否获得焦点
const is_focus = ref(false);

const props = defineProps(inputProps);
const emit = defineEmits(['update:modelValue']);

const inputClass = computed(() => {
  return {
    'ry-input__disabled': props.disabled,
    'ry-input__focus': is_focus.value,
  };
});

// 同步model数据
const handleInput = evt => {
  emit('update:modelValue', evt.target.value);
};

const handleFocus = e => {
  if (props.disabled) {
    e.target.blur();
    return;
  }
  is_focus.value = true;
};
const handleBlur = () => (is_focus.value = false);
</script>

<style lang="scss">
@import 'input.scss';
</style>
