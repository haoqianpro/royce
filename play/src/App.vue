<script setup>
import { RyTag } from '@royce/components';
import { Popover } from '@royce/components'
import { Drawer } from '@royce/components'
import { ref } from 'vue';
const content = ref('对话框')
const title = ref('标题')
const open = ref(false)
const hasMask = ref(true)
</script>

<template>
  <ry-tag>tag</ry-tag>
  <ry-tag type="success">tag</ry-tag>
  <ry-tag type="info">tag</ry-tag>
  <ry-tag type="warning">tag</ry-tag>
  <ry-tag type="danger">tag</ry-tag>
  <Popover
      placement="top"
      trigger="click"
      :width="500"
      :title="title"
      :content="content"
    >
      <template #reference>
        <button>点击</button>
      </template>
  </Popover>
  <Drawer
    :hasMask="hasMask"
    :open="open"
    placement="right"
    @change:changeOpen="val => open = val"
  >
    <h1>hello</h1>
  </Drawer>
  <button @click="this.open = true" class="drawer">click to change drawer</button>
</template>

<style scoped>
button.drawer {
  margin-top: 100px;
}
</style>
