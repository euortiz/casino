import { createApp } from "vue";
import "../style.css";
import App from "./App.vue";
import router from "./router/router.ts"; // importing the router
import { MotionPlugin } from "@vueuse/motion";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

createApp(App)
  .use(MotionPlugin)
  .use(router) // using the router
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
