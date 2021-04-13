<template>
  <v-app>
    <appbar class="Noto" />
    <v-container>
      <router-view></router-view>
    </v-container>
    <foot class="Noto" />
  </v-app>
</template>

<script>
import appbar from "@/components/appbar/index.vue";
import foot from "@/components/footer/index.vue";
export default {
  name: "App",
  components: {
    appbar,
    foot,
  },
  mounted() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

.Noto {
  font-family: "Noto Sans", sans-serif;
}
.Press2P {
  font-family: "Press Start 2P", cursive;
}
</style>
