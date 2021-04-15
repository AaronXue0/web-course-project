<template>
  <div>
    <div style="display: block; height: 90px"></div>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="8">
          <tab />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import tab from "@/components/about/tab.vue";
export default {
  components: { tab },
  computed: {},
  mounted() {},
};
</script>
