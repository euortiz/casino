<template>
    <div class="text-gray-200 relative flexCenter lg:my-10 h-[100vh]">

        <form @submit.prevent="submitForm" class="p-10 w-full space-y-5 bg-preto/70 rounded-3xl max-w-[100vh]">
            <h1 class="text-3xl font-bold mb-4 flexCenter">Contact Us</h1>
            <div class="md:px-20">
                <label for="name" class="block font-bold mb-2">Name</label>
                <input type="text" id="name" v-model="name" class="w-full px-4 py-2 border rounded-xl text-preto" />
            </div>
            <div class="md:px-20">
                <label for="email" class="block font-bold mb-2">Email</label>
                <input type="email" id="email" v-model="email" class="w-full px-4 py-2 border rounded-xl text-preto" />
            </div>
            <div class="md:px-20">
                <label for="message" class="block font-bold mb-2">Message</label>
                <textarea id="message" v-model="message" class="w-full px-4 py-2 border rounded-xl text-preto"></textarea>
            </div>
            <div class="flex justify-center md:px-20 ">
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded-xl w-full md:w-[25vh]">
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
