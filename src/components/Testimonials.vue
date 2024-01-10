<template>
    <div class="h-[50vh] bg-gray-200 flexCenter my-20">
        <son-testimonials v-pre loop="true" slides_per_view="1"
            breakpoints='[{"viewport_width": 1300, "slides_per_view": 2}]' direction="horizontal"
            viewport_width="100%"></son-testimonials>
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