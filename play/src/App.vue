<script setup>
import { RyButton } from '@royce/components';
const handleClick = () => {
  console.log('click');
};
</script>

<template>
  <ry-button @click="handleClick">hello</ry-button>
  <ry-button @click="handleClick" type="primary">hello</ry-button>
  <ry-button @click="handleClick" native-type="submit">hello</ry-button>
  <ry-button @click="handleClick" disabled>hello</ry-button>
</template>

<style scoped></style>
