<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue';
// import SlotsCasino from './components/SlotsCasino.vue'
import Tournaments from './components/Tournaments.vue';
import LiveCasino from './components/LiveCasino.vue'
import Faq from './components/Faq.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue';
import PaymentsMethods from './components/PaymentsMethods.vue';
import Games from './components/Games.vue';
import FunMode from './components/FunMode.vue';
// import Jackpots from './components/Jackpots.vue';

</script>

<template>
  <div class="bg-gradient-to-b from-black to-purple-950 lg:flex overflow-hidden">
    <Navbar />
    <Sidebar class="hidden xl:block" />
    <div class="flex-1">
      <Hero />
      <Games />
      <FunMode />
      <!-- <SlotsCasino /> -->
      <Tournaments />
      <LiveCasino />
      <Faq />
      <PaymentsMethods />
      <Footer />
      <!-- <Jackpots /> -->
    </div>
  </div>
</template>
