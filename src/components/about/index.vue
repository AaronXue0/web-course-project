<template>
  <div>
    <mobile v-if="is_screen_small" />
    <desktop v-else-if="is_screen_large" />
    <pad v-else />
  </div>
</template>

<script>
import desktop from "@/components/about/desktop.vue";
import mobile from "@/components/about/mobile.vue";
import pad from "@/components/about/pad.vue";
export default {
  components: { desktop, mobile, pad },
  computed: {
    is_screen_small() {
      return this.$vuetify.breakpoint.xs;
    },
    is_screen_large() {
      return this.$vuetify.breakpoint.lg;
    },
  },
  mounted() {},
};
</script>

<style>
.about {
  background-color: transparent !important;
  max-height: 764px;
}
</style>
