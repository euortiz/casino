<script setup lang="ts">
import SideBar from './SideBar.vue';
import Winners from './Winners.vue';
</script>

<template>
  <div class="flex relative top-20 h-auto">

    <!-- Sidebar - Hidden on small screens, visible on medium and larger screens -->
    <div class="hidden md:block">
      <SideBar />
    </div>

    <div class="flex flex-col lg:flex-row  overflow-hidden w-full lg:h-[50vh]">

      <div class="lg:w-1/2 xl:w-3/4">
        <div class="gap-2 rounded-xl w-full h-[50vh] p-1">
          <img src=" ../assets/hero/hero.svg" alt="hero img"
            class="min-w-[400px] object-cover bg-no-repeat blur-[2px] rounded-xl w-full h-full">
        </div>

        <div
          class="text-white font-bold text-[2rem] lg:text-[2.3rem] xl:text-[3rem] flex-col items-start justify-start text-center lg:absolute md:top-[10%] ml-10">
          <h1>Welcome Package</h1>
          <i>€/€200</i><br>
          <i class="text-yellow">+200 </i><i>free spins</i><br>
          <button class="bg-pink text-white font-medium py-2 px-5 rounded-xl cursor-pointer text-[1.5rem]">PLAY
            NOW</button>
        </div>
      </div>

      <div class="lg:w-1/2 xl:w-1/4 flex items-center justify-center overflow-hidden">
        <Winners />
      </div>

    </div>



  </div>
</template>

