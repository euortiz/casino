<script setup lang="ts">
import Sections from './Sections.vue';
import Winners from './Winners.vue';
</script>

<template>
  <div class="flex relative top-20 lg:h-[65vh] h-[152vh] mx-2">

    <div class="flex flex-col overflow-hidden w-full h-auto">

      <div class="flex flex-col lg:flex-row w-full">


        <div class="lg:w-2/3 xl:w-3/4">

          <div class="gap-2 rounded-xl w-full lg:h-[55vh]">
            <img src=" ../assets/hero/hero.svg" alt="hero img"
              class="min-w-[400px] object-cover bg-no-repeat rounded-xl w-full h-full pt-2">
          </div>

          <div
            class="text-white font-bold text-[1.5rem] sm:text-[2rem] lg:text-[2.3rem] xl:text-[3rem] flex-col items-start justify-start text-center absolute top-0 xl:ml-10 my-10 bg-preto/5 p-10 rounded-3xl">
            <h1>Welcome Package</h1>
            <i>€/€200</i><br>
            <i class="text-yellow">+200 </i><i>free spins</i><br>
            <button
              class="bg-pink text-white font-medium py-2 px-5 rounded-xl cursor-pointer text-[1.5rem] hover:bg-purple-800">PLAY
              NOW</button>
          </div>
        </div>


        <div class="lg:w-1/3 xl:w-1/4 flex items-center justify-center overflow-hidden h-[50vh]">


          <Winners />
        </div>
      </div>

      <div class="overflow-x-auto flex-1">
        <Sections />
      </div>
    </div>

  </div>
</template>

<style></style>
