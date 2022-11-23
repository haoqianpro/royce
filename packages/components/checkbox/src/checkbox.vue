<template>
  <label class="ry-checkbox" :class="checkboxClass">
    <span class="ry-checkbox__input">
      <input
        type="checkbox"
        class="ry-checkbox__original"
        :checked="props.modelValue"
        :value="props.value"
        @change="handleChange"
      />
    </span>
    <span class="ry-checkbox__label">{{ props.label }}</span>
  </label>
</template>

<script setup>
import { computed } from 'vue';
import { checkProps } from './checkbox';

defineOptions({
  name: 'RyCheckbox',
});

const props = defineProps(checkProps);
const emit = defineEmits(['update:modelValue']);

const checkboxClass = computed(() => {
  return {
    'is-checked': props.modelValue,
    'is-disabled': props.disabled,
  };
});
const handleChange = evt => {
  if (props.disabled) {
    evt.target.checked = !evt.target.checked;
    return;
  }
  emit('update:modelValue', evt.target.checked);
};
</script>

<style lang="scss">
@import 'checkbox.scss';
</style>
