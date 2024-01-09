<template>
    <div class="text-preto relative flexCenter lg:my-10 h-[100vh]">

        <form @submit.prevent="submitForm" class="p-10 w-full space-y-5 bg-gray-100 rounded max-w-[60vh]">
            <h1 class="text-3xl font-bold mb-4 flexCenter">Contact Us</h1>
            <div class="md:px-5">
                <input type="text" id="name" v-model="name" placeholder="Name"
                    class="w-full px-4 py-2 border rounded text-preto border-preto" />
            </div>
            <div class="md:px-5">
                <input type="email" id="email" v-model="email" placeholder="Email"
                    class="w-full px-4 py-2 border rounded text-preto border-preto" />
            </div>
            <div class="md:px-5">
                <textarea id="message" v-model="message" placeholder="Message"
                    class="w-full px-4 py-2 border rounded text-preto border-preto"></textarea>
            </div>
            <div class="flex justify-center md:px-20 ">
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded w-full md:w-[25vh]">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            name: '',
            email: '',
            message: '',
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            console.log('Form submitted!');
        },
    },
});
</script>

<style>
/* Add Tailwind CSS classes or custom styles here */
</style>
