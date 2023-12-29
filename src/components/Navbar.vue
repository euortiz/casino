<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from './Sidebar.vue';

const isResponsiveNavbarOpen = ref(false);

const toggleResponsiveNavbar = () => {
  isResponsiveNavbarOpen.value = !isResponsiveNavbarOpen.value;
};
</script>

<template>
  <header class="flex justify-evenly bg-preto/60 fixed top-0 shadow-xl w-full z-50 pt-[12%] sm:pt-10">
    <div class="fixed top-4 h-[8px] text-white w-full flexCenter text-center">
      <p class="bg-purple-950 top-0 relative w-full flexCenter py-1 gap-5"><img src="../assets/18.svg" alt="+18 icon"
          class="w-8 h-8">Juega con responsabilidad. Puedes comprobar las pautas de comportamiento en nuestra página.</p>
    </div>
    <div class="flex gap-3">
      <button @click="toggleResponsiveNavbar" class="text-white cursor-pointer lg:hidden"><img
          src="../assets/nav.svg"></button>
      <img src="../assets/logo.svg" alt="Logo" class="h-20 w-20 py-2 cursor-pointer">
    </div>
    <div class="md:flex gap-10 text-white font-medium hidden">
      <button class="flex items-center justify-center gap-1"><img src="../assets/777.svg" alt="Slots Icon"
          class="w-6">Slots</button>
      <button class="flex items-center justify-center gap-1"><img src="../assets/cards.svg" alt="Slots Icon"
          class="w-6">Live Casino</button>
    </div>
    <div class="gap-3 flex items-center justify-center">
      <div class="relative hidden md:flex">
        <input type="search" placeholder="Search..." class="border bg-preto px-4 py-2 pl-10 text-white rounded-xl">
        <img src="../assets/search.svg" alt="search icon" class="absolute w-6 top-2 ml-2">
      </div>
      <button class="btn_nav border text-white font-medium py-2 px-5 rounded-xl cursor-pointer text-nowrap">Sign
        In</button>
      <button class="btn_nav bg-pink text-white font-medium py-2 px-5 rounded-xl cursor-pointer">Connect</button>
    </div>

    <div v-if="isResponsiveNavbarOpen" class="md:hidden">

      <div
        class="flexCenter flex-col bg-preto/70 fixed left-0 top-[100%] w-full gap-5 h-auto backdrop-blur-3xl overflow-y-scroll">
        <div class="flex gap-5 text-white font-medium mt-20">
          <button class="flex items-center justify-center gap-1"><img src="../assets/777.svg" alt="Slots Icon"
              class="w-6">Slots</button>
          <button class="flex items-center justify-center gap-1"><img src="../assets/cards.svg" alt="Slots Icon"
              class="w-6">Live Casino</button>
        </div>
        <div class="relative flex">
          <input type="search" placeholder="Search..." class="border bg-gray-900 px-4 py-2 pl-10 text-white rounded-sm">
          <img src="../assets/search.svg" alt="search icon" class="absolute w-6 top-2 ml-2">
        </div>
        <div class="w-full flexCenter z-50 relative">
          <Sidebar />
        </div>
      </div>
    </div>
  </header>
</template>

<style>
header {
  backdrop-filter: blur(1.5rem);
  /* BLUR EFFECT IN THE NAVBAR */
}

.btn_nav {
  transition: background-color 0.3s ease;
}

.btn_nav:hover {
  background-color: rgb(136, 0, 136);
}
</style>