import Vue from 'vue'
import App from './App.vue'
// import HomePage from '../src/components/HomePage.vue'
import Vuetify from '../node_modules/vuetify'
// import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'

import '../src/styles/app.css';
import router from "./router"


Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({

  router, 
  vuetify : new Vuetify(),
  render: h => h(App),
  components: {
    // HomePage: require('./components/HomePage.vue'),
  }
}).$mount('#app')


