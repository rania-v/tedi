import Vue from 'vue';
import App from './App.vue';
import store from "./store";
// import HomePage from '../src/components/HomePage.vue'
import Vuetify from '../node_modules/vuetify'
// import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'

import '../src/styles/app.css';
import router from "./router"
// const fs = require('fs')

// require('../vue.config.js')

import toXML from 'jstoxml';
Vue.use(toXML)

Vue.use(Vuetify);

Vue.config.productionTip = false
Vue.config.devServer = {};
// Vue.config.devServer.https = true;
Vue.config.devServer.public = 'http://localhost:8080/';
// Vue.config.devServer.options={
  // key: fs.readFileSync("./secure/localhost-client-key.pem"),
  // cert: fs.readFileSync("./secure/localhost-client.pem"),
  // ca: fs.readFileSync("./secure/mkcert_rootCA.crt"),
// }
// Vue.config.devServer.public = 'https://localhost:8080/';;
console.log(Vue.config)

// Vue.config = Vue

new Vue({
  store,
  router,
  vuetify : new Vuetify(),
  render: h => h(App),
  components: {
    // HomePage: require('./components/HomePage.vue'),
  }
}).$mount('#app')


