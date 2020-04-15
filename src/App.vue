<template>
  <v-app>
    <Appbar />
    <v-content>
      <Home />
    </v-content>
    <Footer />
    <BottomCard />
  </v-app>
</template>

<script>
import Appbar from "@/components/Toolbar/index.vue";
import Home from "@/views/Home.vue";
import Footer from "@/components/Footer/Footer.vue";
import BottomCard from "@/components/Footer/BottomCard.vue";

export default {
  name: "App",

  components: {
    Appbar,
    Home,
    Footer,
    BottomCard
  }
};
</script>
