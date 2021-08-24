<template>
  <div>
    <Welcome msg='Welcome'/>
    <div id="wlcm">
      <div id="SignButts">
        <v-btn x-large rounded color=#5d1889 dark @click="signup=true">
          SIGN UP
        </v-btn>
        <v-btn x-large rounded color=#5d1889 dark @click="signin=true">
          SIGN IN
        </v-btn>
      </div>
    </div>
    <v-form id="signupform" class="container" v-if="signup==true">
      <SignUpForm/>
    </v-form>
    <v-form id="signipform" class="container" v-if="signin==true">
      <SignInForm/>
    </v-form>
    <!-- <v-btn v-on:click="this.$router.push('HomePage') ">HOME PAGE</v-btn> -->
    <router-link to="/HomePage">HomePage</router-link>
  </div>
</template>

<script>
import Welcome from './Welcome.vue'
import SignUpForm from './SignUpForm.vue'
import SignInForm from './SignInForm.vue'
// import HomePage from './HomePage.vue'

export default {
  name: 'wlcm',
  components: {
    Welcome,
    SignUpForm,
    SignInForm,
    // HomePage
  },
  data () {
    return {
      signup: false,
      signin: false,
      // images: ["../images/plane.jpg","../images/blueberries.jpg","../images/stars.jpg",
      //         "../images/buildings.jpg","../images/cupcakes.jpg","../images/mountains.jpg"]
      images: ["../images/1.jpg","../images/2.jpg","../images/3.jpg",
        "../images/4.jpg","../images/5.jpg","../images/6.jpg","../images/.jpg"]
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
  background: url(../images/1.jpg);
  height: 100%;    
      width: 100%
/* opacity: 0.5; */
}
</style>