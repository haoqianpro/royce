<template>
  <span :class="tagClass">
    <span><slot></slot></span>
  </span>
</template>

<script setup>
import { computed } from 'vue';
import { tagProps } from './tag';

defineOptions({
  name: 'RyTag',
});

const props = defineProps(tagProps);

const tagClass = computed(() =>
  props.type === 'default' ? ['ry-tag'] : ['ry-tag', `ry-tag--${props.type}`]
);
</script>

<style lang="scss">
@import 'tag.scss';
</style>
