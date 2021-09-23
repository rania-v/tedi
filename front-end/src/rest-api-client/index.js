// const https = require('https');
// const http = require('http');
const axios = require('axios');
// const fs = require('fs');
// require('dotenv').config();
const requests = require('./requests');

// const apiUrl = `http://${process.env.HOSTNAME}:${process.env.PORT}/api-control`;
const apiUrl = 'http://127.0.0.1:3001/api';

function initClient(){
    return {
        user:{
            isAdmin: null,
            // constants: {maxCoWorkers:20, maxNonPremiumProjects:3},
            // token: null,
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
            myChat: null,

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
            invites: [],
            coWorkers: [],
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
    console.log('edw')
    return requests.loginRequest(email, password)
    .then(function(response) {
      // Set client object
      actions.setClient(response);
      console.log('aaaaaaaaa')
      return response.message;
    })
    .catch(function(error) { console.log('aaaaaaaaaaaaaaaaaaaa');client = initClient(); throw error })    
  },
}

export var client = initClient();

export const send = async (method, url, data, headers) => {
    switch(method) {
      case('POST'):
      console.log("method: ", method, " url: ", url, " data: ", data, " headers: ", headers)
        return axios.post(`${apiUrl}/${url}`, data, { headers: headers }, /*{ httpsAgent: agent }*/)
        .then(function(response) { return response.data })
        .catch(function(error) { console.log('skata'); throw error })
      case('GET'):
        return axios.get(`${apiUrl}/${url}`, { headers: headers }, /*{ httpsAgent: agent }*/)
        .then(function(response) { return response.data })
        .catch(function(error) { throw error })
      case('PATCH'):
        return axios.patch(`${apiUrl}/${url}`, data, { headers: headers }, /*{ httpsAgent: agent }*/)
        .then(function(response) { return response.data })
        .catch(function(error) { throw error })
      case('DELETE'):
        return axios.delete(`${apiUrl}/${url}`, { headers: headers }, /*{ httpsAgent: agent }*/)
        .then(function(response) { return response.data })
        .catch(function(error) { throw error })
    }
}
  