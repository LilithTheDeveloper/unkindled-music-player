<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title>Add Song</v-card-title>
      <v-card-text>
        <v-file-input
          v-model="songFileInput"
          @change="onFileChange($event)"
          prepend-icon="mdi-music-note"
          accept="audio/*"
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
    onFileChange(event) {
      console.log(event);
    },
    uploadSong() {
      useMusicStore()
        .addSong(this.songFileInput)
        .then(() => {
          this.dialog = false;
        });
    },
  },
};
</script>
