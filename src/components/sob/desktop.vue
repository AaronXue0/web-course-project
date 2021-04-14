<template>
  <v-container style="position: relative; margin-bottom: -50px">
    <div style="display: block; height: 70px"></div>
    <v-row justify="center" align="center">
      <v-card color="transparent" width="94%">
        <v-carousel
          :show-arrows="false"
          hide-delimiter-background
          height="100%"
        >
          <v-carousel-item
            v-for="(item, i) in carouselItems"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["carouselItems"],
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
