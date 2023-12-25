<script setup lang="ts">
import SideBar from './SideBar.vue';
</script>

<template>
  <div class="flex items-start justify-start relative top-20 ">
    <div class="hidden md:block">
      <SideBar />
    </div>
    <div class="flex flex-row gap-0 items-start justify-center max-h-[50vh] overflow-hidden ">
      <div class="m-2  h-auto">
        <img src=" ../assets/hero/hero.svg" alt="hero img" class="min-w-[400px] object-cover bg-no-repeat blur-[2px]">
      </div>
      <div
        class="text-white font-bold text-[2rem] lg:text-[3rem] flex-col items-start justify-start text-center absolute top-[10%] lg:left-[30%] ">
        <h1>Welcome Package</h1>
        <i>€/€200</i><br>
        <i class="text-yellow">+200 </i><i>free spins</i><br>
        <button class="bg-pink text-white font-medium py-2 px-5 rounded-xl cursor-pointer text-[1.5rem]">PLAY NOW</button>
      </div>
    </div>
  </div>
</template>

