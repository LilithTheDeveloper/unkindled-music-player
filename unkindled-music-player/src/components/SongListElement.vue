<template>
  <v-card>
    <v-list-item link two-line height="50%">
      {{ song.displayname }}
      <v-spacer></v-spacer>
      <v-btn @click="showDetails = !showDetails" icon>
        <v-icon v-if="!showDetails">mdi-arrow-down</v-icon>
        <v-icon v-else>mdi-arrow-up</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon @click="playSong">
        <v-icon>mdi-play</v-icon>
      </v-btn>
    </v-list-item>
    <div v-if="showDetails">
      <v-card> {{ `${$static}${song.path.substring(9)}` }} </v-card>
    </div>
    <audio v-if="playing" controls autoplay hidden>
      <source :src="source" type="audio/mpeg" />
    </audio>
    <iframe
      hidden
      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=0"
    >
    </iframe>
  </v-card>
</template>

<script>
export default {
  data: function () {
    return {
      showDetails: false,
      source: "",
      playing: false,
    };
  },
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  methods: {
    playSong() {
      this.source = `${this.$static}${this.song.path.substring(9)}`;
      this.playing = !this.playing;
    },
  },
};
</script>
