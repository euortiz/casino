import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import SignIn from "../views/SignIn.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/signin", component: SignIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
