<template>
<div>
    <div class="black image" style="  overflow:hidden;align-items: center;display:flex;
    background-size: 480px;position:;height:100vh;width:100%;background-image: url(https://res.cloudinary.com/crushcontest-com/image/upload/v1626430516/GalleryFiles/IMG-20210715-WA0026-02_y3zq9u.jpg)">
    <div style="
        position: relative;
    height: 100%;width:100%;
        max-width: 431px;
    max-height: 654px;
    margin: auto;">

  <div style="left: -57px;
    height: 132px;
    width: 220px;
    bottom: 0;
    background-position: center;
    background-image: url(https://res.cloudinary.com/crushcontest-com/image/upload/v1626436671/GalleryFiles/WhatsApp_Image_2021-07-15_at_8.41.28_AM_kdh4c1.jpg);
    background-size: cover;
    position: absolute;"></div>
<div class="image animate" style="    transform: scaleX(-1);
    position: absolute;    width: 484px;
    left: -381px;
    height: 280px;
         
   filter: blur(1px);
    top:15%;background-image:url(https://res.cloudinary.com/crushcontest-com/image/upload/v1626428608/GalleryFiles/PngItem_2671298_utelat.png)"></div>
<div class="image animate" style="    height: 280px;
    position: absolute;
    filter: blur(6px);
    right: -45px;
    transform: rotate(301deg);
    width: 155px;
    top: -21px;
    background-image:url(https://res.cloudinary.com/crushcontest-com/image/upload/v1626428609/GalleryFiles/guitar-png-transparent-images-image-group-491351.png_okmcxn.png)"></div>
<div class="image animate" style="  height: 280px;
    position: absolute;
    right: -72px;
    transform: rotate(330deg);
    filter: blur(0px);
    width: 242px;
    bottom: -125px;background-image:url(https://res.cloudinary.com/crushcontest-com/image/upload/v1626428608/GalleryFiles/5bbda8d4a93b5-e26d62913b517efc3f42c81cab8e212e_tsqny8.png)">
    <div style="  
        position: absolute;
    font-size: 0.9rem !important;
width: 53%;
    top: 56px;
    right: 55px;
    transform: rotate(30deg);
    color: black">
<v-chip class="mb-2 elevation-5" small color="#a04e1c">
    <div id="mont" @click.stop="openCalender()" style="color: #eae4ba !important" class=" font-weight-black">Check dates</div>
</v-chip>
<v-chip small class="elevation-5" color="#a04e1c">
    <div id="mont" @click.stop="dialogEnquiry = true" style="color: #eae4ba" class=" font-weight-black">Make Enquiries</div>
</v-chip>
    </div>
    </div>
    
    </div>
</div>
<v-dialog height="100"  max-width="500px" v-model="dialogEnquiry">
  <div style="height:100%;display: flex;
    justify-content: space-evenly; ">
    <a target="_blank"  href="https://wa.me/+2347036610680?text=Hello%20Abra,%20I%20would%20love%20to%20make%20some%20enquiries.">
<v-avatar color="grey lighten-3" tile style="border-radius:12px!important;" class="elevation-15 my-2">
  <v-img contain size="60" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1626455934/GalleryFiles/whatsapplogo_rh9lq9.png"></v-img>
</v-avatar></a>
  <a target="_blank"  href="https://www.instagram.com/deejayslimv/">
<v-avatar color="grey lighten-3" tile style="border-radius:12px!important;" class="elevation-15 my-2">
  <v-img contain size="60" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1626455934/GalleryFiles/iglogo_tizcli.png"></v-img>
</v-avatar>
  </a>
    <a target="_blank" href="https://audiomack.com/deejayslimv/song/abratape" >
<v-avatar color="grey lighten-3" tile style="border-radius:12px!important;" class="elevation-15 my-2">
  <v-img contain size="60" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1626455933/GalleryFiles/audiomac_zs8crs.png"></v-img>
</v-avatar>
    </a>
  </div>
</v-dialog>
<v-dialog height="600px"  max-width="500px" v-model="dialogCalender">
  <div>

  <v-btn dark @click="dialogCalender = false" fixed right top fab><v-icon>mdi-close</v-icon></v-btn>
   <h3 v-if="$refs.calendar && dialogCalender" class="py-2 px-2 grey--text">{{ $refs.calendar.title }}</h3>
        <v-sheet dark style="" class=" mx-auto" max-width="500" height="450">
      <v-calendar dark
        ref="calendar" 
        v-model="focus"  
         :event-overlap-threshold="30"
        :events="events"
      ></v-calendar>

    </v-sheet>      <div class="py-1" style="height:60px;position:relative" >
                      <v-btn
            fab
               left
             absolute small
            color="#f5f0c9"
            @click="prev"
          >
            <v-icon color="black"  >
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            
            smll absolute small   right
            color="#f5f0c9"
            @click="next"
          >
            <v-icon color="black" >
              mdi-chevron-right
            </v-icon>
          </v-btn>
      </div>
</div>
</v-dialog>
</div>
</template>
<style> 
.image{
    background-position: center;
    background-size: contain;
    box-shadow: none;
        height: 280px;
    width: 280px;
    background-color:transparent;
    overflow:visible;
}
    .animate{
        /* animation: float 6s ease-in-out infinite; */
        }
@keyframes float {
	0% {
		transform: translatey(0px) rotate(0deg);
	}
	50% {
		transform: translatey(-20px) rotate(10deg);
	}
	100% {
		transform: translatey(0px) rotate(0deg);
	}
}

</style>
      <script>

export default {
mounted(){
},
          data(){
return {
   focus: '',
    events: [
        {
            name: 'Taken',
               start: '2021-07-16',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-07-17',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-07-24',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-07-31',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-08-07',
            timed: false,
          },
          {
              name: 'Taken',
                  start: '2021-08-13',
              timed: false,
            },
        {
            name: 'Taken',
               start: '2021-08-14',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-08-19',
            timed: false,
          },
        {
            name: 'Taken',
                start: '2021-08-20',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-08-21',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-08-27',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-08-28',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-09-09',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-09-11',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-09-25',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-01',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-02',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-03',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-08',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-09',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-10',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-15',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-16',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-23',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-27',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-28',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-10-29',
            timed: false,
          },
          {
              name: 'Taken',
                 start: '2021-11-03',
              timed: false,
            },
        {
            name: 'Taken',
               start: '2021-11-13',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-11-14',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-11-19',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-11-20',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-11-21',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-11-27',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-11-28',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-12-18',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-12-22',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-12-23',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-12-26',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-12-27',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-12-28',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-12-29',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-12-30',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2021-12-31',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2022-01-01',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2022-01-02',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2022-01-03',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2022-01-04',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2022-01-05',
            timed: false,
          },
        {
            name: 'Taken',
               start: '2022-01-06',
            timed: false,
          },
        {
            name: 'Taken',
            start: '2022-01-08',
               timed: false,
          },
      
        {
            name: 'Taken',
            start: '2022-01-15',
               timed: false,
          },
        {
            name: 'Taken',
            start: '2022-01-16',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-02-03',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-02-05',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-02-10',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-02-12',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-02-14',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-02-26',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-03-05',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-03-31',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-04-02',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-04-09',
               timed: false,
          },
  
            {
            name: 'Taken',
            start: '2022-04-16',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-04-19',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-04-20',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-04-23',
               timed: false,
          },
                    {
            name: 'Taken',
            start: '2022-04-30',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-05-08',
               timed: false,
          },
          {
            name: 'Taken',
            start: '2022-06-11',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-08-20',
               timed: false,
          },
            {
            name: 'Taken',
            start: '2022-09-03',
               timed: false,
          },
    ],
    dialogCalender: false,
    dialogEnquiry: false,
}
},
complete: {
      date (){
       return  moment().tz('Africa/Lagos').format("ddd MMM DD YYYY kk:mm:ss ZZ").replace("+0100", "GMT+0100")
    } ,
},
methods: {
  openCalender(){
this.dialogCalender = true
        console.log(this.$refs.calendar.$options)

  },
      prev () {
        console.log(this.$refs.calendar.$options)
        this.$refs.calendar.prev()
      },
      next () {
        console.log(this.$refs.calendar.$options)
        this.$refs.calendar.next()
      },
}
}
</script>