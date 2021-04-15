<template>
  <div>
    <div style="display: block; height: 70px"></div>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="9">
          <v-card
            flat
            color="black"
            v-for="(item, index) in items"
            :key="index"
          >
            <v-row justify="center" align="center">
              <v-col cols="12"
                ><v-card-subtitle class="text-center pa-0 ma-0">
                  {{ item.job }}
                  <small v-if="item.subjob"> | {{ item.subjob }}</small>
                </v-card-subtitle></v-col
              >
              <v-col cols="6">
                <v-img
                  :src="item.src"
                  style="position: relative; top: -20px"
                ></v-img>
                <v-card-subtitle
                  style="position: relative; top: -30px"
                  class="text-center pa-0 ma-0"
                  v-for="p in item.profile"
                  :key="p"
                >
                  <br />{{ p }}<br />
                </v-card-subtitle>
                <hr />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div style="display: block; height: 70px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          job: "Director",
          subjob: "Game Artist",
          profile: ["李予棠"],
          src: require("@/assets/about/art.gif"),
        },
        {
          job: "Game Develoepr",
          subjob: "Client",
          profile: ["崔元煜", "薛賀升"],
          src: require("@/assets/about/program.gif"),
        },
        {
          job: "Music",
          profile: ["陳向琥"],
          src: require("@/assets/about/music.gif"),
        },
      ],
    };
  },
  components: {},
  computed: {},
  mounted() {},
};
</script>
