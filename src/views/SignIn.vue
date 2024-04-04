<template>
    <div class="flex items-center justify-center min-h-screen from-black to-purple-950">
        <div class="w-full max-w-md p-6 bg-gray-100 rounded shadow">
            <h2 class="text-2xl font-bold mb-6">Sign In</h2>
            <form @submit.prevent="signIn" id="signin-form">
                <div class="mb-4">
                    <input v-model="email" type="email" id="email" placeholder="Email"
                        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        required>
                </div>
                <div class="mb-4">
                    <input v-model="password" type="password" id="password" placeholder="Password"
                        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        required>
                </div>
                <button type="submit" class="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Sign
                    In</button>
            </form>
            <div class="mt-4 text-center">
                <a href="#" class="text-blue-500 hover:text-blue-600">Sign Up</a>
                <span class="mx-2">|</span>
                <a href="#" class="text-blue-500 hover:text-blue-600">Forgot Password?</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        signIn() {
            // Add your sign-in logic here
            console.log('Signing in...');
        },
    },
});
</script>

<style>
/* Add your custom styles here */
</style>