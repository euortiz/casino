<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue';
import SlotsCasino from './components/SlotsCasino.vue'
import Tournaments from './components/Tournaments.vue';
import LiveCasino from './components/LiveCasino.vue'
import Faq from './components/Faq.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/SideBar.vue';
</script>

<template>
  <div class="bg-gradient-to-b from-black to-purple-950 lg:flex ">
    <Navbar />
    <Sidebar />
    <div class="flex-1">
      <Hero />
      <SlotsCasino />
      <Tournaments />
      <LiveCasino />
      <Faq />
      <Footer />
    </div>
  </div>
</template>


