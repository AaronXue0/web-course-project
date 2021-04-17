import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import imagePreloader from "vue-image-preloader";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);
Vue.use(vuetify);
Vue.use(imagePreloader);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
