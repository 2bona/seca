<template>
  <v-app>
    <v-container fluid class="pa-0">
      <Offline @detected-condition="handleConnectivityChange"> </Offline>
   <v-snackbar
        :value="snackbar.status"
        :timeout="5000"
        :color="snackbar.color"
        bottom class="font-weight-bold"
        left x-small
        multi-line
        style="z-index:99999"
      >
        {{ snackbar.text }}
        <v-btn dark icon @click="$store.dispatch('status1', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
    
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-container>
  </v-app>
</template>
<style>
.texti {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff8a00),
    to(#da1b60)
  );
  background: linear-gradient(to right, #ff8a00, #da1b60);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding: 4px 9px !important;
  justify-content: space-around !important;
}
.skeleton{
  
    width: 165px;
    height: 100%;
    background: #f5f5f5;
    border-radius: 26px;

}@keyframes s3 {to{transform: rotate(1turn)}}
#loadereff{
      width: 50px;
    height: 50px;
    border-radius: 50%;
    background: conic-gradient(#0000 10%,#d4d4d4);
    mask: radial-gradient(farthest-side,#0000 calc(100% - 15px),#000 0);
    animation: s3 0.4s infinite linear;
}
body,
html {
  overflow-x: hidden;
}
</style>
<script>
import Offline from "v-offline";
import axios from "axios";
import wrapper from "axios-cache-plugin";

let http = wrapper(axios, {
  maxCacheSize: 15, // cached items amounts. if the number of cached items exceeds, the earliest cached item will be deleted. default number is 15.
  ttl: 60000, // time to live. if you set this option the cached item will be auto deleted after ttl(ms).
  excludeHeaders: true // should headers be ignored in cache key, helpful for ignoring tracking headers
});

export default {
  name: "App",
  components: {
    Offline
  },
  data() {
    return {
      timeout: 6000
    };
  },
  computed: {
    snackbar() {
      return this.$store.getters.getSnackbar;
    },
    snackbar2() {
      return this.$store.getters.getSnackbar2;
    }
  },
  mounted(){
 this.navb2()
  },
  methods: {
        navb2() {
      const sn = this;
        let url = "/reply/all";
        http({
          url: url,
          method: "get"
        })
          .then(response => {
            sn.$store.dispatch("setReplys", {
              replys: response.data.replys
            });
          })
          .catch(function(error) {
            console.log(error);
          });
    },
    handleConnectivityChange(status) {
      if (!status) {
        // this.$router.push("/offlinepage");
      }
    },
    action(x, y) {
      if (x === 1) {
        this.$store.dispatch("order", {
          id: y,
          action: null
        });
      } else if (x === 2) {
        this.$router.push("/adminedit");
      } else {
        this.$router.push("/");
      }
      this.$store.dispatch("status2", false);
    }
  } 
};
</script>
