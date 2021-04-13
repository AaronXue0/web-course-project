<template>
  <v-app-bar elevation="0" color="black" dense>
    <desktop class="hidden-xs-and-down" :contents="contents" />
    <mobile class="hidden-sm-and-up" :contents="contents" />
  </v-app-bar>
</template>

<script>
import desktop from "@/components/appbar/desktop.vue";
import mobile from "@/components/appbar/mobile.vue";
export default {
  components: {
    desktop,
    mobile,
  },
  data() {
    return {
      contents: {
        logo: require("@/assets/old starry logo b.png"),
        items: [
          { name: "About", url: "About" },
          { name: "Contact", url: "Contact" },
          { name: "Games", url: "Games" },
        ],
      },
    };
  },
};
</script>
