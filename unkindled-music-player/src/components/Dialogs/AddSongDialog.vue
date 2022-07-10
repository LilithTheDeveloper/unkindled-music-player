<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title>Add Song</v-card-title>
      <v-card-text>
        <!-- <v-text-field
          v-model="songName"
          label="Song Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="songArtist"
          label="Artist"
          required
        ></v-text-field>
        <v-text-field v-model="songAlbum" label="Album" required></v-text-field>
        <v-text-field v-model="songYear" label="Year" required></v-text-field>
        <v-text-field v-model="songGenre" label="Genre" required></v-text-field>
        <v-text-field v-model="songTrack" label="Track" required></v-text-field>
        <v-text-field
          v-model="songDuration"
          label="Duration"
          required
        ></v-text-field> -->
        <v-file-input
          v-model="songFileInput"
          @change="onFileChange"
        ></v-file-input>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="uploadSong"> Upload </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { useMusicStore } from "@/store/modules/music";

export default {
  data() {
    return {
      songFileInput: "",
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      this.songFileInput = selectedFile;
    },
    uploadSong() {
      useMusicStore().addSong(this.songFileInput);
    },
  },
};
</script>
