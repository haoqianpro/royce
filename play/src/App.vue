<script setup>
import { RyTag } from '@royce/components';
import { RyDialog } from '@royce/components';
</script>

<template>
  <ry-tag>tag</ry-tag>
  <ry-tag type="success">tag</ry-tag>
  <ry-tag type="info">tag</ry-tag>
  <ry-tag type="warning">tag</ry-tag>
  <ry-tag type="danger">tag</ry-tag>

  <br />
  <!-- dialog -->
  <button @click="visible=true">按钮</button>
  <ry-dialog :visible.sync="visible" @close="handleClose">
    <ul>
      <li>张国荣</li>
      <li>黎明</li>
      <li>古天乐</li>
      <li>郭富城</li>
      <li>刘德华</li>
    </ul>
    <template v-slot:footer>
      <button class="one-button" type="primary" @click="visible = false">确定</button>
      <button class="one-button" @click="visible = false">取消</button>
    </template>
  </ry-dialog>
</template>
<script>
export default {
  data(){
    return {
      visible:false,
    }
  },
  methods:{
    handleClose(){
      this.visible = false
    }
  }
}
</script>

<style scoped></style>
