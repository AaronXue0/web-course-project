<template>
  <div>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-btn color="black" text to="/">
      <v-img :src="contents.logo" width="100" />
    </v-btn>
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item v-for="(item, index) in contents.items" :key="index">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ["contents"],
  components: {},
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {},
};
</script>

<style>
.v-navigation-drawer--close.v-navigation-drawer--temporary {
  transform: translateX(-13vw) !important;
}
</style>
