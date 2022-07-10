<template>
  <div class="music">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "MComponent",
  props: {
    msg: String,
  },
};
</script>
