<template>
  <div>
    <v-app-bar
      elevation="0"
      color="transparent"
      class="appbar-color"
      dense
      height="70px"
      hide-on-scroll
      fixed
    >
      <mobile v-if="is_screen_small" :contents="contents" />
      <desktop v-else :contents="contents" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawerState" dark fixed app right>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="(item, index) in contents.items"
            :key="index"
            :value="item.active"
            active-class="primary"
          >
            <v-btn color="transparent" text :to="item.url">
              <span class="white--text">{{ item.name }} </span>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import desktop from "@/components/appbar/desktop.vue";
import mobile from "@/components/appbar/mobile.vue";
export default {
  components: {
    desktop,
    mobile,
  },
  data() {
    return {
      drawer: true,
      selectedItem: 0,
      contents: {
        logo: require("@/assets/STARRY white logo.png"),
        items: [
          { name: "Home", url: "/" },
          { name: "About", url: "About" },
          { name: "Contact", url: "Contact" },
          { name: "Games", url: "Games" },
        ],
      },
    };
  },
  computed: {
    is_screen_small() {
      // ['xs', 'sm'].includes(this.$vuetify.breakpoint.name);
      return this.$vuetify.breakpoint.xs;
    },
    drawerState: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("setDrawerState", val);
      },
    },
  },
  mounted() {
    this.$store.commit("setDrawerState", false);
  },
};
</script>

<style></style>
