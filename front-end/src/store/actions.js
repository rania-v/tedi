import {client, actions} from '../rest-api-client/index.js'


export default{
    async login({commit}, payload){
        console.log(payload);
        commit("SET_LOADING", true)
        return actions.login(payload.email, payload.password)
		.then( response => {
			console.log()
			console.log('responsesss: ', response);
            console.log(client);
			// commit("STORE_CLIENT", client.user)
			commit("STORE_TOKEN", client.token.token)
			commit("STORE_CLIENT", client.user)
			commit("SET_LOGEDIN", true)
			commit("SET_LOADING", false)
			return response
		})
		.catch( error => { 
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
    },

    async mpla(){
        console.log('mpla')
    },

	async getPost({commit}, payload){
		commit("SET_LOADING", true);
		return actions.getPost(payload.id)
		.then( response => {
			commit("SET_LOADING", false);
			return response;
		})
		.catch( error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async getUser({commit}, payload){
		commit("SET_LOADING", true);
		// console.log(payload)
		return actions.getUser(payload)
		.then( response => {
			commit("SET_LOADING", false);
			return response;
		})
		.catch( error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async getAd({commit}, payload){
		commit("SET_LOADING", true);
		// console.log(payload)
		return actions.getAd(payload)
		.then( response => {
			commit("SET_LOADING", false);
			return response;
		})
		.catch( error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async createAd({commit}, payload){
		commit("SET_LOADING", true);
		return actions.createAd(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	}
}