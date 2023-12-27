<template>
    <div class="flex gap-5 mt-[5.625rem] mx-2 flex-wrap">
        <div v-for="slot in slots" :key="slot.id" class="bg-preto/70 rounded-xl flex-1">
            <div class="flex-1 h-auto cursor-pointer min-w-[9.375rem]">
                <img :src="slot.image" class="w-full h-40 object-cover rounded-t-xl">
                <span class="text-white font-semibold p-2 flexCenter">{{ slot.gameName }}</span>
            </div>

        </div>
    </div>
</template>
  
<script setup lang="ts">
import luckyjack from '../assets/slotscasino/luckyjack.svg'
import mergeup from '../assets/slotscasino/mergeup.svg'
import cactusriches from '../assets/slotscasino/cactusriches.svg'
import classicfruits from '../assets/slotscasino/classicfruits.svg'
import tnt from '../assets/slotscasino/tnt.svg'
import vegasworld from '../assets/slotscasino/vegasworld.svg'
import wildbuffalo from '../assets/slotscasino/wildbuffalo.svg'

// import dragonsbonanza from '../assets/slotscasino/dragonsbonanza.svg'
// import houseofslots from '../assets/slotscasino/houseofslots.svg'
// import magicmice from '../assets/slotscasino/magicmice.svg'
// import roulette from '../assets/slotscasino/roulettecash.svg'
// import spinomenal from '../assets/slotscasino/spinomenal.svg'

interface Slot {
    id: number;
    gameName: string;
    image: string;
}

const slots: Slot[] = [
    { id: 1, gameName: 'LUCKY JACK - BOOK OF REBIRTH', image: luckyjack },
    { id: 2, gameName: 'MERGE UP', image: mergeup },
    { id: 3, gameName: 'CACTUS RICHES: CASH POOL', image: cactusriches },
    // { id: 4, gameName: 'SPINOMENAL', image: spinomenal },
    { id: 5, gameName: 'CLASSIC FRUITS', image: classicfruits },
    { id: 6, gameName: 'TNT BONANZA', image: tnt },
    { id: 7, gameName: 'VEGAS WORLD', image: vegasworld },
    { id: 8, gameName: 'WILD BUFFALO', image: wildbuffalo },
    // { id: 9, gameName: 'DRAGONS BONANZA', image: dragonsbonanza },
    // { id: 10, gameName: 'HOUSE OF SLOTS', image: houseofslots },
    // { id: 11, gameName: 'MAGIC MICE', image: magicmice },
    // { id: 12, gameName: 'ROULETTE CASH', image: roulette },

];
</script>
  
<style scoped></style>
  