<script setup lang="ts">
import Winners from '../components/Winners.vue'
import Sections from '../components/Sections.vue'
</script>

<template>
  <div class="w-auto h-auto flex relative top-[7rem] flex-wrap">

    <div class="relative flex flex-col w-auto h-auto ">

      <div class="flex flex-col lg:flex-row h-auto w-auto">

        <div class="w-full h-full lg:w-2/3">

          <div class="rounded-xl h-[50vh] md:h-full overflow-hidden md:mx-2">
            <img src=" ../assets/hero/hero.svg" alt="hero img"
              class=" object-cover bg-no-repeat rounded-xl pt-2 h-full w-full">
          </div>

          <!--WELCOME PACKAGE TEXT-->
          <div
            class="text-white font-bold text-[1.5rem] sm:text-[2rem] lg:text-[2.3rem] xl:text-[3rem] flex-col items-start justify-start text-center absolute top-0 xl:ml-10 my-10 bg-preto/5 p-10 rounded-3xl">
            <h1>Welcome Package</h1>
            <i>€/€200</i><br>
            <i class="text-yellow">+200 </i><i>free spins</i><br>
            <button
              class="bg-red-600 border-2 text-white font-medium py-2 px-5 rounded-xl cursor-pointer text-[1.5rem] hover:bg-gradient-to-r from-pink to-purple-700">PLAY
              NOW</button>
          </div>

        </div>

        <div class="w-full h-full lg:w-1/3 px-1">
          <Winners />
        </div>

      </div>

      <div>
        <Sections />
      </div>
    </div>

  </div>
</template>

<style></style>
