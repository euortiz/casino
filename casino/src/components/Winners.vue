<script setup lang="ts">
import SideBar from './SideBar.vue';

const winners: Winner[] = [
    { id: 1, game: 'Coin Strike' },
    { id: 2, game: 'Cactus Riches' },
    { id: 3, game: 'Tiger Gems' },
    { id: 4, game: 'Oasis Blackjack' },
    { id: 5, game: 'Divine Dragon' },
]
</script>

<template>
    <div class="flex items-start justify-start relative top-20 border-4 border-pink">
        <div class="hidden md:block">
            <SideBar />
        </div>
        <div class="flex flex-row gap-0 items-start justify-center max-h-[50vh] overflow-hidden">
            <div class="m-2 border-4 border-pink h-auto">
                <img src="../assets/hero/hero.svg" alt="hero img" class="min-w-[400px]">
            </div>
            <div class="flex-1 border-4 border-pink h-auto m-2">
                <ul class="flex flex-col">
                    <i class="gap-5 bg-cinza text-white font-semibold py-2 px-5 text-nowrap border-b">Latest Winners</i>
                    <li v-for="winner in winners" :key="winner.id"
                        class="flex flex-col items-center justify-center gap-5 bg-cinza text-white font-semibold py-2 px-10 text-nowrap">
                        {{ winner.game }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

