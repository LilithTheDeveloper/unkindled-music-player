<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-5"
          contain
          :src="imageSrc"
          transition="scale-transition"
          width="40"
        />
        Unkindled Music Player
      </div>

      <v-spacer></v-spacer>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/player">Player</v-btn>
      <v-btn to="/about">About</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    imageSrc: `http://localhost:8000/images/bonfire_logo.png`,
  }),
};
</script>
