<template>
  <div>
    <v-card-title class="Noto">
      <v-card elevation="0">
        <v-btn color="white" text to="/">
          <v-img :src="contents.logo" width="150" />
        </v-btn>
      </v-card>
      <v-btn
        text
        small
        color="primary"
        elevation="0"
        v-for="(item, index) in contents.items"
        :key="index"
        :to="item.url"
      >
        <span class="text--secondary">
          {{ item.name }}
        </span>
      </v-btn>
      <v-spacer />
    </v-card-title>
  </div>
</template>

<script>
export default {
  props: ["contents"],
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.mark:hover {
  background: linear-gradient(to top, #1d3a50 50%, transparent 50%);
  border-radius: 0;
}
</style>
