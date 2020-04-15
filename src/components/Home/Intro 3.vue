<template>
  <v-container class="home-intro">
    <v-row justify="center" align="start" class="intro-image">
      <v-img :src="require('@/assets/backgroundimg3.jpg')" width="100%"></v-img>
    </v-row>
    <div class="attach-card hidden-md-and-down"></div>
    <div class="attach-card-describe">
      <h2 class="intro-title">A Passion for Games</h2>
      <div class="intro-aritcle">
        <span>
          Our team insists on heartfelt designs and an unyielding spirit in our
          development cycle, making every project with the intent to create a
          living piece of art. Nevertheless, we stay open-minded and humble,
          listening to feedback from all sides. That way we can ensure the
          experience we and our fans create is cherished by all.
        </span>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Baloo+Paaji+2:wght@500&family=Noto+Sans:wght@700&display=swap");
.home-intro {
  font-family: "Noto Sans", sans-serif;
}
.intro-image {
  position: relative;
  z-index: 1;
}
.attach-card {
  background: rgba(255, 202, 40, 0.6);
  position: relative;
  width: 500px;
  height: 650px;
  margin-bottom: -450px;
  top: -620px;
  left: -40px;
}
.attach-card-describe {
  background: rgba(255, 202, 40, 0.9);
  position: relative;
  width: 500px;
  height: 350px;
  margin-bottom: -450px;
  top: -450px;
  left: 61%;
  z-index: 2;
}
.intro-title {
  font-size: 40px;
  padding-top: 40px;
  margin: 10px 20px 10px 30px;
}
.intro-aritcle {
  font-size: 15px;
  padding-top: 10px;
  padding-right: 10px;
  margin: 10px 10px 10px 30px;
  line-height: 2;
}
</style>
