<template>
  <div class="pa-3">
      <div class="text-center">
<v-avatar height="120" max-width="400" width="90%" class="mx-auto">
    <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1643972151/clients/logo_extended_r4jl7p.png"></v-img>
</v-avatar>
                <p class="headline mb-0 font-weight-bold grey--text text--darken-2">Nomination Form</p>
                <p class="body-1 font-weight-medium grey--text text--darken-0">Choose a category to proceed.</p>

      </div>
      <v-card width="100%" tile  style="
          box-shadow: 1px 6px 20px 8px #6a6a6a;
      z-index:99;position:fixed;bottom:0;left:0">
        
    <v-flex xs12>
<v-layout  wrap class="pb-3">
    <v-flex class="body-2 d-flex justify-center align-center pa-2" xs12 >
        <p class="caption text-capitalized text-center mb-0 font-weight-bold grey--text text--darken-3">POWERED BY  <span>
            <v-avatar width="100" height="auto" tile class="mb-1  mx-auto">
    <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1643977448/clients/E_dey_app_19.5_by_20_1_ayherr.jpg"></v-img>
</v-avatar>
</span>
</p>
    </v-flex>
    <v-flex style="max-width:400px;width:100%"  xs12 class="justify-space-around mx-auto d-flex">
               <v-avatar onclick="window.location.href = 'https://play.google.com/store/apps/details?id=com.edeyapp.edey';"
               color="black" style="border-radius:50px" max-width="300" width="45%" height="auto" class="mb-1 pa-3">
    <v-img src="https://res.cloudinary.com/dnqw7x4bp/image/upload/v1590915293/app-store-google.png"></v-img>
</v-avatar>

               <v-avatar onclick="window.location.href = 'https://apps.apple.com/us/app/e-dey-app/id1533515887';"
               color="black" style="border-radius:50px" max-width="300" width="45%" height="auto" class="mb-1 pa-3">
    <v-img src="https://res.cloudinary.com/dnqw7x4bp/image/upload/v1590915293/app-store-apple.png"></v-img>
</v-avatar>

    </v-flex>
</v-layout>
    </v-flex>
      </v-card>
    <v-card max-width="500px"  min-height="700px"  flat tile class="ma-auto pa-4">
     <v-select
          @change="openDialog"
          v-model="sugModel"
          :items="sug"
          
          filled label="Campus SUG Award Category"
          outlined
        ></v-select>
     <v-select
          @change="openDialog"
          v-model="facultyModel"
          :items="faculty"
          
          filled label="Campus Faculty Award Category"
          outlined
        ></v-select>
     <v-select
          @change="openDialog"
          v-model="departmentalModel"
          :items="departmental"
          
          filled label="Campus Departmental Award Category"
          outlined
        ></v-select>
     <v-select
          @change="openDialog"
          v-model="secularModel"
          :items="secular"
          
          filled label="Secular Award Category"
          outlined
        ></v-select>
        <p class="text-center orange--text"><strong class="orange--text text--darken-3"> Note : 
          </strong>
           All Nominees/Candidates <strong class="orange--text text--darken-3">Must Be Active</strong> in Any Category he or She Will Be Nominated In and Also <strong class="orange--text text--darken-3">Must</strong> Be A Student of Any Of the Institutions in The South East.
           </p>
    </v-card>
    <v-dialog persistent max-width="400" v-model="dialog">
        <v-card v-if="dialog">
            <v-form  onSubmit="return false;" class="pa-4 text-center" ref="form">
                                <p class="headline mb-0 font-weight-bold grey--text text--darken-2">Nomination For {{category}}</p>

                <p class="body-1 font-weight-medium grey--text text--darken-0">Fill in the correct details and Press submit.</p>
 <v-text-field
            v-model="name"
            :disabled="loading"
            label="Nominee Full Name"
            outlined
            :rules="[
                    rules.required,
                    rules.required2,
                    rules.min
                        ]"
            validate-on-blur
          ></v-text-field>
 <v-text-field
            v-model="school"
               :rules="[
                    rules.required,
                    rules.required2,
                    rules.min
                        ]"
            :disabled="loading"
            label="Nominee School/Institution"
            outlined
            validate-on-blur
            
          ></v-text-field>
 <v-text-field
            v-model="whatsapp"
            validate-on-blur
               :rules="[
                    rules.required,
                    rules.min2
                        ]"
            :disabled="loading"
            label="Nominee Whatsapp Number"
            outlined
            
          ></v-text-field>
 <v-text-field
            v-model="phone"
            validate-on-blur
               :rules="[
                    rules.required,
                    rules.min2
                        ]"
            :disabled="loading"
            label="Nominee Phone Number"
            outlined
            
          ></v-text-field>
        <v-text-field
            v-model="email"
            validate-on-blur
               :rules="[
                    rules.required,
                    rules.min,rules.email
                        ]"
            :disabled="loading"
            label="Nominee Email address"
            outlined
            
          ></v-text-field>
                          <p class="body-1 mb-1 font-weight-medium red--text text--darken-0">{{error}}</p>

<v-btn @click="close()" rounded :disabled="loading"  large color="grey darken-3" class="font-weight-bold white--text mx-1 mb-12 my-4">cancel</v-btn>
<v-btn @click="submit()" rounded :loading="loading" dark large color="orange darken-4" class="font-weight-bold mx-1 mb-12 white--text my-4">submit</v-btn>
            </v-form>
        </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
        loading: false,
        dialog: false,
        category: '',
        error: '',
        email: '',
        school: '',
        whatsapp: '',
        phone: '',
        name: '',
        sugModel : '',
        facultyModel : '',
        departmentalModel : '',
        secularModel : '',
           rules: {
      required: value => !!value || "Required.",
      required2: value =>
        !/[^a-zA-Z0-9&\-(),'.\s]/.test(value) ||
        "Only letters, numbers, & and bracket are allowed.",
      min2: value => value.length >= 10 || "Min 10 characters",
      min: value => value.length >= 3 || "Min 3 characters",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    },
        secular: [
'Campus Sport personality of the year',
'Campus Entrepreneur of the Year ',
'Campus Blogger of the year',
'Campus Fashionable Student of the year',
'Campus Political Personality of the year',
'Campus Fashion Designer of the year',
'Campus Comedian of the year',
'Campus Photographer of the year ',
'Campus Beauty Queen of the year',
'Campus Model of the year ',
'Campus Musical Artist of the year ',
'Campus Event Planner of the year ',
'Campus DJ of the year',
'Campus Influential Student of the year',
'Campus Dance group of the year',
'Campus Media influencer of the year',
'Campus Entertainer of the year',
'Campus Best Dancer of the year',
'Campus Best Actor and Actress of the year (Male&Female)',
'Campus Best Student Owned Brand of the year',
'Campus Event of the year'
        ],
        faculty: [
            'Faculty President of the year',
'Faculty Vice President of the year',
'Faculty Director of Social Of the Year '
        ],
        departmental : [
'Departmental President of the year',
'Department Vice President of the year',
'Course Rep Of the Year'
        ],
        sug: [
            'President of the year',
'Vice President of the year',
'Director of Socials',
'Director of Sports '
        ]
    };
  },
  methods:{
      openDialog(e){
          console.log(e)
          this.category = e
          this.dialog = true
      },
      close(){
            this.sugModel = ''
            this.facultyModel = ''
            this.departmentalModel = ''
            this.secularModel = ''
            this.school = ''
            this.email = ''
            this.name = ''
            this.phone = ''
            this.whatsapp = ''
            this.category = ''
            this.dialog = false
      },
      submit(){
          if(this.$refs.form.validate()){
              
              this.loading = true
              this.error = ''
     
        axios.post('https://foodrepublic.herokuapp.com/api/seca', {
            institution: this.school,
            email: this.email,
            name: this.name,
            phone: this.phone,
            whatsapp: this.whatsapp,
            category: this.category
        }).then((res)=>{
            console.log(res)
      alert('Your Nomination Has Been Submited, Thank You.')
               this.close()
               this.loading = false
        }).catch(()=>{
               this.close()
            this.loading = false
            alert('An error occured')
        })
          }else{
              this.error='Kindly check that you filled the form correctly'
          }
      }
  }
}
  </script>