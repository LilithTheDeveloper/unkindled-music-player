<template>
  <v-card>
    <v-row class="mx-auto">
      <v-card-title></v-card-title>
      <v-progress></v-progress>
      Now Playing

      <span class="mx-auto">
        <v-btn icon class="ml-3 mr-3"><v-icon>mdi-play</v-icon></v-btn>
        <v-btn icon class="ml-3 mr-3"><v-icon>mdi-pause</v-icon></v-btn>
        <v-btn icon class="ml-3 mr-3"><v-icon>mdi-repeat</v-icon></v-btn>
        <v-btn icon class="ml-3 mr-3"><v-icon>mdi-stop</v-icon></v-btn>
      </span>
    </v-row>
    <v-slider class="ml-12 mr-12 mt-3" v-model="volume"></v-slider>
  </v-card>
</template>

<script>
export default {
  data: function () {
    return {
      volume: 0.5,
      isLoop: false,
      isPlaying: false,
    };
  },
};
</script>
