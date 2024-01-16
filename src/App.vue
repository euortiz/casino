<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import * as components from './components';

onBeforeMount(() => {
  const route = useRoute();
  console.log(route.path);
});

</script>

<template>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<%= process.env.VUE_APP_GTM_ID %>" height="0"
      width="0" style="display: none; visibility: hidden"></iframe></noscript>
  <header class="fixed w-full z-50">
    <components.Navbar />
  </header>
  <main class="bg-gradient-to-b from-black to-purple-950 lg:flex overflow-hidden">
    <components.Sidebar class="hidden xl:block" />
    <div class="flex-1">
      <router-view />
    </div>
  </main>
  <footer class="relative bottom-0">
    <components.Footer />
  </footer>
</template>