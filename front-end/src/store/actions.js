import {client, actions} from '../rest-api-client/index.js'


export default{
    async login({commit}, payload){
        console.log(payload);
        commit("SET_LOADING", true)
        return actions.login(payload.email, payload.password)
        .then( response => {
			console.log(response);
            console.log(client);
			// commit("STORE_CLIENT", client.user)
			commit("STORE_TOKEN", client.token.token)
			commit("SET_LOGEDIN", true)
			commit("SET_LOADING", false)
			return response
		})
		.catch( error => { 
			console.log(error);
			commit("SET_LOADING_STATE", false)
			throw error;
		})
    },

    async mpla(){
        console.log('mpla')
    }
}