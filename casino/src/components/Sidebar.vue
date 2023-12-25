<template>
    <div class="bg-preto h-auto w-[250px] border-b rounded-b-2xl shadow-2xl m-2">
        <ul class="items-center flex flex-col justify-center">
            <div class="my-10">
                <button v-for="category in categories" :key="category.id"
                    class="btn_side text-white my-2 px-5 py-2 rounded-xl items-center justify-left flex">
                    <img :src="getIconPath(category.id)" class="icones" />
                    {{ category.name }}
                </button>
            </div>

        </ul>
    </div>
</template>
  
<script setup lang="ts">

import casino from '../assets/sidebar/casino.svg'
import favorites from '../assets/sidebar/favorites.svg'
import newrelease from '../assets/sidebar/newrelease.svg'
import originals from '../assets/sidebar/originals.svg'
import allgames from '../assets/sidebar/allgames.svg'
import bonus from '../assets/sidebar/bonus.svg'
import slots from '../assets/sidebar/slots.svg'
import livecasino from '../assets/sidebar/livecasino.svg'
import featurebuy from '../assets/sidebar/featurebuy.svg'
import casualgames from '../assets/sidebar/casualgames.svg'
import roulette from '../assets/sidebar/roulette.svg'
import gameshow from '../assets/sidebar/gameshow.svg'
import rnggames from '../assets/sidebar/rnggames.svg'
import card from '../assets/sidebar/card.svg'
import sports from '../assets/sidebar/sports.svg'
import lottery from '../assets/sidebar/lottery.svg'



interface Category {
    id: number;
    name: string;
}

interface Icon {
    id: number;
    path: string;
}


const categories: Category[] = [
    { id: 1, name: 'Casino' },
    { id: 2, name: 'Favorites' },
    { id: 3, name: 'New Release' },
    { id: 4, name: 'Originals' },
    { id: 5, name: 'All Games' },
    { id: 6, name: 'Bonus' },
    { id: 7, name: 'Slots' },
    { id: 8, name: 'Live Casino' },
    { id: 9, name: 'Feature Buy' },
    { id: 10, name: 'Casual Games' },
    { id: 11, name: 'Roulette' },
    { id: 12, name: 'Game Shows' },
    { id: 13, name: 'Rng Games' },
    { id: 14, name: 'Card' },
    { id: 15, name: 'Sports' },
    { id: 16, name: 'Lottery' },
];

const icons: Icon[] = [
    { id: 1, path: casino },
    { id: 2, path: favorites },
    { id: 3, path: newrelease },
    { id: 4, path: originals },
    { id: 5, path: allgames },
    { id: 6, path: bonus },
    { id: 7, path: slots },
    { id: 8, path: livecasino },
    { id: 9, path: featurebuy },
    { id: 10, path: casualgames },
    { id: 11, path: roulette },
    { id: 12, path: gameshow },
    { id: 13, path: rnggames },
    { id: 14, path: card },
    { id: 15, path: sports },
    { id: 16, path: lottery },


]

function getIconPath(categoryId: number): string {
    const icon = icons.find((icon) => icon.id === categoryId);
    return icon ? icon.path : '';
}

</script>

<style>
.btn_side {
    width: 100%;
}

.btn_side:hover {
    background: linear-gradient(to right, #fc5454, #8621f8);
    transition-duration: 0.4s;
}

.icones {
    width: 1.5625rem;
    height: 1.5625rem;
    margin-right: .625rem;
}
</style>