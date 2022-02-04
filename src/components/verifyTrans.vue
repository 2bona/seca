<template>
  <div style="    margin: auto;
    max-width: ;">
    <v-row class="pa-3 grey darken-4 mb-12 px-5">
      <v-flex xs12 style="
    max-width: 924px;
    margin: auto;
    width: 100%;
"  class="my-3 grey darken-4 px-0">
        <h1
          style="  position:fixed; z-index:1;
"
          class=" title text-uppercase mb-4 font-weight-black  grey--text"
        >
           Transactions ({{transactions.length}})
        </h1>
        <keep-alive>

       
        <v-card
        v-if="defer(1)"
          min-height="80vh"
          style="overflow: scroll;max-width: 724px;border-radius: 25px; top: 48px; z-index:2;    margin-bottom: 180px;"
          class="mx-auto elevation-20 grey darken-4 pt-4 pb-8" 
        >
                  <keep-alive>

          <v-data-table

            v-if="!loading"
            :mobile-breakpoint="30"
            :headers="headers"
            v-model="selected"
            :items="transactions"
            dense dark
            class="mx-auto"
            style="max-width: 724px;"
            :expanded.sync="expanded"
            :search="search"
            item-key="tracking_id"
            disable-pagination
            hide-default-footer
          >

      
           <template  v-slot:item.reference="{ item }"> <h2 class="body-1 grey--text text--darken-0 font-weight-bold text-capitalize">
             #{{item.reference}}
             </h2>
           </template>
           <template  v-slot:item.created="{ item }"> 
              <v-btn rounded :loading="loadid == item.id" small  :color="item.status? 'green': ''" @click="verfiyTransaction(item)"  class="ma-2">
              <v-icon size="12">mdi-check</v-icon>
              </v-btn>
           </template>
           <template  v-slot:item.amount="{ item }"> <h2 class="body-1 grey--text text--darken-0 font-weight-bold text-capitalize">
             <v-icon color="grey darken-0" size="15">mdi-currency-ngn</v-icon>{{item.amount | price}}
             </h2>
           </template>
           <template  v-slot:item.status="{ item }"> <h2 class="body-1 grey--text text--darken-0 font-weight-bold text-capitalize">
             {{item.status}}
             </h2>
           </template>

            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">{{ item }}</td>
            </template>
          </v-data-table>
            
          </keep-alive>
          <div 
            v-if="loading"
          style="
    height: 30vh;
    display: flex;
    justify-content: space-around;
">
          <v-progress-circular
            color="grey lighten-1"
            class="ma-auto"
            size="80"
            width="15"
            indeterminate
          ></v-progress-circular>
            
          </div>
            <div class="text-center">
    <v-pagination
      v-model="current_page"
      :length="total_page"
      :total-visible="7"
    ></v-pagination>
  </div>
        </v-card>
         </keep-alive>
      </v-flex>
    </v-row>
    <!-- <div style="position:fixed;width:100%; bottom:49px">
     <v-progress-linear color="grey" v-show="orderLoad" :indeterminate="orderLoad"></v-progress-linear>

</div> -->

         <v-overlay
                  
                  opacity="0.3"
                  z-index="999"
                  :value="loadingNow"
                >
                    <v-progress-circular
            color=""
            class="ma-auto"
            size="80"
            width="15"
            indeterminate
          ></v-progress-circular>
                </v-overlay>
  </div>
</template>
<style>
.v-data-table > .v-data-table__wrapper > table > thead > tr > th, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
    font-size: 16px!important;
    text-transform: uppercase;
}
.v-data-table-header th.sortable:first-child{
      padding: 0px 0px 0px 14px!important;
}
.v-data-table-header th.sortable{
      padding: 0 5px!important;
}
.v-data-table-header{
      position: sticky;
      top: 0;
}
</style>
<script>
import axios from "axios";

import Defer from "../mixins/Defer.js";


export default {
  mixins: [Defer()],
  data() {
    return {
      dialog: false,
      orderLoad: false,
      busy: false,
      statusLoad: false,
      loadingVend: null,
      fee: [],
      content: "",
      cities: [],
      expanded: [],
      loadingNow: false,
      dialog2: false,
      selected: [],
      loading: false,
      delLoader: false,
      dialog3: false,
      btn: false,
      pageClose: false,
      valid: true,
      delDialog: false,
      loadid: "",
      clickedId: "",
      listener: "",
      search: "",
      headers: [
          { align: "right", text: "Amount", value: "amount" },
        { align: "left", text: "Ref", value: "reference" },
        { align: "right", text: "Status", value: "status" },
        { align: "left", text: "", value: "created" }
      ],
          numberRules: [
        (v) => v == 0 ? true : !!v  || "Required.",
        (v) => /^[0-9]*$/.test(v) || "Value must be only numbers",
      ],
      dialog4: false,
       rules: {
      required: value => !!value || "Required.",
      required2: value =>
        !/[^a-zA-Z0-9&\-(),'.\s]/.test(value) ||
        "Only letters, numbers, & and bracket are allowed.",
      min: value => value.length >= 3 || "Min 3 characters",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    },
      radios: "Thank you soo much, we will keep improving"
    };
  },
   computed: {
    users() {
      return this.$store.getters.getVendorList;
    },
      vendor() {
      return this.$store.getters.getVendor;
    },
        transactions: {
      get() {
      return this.$store.getters.getTransactions;

      },
      set(data) {
      return this.$store.dispatch('setTransactions', data);
      }
    },
  },
  destroyed(){
    // this.listener.remove();
  },
  mounted() {
    // App.removeAllListeners();
    // this.listener = App.addListener("backButton", () => {
    //     this.$router.go(-1);
    //     return;
    // });
    const sn = this;
        sn.navb();
  },
  methods: {
    verfiyTransaction(x) {
        if (!this.busy) {
            
        
            this.busy = true
        this.loadid = x.id
       axios.post("/transaction/verify_trans", {
           amount: x.amount,
          reference: x.reference
        })
        .then((res)=>{
            this.loadid = null
        this.busy = false
             this.$store.dispatch("snack", {
                 color: "blue",
            text: res.data
          });
          this.transactions = []
          this.navb()
        }).catch((err)=>{
            this.loadid = null
        this.busy = false
              this.$store.dispatch("snack", {
            color: "red",
            text: err
          });
        })
        }
        },
    navb() {
      if (this.transactions.length < 1) {
        this.loading = true
          axios
        .get("/transaction/get")
        .then(res => {
          this.loading = false
          this.transactions = res.data.msg.data;
        }).catch(()=>{
            this.loading = false
        })
      }
    },
  }
};
</script>
