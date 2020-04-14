<template>
  <div class="home">
    <Poster />
    <v-row justify="center">
      <v-icon class="chevron" size="100">mdi-chevron-down</v-icon>
    </v-row>
    <Products />
    <v-row justify="center">
      <v-icon class="chevron-1" size="100">mdi-chevron-down</v-icon>
    </v-row>
    <Intro />
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
  padding-top: 5%;
  padding-bottom: 0%;
}
.chevron-1 {
  position: relative;
  padding-top: 5%;
  padding-bottom: 5%;
}
</style>
