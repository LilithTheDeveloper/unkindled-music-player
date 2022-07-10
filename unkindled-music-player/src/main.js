import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import { PiniaVuePlugin, createPinia } from "pinia";

Vue.config.productionTip = false;

const axiosConfig = {
  baseURL: "http://localhost:8000/api",
};
Vue.prototype.$axios = axios.create(axiosConfig);

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  vuetify,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
