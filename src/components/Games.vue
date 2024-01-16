<template>
    <div v-motion-slide-left>
        <div class="flex justify-between w-full text-white mt-[12rem] px-5">
            <span class="flexCenter">🔴 SLOTS CASINO</span>
            <button @click="showAll = !showAll" class="hover:text-gray-400">Show all ></button>
        </div>
        <div class="w-full">
            <div v-if="displayGames.length > 0">
                <ul class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3 max-container padding-container my-10">
                    <li v-for="game in displayGames" :key="game.internal_game_id"
                        class="griditem bg-preto rounded-xl text-white overflow-hidden flexCenter flex-col w-auto h-auto border-cinza border-4">
                        <img :src="constructImageUrl(game.item_title)" alt="Game Image"
                            class="w-full h-40 object-cover rounded-t-xl ">
                        <div class="w-full flex-center flex-col text-center">
                            <h4 class="my-3 text-[1.3rem]">{{ game.application_name }}</h4>
                        </div>

                    </li>
                </ul>
            </div>
            <div v-else>
                <p>No games found.</p>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

interface Game {
    internal_game_id: number;
    application_name: string;
    game_provider?: string;
    rating?: {
        rating: string;
    };
    item_title: string;
}

const games = ref<Game[]>([]);
const showAll = ref(false);

const displayGames = computed(() => {
    if (showAll.value) {
        return games.value;
    } else {
        return games.value.slice(0, Math.floor(games.value.length / 2));
    }
});

const fetchData = async () => {
    try {
        const response = await axios.get('https://games.netdnstrace1.com/', {
            params: {
                appName: 'DrueckGlueck.co.uk',
                country: 'ES',
                platform: 'desktop',
                limit: 20,
            },
        });

        games.value = response.data || [];

        console.log('API Response:', games.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const constructImageUrl = (itemTitle: string): string => {
    return `https://aws-origin.image-tech-storage.com/gameRes/sq/500/${itemTitle}.jpg`;
};

onMounted(() => {
    fetchData();
});
</script>
  

<style></style>