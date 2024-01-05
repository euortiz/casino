<script setup lang="ts">
// import tigergems from '../assets/winners/tigergems.svg'
// import coinstrike from '../assets/winners/coinstrike.svg'
// import cactusriches from '../assets/winners/cactusriches.svg'
// import oasis from '../assets/winners/oasis.svg'
// import divinedragon from '../assets/winners/divinedragon.svg'
import axios from 'axios';
import { onMounted, ref } from 'vue';


const winners = ref<Winner[]>([]);

const fetchData = async () => {
  try {
    const response = await axios.get('https://service.safe-communication.com/winners', {
      params: {
        skin: 'TestCasino',
        country: 'ES',
        platform: 'EUR',
        // Add more parameters as needed
        limit: 7,
      },
    });
    console.log(response.data);

    // Check the actual structure of the response
    winners.value = response.data || [];

    console.log('API Response:', winners.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});

interface Winner {
  id: number;
  game: string;
  amount: string;
  username: string;
  currency?: string;
}




</script>

<template>
  <div class="flex-1 relative py-2 w-full h-full">
    <div class="flex-1">
      <ul class="flex flex-col items-start justify-start mx-2 rounded-xl bg-preto px-2 py-2">
        <i class=" bg-gray-900 text-white font-semibold py-3 px-5 text-nowrap w-full rounded-t-xl">🏆
          Latest
          Winners</i>

        <li v-for="winner in winners" :key="winner.id"
          class="btn_side flex flex-row items-center text-white font-semibold py-2 px-5 text-nowrap border-b-2 border-preto/70 hover:bg-cinza cursor-pointer w-full justify-between rounded-xl">
          <div class="flex gap-5 w-3/4 flexCenter">
            <img :src="`https://ui-avatars.com/api/?name=${encodeURIComponent(winner.username)}`" alt="Avatar"
              class="w-7 h-7 rounded-full border-2 border-purple-600">
            <div class="flex flex-col w-full h-auto">
              <span class="text-white/55 text-sm">{{ `${winner.username} Just Won 🎉`
              }}</span>
              <span>{{ winner.game.length > 20 ? `${winner.game.substring(0, 20)}...` : `${winner.game}` }} </span>
            </div>
          </div>
          <div class="h-full w-1/4 flexCenter overflow-hidden">
            <i class="text-green px-5">€ {{ winner.amount }}</i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
