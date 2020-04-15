<template>
  <v-app>
    <v-container class="home-intro">
      <v-carousel
        :show-arrows="false"
        hide-delimiter-background
        height="600px"
        class="intro-carousel"
      >
        <v-carousel-item v-for="(item, i) in slides" :key="i" :src="item.src">
        </v-carousel-item>
      </v-carousel>
      <div class="div-card"></div>
      <div class="div-card-right">
        <h1 class="intro-title">A Passion for Games</h1>
        <div class="intro-article">
          <span
            >Our team insists on heartfelt designs and an unyielding spirit in
            our development cycle, making every project with the intent to
            create a living piece of art. Nevertheless, we stay open-minded and
            humble, listening to feedback from all sides. That way we can ensure
            the experience we and our fans create is cherished <br />by
            all.</span
          >
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      slides: [
        { src: require("@/assets/backgroundimg3.jpg") },
        { src: require("@/assets/backgroundimg2.jpg") },
        { src: require("@/assets/backgroundimg4.jpg") }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Baloo+Paaji+2:wght@500&family=Noto+Sans:wght@700&display=swap");
.home-intro {
  font-family: "Noto Sans", sans-serif;
  height: 100%;
}
.intro-carousel {
  z-index: 1;
}
.div-card {
  position: relative;
  top: -550px;
  left: -50px;
  background: rgba(255, 202, 40, 0.5);
  height: 600px;
  width: 500px;
  z-index: 0;
  margin-bottom: -550px;
}
.div-card-right {
  position: relative;
  top: -300px;
  left: 650px;
  background: rgba(253, 216, 53, 0.9);
  height: 340px;
  width: 550px;
  z-index: 2;
  margin-bottom: -550px;
}
.intro-title {
  position: relative;
  margin: 30px 30px 15px 30px;
  padding-top: 5%;
  font-size: 40px;
}
.intro-article {
  position: relative;
  margin: 0px 30px 0 30px;
  font-size: 15px;
  line-height: 2;
  float: left;
  margin-bottom: -550px;
}
</style>
