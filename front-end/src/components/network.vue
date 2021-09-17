<template>
<v-container fluid class="d-flex justify-center">

    <v-card class="mr-2 ml-2 mb-2" width="60%" elevation="0"  v-if="net_search==true">

        <NetworkSearch/>
        <v-card-text class="d-flex justify-center">

        <v-card class=" pa-3 ma-2" >
            <v-card-title class="justify-center">
                FRIEND NETWORK
            </v-card-title>
            <div class="d-flex justify-center flex-wrap" style="max-height:540px; overflow:scroll; overflow-x:hidden;">
                <v-card v-for="i in friends" :key="i" class="ma-2" max-width="16%" elevation="0">
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

export default ({
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
            friends: [
                    {
                        user: 'Haruka Tenou',
                        avatar: require('../icons/avatars/haruka.jpg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    },
                    {
                        user: 'Mizuno Ami',
                        avatar: require('../icons/avatars/ami.jpg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'close_friend'
                    },
                    {
                        user: 'Hino Rei',
                        avatar: require('../icons/avatars/rei.png'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'close_friend'
                    },
                    {
                        user: 'Minako Aino',
                        avatar: require('../icons/avatars/aino.jpg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    },
                    {
                        user: 'Makoto Kino',
                        avatar: require('../icons/avatars/makoto.jpg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'close_friend'
                    },
                    {
                        user: 'Setsuna Meioh',
                        avatar: require('../icons/avatars/meioh.png'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'close_friend'
                    },
                    {
                        user: 'Michiru Kaioh',
                        avatar: require('../icons/avatars/michiru.jpg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'close_friend'
                    },
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    },
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 ,
                    {
                        user: 'Hotaru Tomoe',
                        avatar: require('../icons/avatars/tomoe.jpeg'),
                        profession: 'Sports car racing',
                        workplace: 'F1',
                        status: 'friend'
                    }
 
                ]
        }
        
    }
})
</script>

<style>

#friend {
    /* border-top-color: #FF9800 !important; */
    border-top: 5px solid #FF9800 !important
}

#close_friend {
    /* border-top-color: #FF9800 !important; */
    border-top: 5px solid #7E57C2 !important
}

.in_focus {
    max-width: 70% !important;
    min-width: 70% !important;
    /* box-shadow: 5px 10px; */
}

.out_of_focus {
    max-width: 20% !important;
    min-width: 20% !important;
}


</style>