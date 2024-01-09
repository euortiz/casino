<template>
    <button @click="$emit('click')" :style="{ backgroundColor: props.bgColor }"
        class="btn_nav border text-white font-medium py-2 px-5 rounded-xl cursor-pointer text-nowrap duration-300">
        {{ props.title }}
    </button>
</template>
  
<script setup lang="ts">
interface ButtonProps {
    title: string;
    href?: string;
    bgColor?: string; // Add bgColor as an optional prop
}

const props = defineProps<ButtonProps>();
</script>
  
<style scoped>
.btn_nav:hover {
    filter: brightness(0.8);
}
</style>