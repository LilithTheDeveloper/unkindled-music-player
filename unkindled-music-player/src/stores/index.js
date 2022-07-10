/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import MusicList from "./modules/MusicList";

Vue.use(Vuex);

export default new Vuex.store({
  modules: {
    MusicList,
  },
});
