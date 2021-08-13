<template>
    <v-card class="mr-2 ml-2 mb-2"  v-if="net_search==true">
        <v-row class="d-flex align-center">
            <v-card  :class="{in_focus: focus=='net', out_of_focus: focus=='search'}" @click="focus='net'" >

            <!-- <v-col :class="{friend_network_focus: focus=='net', friend_network_out_of_focus: focus=='search'}" @click="focus='net'" > -->
                {{id}}
                <!-- <v-container class="d-flex justify-center pa-2"> -->
                    <v-card width="100%">
                        <v-card-title class="justify-center">
                            FRIEND NETWORK
                        </v-card-title>
                        <!-- <v-card-text class="d-flex justify-center"> -->
                                <v-card-text style="display:flex; flex-wrap: wrap; justify-content: center;">
                                    <v-card v-for="friend in friends" :key="friend" width="20%" class="ma-2 pt-2 pb-2" v-bind:id="friend.status">
                                        <v-avatar>
                                            <v-img v-bind:src="friend.avatar"></v-img>
                                        </v-avatar>
                                        <v-card-title>
                                            <v-row class="d-flex justify-center">{{friend.user}}</v-row>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-row class="d-flex justify-center">{{friend.profession}}</v-row>
                                            <v-row class="d-flex justify-center">{{friend.workplace}}</v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-card-text>
                        <!-- </v-card-text> -->
                    </v-card>
                <!-- </v-container> -->
            <!-- </v-col> -->
            </v-card>
            <v-col :class="{in_focus: focus=='search'}" @click="focus='search'" style="box-shadow: 5px 10px; padding-right:0%">
                <v-card>
                    <NetworkSearch/>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
    <v-row  v-else>
        <v-card-text>
            <FriendProfile/>
        </v-card-text>
    </v-row>
</template>

<script>

import NetworkSearch from './network_search.vue'
import FriendProfile from './friend_profile.vue'

export default ({
    name: 'Network',
    components: {
        NetworkSearch,
        FriendProfile
    },
    data() {
        return {
            net_search: false,
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
                    }
                ]
        }
        
    },
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