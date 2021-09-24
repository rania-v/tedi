<template>
  <v-container fluid class="d-flex justify-center">

    <router-view></router-view>
    <v-card class="mr-2 ml-2 mb-2" width="60%" elevation="0"  v-if="net_search==true">

        <NetworkSearch/>
        <v-card-text class="d-flex justify-center">

        <v-card class=" pa-3 ma-2" >
            <v-card-title class="justify-center">
                FRIEND NETWORK
            </v-card-title>
            <div class="d-flex justify-center flex-wrap" style="max-height:540px; overflow:scroll; overflow-x:hidden;">
                <v-card v-for="i in network" :key="i.user" class="ma-2" max-width="16%" elevation="0">
                    <UserCard/>
                </v-card>
            </div>
        </v-card>
        </v-card-text>
    </v-card>
    <v-row  v-else>
        <v-card-text>
            <FriendProfile/>
        </v-card-text>
    </v-row>
</v-container>
</template>

<script>
import NetworkSearch from './network_search.vue'
import FriendProfile from './friend_profile.vue'
import UserCard from './user_card.vue'

// import { mapGetters } from "vuex"
import { mapActions, mapGetters } from "vuex"

export default {
name: 'Network',
    components: {
        NetworkSearch,
        FriendProfile,
        UserCard
    },
    data() {
        return {
            net_search: true,
            focus: 'net',
            network: this.buildNetwork(),
//             friends: [
//                     {
//                         user: 'Haruka Tenou',
//                         avatar: require('../icons/avatars/haruka.jpg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     },
//                     {
//                         user: 'Mizuno Ami',
//                         avatar: require('../icons/avatars/ami.jpg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'close_friend'
//                     },
//                     {
//                         user: 'Hino Rei',
//                         avatar: require('../icons/avatars/rei.png'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'close_friend'
//                     },
//                     {
//                         user: 'Minako Aino',
//                         avatar: require('../icons/avatars/aino.jpg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     },
//                     {
//                         user: 'Makoto Kino',
//                         avatar: require('../icons/avatars/makoto.jpg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'close_friend'
//                     },
//                     {
//                         user: 'Setsuna Meioh',
//                         avatar: require('../icons/avatars/meioh.png'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'close_friend'
//                     },
//                     {
//                         user: 'Michiru Kaioh',
//                         avatar: require('../icons/avatars/michiru.jpg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'close_friend'
//                     },
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     },
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
//  ,
//                     {
//                         user: 'Hotaru Tomoe',
//                         avatar: require('../icons/avatars/tomoe.jpeg'),
//                         profession: 'Sports car racing',
//                         workplace: 'F1',
//                         status: 'friend'
//                     }
 
//                 ]
        }
        
    },
    computed:{
        ...mapGetters({
            friends: "friends",
        }),
    },
    methods:{
        ...mapActions(['getUser']),
        buildNetwork(){
            let users = [];
            for(let i in this.friends){
                var user = this.getUser(i)
                users.push({
                    user: user.personal.firstname + ' ' + user.personal.lastName,
                    avatar: user.personal.image,
                    profession: user.attrs.profession,
                    workplace: user.attrs.workplace
                })
            }
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