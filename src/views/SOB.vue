<template>
  <v-app class="sob">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/sob/index.vue";
export default {
  components: { index },
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
  computed: {},
};
</script>

<style>
.sob {
  background-color: transparent !important;
  max-height: 3764px;
}
</style>
