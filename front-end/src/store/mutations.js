import Vue from "vue"


export default{
    TEST(state, payload){
        console.log('all good ', payload)
    },

    SET_LOADING(state, payload){
		Vue.set(state, "isLoading", payload)
    },

    SET_LOGEDIN(state, payload){
		Vue.set(state, "isLogedIn", payload)
    },
    
    STORE_TOKEN(state, payload){
		Vue.set(state, "token", payload)
    },

    STORE_CLIENT(state, payload){
		Vue.set(state, "token", payload)
    },

    DELETE_TOKEN(state){
        Vue.set(state, "token", null);
    }
}