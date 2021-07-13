<template>
  <div id="app">
  <Welcome msg='Welcome'/>
    <div id="SignButts">
      <v-btn x-large rounded color=#5d1889 dark>
        SIGN IN
      </v-btn>
      <v-btn x-large rounded color=#5d1889 dark>
        SIGN UP
      </v-btn>
    </div>
    <v-form class="container">
      <SignInForm/>
    </v-form>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import SignInForm from './components/SignInForm.vue'

export default {
  name: 'App',
  components: {
    Welcome,
    SignInForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
