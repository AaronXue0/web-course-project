<template>
  <v-app class="about">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/about/index.vue";
export default {
  name: "About",
  components: { index },
  mounted() {},
};
</script>

<style>
.about {
  background-color: transparent !important;
  max-height: 1528px;
}
</style>
