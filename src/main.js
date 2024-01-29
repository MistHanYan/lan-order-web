import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vant from "vant";
import "vant/lib/index.css";
import "lib-flexible/flexible";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
app.use(vant);
app.use(router);
app.use(pinia);
app.config.devtools = true;
app.mount("#app");
