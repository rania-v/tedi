<template>
  <v-container fluid class="d-flex justify-center">

    <router-view></router-view>
    <v-card class="mr-2 ml-2 mb-2" width="60%" elevation="0">

        <NetworkSearch/>
        <v-card-text class="d-flex justify-center">

        <v-card class=" pa-3 ma-2" >
            <v-card-title class="justify-center">
                FRIEND NETWORK
            </v-card-title>
            <div class="d-flex justify-center flex-wrap" style="max-height:540px; overflow:scroll; overflow-x:hidden;">
                <v-card v-for="i in network" :key="i._id" class="ma-2" max-width="16%" elevation="0">
                    <UserCard :user="i"/>
                </v-card>
            </div>
        </v-card>
        </v-card-text>
    </v-card>
</v-container>
</template>

<script>
import NetworkSearch from './network_search.vue'
// import FriendProfile from './friend_profile.vue'
import UserCard from './user_card.vue'

// import { mapGetters } from "vuex"
import { mapActions, mapGetters } from "vuex"

export default {
name: 'Network',
    components: {
        NetworkSearch,
        // FriendProfile,
        UserCard
    },
    data() {
        return {
            net_search: true,
            focus: 'net',
            load_network: this.buildNetwork(),
            network: null,
        }
    },
    computed:{
        ...mapGetters({
            friends: "friends",
        }),
    },
    methods:{
        ...mapActions(['getUser', 'getFriends']),
        async buildNetwork(){
            let users = await this.getFriends()
                .then(res=>{
                    this.network=res;
                })
            // var user2 = this.getUser('614ccef4f751713c7d415006');
            // users.push({user: user2.firstname + ' ' + user2.lastName, avatar: user2.image})
            // console.log(user2)
            

            return users;
        }
    },
}
</script>

<style>

</style>