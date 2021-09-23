const restAPI = require('./index.js');

export const loginRequest = async (email, password) => {
  // let headers = {mpla: 'mpla'}
    let data = {
      email: email,
      password: password
    }
    console.log('data: ', data);
    // console.log('response: ', response);
    return restAPI.send('POST', 'user/login', data)
    .then(function(response) { return response })
    .catch(function(error) { throw error })
}