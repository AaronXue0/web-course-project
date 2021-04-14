<template>
  <v-app>
    <appbar class="Noto" />
    <v-parallax height="100px" :src="require('@/assets/backgroundImage.png')">
      <router-view></router-view>
      <foot class="Noto" />
    </v-parallax>
  </v-app>
</template>

<script>
import appbar from "@/components/appbar/index.vue";
import foot from "@/components/footer/index.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    appbar,
    foot,
  },
  computed: {},
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
