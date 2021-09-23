<template>
  <v-app id="welcome">
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <!-- <Welcome msg='Welcome'/> -->
      <v-row>
        <v-col cols="8" class="d-flex align-center">
          <v-card class=" pa-4 rounded-xl ma-3 purple accent-4" >
            <v-row>
              <v-col cols="6">
                <v-container >

                  <v-card-title id="wlcm_msg">Welcome To FaceIn</v-card-title>
                  <v-subtitle class="d-flex justify-start ma-2 pa-2" id="wlcm_msg" style="font-size: 25px; text-align:left;">
                    BE PART OF THE COMMUNITY NOW!<br> Connect with other people, promote your work, hire and get hired!
                  </v-subtitle>
                  <v-img :src="wlcm_img" max-width="100%" max-height="350px" class="ma-0 pa-0"></v-img>
                </v-container>
              </v-col>
              <v-col cols="6" class="d-flex align-center">
                <v-container>
                    <v-subtitle class="d-flex justify-center ma-2 pa-2" id="wlcm_msg" style="font-size: 30px; text-align:center;">
                      Not a member yet?<br> Sign Up now!
                    </v-subtitle>
                      <v-btn x-large rounded elevation="0" color=pink dark   v-on:click="signup=true">
                        SIGN UP
                      </v-btn>
                    <v-dialog max-width="600px" v-model="signup">

                            <SignUpForm @close_in="signup=false"/>

                    </v-dialog>
                </v-container>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="4" class="d-flex align-center pl-0">
          <SignInForm/>
        </v-col>
      </v-row>
        <v-spacer></v-spacer>

    <router-link :to="{ name: 'Home', params: {page_title : 'Αρχική Σελίδα' } }">HomePage</router-link>
  </v-app>
</template>

<script>
// import Welcome from './Welcome.vue'
import SignUpForm from './SignUpForm.vue'
import SignInForm from './SignInForm.vue'
// import HomePage from './HomePage.vue'

export default {
  name: 'wlcm',
  components: {
    // Welcome,
    SignUpForm,
    SignInForm,
    // HomePage
  },
  data () {
    return {
      // welcome_message: '',
      signup: false,
      signin: false,
      wlcm_img: require('../illustrations/118_teal.svg'),
      // images: ["../images/plane.jpg","../images/blueberries.jpg","../images/stars.jpg",
      //         "../images/buildings.jpg","../images/cupcakes.jpg","../images/mountains.jpg"]
      images: ["../images/1.jpg","../images/2.jpg","../images/11.jpg",
        "../images/4.jpg","../images/5.jpg","../images/6.jpg","../images/11.jpg"]
    };
  },
  methods: {
    random_image() {
      return `url("${
        this.images[Math.floor(Math.random() * this.images.length)]
      }")`;
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(210, 29%, 24%);
  /* margin-top: 60px; */
}

#welcome {
  background: url(../illustrations/br.jpg);
    /* background: url(../images/9.jpg); */

  background-size:cover;
  /* background: #c9b6ec;  */
/* background: -webkit-linear-gradient(to right, #f5ae50, #489fda, #b713e9);  */
/* background: linear-gradient(to top, #ffffff, #ffffff,#ffffff, #b713e9); */
}

#wlcm_msg {
  /* font-family: 'Bai Jamjuree', sans-serif; */
  font-family: 'Fira Sans Extra Condensed', sans-serif;  color: aliceblue;
  font-size: 60px;
}

#SignButts {
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30%;
  margin-right: 30%;
  padding: 5%;
}

#wlcm {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

#signupform {
  z-index: 1000;
  /* padding-top: 100px; */
}

body {
  margin: 0;
  /* background: #ebe0f8; */
  /* background: rgb(243, 230, 241); */
  /* background-image: url(../images/possible_wall_3.jpg); */
  /* background-image: url(../images/possible_wall_v2.jpg); */
  /* background-image: url(../images/2.jpg); */
  background: url(../images/9.jpg);
  
  height: 100%;    
      width: 100%
/* opacity: 0.5; */
}
</style>