<template>
  <v-app>
    <Appbar />
    <Sidebar />
    <v-content>
      <home />
    </v-content>
  </v-app>
</template>

<script>
import Appbar from "@/components/Toolbar/index.vue";
import home from "@/components/HelloWorld.vue";

export default {
  name: "App",

  components: {
    Appbar,
    home
  }
};
</script>
