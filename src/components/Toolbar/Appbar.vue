<template>
  <v-app-bar app color="white" dense elevation="0">
    <div class="custom-starry-icon">
      <v-icon large class="custom-starry-icon-left">{{ starryIcon }}</v-icon>
      <v-icon large class="custom-starry-icon-right">{{ starryIcon }}</v-icon>
    </div>
    <v-spacer />
    <div class="toolbar-div">
      <v-btn
        text
        color="black"
        v-for="(item, index) in toolbar"
        :key="index"
        class="mark"
        >{{ item.content }}</v-btn
      >
    </div>
  </v-app-bar>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      starryIcon: "mdi-crop-square",
      toolbar: [
        { content: "about" },
        { content: "members" },
        { content: "games" }
      ]
    };
  }
};
</script>

<style>
.custom-starry-icon {
  padding-left: 100px;
  position: relative;
}
.custom-starry-icon-left {
  transform: rotate(45deg);
  position: absolute;
  z-index: 1;
}
.custom-starry-icon-right {
  transform: rotate(45deg);
  z-index: 2;
  left: -25px;
}
.toolbar-div {
  padding-right: 100px;
  position: relative;
}
.v-btn:hover:before {
  color: transparent;
  border: none;
  border-radius: 0;
  border-color: transparent;
}
.mark:hover {
  background: linear-gradient(to top, #ffca28 50%, transparent 50%);
  border-radius: 0;
}
</style>
