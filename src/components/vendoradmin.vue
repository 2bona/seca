<template>
  <v-card flat tile color="">
    <v-content style="overflow-x:hidden">
      <router-view></router-view>
    </v-content>
  </v-card>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted(){
        this.$store.dispatch("loadVendor")
  }
};
</script>
