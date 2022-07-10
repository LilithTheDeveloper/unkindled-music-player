<template>
  <v-card flat height="100%">
    <!--create a music player-->
    <v-container fluid>
      <v-card>
        <v-card-title>Music Player</v-card-title>

        <!--DIALOG FOR ADDING SONGS-->
        <v-btn class="ma-2" @click="addSongDialog = true">Add Song</v-btn>
        <AddSongDialog v-model="addSongDialog" />
        <!--END DIALOG FOR ADDING SONGS-->
        <v-row>
          <v-col cols="12" v-for="(music, i) in musicList" :key="i">
            <SongListElement :song="music" />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <AudioPlayerComponent class="ma-12" />
  </v-card>
</template>

<script>
import { useMusicStore } from "@/store/modules/music";
import { mapStores } from "pinia";
import SongListElement from "@/components/SongListElement.vue";
import AudioPlayerComponent from "@/components/AudioPlayerComponent.vue";
import AddSongDialog from "@/components/Dialogs/AddSongDialog.vue";

export default {
  name: "PlayerView",
  async mounted() {
    await useMusicStore().fetchMusicList();
  },
  data() {
    return {
      addSongDialog: false,
    };
  },
  computed: {
    ...mapStores(useMusicStore),
    musicList: function () {
      return useMusicStore().musicList;
    },
  },
  components: {
    SongListElement,
    AudioPlayerComponent,
    AddSongDialog,
  },
  methods: {
    getMusic() {
      //
    },
    logMusic() {
      console.log(this.musicList);
    },
    testFunction() {
      console.log(useMusicStore());
    },
  },
};
</script>
