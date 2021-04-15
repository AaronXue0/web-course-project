<template>
  <div>
    <v-tabs fixed-tabs background-color="black" dark v-model="tab">
      <v-tab> Director <small>/ Game Artist</small></v-tab>
      <v-tab> Game Developer <small>/ Clien</small></v-tab>
      <v-tab> Music </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, index) in items" :key="index">
        <v-card flat color="black">
          <v-row justify="center" align="center">
            <v-col cols="6">
              <v-img :src="item.src"></v-img>
              <v-card-subtitle
                style="position: relative; top: -50px"
                class="text-center pa-0 ma-0"
                v-for="p in item.profile"
                :key="p"
              >
                <br />{{ p }}<br />
              </v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { profile: ["李予棠"], src: require("@/assets/about/art.gif") },
        {
          profile: ["崔元煜", "薛賀升"],
          src: require("@/assets/about/program.gif"),
        },
        { profile: ["陳向琥"], src: require("@/assets/about/music.gif") },
      ],
    };
  },
  components: {},
  computed: {},
  mounted() {},
};
</script>
