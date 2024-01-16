<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import CustomButton from './CustomButton.vue';
import Sidebar from './Sidebar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => {
  router.push('/');
};

const goToContact = () => {
  router.push('/contact');
};

const goToSignIn = () => {
  router.push('/signin');
};

const toggleResponsiveNavbar = () => {
  open.value = !open.value;
};


let open = ref(false)

const updateScreenSize = () => {
  if (!open.value) {
    open.value = window.innerWidth >= 768; // Adjust the breakpoint as needed
  }
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize);
});

</script>

<template>
  <nav
    class="bg-preto text-gray-100 py-1 px-6 shadow md:flexCenter justify-between items-center gap-20 absolute w-full z-50">

    <div class="flex items-center">
      <span @click="goToHome">
        <img src="../assets/navbar/logo.svg" alt="Casino Logo" class="w-20 h-20 block cursor-pointer">
      </span>
    </div>

    <button @click="toggleResponsiveNavbar" class="text-white cursor-pointer md:hidden absolute right-5 top-7">
      <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0"
        stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
      <svg v-if="open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>

    <div v-if="open"
      class="md:flex md:items-center gap-20 sm:h-auto h-[100vh] md:overflow-hidden overflow-scroll md:pb-0 pb-20">
      <ul class="md:flexCenter gap-3 text-nowrap md:my-0 my-5 hidden">
        <li class="text-white font-semibold flexCenter gap-2"><span><img src="../assets/navbar/777.svg"
              class="w-8"></span><a href="#">Slots</a></li>
        <li class="text-white font-semibold flexCenter gap-2"><span><img src="../assets/navbar/cards.svg"
              class="w-8"></span><a href="#">Live Casino</a></li>
      </ul>

      <div class="flexCenter md:my-0 my-5">
        <input type="search" placeholder="Search..." class="rounded-xl p-2">
      </div>


      <ul class="flexCenter gap-3 md:my-0 my-5">
        <li>
          <CustomButton title="Sign In" @click="goToSignIn" />
        </li>
        <li>
          <CustomButton title="Contact" @click="goToContact" bg-color="#DC143C" />
        </li>
      </ul>

      <div class="flexCenter md:hidden">
        <Sidebar />
      </div>
    </div>


  </nav>
</template>

<style>
nav {
  backdrop-filter: blur(1.5rem);
  /* BLUR EFFECT IN THE NAVBAR */
}
</style>