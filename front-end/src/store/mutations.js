import Vue from "vue"


export default{
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
      Vue.set(state, "workplace", payload.attrs.workplace);
      Vue.set(state, "skills", payload.attrs.skill_list);
      Vue.set(state, "profession", payload.attrs.profession);


      // Vue.set(state, "postsToSee", payload.postsToSee);
      
      console.log('state: ', state)
    },
    
    STORE_FEED_JOBS(state, payload) {
      Vue.set(state, "postsToSee", payload.postsToSee);
      Vue.set(state, "jobsToSee", payload.jobsToSee);
    },

    DELETE_FRIEND(state, payload){
      let friends = state.friends;
      let newf = [];
      for(let i in friends.list){
        if(i != payload)
          newf.push(i)
      }
      friends.list = newf;
      Vue.set(state, 'friends', friends);
    },

    DELETE_FREQUEST(state, payload){
      let reqs = state.frequests;
      let newreqs = [];
      for(let i in reqs){
        if(i != payload)
          newreqs.push(i)
      }
      Vue.set(state, 'frequests', newreqs);
    },

    DELETE_TOKEN(state){
        Vue.set(state, "token", null);
        localStorage.ls='';
    },

    DELETE_CLIENT(state){
      // console.log('payload: ', payload);

      Vue.set(state, "_id", null)
      Vue.set(state, "isAdmin", null);

      Vue.set(state, "firstName", null);
      Vue.set(state, "lastName", null);
      Vue.set(state, "image", null);
      Vue.set(state, "birthday", null);
      Vue.set(state, "country", null);
      Vue.set(state, "friends", null);
      Vue.set(state, "frequests", null);
      Vue.set(state, "myJobs", null);
      Vue.set(state, "myChats", null);
      Vue.set(state, "posts", null);
      Vue.set(state, "notifications", null);

      Vue.set(state, "phoneNum", null);
      Vue.set(state, "profEmail", null);
      Vue.set(state, "perEmail", null);

      Vue.set(state, "resume", null);
      Vue.set(state, "workplace", null);
      Vue.set(state, "skills", null);
      Vue.set(state, "profession", null);
      Vue.set(state, "postsToSee", null);
      Vue.set(state, "jobsToSee", null);
      // console.log('state: ', state)
    },
}