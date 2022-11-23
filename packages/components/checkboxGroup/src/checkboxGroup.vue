<template>
  <div class="ry-checkbox-group">
    <ry-checkbox
      v-for="item in stateList"
      :key="item.value"
      :label="item.label"
      :disabled="item.disabled"
      v-model="item.checked"
    />
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';
import RyCheckbox from '../../checkbox';
import { checkboxGroupProps } from './checkboxGroup';

defineOptions({
  name: 'RyCheckboxGroup',
});

const props = defineProps(checkboxGroupProps);

// checkbox 选取状态列表
const stateList = reactive(
  props.list.map(item => ({
    label: item.label,
    value: item.value,
    checked: props.modelValue.includes(item.value),
    disabled: Boolean(item.disabled),
  }))
);

const emit = defineEmits(['update:modelValue']);

// 选取时 更新modelValue
watch(stateList, () => {
  emit(
    'update:modelValue',
    stateList.filter(item => item.checked).map(item => item.value)
  );
});
</script>

<style lang="scss">
@import 'checkboxGroup.scss';
</style>
