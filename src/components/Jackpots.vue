<template>
    <div class="bg-red-500 h-[100vh]">
        <button class="bg-yellow p-10" @click="fetchData">FETCH DATA</button>
        <div>{{ jackpots.total }}</div>
    </div>
</template>
  
<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';



interface Jackpot {
    total: {
        currency: string;
        symbol: string;
        amount: number;
        // Add other properties as needed...
    };
    daily: {
        // Add properties for daily jackpot...
    };
    // Add properties for other jackpots...
}

const jackpots = ref<Jackpot>({
    total: { currency: '', symbol: '', amount: 0 },
    daily: {},
    // Initialize other properties as needed...
});

const fetchData = async () => {
    try {
        const response = await axios.get('https://service.safe-communication.com/jackpots', {
            params: {
                skin: 'TestCasino.es',
                country: 'ES',
            },
        });
        console.log(response.data);

        // Update jackpots.value based on the actual response structure
        jackpots.value = response.data || {};
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(() => {
    fetchData();
});
</script>
  
<style scoped>
:root {
    --jackpot-font-weight: 700;
    --jackpot-font-size: 90px;
    --jackpot-text-align: center;
}
</style>
  