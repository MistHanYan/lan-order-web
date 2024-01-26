import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import vant from "vant";
import 'vant/lib/index.css'
import 'lib-flexible/flexible'

const app = createApp(App);
app.use(vant)
app.use(router);
app.mount("#app");
