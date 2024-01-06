<script setup lang="ts">
</script>

<template>
  <div class="my-20 lg;px-20 main-container py-20 flexCenter">
    <div class="flex flex-col gap-2 text-white lg:text-[2rem] text-[1.5rem] lg:ml-[60%] bg-preto/50 p-5">
      <span class="text-[1rem] my-3 opacity-50">TOURNAMENTS</span>
      <strong class="mt-5">DAILY SLOT RACE</strong>
      <strong><span class="text-red-500">721.80 EUR + 1000 FS </span>EVERY DAY!</strong>
      <div class=" flex flex-col gap-2">
        <strong class="text-[1rem] mt-10">TOURNAMENT OVER</strong>
        <div class="flex gap-5 flex-wrap items-center">
          <p>
            <span class="bg-cinza/70 py-1 px-2 rounded-lg">00d</span>
            :
            <span class="bg-cinza/70 py-1 px-2 rounded-lg">00h</span>
            :
            <span class="bg-cinza/70 py-1 px-2 rounded-lg">00m</span>
            :
          </p>
          <button class="bg-pink py-1 px-4 rounded-lg lg:ml-5 btn_playnow">PLAY NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  background-image: url('../assets/tournaments/bgtour.svg');
  background-size: cover;
  background-position: center;

}

.btn_playnow {
  transition: background-color 0.3s ease;
}

.btn_playnow:hover {
  background-color: rgb(136, 0, 136);
}
</style>