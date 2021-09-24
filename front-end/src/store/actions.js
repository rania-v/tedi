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
	},

	async getComment({commit}, payload){
		commit("SET_LOADING", true);
		return actions.getComment(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async getChat({commit}, payload){
		commit("SET_LOADING", true);
		return actions.getChat(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},


	async updateUserProfile({commit}, payload){
		commit("SET_LOADING", true);
		
		return actions.updateUserProfile(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async updateUserSettings({commit}, payload){
		commit("SET_LOADING", true);
		
		return actions.updateUserSettings(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async createComment({commit}, payload){
		commit("SET_LOADING", true);

		return actions.createComment(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},


	async createPost({commit}, payload){
		commit("SET_LOADING", true);

		return actions.createComment(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async acceptfreq({commit}, payload){
		commit("SET_LOADING", true);

		return actions.acceptfreq(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async denyfreq({commit}, payload){
		commit("SET_LOADING", true);

		return actions.denyfreq(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async sendfreq({commit}, payload){
		commit("SET_LOADING", true);

		return actions.sendfreq(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async removeFriend({commit}, payload){
		commit("SET_LOADING", true);

		return actions.removeFriend(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async seenMssg({commit}, payload){
		commit("SET_LOADING", true);

		return actions.seenMssg(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async deleteComm({commit}, payload){
		commit("SET_LOADING", true);

		return actions.deleteComm(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async deletePost({commit}, payload){
		commit("SET_LOADING", true);

		return actions.deletePost(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},


	async react({commit}, payload){
		commit("SET_LOADING", true);

		return actions.react(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async removeReact({commit}, payload){
		commit("SET_LOADING", true);

		return actions.removeReact(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	async sendMssg({commit}, payload){
		commit("SET_LOADING", true);

		return actions.sendMssg(payload)
		.then(response => {
			commit("SET_LOADING", false)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},
}