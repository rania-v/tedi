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

export const postRequest = async (postId, token) =>{
  let headers = { "Authorization": `${token}` };
  let data = {
    postId: postId,
  }
  return restAPI.send('POST', 'post', data, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const userRequest = async (userId, token) =>{
  let headers = { "Authorization": `${token}` };
  let data = {
    userId: userId,
  }
  return restAPI.send('POST', 'user', data, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}
