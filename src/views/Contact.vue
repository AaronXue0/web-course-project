<template>
  <v-app class="contact">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/contact/index.vue";
export default {
  components: { index },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.contact {
  background-color: transparent !important;
  max-height: 764px;
}
</style>
