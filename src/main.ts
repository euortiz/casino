import { createApp } from "vue";
import "../style.css";
import App from "./App.vue";
import router from "./router/router.ts"; // import your router

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

createApp(App)
  .use(router) // use your router
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
