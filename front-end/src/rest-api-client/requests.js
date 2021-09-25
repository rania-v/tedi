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

export const adRequest = async (adId, token) =>{
  let headers = { "Authorization": `${token}` };
  let data = {
    jobId: adId,
  }
  return restAPI.send('POST', 'job/job', data, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const createAdRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };
  return restAPI.send('POST', 'job', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}


export const getCommentRequest = async (commId, token) =>{
  let headers = { "Authorization": `${token}` };
  let data = {
    commId: commId,
  }
  return restAPI.send('POST', 'post/getComment', data, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const getChatRequest = async (chatId, token) =>{
  let headers = { "Authorization": `${token}` };
  let data = {
    chatId: chatId,
  }
  return restAPI.send('POST', 'secure/getChat', data, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const updatePersonalRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'secure/update-user-personal', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const updateContactRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'secure/update-user-contact', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const updateAttrsRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'secure/update-user-attrs', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const updateSettingsRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'secure/update-user-settings', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const createCommRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'post/addComm', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const createPostRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'post/', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const acceptfreqRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'secure/accept-frequest', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const denyfreqRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'secure/deny-frequest', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const sendfreqRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'secure/frequest', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const removeFriendRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'secure/remove-friend', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const seenMssgRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'secure/seen-mssg', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}


export const deletePostRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'post/delete-post', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}


export const deleteCommRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'post/delete-comment', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const reactRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };
  let data={
    postId: form.postId
  }

  if(form.react == 1){
    return restAPI.send('POST', 'post/react1', data, headers)
    .then(function(response) { return response })
    .catch(function(error) { throw error })
  }
  else if(form.react == 2){
    return restAPI.send('POST', 'post/react2', data, headers)
    .then(function(response) { return response })
    .catch(function(error) { throw error })
  }
}

export const removeReactRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'post/remove-react', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}

export const sendMssgRequest = async (form, token) =>{
  let headers = { "Authorization": `${token}` };

  return restAPI.send('POST', 'secure/sendMssg', form, headers)
  .then(function(response) { return response })
  .catch(function(error) { throw error })
}
