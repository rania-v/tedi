import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  key: "ls",
  storage: window.localStorage,
});

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [vuexLocal.plugin],
})
