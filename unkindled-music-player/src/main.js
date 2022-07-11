import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import { createPinia, PiniaVuePlugin, setMapStoreSuffix } from "pinia";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
Vue.use(PiniaVuePlugin);

setMapStoreSuffix("");
const pinia = createPinia();

console.log(`${process.env.VUE_APP_LOCAL_IP}`);

const axiosConfig = {
  baseURL: `http://${process.env.VUE_APP_LOCAL_IP}/api`,
};
Vue.prototype.$axios = axios.create(axiosConfig);
Vue.prototype.$static = `http://${process.env.VUE_APP_LOCAL_IP}/`;

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
