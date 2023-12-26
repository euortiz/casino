<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue';
import Slots from './components/Slots.vue'
import Tournaments from './components/Tournaments.vue';
import LiveCasino from './components/LiveCasino.vue'
import Faq from './components/Faq.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-cinza">
    <Navbar />
    <Hero />
    <Slots />
    <Tournaments />
    <LiveCasino />
    <Faq />
    <Footer />
  </div>
</template>

