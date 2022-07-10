<template>
  <div class="music">
    <h1>These are the music tracks available</h1>
    <button @click="getMusic()">Get Music</button>
    <button @click="logMusic()">Log Music</button>
    <m-component></m-component>
  </div>
</template>

<script>
import MComponent from "@/components/MComponent.vue";
import { useStore } from "@/stores/modules/MusicList";

export default {
  name: "MusicView",
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  mounted() {
    useStore().fetchMusicList();
  },
  components: {
    MComponent,
  },
  data() {
    return {
      musicList: [],
    };
  },
  methods: {
    getMusic() {
      //
    },
    logMusic() {
      console.log(this.musicList);
    },
  },
};
</script>
