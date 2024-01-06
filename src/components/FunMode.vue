<template>
    <div class="w-full flexCenter flex flex-col">
        <div class="my-10">
            <h4 class="text-white md:text-[2rem] text-[1.5rem] font-bold"><i>GIVE A TRY ON <span class="text-pink">FUN
                        MODE</span>!</i>
            </h4>
        </div>
        <iframe src="https://promos.safe-communication.com/funmode.php?appName=DrueckGlueck&lang=en&gameID=9043"
            class="xl:w-[920px] xl:h-[510px] md:w-[720px] md:h-[410px] w-auto h-auto"></iframe>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

const funmode = ref<FunMode[]>([]);

const fetchData = async () => {
    try {
        const response = await axios.get('https://promos.safe-communication.com/funmode.php', {
            params: {
                appName: 'DrueckGlueck',
                langID: 'en',
                platform: 9043,
            },
        });
        console.log(response.data);

        // Check the actual structure of the response
        funmode.value = response.data || [];

        console.log('API Response:', funmode.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(() => {
    fetchData();
});

interface FunMode {
    appName: string;
    langID: string;
    gameID: string;
}
</script>

<style scoped>
:root {
    --funmode-backdrop: rgba(0, 0, 0, 0.8) --funmode-index: 1055 --funmode-close-color: rgba(255, 255, 255, 0.8)
}
</style>