<template>
  <div class="mb-10">
    <div class="flex flex-col max-container padding-container">
      <h1 class="text-white text-semibold text-lg lg:text-2xl mb-10">🔴 FREQUENTLY ASKED QUESTIONS</h1>
      <ul>
        <li v-for="item in question" :key="item.id" class=" text-white overflow-hidden items-center justify-start">
          <div class="flex justify-between bg-preto border-b border-white/10 items-center">
            <h1 class="py-2 px-4 font-semibold w-[20.625rem] sm:w-full">{{ item.question }}</h1>
            <button @click="toggleVisibility(item.id)" class="items-center justify-center overflow-hidden w-10 h-10">
              <img v-if="isVisible[item.id]" :src="up" />
              <img v-else :src="down" />
            </button>
          </div>
          <transition name="fade">
            <p v-if="isVisible[item.id]" class="py-2 px-4 bg-cinza rounded-b-xl mb-1 text-[0.9rem]">{{ item.answer }}</p>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import down from '../assets/faq/arrowdown.svg';
import up from '../assets/faq/arrowup.svg';

interface Questions {
  id: number;
  question: string;
  answer: string;
}

const question: Questions[] = [
  {
    id: 1,
    question: 'What Currencies Does Casino Accept?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestias necessitatibus ratione dolore exercitationem possimus! Mollitia quibusdam deserunt praesentium deleniti exercitationem quaerat dolores aliquid unde doloremque possimus, reiciendis, ratione sint.',
  },
  {
    id: 2,
    question: 'What Payment Platforms Are Available in Casino?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestias necessitatibus ratione dolore exercitationem possimus! Mollitia quibusdam deserunt praesentium deleniti exercitationem quaerat dolores aliquid unde doloremque possimus, reiciendis, ratione sint.',
  },
  {
    id: 3,
    question: 'What Games Genres Can I Play Casino?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestias necessitatibus ratione dolore exercitationem possimus! Mollitia quibusdam deserunt praesentium deleniti exercitationem quaerat dolores aliquid unde doloremque possimus, reiciendis, ratione sint.',
  },
  {
    id: 4,
    question: 'How Do Online Casino Bonuses Work At Woo?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestias necessitatibus ratione dolore exercitationem possimus! Mollitia quibusdam deserunt praesentium deleniti exercitationem quaerat dolores aliquid unde doloremque possimus, reiciendis, ratione sint.',
  },
  {
    id: 5,
    question: 'Can I Register Multiple Accounts?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestias necessitatibus ratione dolore exercitationem possimus! Mollitia quibusdam deserunt praesentium deleniti exercitationem quaerat dolores aliquid unde doloremque possimus, reiciendis, ratione sint.',
  },

];

const isVisible = ref<{ [key: number]: boolean }>(
  question.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
);

const toggleVisibility = (id: number) => {
  isVisible.value[id] = !isVisible.value[id];
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
