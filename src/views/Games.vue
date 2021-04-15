<template>
  <v-app class="games">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/games/index.vue";
export default {
  name: "Games",
  components: { index },
  mounted() {},
};
</script>

<style>
.games {
  background-color: transparent !important;
  max-height: 1528px;
}
</style>
