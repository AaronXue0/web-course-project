<template>
  <v-app class="sidebar hidden-md-and-down">
    <v-app class="sidebar-l">
      <v-btn icon v-for="(item, index) in contactIcons" :key="index" to>
        <v-icon class="side-icon">{{ item.icon }}</v-icon>
      </v-btn>
      <span class="contact-text">find us on</span>
    </v-app>
    <v-app class="sidebar-r">
      <span class="contact-text-r"
        >中 | <span class="en-span">EN</span> | 日 | 한</span
      >
    </v-app>
  </v-app>
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
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Baloo+Paaji+2:wght@500&family=Noto+Sans:wght@700&display=swap");
.sidebar {
  position: fixed;
}
.sidebar-l {
  position: fixed;
  top: 35%;
  left: 2%;
  z-index: 999;
}
.sidebar-r {
  position: fixed;
  top: 40%;
  right: 3%;
  z-index: 999;
}
.side-icon {
  transform: rotate(270deg);
}
.contact-text {
  position: relative;
  top: 2%;
  writing-mode: vertical-lr;
  text-orientation: sideways;
  transform: rotate(180deg);
  letter-spacing: 3px;
}
.contact-text-r {
  font-size: 12px;
  font-family: "Noto Sans", cursive;
  position: relative;
  top: 2%;
  writing-mode: vertical-lr;
  letter-spacing: 3px;
}
.en-span {
  writing-mode: horizontal-tb;
  letter-spacing: 1px;
}
</style>
