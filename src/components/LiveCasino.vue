<template>
  <div class="flexCenter my-20 flex-col">
    <div class="flex justify-between text-white xl:w-[60%] md:w-[70%] w-[90%] mb-5">
      <span><strong>LIVE CASINO</strong></span>
      <span>Show All ></span>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:w-[60%] md:w-[70%] w-[90%]">
      <div v-for="item in lives" :key="item.id" class="flex flex-col">
        <img :src="item.image || 'https://placehold.co/300x200'" alt=" img">
        <p class="text-white bg-preto py-2 flexCenter">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


interface Live {
  id: number;
  title: string;
  image: string;
}

const lives: Live[] = [
  { id: 1, title: 'ROULETTE', image: '' },
  { id: 2, title: 'ROULETTE GOLD 2', image: '' },
  { id: 3, title: 'ROULETTE GOLD 3', image: '' },
  { id: 4, title: 'EBET', image: '' },
  { id: 5, title: 'AUTO ROULETTE', image: '' },
  { id: 6, title: 'VEGAS WORLD', image: '' },
  { id: 7, title: 'POWER BLACKJACK', image: '' },
  { id: 8, title: 'BLACKJACK A', image: '' },
  { id: 9, title: 'MUSIC WHEEL', image: '' },
  { id: 10, title: 'BACCARAT A', image: '' },
  { id: 11, title: 'RED DOOR ROULETTE', image: '' },
  { id: 12, title: 'LIGHTNING BACCARAT', image: '' },
];
</script>