import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: [

    
    {
      //vendor pages
      path: "",
      component: () =>
        import(
          /* webpackChunkName: "vendoradmin" */ "./components/vendoradmin.vue"
        ),
  
      props: true,
      children: [
   
        {
          path: "/",
          component: () =>
            import(
              /* webpackChunkName: "vendortable" */ "./components/seca.vue"
            )
        },
        {
          path: "/seca",
          component: () =>
            import(
              /* webpackChunkName: "vendortable" */ "./components/seca.vue"
            )
        },



      ]
    },

 
    {
      path: "*",
      name: "404",
      component: () =>
        import(
          /* webpackChunkName: "vendoradmin" */ "./components/vendoradmin.vue"
        )
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});


export default router;
