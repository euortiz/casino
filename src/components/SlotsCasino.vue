<template>
    <div class="flex justify-between w-full text-white mt-[12rem] px-5">
        <span>🔴 SLOTS CASINO</span>
        <button class="hover:text-gray-400" @click="toggleRestOfGames">Show all ></button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3 mx-2 pt-5">
        <div v-for="slot in slots" :key="slot.id" class="bg-preto/70 rounded-xl border-4 border-preto">
            <div class="griditem  w-full h-auto cursor-pointer min-w-[9.375rem] items-center justify-center flex-col flex"
                @mouseover="setHoveredSlot(slot.id)" @mouseout="setHoveredSlot(null)">
                <button v-show="hoveredSlot === slot.id"
                    class="playnow font-semibold text-white bg-red-600 px-5 py-2 rounded-lg z-50 border-4 border-preto shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                    PLAY NOW!
                </button>
                <img :src="slot.image" class="w-full h-40 object-cover rounded-t-xl " />

                <span class="text-white font-semibold p-2 flexCenter">{{ slot.gameName }}</span>
            </div>
        </div>
        <div v-for="slot in secondSlots" :key="secondSlots.indexOf" v-if="isRestOfGames"
            class="bg-preto/70 rounded-xl  border-4 border-preto">
            <div class="griditem  w-full h-auto cursor-pointer min-w-[9.375rem] items-center justify-center flex-col flex"
                @mouseover="setHoveredSlot(slot.id)" @mouseout="setHoveredSlot(null)">
                <button v-show="hoveredSlot === slot.id"
                    class="playnow font-semibold text-white bg-red-600 px-5 py-2 rounded-lg z-50 border-4 border-preto shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
                    PLAY NOW!
                </button>
                <img :src="slot.image" class="w-full h-40 object-cover rounded-t-xl " />

                <span class="text-white font-semibold p-2 flexCenter">{{ slot.gameName }}</span>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue"
import luckyjack from '../assets/slotscasino/luckyjack.svg'
import mergeup from '../assets/slotscasino/mergeup.svg'
import cactusriches from '../assets/slotscasino/cactusriches.svg'
import classicfruits from '../assets/slotscasino/classicfruits.svg'
import tnt from '../assets/slotscasino/tnt.svg'
import vegasworld from '../assets/slotscasino/vegasworld.svg'
import wildbuffalo from '../assets/slotscasino/wildbuffalo.svg'

interface Slot {
    id: number;
    gameName: string;
    image: string;
}

interface secondSlots {
    id: number;
    gameName: string;
    image: string;
}

const slots: Slot[] = [
    { id: 1, gameName: 'LUCKY JACK - BOOK OF REBIRTH', image: luckyjack },
    { id: 2, gameName: 'MERGE UP', image: mergeup },
    { id: 3, gameName: 'CACTUS RICHES: CASH POOL', image: cactusriches },
    { id: 4, gameName: 'CLASSIC FRUITS', image: classicfruits },
    { id: 5, gameName: 'TNT BONANZA', image: tnt },
    { id: 6, gameName: 'VEGAS WORLD', image: vegasworld },
    { id: 7, gameName: 'WILD BUFFALO', image: wildbuffalo },
]

const secondSlots: Slot[] = [
    { id: 8, gameName: 'LUCKY JACK - BOOK OF REBIRTH', image: luckyjack },
    { id: 9, gameName: 'MERGE UP', image: mergeup },
    { id: 10, gameName: 'CACTUS RICHES: CASH POOL', image: cactusriches },
    { id: 11, gameName: 'CLASSIC FRUITS', image: classicfruits },
    { id: 12, gameName: 'TNT BONANZA', image: tnt },
    { id: 13, gameName: 'VEGAS WORLD', image: vegasworld },
    { id: 14, gameName: 'WILD BUFFALO', image: wildbuffalo },
]

const isRestOfGames = ref(false);

const toggleRestOfGames = () => {
    isRestOfGames.value = !isRestOfGames.value;
};

const hoveredSlot = ref<number | null>(null);

const setHoveredSlot = (slotId: number | null) => {
    hoveredSlot.value = slotId;
};

</script>
  
<style scoped>
.griditem {
    position: relative;
}

.griditem::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    z-index: 1;
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: opacity 0.3s;
}

.griditem:hover::before {
    opacity: 1;
}

.griditem button.playnow {
    position: absolute;
    top: 40%;
    z-index: 2;
}

.playnow:hover {
    background: linear-gradient(to right, #fc5454, #8621f8);
}
</style>
  