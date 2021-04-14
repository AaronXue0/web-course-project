<template>
  <div>
    <mobile v-if="is_screen_small" :carouselItems="carouselItems" />
    <pad v-else-if="is_screen_middle" :carouselItems="carouselItems" />
    <desktop v-else :carouselItems="carouselItems" />
  </div>
</template>

<script>
import mobile from "@/components/home/mobile.vue";
import pad from "@/components/home/pad.vue";
import desktop from "@/components/home/desktop.vue";
export default {
  components: { desktop, mobile, pad },
  data() {
    return {
      carouselItems: [
        { src: require("@/assets/poster1.png") },
        { src: require("@/assets/poster2.png") },
        { src: require("@/assets/poster3.png") },
      ],
    };
  },
  methods: {},
  computed: {
    is_screen_small() {
      // ['xs', 'sm'].includes(this.$vuetify.breakpoint.name);
      return this.$vuetify.breakpoint.xs;
    },
    is_screen_middle() {
      return this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm;
    },
  },
};
</script>
