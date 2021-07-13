import Vue from 'vue'
import App from './App.vue'
import Vuetify from '../node_modules/vuetify';
Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  // vuetify : new Vuetify(),
  render: h => h(App),
}).$mount('#app')
