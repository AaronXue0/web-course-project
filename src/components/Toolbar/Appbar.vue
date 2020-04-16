<template>
  <v-app-bar app color="white" dense elevation="0" shrink-on-scroll>
    <div class="custom-starry-icon" id="shrink-icon" v-on="handleScroll">
      <v-icon large class="custom-starry-icon-left">{{ starryIcon }}</v-icon>
      <v-icon large class="custom-starry-icon-right">{{ starryIcon }}</v-icon>
    </div>
    <v-spacer />
    <div class="toolbar-div" id="shrink-btns" v-on="handleScroll">
      <v-btn
        text
        color="white"
        v-for="(item, index) in toolbar"
        :key="index"
        class="mark"
        :to="{ name: item.content }"
      >
        <span class="appbar-item-btn">{{ item.content }}</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      starryIcon: "mdi-crop-free",
      toolbar: [{ content: "home" }, { content: "about" }, { content: "games" }]
    };
  },
  methods: {
    handleScroll() {
      if (
        document.body.scrollTop > 5 ||
        document.documentElement.scrollTop > 5
      ) {
        let s = "10%";
        document.getElementById("shrink-icon").style.top = s;
        document.getElementById("shrink-btns").style.top = s;
      } else {
        let s = "35%";
        document.getElementById("shrink-icon").style.top = s;
        document.getElementById("shrink-btns").style.top = s;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.custom-starry-icon {
  position: relative;
  padding-left: 100px;
}
.custom-starry-icon-left {
  position: absolute;
  transform: rotate(45deg);
  z-index: 1;
}
.custom-starry-icon-right {
  transform: rotate(45deg);
  z-index: 2;
  left: -25px;
}
.toolbar-div {
  position: relative;
  padding-right: 100px;
}
.v-btn:hover:before {
  color: transparent;
  border: none;
  border-radius: 0;
  border-color: transparent;
}
.routerlink {
  color: white;
}
.mark:hover {
  background: linear-gradient(to top, #ffca28 50%, transparent 50%);
  border-radius: 0;
}
.appbar-item-btn {
  color: black;
}
</style>
