<template>
  <v-app>
    <appbar class="Noto" />
    <v-parallax height="100%" :src="require('@/assets/backgroundImage.jpg')">
      <router-view></router-view>
      <foot class="Noto" />
    </v-parallax>
    <v-overlay :absolute="true" opacity="0.98" :value="overlay" class="SOBFont">
      {{ loading }}%
    </v-overlay>
  </v-app>
</template>

<script>
import appbar from "@/components/appbar/index.vue";
import foot from "@/components/footer/index.vue";
export default {
  name: "App",
  data() {
    return {
      overlay: true,
      loading: "0",
    };
  },
  components: {
    appbar,
    foot,
  },
  methods: {},
  computed: {},
  async mounted() {
    await this.$imagePreload(
      [
        require("@/assets/sobs/poster1.jpg"),
        require("@/assets/sobs/poster2.jpg"),
        require("@/assets/sobs/poster3.jpg"),
        require("@/assets/sobs/poster shadow.jpg"),
        require("@/assets/sobs/poster shadow1.jpg"),
        require("@/assets/sobs/poster shadow2.jpg"),
        require("@/assets/sobs/lobby dark.jpg"),
        //*
        require("@/assets/about/art.gif"),
        require("@/assets/about/program.gif"),
        require("@/assets/about/music.gif"),
        //*
        require("@/assets/escapes/EscapeCG.jpg"),
      ],
      (e) => {
        this.loading = Math.floor(e.progress * 100) / 100;
        if (e.progress >= 60) this.overlay = false;
      }
    );
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

.Noto {
  font-family: "Noto Sans", sans-serif;
}

@font-face {
  font-family: "SOB";
  src: url("~@/assets/fonts/Please write me a song.ttf");
}
.SOBFont {
  font-family: "SOB", "Noto Sans", cursive;
}

@font-face {
  font-family: "SOBChinese";
  src: url("~@/assets/fonts/GenJyuuGothic-Monospace-Normal.ttf");
}
.SOBFontChinese {
  font-family: "SOBChinese", "Noto Sans", cursive;
}

.v-parallax__image {
  width: 100% !important;
}
</style>
