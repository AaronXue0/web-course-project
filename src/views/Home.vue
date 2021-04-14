<template>
  <v-app class="home">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/home/index.vue";
export default {
  name: "Home",
  components: { index },
  mounted() {},
};
</script>

<style>
.home {
  background-color: transparent !important;
}
</style>

<style>
.home {
  max-height: 764px;
}
</style>
