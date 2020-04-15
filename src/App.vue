<template>
  <v-app>
    <Appbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
    <BottomCard />
  </v-app>
</template>

<script>
import Appbar from "@/components/Toolbar/index.vue";
import Footer from "@/components/Footer/Footer.vue";
import BottomCard from "@/components/Footer/BottomCard.vue";

export default {
  name: "App",

  components: {
    Appbar,
    Footer,
    BottomCard
  }
};
</script>
