<template>
    <div class="h-[100vh] bg-gray-200 flexCenter">
        <son-testimonials></son-testimonials>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
:root {
    --testimonial-slide-background-color: #aaa;
    --testimonial-testimonial-group-background-color: #fff;
    --testimonial-component-height: 500px;
}

@media (max-width: 1200px) {
    :root {
        --testimonial-navigation--prev-icon-left: 1%;
        --testimonial-navigation--next-icon-right: 1%;
    }
}

@media (max-width: 600px) {
    :root {
        --testimonial-navigation-icon-display: none;
        --testimonial-carousel-width: 100%;
    }
}
</style>