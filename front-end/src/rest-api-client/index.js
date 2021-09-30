const https = require('https');
// const fs = require('fs');
// const http = require('http');
const axios = require('axios');
// const fs = require('fs');
// require('dotenv').config();
const requests = require('./requests');

// const apiUrl = `http://${process.env.HOSTNAME}:${process.env.PORT}/api-control`;
// const apiUrl = 'https://127.0.0.1:3001/api';
const apiUrl = 'http://127.0.0.1:3001/api';

const agent = new https.Agent({
    // key: fs.readFileSync("../../back-end/secure/key.pem"),
    // cert: fs.readFileSync("../../back-end/secure/cert.pem"),
    // ca: fs.readFileSync("./secure/mkcert_rootCA.crt"),
  // const agent = new http.Agent({
    rejectUnauthorized: false, // (NOTE: this will disable client verification)
})

axios.defaults.options = agent;

// console.log('loco: ',localStorage)
// console.log('loco: ',JSON.parse(localStorage.ls).token)
var localToken = localStorage.ls ? JSON.parse(localStorage.ls).token : null;


function initClient(){
    return {
        user:{
            isAdmin: null,
            // constants: {maxCoWorkers:20, maxNonPremiumProjects:3},
            _id: null,
            // userName: null,
            firstName: null,
            lastName: null,
            country: null,
            birthday: null,
            friends: null,
            frequests: null,
            myJobsAds: [],
            myChats: [],
            myPosts: [],

            phoneNum: null,
            profEmail: null,
            perEmail: null,
            image: null,

            posts: null,
            notifications: {frequests:[],reacts:[],comments:[],chats:[]},

            resume: null,
            profession: null,
            workplace: null,
            skill_list: null,
        },
        token:{
            token: localToken ? localToken.token : null,
            expires: localToken ? localToken.exp : null,
        },
        feed:{
          postsToSee:[],
          jobsToSee:[],
        }
    }
}

export const actions = {
    
  async refreshUser(){
    return requests.refreshUserRequest(client.token.token)
      .then(res=>{
        actions.setClient(res)
        return res;
      })
      .catch(err=>{
        client = initClient()
        throw err
      })
  },
  

  setClient(data) {
      if(data.user)
        // client.user = data.user;
        client.user = JSON.parse(JSON.stringify(data.user));
  
      if(data.token)
        // client.tokenObject = data.token;
        client.token = JSON.parse(JSON.stringify(data.token));
  },

      // Login user
  async login(email, password) {
    return requests.loginRequest(email, password)
    .then(function(response) {
      // Set client object
      // console.log('response: ', response);
      actions.setClient(response);
      console.log('cli_feed: ', client.feed)
      client.feed.postsToSee = response.user.personal.myPosts.list;

      return response;
    })
    .catch(function(error) {client = initClient(); throw error })
  },

  async register(newUser) {
    return requests.registerRequest(newUser)
    .then(function(response) {
      // Set client object
      console.log('response: ', response);
      // actions.setClient(response);
      return response.message;
    })
    .catch(function(error) {client = initClient(); throw error })
  },

  async searchUsers(val){
    return requests.searchUsersRequest(val, client.token.token)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err=>{
      console.log(err)
      throw err;
    })
  },

  async getAllUsers(){
    return requests.getAllUsersRequest(client.token.token)
    .then(res=>{
      return res;
    })
    .catch(err=>{throw err;})
  },


  async extractUsersData(payload){
    return requests.extractUsersDataRequest(payload, client.token.token)
    .then(res=>{
      return res;
    })
    .catch(err=>{throw err;})
  },


  async logout() {
    return requests.logoutRequest(client.token.token)
    .then(function(response) {
      // Set client object
      console.log('response: ', response);
      client = initClient();
      return response.message;
    })
    .catch(function(error) {client = initClient(); throw error })
  },

  async getPost(postId){
    return requests.postRequest(postId, client.token.token)
    .then(response=>{
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async getUser(userId){
    return requests.userRequest(userId, client.token.token)
    .then(function(response){
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async getAd(adId){
    return requests.adRequest(adId, client.token.token)
    .then(response=>{
      return response;
    })
    .catch(error=>{client = initClient(); throw error})
  },

  async createAd(data){
    return requests.createAdRequest(data, client.token.token)
    .then(function(response){
      // console.log(client.myJobs);
      if(client.user.myJobsAds == undefined)
        client.user.myJobsAds={list: [], private: false}
      client.user.myJobsAds.list.push(response.job._id);
      // console.log('l: ', client.user.jobsToSee);
      actions.setClient(response);
      return response.message;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async getComment(commId){
    return requests.getCommentRequest(commId, client.token.token)
    .then(function(response){
      // console.log('dsouudsoi: ', response)
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async getChat(payload){
    return requests.getChatRequest(payload, client.token.token)
    .then(function(response){
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async createChat(payload){
    return requests.createChatRequest(payload, client.token.token)
    .then(function(response){
      console.log('create chat: ', response)
      actions.setClient(response);
      return response.message;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async updateUserProfile(form){
    let mssgs = [];
    requests.updatePersonalRequest(form.personal, client.token.token)
    .then(function(response){
      actions.setClient(response);
      mssgs.push(response)
    })
    .catch(function(error){client = initClient(); throw error})
  
    requests.updateContactRequest(form.contact, client.token.token)
    .then(function(response){
      mssgs.push(response)
      actions.setClient(response);
    })
    .catch(function(error){client = initClient(); throw error})
  
    return requests.updateAttrsRequest(form.attrs, client.token.token)
    .then(function(response){
      mssgs.push(response)
      console.log('response: ', mssgs);
      actions.setClient(response);
      return mssgs;
    })
    .catch(function(error){client = initClient(); throw error})
    // console.log('response: ', mssgs);
    // actions.setClient(response);
      
  },

  async updateUserSettings(form){
    return requests.updateSettingsRequest(form, client.token.token)
    .then(function(response){
      actions.setClient(response);
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async createComment(form){
    return requests.createCommRequest(form, client.token.token)
    .then(function(response){
      // console.log('response: ', response);
      actions.setClient(response);
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async createPost(form){
    return requests.createPostRequest(form, client.token.token)
    .then(function(response){
      // console.log('res: ', response)
      // if(client.feed.postsToSee == undefined)
      //   client.feed.postsToSee = [];
      client.feed.postsToSee.push(response.post._id);
      console.log('posts: ', client)
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async acceptfreq(form){
    return requests.acceptfreqRequest(form, client.token.token)
    .then(function(response){
      actions.setClient(response);
      console.log('accept resp: ', response)
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async getSenderRequest(form) {
    return requests.getSenderRequest(form, client.token.token)
      .then(res => {return res})
      .catch(err =>{ client = initClient(); throw err;})
  },

  async denyfreq(form){
    return requests.denyfreqRequest(form, client.token.token)
    .then(function(response){
      actions.setClient(response);
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async sendfreq(form){
    return requests.sendfreqRequest(form, client.token.token)
    .then(function(response){
      actions.setClient(response);
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async removeFriend(form){
    return requests.removeFriendRequest(form, client.token.token)
    .then(function(response){
      actions.setClient(response);
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async seenMssg(form){
    return requests.seenMssgRequest(form, client.token.token)
    .then(function(response){
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async deleteComm(form){
    return requests.deleteCommRequest(form, client.token.token)
    .then(function(response){
      actions.setClient(response);
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async deletePost(form){
    return requests.deletePostRequest(form, client.token.token)
    .then(function(response){
      actions.setClient(response);
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async react(data){
    return requests.reactRequest(data, client.token.token)
    .then(function(response){
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async removeReact(data){
    return requests.removeReactRequest(data, client.token.token)
    .then(function(response){
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async sendMssg(data){
    return requests.sendMssgRequest(data, client.token.token)
    .then(function(response){
      actions.setClient(response);
      return response;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  // async createXml(data) {
    
  // }
}

export var client = initClient();

export const send = async (method, url, data, headers) => {

  console.log("method: ", method, " api url: ", apiUrl, " url: ", url, " data: ", data, " headers: ", headers)
    switch(method) {
      case('POST'):
        return axios.post(`${apiUrl}/${url}`, data, { headers: headers }, { httpAgent: agent })
        .then(function(response) { return response.data })
        .catch(function(error) { console.log('skata'); throw error })
      case('GET'):
        return axios.get(`${apiUrl}/${url}`, { headers: headers }, { httpAgent: agent })
        .then(function(response) { return response.data })
        .catch(function(error) { throw error })
      case('PATCH'):
        return axios.patch(`${apiUrl}/${url}`, data, { headers: headers }, { httpAgent: agent })
        .then(function(response) { return response.data })
        .catch(function(error) { throw error })
      case('DELETE'):
        return axios.delete(`${apiUrl}/${url}`, { headers: headers }, { httpAgent: agent })
        .then(function(response) { return response.data })
        .catch(function(error) { throw error })
    }
}
  