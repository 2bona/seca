/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import Vue from "vue";
import Apps from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(router);

new Vue({
  vuetify,
  store,
  router,

  render: (h) => h(Apps),
}).$mount("#app");
