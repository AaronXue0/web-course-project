<template>
  <v-app>
    <appbar class="Noto" />
    <v-parallax height="100%" :src="require('@/assets/backgroundImage.png')">
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
        require("@/assets/poster1.png"),
        require("@/assets/poster2.png"),
        require("@/assets/poster3.png"),
        require("@/assets/poster shadow.png"),
        require("@/assets/poster shadow1.png"),
        require("@/assets/poster shadow2.png"),
        require("@/assets/escape logo.png"),
        require("@/assets/lobby.png"),
        require("@/assets/lobby dark.png"),
        require("@/assets/EscapeCG.png"),
        require("@/assets/logo.png"),
        require("@/assets/sob-cg.png"),
        require("@/assets/about/art.gif"),
        require("@/assets/about/program.gif"),
        require("@/assets/about/music.gif"),
      ],
      (e) => {
        this.loading = Math.floor(e.progress * 100) / 100;
        if (e.progress >= 99) this.overlay = false;
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
.Press2P {
  font-family: "Press Start 2P", cursive;
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
