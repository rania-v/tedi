import {client, actions} from '../rest-api-client/index.js'


export default{

	async refreshUser(){
		return actions.refreshUser()
		.then(res=>{
			// console.log(res)
			return res;
		})
		.catch(err=>{
			// console.log(err)
			return err;
		})
	},

    async login({commit}, payload){
        console.log(payload);
        commit("SET_LOADING", true)
        return actions.login(payload.email, payload.password)
		.then( response => {
			// console.log()
			// console.log('responsesss: ', response);
            console.log(client);
			// commit("STORE_CLIENT", client.user)
			commit("STORE_TOKEN", client.token)
			commit("STORE_CLIENT", client.user)
			commit("SET_LOGEDIN", true)
			commit("SET_LOADING", false)
			return response;
		})
		.catch( error => { 
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
    },

	async logout({commit}){
        commit("SET_LOADING", true)
        return actions.logout()
		.then( response => {
			commit("DELETE_TOKEN")
			commit("DELETE_CLIENT")
			commit("SET_LOADING", false)
			return response
		})
		.catch( error => { 
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
    },

	async register({commit}, payload){
		commit("SET_LOADING", true);
		return actions.register(payload)
		.then(response=>{
			// console.log("res: ", response);
			// console.log('payload: ', payload)
			this.login(payload.contact.profEmail, payload.personal.password)
			commit("SET_LOADING", false);
			return response;
		})
		.catch(error=>{
			console.log(error);
			commit("SET_LOADING", false);
			throw error;
		})
	},

	async getFriends({commit, state}){
		commit("SET_LOADING", true);
		let fr = [];
		for(let f of state.friends.list){
			actions.getUser(f)
			.then(response=>{
				// console.log('res: ', response)
				let user = response.user;
				fr.push(user)
			})
		}
		return fr;
	},

	async getSenderByReqId({commit}, payload) {
		commit("SET_LOADING", true);
		return actions.getSenderRequest(payload)
			.then(res => {commit("SET_LOADING", false);console.log('res: ', res); return res.fromUser;})
			.catch(err => {commit('SET_LOADING', false); throw err;})
	},

	async searchUsers({commit}, payload){
		// console.log('mphkeeeeeeeeee')
		commit("SET_LOADING", true);
		return actions.searchUsers(payload)
		.then(response=>{
			// console.log("res: ", response);
			commit("SET_LOADING", false);
			return response;
		})
		.catch(err=>{
			console.log(err);
			commit("SET_LOADING", false);
			throw err;
		})
	},

    async mpla(){
        console.log('mpla')
    },

	async getPost({commit}, payload){
		commit("SET_LOADING", true);
		// console.log('pay: ', payload)
		return actions.getPost(payload)
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
		// console.log('action: ',payload)
		return actions.getUser(payload)
		.then( response => {
			// console.log('user: ', response);
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
			console.log('res: ', response)
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
			commit("STORE_CLIENT", client.user);
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
			// console.log('EEEEEE: ', response.comment);
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

	async createChat({commit}, payload){
		commit("SET_LOADING", true);
		return actions.createChat(payload)
		.then(response => {
			commit("STORE_CLIENT", client.user);
			commit("SET_LOADING", false);
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
			commit("STORE_CLIENT", client.user)
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
			commit("STORE_CLIENT", client.user)
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
			commit("STORE_CLIENT", client.user)
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
		console.log('payload: ', payload)
		return actions.createPost(payload)
		.then(response => {
			commit("SET_LOADING", false)
			console.log('client: ', client.user)
			commit("STORE_CLIENT", client.user)
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
		console.log('payload: ', payload)
		return actions.acceptfreq(payload)
		.then(response => {
			commit("SET_LOADING", false)
			commit("STORE_CLIENT", client.user)
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
			commit("STORE_CLIENT", client.user)
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
			commit("STORE_CLIENT", client.user)
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
			commit("STORE_CLIENT", client.user)
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
			commit("STORE_CLIENT", client.user)
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
			commit("STORE_CLIENT", client.user)
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
			commit("STORE_CLIENT", client.user)
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
			commit("STORE_CLIENT", client.user)
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
			commit("STORE_CLIENT", client.user)
			return response
		})
		.catch(error => {
			console.log(error);
			commit("SET_LOADING", false)
			throw error;
		})
	},

	// async createXml({commit}, user_id) {
	// 	commit("SET_LOADING", true);

	// 	return actions.createXml(payload)
	// 	.then(response => {
	// 		commit("SET_LOADING", false)
	// 		commit("STORE_CLIENT", client.user)
	// 		return response
	// 	})
	// 	.catch(error => {
	// 		console.log(error);
	// 		commit("SET_LOADING", false)
	// 		throw error;
	// 	})
	// }
}