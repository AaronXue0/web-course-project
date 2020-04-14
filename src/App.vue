<template>
  <v-app>
    <Appbar />
    <v-content>
      <home />
    </v-content>
  </v-app>
</template>

<script>
import Appbar from "@/components/Toolbar/index.vue";
import home from "@/views/Home.vue";

export default {
  name: "App",

  components: {
    Appbar,
    home
  }
};
</script>
