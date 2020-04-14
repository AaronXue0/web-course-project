<template>
  <v-container>
    <v-row class="text-center" justify="center" align="start">
      <v-img :src="require('@/assets/backgroundimg1.jpg')" width="100%">
        <p class="image-intro">Project Starry</p>
      </v-img>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Baloo+Paaji+2:wght@500&family=Noto+Sans:wght@700&display=swap");
.image-intro {
  font-family: "Noto Sans", cursive;
  position: relative;
  font-size: 40px;
  color: white;
  top: 50%;
}
</style>
