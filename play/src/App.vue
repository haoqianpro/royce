<script setup>
import { RyCheckbox, RyCheckboxGroup, RyInput, RyTag } from '@royce/components';
import { ref, watch } from 'vue';

const name = ref('你好');
const pass = ref('');
const disabled = ref('disabled');
const ok = ref(false);
const not = ref(false);

const arr = ref([]);
const list = [
  { label: '苹果', value: 'Apple' },
  { label: '梨', value: 'Pear' },
  { label: '香蕉', value: 'Banana', disabled: true },
];

watch(ok, v => console.log(v));
</script>

<template>
  <ry-tag>tag</ry-tag>
  <ry-tag type="success">tag</ry-tag>
  <ry-tag type="info">tag</ry-tag>
  <ry-tag type="warning">tag</ry-tag>
  <ry-tag type="danger">tag</ry-tag>

  <ry-input v-model="name" />
  <ry-input v-model="pass" type="password" />
  <ry-input :disabled="true" v-model="disabled" />

  <ry-checkbox v-model="ok" label="包子" />
  <ry-checkbox v-model="not" label="油条" :disabled="true" />

  <ry-checkbox-group :list="list" v-model="arr" />
  <p>{{ arr }}</p>
</template>

<style scoped></style>
