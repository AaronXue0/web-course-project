<template>
  <v-container>
    <v-row class="text-center" justify="center" align="start">
      <v-col cols="4" v-for="(item, index) in products" :key="index">
        <v-img :src="item.img" width="100%" class="mainImg"></v-img>
        <div class="attach">
          <span class="date">
            <i>Mar. 31th, 2020</i>
          </span>
          <span class="event">
            <i>#Game</i>
          </span>
        </div>
        <span class="title"
          ><b>{{ item.title }}</b></span
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          img: require("@/assets/1585896761540.jpg"),
          title:
            "Revel the world of lomo. The plan of reveling each hundred subscribe"
        },
        {
          img: require("@/assets/1585896728275.jpg"),
          title: "The world need you, detective !"
        },
        {
          img: require("@/assets/1585896738615.jpg"),
          title: "Finding the truth in this case."
        }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Baloo+Paaji+2:wght@500&family=Noto+Sans:wght@700&display=swap");
.mainImg {
  z-index: 1;
}
.attach {
  position: relative;
  background: rgba(255, 202, 40, 0.8);
  height: 60px;
  top: -40px;
  left: -3%;
  margin: 10px 30% 0 0;
  z-index: 2;
}
span.date {
  font-family: "Noto Sans", cursive;
  position: absolute;
  top: 30%;
  padding: 0;
  margin: 0;
  left: 10%;
  text-align: left;
  font-size: 14px;
}
span.event {
  position: absolute;
  top: 35%;
  padding: 0;
  margin: 0;
  right: 10%;
  text-align: left;
  font-size: 12px;
}
span.title {
  font-family: "Noto Sans", cursive;
  position: relative;
  font-size: 12px;
  text-align: left;
  float: left;
}
</style>
