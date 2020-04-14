<template>
  <div>
    <Appbar v-if="showCompletelyMenu" />
    <Sidebar />
  </div>
</template>

<script>
import Appbar from "@/components/Toolbar/Appbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";

export default {
  components: {
    Appbar,
    Sidebar
  },
  computed: {
    showCompletelyMenu() {
      return this.$vuetify.breakpoint.lgAndUp;
    }
  },
  data() {
    return {};
  }
};
</script>
