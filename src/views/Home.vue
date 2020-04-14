<template>
  <div class="home">
    <Poster />
    <v-row justify="center">
      <v-icon class="chevron" size="100">mdi-chevron-down</v-icon>
    </v-row>
    <Products />
    <v-row justify="center">
      <v-icon class="chevron" size="100">mdi-chevron-down</v-icon>
    </v-row>
    <Intro />
    <v-row justify="center">
      <v-icon class="chevron" size="100">mdi-chevron-down</v-icon>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Poster from "@/components/Home/Poster.vue";
import Products from "@/components/Home/Products.vue";
import Intro from "@/components/Home/Intro.vue";

export default {
  components: {
    Poster,
    Products,
    Intro
  }
};
</script>

<style>
.chevron {
  position: relative;
  padding-top: 2%;
  padding-bottom: 0%;
}
</style>
