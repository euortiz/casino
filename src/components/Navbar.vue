<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from './Sidebar.vue';

const isResponsiveNavbarOpen = ref(false);

const toggleResponsiveNavbar = () => {
  isResponsiveNavbarOpen.value = !isResponsiveNavbarOpen.value;
};
</script>

<template>
  <header
    class="flex justify-between lg:justify-evenly bg-preto/60 fixed xl:top-0 shadow-xl w-full z-50 pt-[12%] sm:pt-10 xl:h-[6rem]">

    <!--LICENCE BEAM-->
    <div class="fixed top-4 h-[8px] text-white w-full flexCenter text-center">
      <p class="bg-purple-950 top-0 relative w-full flexCenter py-1 gap-5"><img src="../assets/navbar/18.svg"
          alt="+18 icon" class="w-8 h-8">Juega con responsabilidad. Puedes comprobar las pautas de comportamiento en
        nuestra página.</p>
    </div>

    <!--NAVBAR-->
    <div class="flex gap-3 relative">
      <button @click="toggleResponsiveNavbar" class="text-white cursor-pointer xl:hidden">
        <svg v-if="!isResponsiveNavbarOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="2.0" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
        <svg v-if="isResponsiveNavbarOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <img src="../assets/navbar/logo.svg" alt="Logo"
        class="xl:w-[8rem] xl:h-[8rem] w-20 h-20 py-2 cursor-pointer xl:fixed xl:top-0">
    </div>
    <div class="md:flex gap-10 text-white font-medium hidden">
      <button class="flex items-center justify-center gap-1"><img src="../assets/navbar/777.svg" alt="Slots Icon"
          class="w-6">Slots</button>
      <button class="flex items-center justify-center gap-1"><img src="../assets/navbar/cards.svg" alt="Slots Icon"
          class="w-6">Live Casino</button>
    </div>
    <div class="gap-3 flex items-center justify-center">
      <div class="relative hidden md:flex">
        <input type="search" placeholder="Search..." class="border bg-preto px-4 py-2 pl-10 text-white rounded-xl">
        <img src="../assets/navbar/search.svg" alt="search icon" class="absolute w-6 top-2 ml-2">
      </div>
      <button class="btn_nav border text-white font-medium py-2 px-5 rounded-xl cursor-pointer text-nowrap">Sign
        In</button>
      <button class="btn_nav bg-pink text-white font-medium py-2 px-5 rounded-xl cursor-pointer">Connect</button>
    </div>

    <!--RESPONSIVE NAVBAR-->
    <transition name="fade">
      <div v-if="isResponsiveNavbarOpen"
        class="xl:hidden overflow-hidden transition-opacity overflow-y-scroll fixed w-full flexCenter">

        <div class="flexCenter flex-col bg-preto/50 fixed top-[100%] w-full z-50">

          <div class="flex flex-col gap-10 w-full flexCenter py-10">
            <div class="flex gap-5 text-white font-medium">
              <button class="flex items-center justify-center gap-1"><img src="../assets/navbar/777.svg" alt="Slots Icon"
                  class="w-6">Slots</button>
              <button class="flex items-center justify-center gap-1"><img src="../assets/navbar/cards.svg"
                  alt="Slots Icon" class="w-6">Live Casino</button>
            </div>

            <div class="relative flex">
              <input type="search" placeholder="Search..."
                class="border bg-gray-900 px-4 py-2 pl-10 text-white rounded-sm">
              <img src="../assets/navbar/search.svg" alt="search icon" class="absolute w-6 top-2 ml-2">
            </div>
          </div>

          <div class="w-full flexCenter overflow-y-scroll">
            <Sidebar />
          </div>
        </div>
      </div>
    </transition>

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

.transition-opacity {
  transition: opacity 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}
</style>