<template>
  <v-card flat height="100%">
    <!--create a music player-->
    <v-container fluid>
      <v-card>
        <v-card-title>Music Player</v-card-title>

        <!--DIALOG FOR ADDING SONGS-->
        <v-btn class="ma-2" @click="addSongDialog = true"
          >Add Local Song (.mp3)</v-btn
        >
        <v-btn class="ma-2" @click="addSongDialog = true"
          >Add Song from YouTube</v-btn
        >
        <AddSongDialog v-model="addSongDialog" />
        <!--END DIALOG FOR ADDING SONGS-->
        <v-row>
          <v-col cols="12" v-for="(music, i) in musicList" :key="i">
            <SongListElement :song="music" height="10%" />
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <draggable ghost v-model="audioPlayers">
      <transition v-for="player in audioPlayers" :key="player.id">
        <AudioPlayerComponent
          class="ma-6"
          v-model="player.name"
          :player="player"
        />
        <!-- @titleChanged="renameAudioLane($event)" -->
      </transition>
    </draggable>
    <v-btn
      align-center
      width="100%"
      :style="{ left: '50%', transform: 'translateX(-50%)' }"
      @click="addNewAudioLane"
      >+ Add new Audioline</v-btn
    >
  </v-card>
</template>

<script>
import { useMusicStore } from "@/store/modules/music";
import SongListElement from "@/components/SongListElement.vue";
import AudioPlayerComponent from "@/components/AudioPlayerComponent.vue";
import AddSongDialog from "@/components/Dialogs/AddSongDialog.vue";
import draggable from "vuedraggable";

export default {
  name: "PlayerView",
  async mounted() {
    await useMusicStore().fetchMusicList();
    localStorage.getItem("audioPlayers")
      ? (this.audioPlayers = JSON.parse(localStorage.getItem("audioPlayers")))
      : (this.audioPlayers = []);
  },
  data() {
    return {
      addSongDialog: false,
      audioPlayers: [],
    };
  },
  computed: {
    musicList: function () {
      return useMusicStore().musicList;
    },
  },
  components: {
    SongListElement,
    AudioPlayerComponent,
    AddSongDialog,
    draggable,
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
    addNewAudioLane() {
      this.audioPlayers.push({
        id: this.audioPlayers.length,
        name: "Unnamed Audioplayer",
        volume: 0,
        songpath: "",
      });
    },
  },
  watch: {
    audioPlayers: {
      handler(newValue) {
        localStorage.setItem("audioPlayers", JSON.stringify(newValue));
      },
    },
  },
};
</script>

