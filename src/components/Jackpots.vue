<template>
    <div class="my-20 max-container padding-container text-nowrap" v-motion-slide-visible-left>
        <son-jackpot type="total" animate="true" duration="8000" v-pre class="text-white"></son-jackpot>
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
    };
}

const jackpots = ref<Jackpot>({
    total: { currency: '', symbol: '', amount: 0 },
});

const fetchData = async () => {
    try {
        const response = await axios.get('https://service.safe-communication.com/jackpots', {
            params: {
                skin: 'playojo.co.uk',
                country: 'GB',
            },
        });
        console.log(response.data);

        jackpots.value = response.data || {};
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<style>
:root {
    --jackpot-font-weight: 700;
    --jackpot-font-size: 50px;
    --jackpot-text-align: center;
}
</style>
