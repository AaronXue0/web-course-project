<template>
  <v-app class="about">
    <v-container>
      <h1 class="about-title-right">Project Starry</h1>
      <h1 class="about-title">No Game, No Life</h1>
      <h1 class="about-title-mirror">No Game, No Life</h1>
    </v-container>
    <v-container>
      <v-parallax
        :src="require('@/assets/starry-test-l.png')"
        style="z-index: 2;opacity: 0.9"
      ></v-parallax>
      <div class="about-div-card"></div>
      <div class="about-div-card-two"></div>
      <div id="div-empty"></div>
      <br v-for="i in 3" :key="i" />
      <v-btn
        icon
        color="white"
        class="scroll-down-icon"
        large
        @click="scrollToId('div-empty')"
      >
        <v-icon color="black">mdi-menu-down</v-icon>
      </v-btn>
      <v-row justify="center" align="center">
        <v-col cols="6">
          <h1>
            Starry Inc.
          </h1>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <h4 class="about-aritcle-h4">
            Starry games was founded in April 2020, by 6 of our co-founders. The
            current headquarters is located in Taipei.
          </h4>
          <h4 class="about-aritcle-h4">
            Starting out on mobile platforms, acrrossing multiple platform. We
            will always insist telling the story that is touhcing.
          </h4>
          <h4 class="about-aritcle-h4">
            We strive to deepen our games and what they represent, trying to
            expand the limits of what a game can do.
            <br />In doing so, we strive to give each of our players an
            unforgettable experience.
          </h4>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="6">
          <h1>Starry Concept</h1>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <h4 class="about-aritcle-h4">
            Project Starry is a project that build the world of game.
          </h4>
          <h4 class="about-aritcle-h4">
            Garthing the indie game creators, we build the world we want.
          </h4>
          <h4 class="about-aritcle-h4">
            The venture studio is also what we focus on. Here, we’ve actualized
            the idea of games within life, and life within games.
          </h4>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    scrollToId(el) {
      document.getElementById(String(el)).scrollIntoView();
    },
    changeTitle() {
      document.title = "About | Project Starry";
    }
  },
  mounted() {
    this.changeTitle();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@900&display=swap");
.about {
  font-family: "Noto Sans TC", sans-serif;
}
.about-title {
  position: relative;
  font-size: 45px;
}
.about-title-mirror {
  position: relative;
  top: -30px;
  opacity: 0.1;
  font-size: 45px;
}
.about-div-card {
  position: relative;
  top: -530px;
  right: -900px;
  background: rgba(255, 202, 40, 0.5);
  height: 300px;
  width: 300px;
  margin-bottom: -300px;
}
.about-div-card-two {
  position: relative;
  top: -285px;
  left: -15px;
  background: rgba(255, 202, 40, 0.9);
  height: 300px;
  width: 300px;
  margin-bottom: -300px;
}
.scroll-down-icon {
  position: relative;
  float: right;
}
.about-title-right {
  position: relative;
  float: right;
  font-size: 65px;
}
.about-aritcle-h4 {
  line-height: 3.5;
}
</style>
