<template>
  <div>
    <mobile v-if="is_screen_small" :gameContents="gameContents" />
    <pad v-else-if="is_screen_middle" :gameContents="gameContents" />
    <desktop v-else :gameContents="gameContents" />
  </div>
</template>

<script>
import mobile from "@/components/games/mobile.vue";
import pad from "@/components/games/pad.vue";
import desktop from "@/components/games/desktop.vue";
export default {
  components: { desktop, mobile, pad },
  data() {
    return {
      gameContents: [
        {
          src: require("@/assets/poster3.png"),
          title: "Soul of Butterflies",
          subtitle: "INCUBATION",
          router: "sob",
        },
        {
          src: require("@/assets/EscapeCG.png"),
          title: "E$*A@E!404!",
        },
      ],
    };
  },
  methods: {},
  computed: {
    is_screen_small() {
      return this.$vuetify.breakpoint.xs;
    },
    is_screen_middle() {
      return this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm;
    },
  },
};
</script>
