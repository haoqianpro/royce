<script setup>
import { RyTag } from '@royce/components';
import { Popover } from '@royce/components'
import { ref } from 'vue';
const content = ref('对话框')
const title = ref('标题')
</script>

<template>
  <ry-tag>tag</ry-tag>
  <ry-tag type="success">tag</ry-tag>
  <ry-tag type="info">tag</ry-tag>
  <ry-tag type="warning">tag</ry-tag>
  <ry-tag type="danger">tag</ry-tag>
  <Popover
      placement="bottom"
      trigger="click"
      :width="300"
      :title="title"
      :content="content"
    >
      <template #reference>
        <button>点击</button>
      </template>
  </Popover>
</template>

<style scoped></style>
