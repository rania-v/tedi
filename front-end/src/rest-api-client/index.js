// const https = require('https');
const http = require('http');
const axios = require('axios');
// const fs = require('fs');
// require('dotenv').config();
const requests = require('./requests');

// const apiUrl = `http://${process.env.HOSTNAME}:${process.env.PORT}/api-control`;
const apiUrl = 'http://127.0.0.1:3001/api';

const agent = new http.Agent({
  // const agent = new http.Agent({
    rejectUnauthorized: false, // (NOTE: this will disable client verification)
})

axios.defaults.options = agent;

function initClient(){
    return {
        user:{
            isAdmin: null,
            // constants: {maxCoWorkers:20, maxNonPremiumProjects:3},
            _id: null,
            // userName: null,
            firstName: null,
            lastName: null,
            profession: null,
            country: null,
            birthday: null,
            friends: null,
            frequests: null,
            myJobs: null,
            myChats: null,

            phoneNum: null,
            profEmail: null,
            perEmail: null,
            image: null,
            
            posts: null,
            notifications: [],
            userStories: [],
            projects: [],

            resume: null,
            workplace: null,
            skills: [],
        },
        token:{
            token: null,
            expires: null,
        }
    }
}

export const actions = {
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
      console.log('response: ', response);
      actions.setClient(response);
      return response.message;
    })
    .catch(function(error) {client = initClient(); throw error })
  },

  async getPost(postId){
    return requests.postRequest(postId, client.token.token)
    .then(function(response){
      return response.message;
    })
    .cathc(function(error){client = initClient(); throw error})
  },

  async getUser(userId){
    return requests.userRequest(userId, client.token.token)
    .then(function(response){
      return response.message;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async getAd(adId){
    return requests.adRequest(adId, client.token.token)
    .then(function(response){
      return response.message;
    })
    .catch(function(error){client = initClient(); throw error})
  },

  async createAd(data){
    return requests.createAdRequest(data, client.token.token)
    .then(function(response){
      return response.message;
    })
    .catch(function(error){client = initClient(); throw error})
  }

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
  