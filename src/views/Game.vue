<template>
  <v-app class="game">
    <v-container>
      <h1 class="about-title-right">Project Starry</h1>
      <h1 class="about-title">No Game, No Life</h1>
      <h1 class="about-title-opacity">No Game, No Life</h1>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    changeTitle() {
      document.title = "Game | Project Starry";
    }
  },
  mounted() {
    this.changeTitle();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@900&display=swap");
.game {
  font-family: "Noto Sans TC", sans-serif;
}
</style>
