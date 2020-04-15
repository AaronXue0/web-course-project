<template>
  <v-card color="#1b1b1b" dark height="100%" width="100%" class="footer-card">
    <v-img
      :src="require('@/assets/logo-b.png')"
      class="starry-img-icon"
      height="10%"
      width="10%"
    ></v-img>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="4">
        <span class="about-starry-span">
          Starry is a gaming company located in Taipei, working hard at
          developing original IPs for players to enjoy. We hope our insistence
          on the highest of standards and the layers of experience we provide
          are able to convey the rich and enticing values the gaming industry
          has to offer, as well as touch our players on a deep level. If you
          wish to know more, feel free to contact us.
        </span>
        <br v-for="i in 2" :key="i" />
        <span>service@project.starry.game</span>
      </v-col>
      <v-col class="footer-list">
        <v-btn text>Home</v-btn>
        <br />
        <v-btn text>News</v-btn>
      </v-col>
      <v-col class="footer-list">
        <v-btn text>Games</v-btn>
        <br />
        <div class="games-item">
          <div v-for="(item, index) in gamesItems" :key="index">
            <v-btn text>{{ item.name }}</v-btn>
            <br />
          </div>
        </div>
      </v-col>
      <v-col class="footer-list">
        <v-btn text>Evnets</v-btn>
        <br />
        <v-btn text>Store</v-btn>
        <br />
      </v-col>
      <v-col class="footer-list">
        <v-row>See Also...</v-row>
        <v-row class="find-us-row">
          Find Us On
          <div class="find-us-icon-div">
            <v-btn icon v-for="(item, index) in contactIcons" :key="index">
              <v-icon>{{ contactIcons[2 - index].icon }}</v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      starryIcon: "mdi-crop-square",
      contactIcons: [
        { icon: "mdi-youtube", href: "" },
        { icon: "mdi-twitter", href: "" },
        {
          icon: "mdi-facebook",
          href:
            "https://www.facebook.com/Game-Starry-109356847225732/?notif_id=1583165226859419&notif_t=aymt_biz_growth_page_admin_guidance_tip&ref=notif"
        }
      ],
      gamesItems: [
        { name: "Lomo" },
        { name: "Writer" },
        { name: "Memory Void" },
        { name: "KeepFlying" }
      ]
    };
  },
  methods: {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@900&display=swap");
.footer-card {
  font-family: "Noto Sans TC", sans-serif;
}
.starry-img-icon {
  position: relative;
  margin: 70px 20px 20px 120px;
}
.about-starry-span {
  font-size: 12px;
}
.footer-list {
  position: relative;
  top: -70px;
  padding-left: 10px;
}
.games-item {
  position: relative;
  padding-left: 12px;
}
.find-us-row {
  position: relative;
  padding-top: 100px;
}
.find-us-icon-div {
  position: relative;
  padding-top: 50px;
  left: -95px;
}
</style>
