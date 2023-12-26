<script setup lang="ts">
import { ref } from 'vue';
import tigergems from '../assets/winners/tigergems.svg'
import coinstrike from '../assets/winners/coinstrike.svg'
import cactusriches from '../assets/winners/cactusriches.svg'
import oasis from '../assets/winners/oasis.svg'
import divinedragon from '../assets/winners/divinedragon.svg'




interface Winner {
  id: number;
  game: string;
  avatar: string;
  amount: string;
  player: string;
}

const winners: Winner[] = [
  { id: 1, player: 'Matthew', game: 'Coin Strike', avatar: coinstrike, amount: "€25,00" },
  { id: 2, player: 'Kelly', game: 'Cactus Riches', avatar: cactusriches, amount: "€17,00" },
  { id: 3, player: 'Esther', game: 'Tiger Gems', avatar: tigergems, amount: "€61,00" },
  { id: 4, player: 'Travis', game: 'Oasis Blackjack', avatar: oasis, amount: "€120,00" },
  { id: 5, player: 'Chloe', game: 'Divine Dragon', avatar: divinedragon, amount: "€12,00" },
];

</script>

<template>
  <div class="flex-1 relative py-2 overflow-hidden w-full h-full">
    <div class="flex-1">
      <ul class="flex flex-col items-start justify-start mx-2 rounded-xl bg-preto">
        <i class=" bg-gray-900 text-white font-semibold py-3 px-5 text-nowrap w-full rounded-t-xl">🏆
          Latest
          Winners</i>

        <li v-for="winner in winners" :key="winner.id"
          class="flex flex-row items-center gap-5  text-white font-semibold py-5 px-10 text-nowrap border-b-2 border-preto hover:bg-cinza cursor-pointer w-full justify-between rounded-xl">
          <img :src="winner.avatar" alt="Avatar" class="w-8 h-8 rounded-full">
          <div class="flex flex-col w-full h-auto">
            <span class="text-white/55 text-sm">{{ `${winner.player} Just Won` }}</span>
            {{ winner.game }}
          </div>
          <i class="text-green">{{ winner.amount }}</i>
        </li>
      </ul>
    </div>
  </div>
</template>
