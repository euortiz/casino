<template>
    <div>
        <div class="max-container paddint-container cursor-pointer px-10">
            <son-faq v-pre></son-faq>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
:root {
    /* FAQ GROUP */
    --faq-group-header-padding: 1rem;
    --faq-group-header-font-size: 1rem;
    --faq-group-header-color: #000;
    --faq-group-header-background: #fff;
    --faq-group-header-active-color: #000;
    --faq-group-header-active-background: rgba(231, 241, 255, 0.9);


    --faq-group-item-border-radius: 10px;
    --faq-group-item-background: #fff;
    --faq-group-item-border-top: 1px solid rgba(#000, 0.125);
    --faq-group-item-border-left: 1px solid rgba(#000, 0.125);
    --faq-group-item-border-right: 1px solid rgba(#000, 0.125);
    --faq-group-item-border-bottom: 1px solid rgba(#000, 0.125);

    --faq-group-icon-width: 1.25rem;

    --faq-group-body-padding: 1rem;


    /* FAQ Q&A */
    --faq-question-header-padding: 1rem;
    --faq-question-header-font-size: 1rem;
    --faq-question-header-color: #000;
    --faq-question-header-background: #fff;
    --faq-question-header-active-color: #000;
    --faq-question-header-active-background: rgb(#e7f1ff, .9);

    --faq-question-icon-width: 1.25rem;

    --faq-question-item-border-radius: 10px;
    --faq-question-item-background: #fff;
    --faq-question-item-border-top: 1px solid rgba(#000, 0.125);
    --faq-question-item-border-left: 1px solid rgba(#000, 0.125);
    --faq-question-item-border-right: 1px solid rgba(#000, 0.125);
    --faq-question-item-border-bottom: 1px solid rgba(#000, 0.125);

    --faq-question-margin: 0 0 5px;
    --faq-question-body-padding: 1rem;
}
</style>