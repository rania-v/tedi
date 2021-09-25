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
      console.log(state);
      Vue.set(state, "token", payload)
    },

    STORE_CLIENT(state, payload){
      console.log('payload: ', payload);

      Vue.set(state, "_id", payload._id)
      Vue.set(state, "isAdmin", payload.isAdmin);

      Vue.set(state, "firstName", payload.personal.firstName);
      Vue.set(state, "lastName", payload.personal.lastName);
      Vue.set(state, "image", payload.personal.image);
      Vue.set(state, "birthday", payload.personal.birthday);
      Vue.set(state, "country", payload.personal.country);
      Vue.set(state, "friends", payload.personal.friendsList);
      Vue.set(state, "frequests", payload.personal.frequests);
      Vue.set(state, "myJobs", payload.personal.myJobsAds);
      Vue.set(state, "myChats", payload.personal.myChats);
      Vue.set(state, "posts", payload.personal.myPosts);
      Vue.set(state, "notifications", payload.personal.myNotifications);

      Vue.set(state, "phoneNum", payload.contact.phoneNum);
      Vue.set(state, "profEmail", payload.contact.profEmail);
      Vue.set(state, "perEmail", payload.contact.perEmail);

      Vue.set(state, "resume", payload.attrs.resume);
      Vue.set(state, "workplace", payload.attrs.firstName);
      Vue.set(state, "skills", payload.attrs.skill_list);
      Vue.set(state, "profession", payload.attrs.profession);
      console.log('state: ', state)
    },

    DELETE_TOKEN(state){
        Vue.set(state, "token", null);
    }
}