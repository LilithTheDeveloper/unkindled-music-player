/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia'
import Vue from "vue";  

export const useMusicStore = defineStore('musicStore', {
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
          .get("/songs")
          .then((response) => {
            this.musicList = response.data;
            console.log(this.musicList);
            resolve(response);
          })
          .catch((error) => {
            reject(error)
          });  
      });
    },
    renameSong(song){
      return new Promise((resolve, reject) => {
        Vue.prototype.$axios
          .patch("/songs", song)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error)
          });  
      });
    },
    addSong(songFile){
      const formData = new FormData();
      formData.append("file", songFile);

      return new Promise((resolve, reject) => {
        Vue.prototype.$axios
          .post("/songs", formData)
          .then((response) => {
            console.log(response);
            resolve(response);
          })
          .catch((error) => {
            reject(error)
          });  
      });
    },
  },
});
