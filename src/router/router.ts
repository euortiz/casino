import { createRouter, createWebHistory } from "vue-router";
import Hero from "./components/Hero.vue";
import SlotsCasino from "./components/SlotsCasino.vue";
import Tournaments from "./components/Tournaments.vue";
import LiveCasino from "./components/LiveCasino.vue";
import Faq from "./components/Faq.vue";
import PaymentsMethods from "./components/PaymentsMethods.vue";

const routes = [
  { path: "/", component: Hero },
  { path: "/slots", component: SlotsCasino },
  { path: "/tournaments", component: Tournaments },
  { path: "/live-casino", component: LiveCasino },
  { path: "/faq", component: Faq },
  { path: "/payments", component: PaymentsMethods },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
