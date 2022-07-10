<template>
  <v-card>
    <v-list-item :dense="dense" link two-line height="50%">
      {{ song.displayname }}
      <v-spacer></v-spacer>
      <v-btn @click="showDetails = !showDetails" icon>
        <v-icon v-if="!showDetails">mdi-arrow-down</v-icon>
        <v-icon v-else>mdi-arrow-up</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-list-item>
    <div v-if="showDetails">
      <v-card> {{ song.hash }} </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  data: function () {
    return {
      showDetails: false,
    };
  },
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
  methods: {
    //
  },
};
</script>
