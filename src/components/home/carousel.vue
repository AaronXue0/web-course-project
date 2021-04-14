<template>
  <v-carousel
    delimiter-icon="mdi-radiobox-marked"
    :show-arrows="false"
    hide-delimiter-background
    height="100%"
    class="custom"
  >
    <v-carousel-item
      v-for="(item, i) in carouselItems"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
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

<style>
.custom .v-carousel__controls__item.v-btn {
  color: white;
}
.custom .v-carousel__controls__item.v-btn.v-btn--active {
  color: red;
}

.custom .v-carousel__controls__item.v-btn:hover:before {
  opacity: 0;
}
.custom .v-carousel__controls__item.v-btn.v-btn--active:before {
  opacity: 0;
}
</style>
