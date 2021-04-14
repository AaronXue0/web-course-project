<template>
  <v-container>
    <div style="display: block; height: 70px"></div>
    <v-row justify="center" align="center">
      <v-card color="transparent" width="94%">
        <carousel :carouselItems="carouselItems" />
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import carousel from "@/components/home/carousel.vue";
export default {
  props: ["carouselItems"],
  components: { carousel },
  data() {
    return {};
  },
  methods: {},
};
</script>
