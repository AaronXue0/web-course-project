import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {
  iconfont: "fa",
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1d3a50",
        secondary: "#504b79",
        third: "#ffffff",
      },
      dark: {
        primary: "#1d3a50",
        secondary: "#504b79",
        third: "#000000",
      },
    },
  },
});
