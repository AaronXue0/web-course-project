<template>
  <v-container>
    <div style="display: block; height: 120px"></div>
    <v-row justify="center" align="center">
      <v-card color="transparent" width="220%">
        <v-carousel
          delimiter-icon="mdi-radiobox-marked"
          :show-arrows="false"
          hide-delimiter-background
          hide-delimiters
          height="100%"
          class="custom"
          v-model="model"
        >
          <v-carousel-item
            v-for="(item, i) in carouselItems"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
      <v-btn
        class="custom"
        icon
        v-for="(btn, j) in carouselItems"
        :key="j"
        color="transparent"
        @click="model = j"
      >
        <v-icon :color="model == j ? 'red' : 'white'">
          mdi-radiobox-marked
        </v-icon>
      </v-btn>
      <v-card
        color="transparent"
        width="220%"
        style="transform: scaleY(-1); opacity: 0.5"
      >
        <v-carousel
          delimiter-icon="mdi-radiobox-marked"
          :show-arrows="false"
          hide-delimiter-background
          hide-delimiters
          height="100%"
          class="custom"
          v-model="model"
        >
          <v-carousel-item
            v-for="(item, i) in carouselItems"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-card>
    </v-row>
    <v-img> </v-img>
  </v-container>
</template>

<script>
// import carousel from "@/components/home/carousel.vue";
export default {
  props: ["carouselItems"],
  components: {},
  data() {
    return {
      model: 0,
    };
  },
  methods: {
    setModel(val) {
      this.model = val;
    },
  },
  computed: {
    modelNext() {
      return (this.model + 1) % this.carouselItems.length;
    },
  },
};
</script>
