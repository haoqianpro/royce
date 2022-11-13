<template>
    <span :class="ButtonName">
        <span><slot></slot></span>
    </span>
</template>

<script setup>
import { computed } from 'vue'
 defineOptions({
    name: 'TButton',
 });
    const props = defineProps({ 
        type: String,
        // default: "default"
        disabled:Boolean,
        round:Boolean,
        circle:Boolean,
    });
    const ButtonName = computed (() => {
        return [
            't-button',
            `t-button-${props.type}`,
            props.round ? 't-button-round': '',
            props.disabled ? 't-button-disabled': '',
            props.circle ? 't-button-circle': '',
        ]  
       })


</script>

<style lang="scss">
@import 'button.scss';
</style>