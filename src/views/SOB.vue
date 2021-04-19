<template>
  <v-app class="sob">
    <index />
  </v-app>
</template>

<script>
import index from "@/components/sob/index.vue";
export default {
  components: { index },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style>
.sob {
  background-color: transparent !important;
  max-height: 3764px;
}
</style>
