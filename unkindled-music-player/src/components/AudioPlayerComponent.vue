<template>
  <v-card class="youtube-song-element">
    <v-text-field
      solo
      dense
      v-model="name"
      @change="$emit('titleChanged', { name: $event, id: player.id })"
    ></v-text-field>
    <v-row class="mx-auto">
      <span center class="ml-5"><b>Now Playing</b></span>
      <span class="mx-auto">
        <v-btn icon class="ml-3 mr-3"><v-icon>mdi-play</v-icon></v-btn>
        <v-btn icon class="ml-3 mr-3"><v-icon>mdi-pause</v-icon></v-btn>
        <v-btn icon class="ml-3 mr-3"><v-icon>mdi-repeat</v-icon></v-btn>
        <v-btn icon class="ml-3 mr-3"><v-icon>mdi-stop</v-icon></v-btn>
      </span>
    </v-row>
    <v-slider class="ml-12 mr-12 mt-3" :value="player.volume"></v-slider>
  </v-card>
</template>

<script>
export default {
  data: function () {
    return {
      volume: 0.5,
      isLoop: false,
      isPlaying: false,
      currentSong: {},
    };
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    player: {
      type: Object,
      required: true,
    },
  },
  computed: {
    name: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {},
};
</script>

<style>

.local-song-element{
  background-color: yellow
}

.youtube-song-element{
  background-color: #FF0000
}

</script>