<template>
  <div class="home hidden-md-and-down">
    <Poster />
    <v-row justify="center" class="chevron">
      <v-btn color="white" icon @click="scrollToId(products)">
        <v-icon size="100" color="black">mdi-chevron-down</v-icon>
      </v-btn>
    </v-row>
    <Products />
    <div id="products"></div>
    <v-row justify="center" class="chevron-1">
      <v-btn color="white" icon>
        <v-icon size="100" color="black">mdi-chevron-down</v-icon>
      </v-btn>
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
  },
  methods: {
    scrollToId(el) {
      document.getElementById(el).scrollIntoView();
    },
    changeTitle() {
      document.title = "Home | Project Starry";
    }
  },
  mounted() {
    this.changeTitle();
  }
};
</script>

<style>
.chevron {
  background-color: transparent;
  position: relative;
  padding-top: 5%;
  padding-bottom: 0%;
}
.chevron-1 {
  position: relative;
  padding-top: 2%;
  padding-bottom: 5%;
}
</style>
