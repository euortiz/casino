<template>
  <div class="flexCenter my-20 flex-col">
    <div class="flex justify-between text-white xl:w-[60%] md:w-[70%] w-[90%] mb-5">
      <span><strong>📺 LIVE CASINO</strong></span>
      <span>Show All ></span>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:w-[60%] md:w-[70%] w-[90%]">
      <div v-for="item in lives" :key="item.id" class="bg-preto/70 rounded-xl  border-4 border-preto">
        <img :src="item.image || 'https://placehold.co/300x200'" alt="img" class="w-full h-40 object-cover rounded-t-xl ">
        <p class="text-white bg-preto py-2 flexCenter">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import auto from '../assets/livecasino/auto.svg'
import baccarat from '../assets/livecasino/baccarat.svg'
import bjack from '../assets/livecasino/bjack.svg'
import ebet from '../assets/livecasino/ebet.svg'
import goldtwo from '../assets/livecasino/goldtwo.svg'
import goldthree from '../assets/livecasino/goldthree.svg'
import light from '../assets/livecasino/light.svg'
import musicw from '../assets/livecasino/musicw.svg'
import power from '../assets/livecasino/power.svg'
import reddoor from '../assets/livecasino/reddoor.svg'
import vegasworld from '../assets/livecasino/vegasworld.svg'
import roulette from '../assets/livecasino/roulette.svg'


interface Live {
  id: number;
  title: string;
  image: string;
}

const lives: Live[] = [
  { id: 1, title: 'ROULETTE', image: roulette },
  { id: 2, title: 'ROULETTE GOLD 2', image: goldtwo },
  { id: 3, title: 'ROULETTE GOLD 3', image: goldthree },
  { id: 4, title: 'EBET', image: ebet },
  { id: 5, title: 'AUTO ROULETTE', image: auto },
  { id: 6, title: 'VEGAS WORLD', image: vegasworld },
  { id: 7, title: 'POWER BLACKJACK', image: power },
  { id: 8, title: 'BLACKJACK A', image: bjack },
  { id: 9, title: 'MUSIC WHEEL', image: musicw },
  { id: 10, title: 'BACCARAT A', image: baccarat },
  { id: 11, title: 'RED DOOR ROULETTE', image: reddoor },
  { id: 12, title: 'LIGHTNING BACCARAT', image: light },
];
</script>