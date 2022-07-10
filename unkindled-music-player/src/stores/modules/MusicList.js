/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia'
import Vue from "vue";  


export const musicStore = defineStore('musicStore', {
  state: () => ({
    musicList: [],
  }),
  getters: {
    getMusicList: (state) => state.musicList,
  },
  actions: {
    fetchMusicList(){
      return new Promise((resolve, reject) => {
        Vue.prototype.$axios
          .get("/getmusiclist")
          .then((response) => {
            this.musicList = response.data;
          })
          .catch((error) => {
            reject(error)
          });  
      });
    }
  },
});
