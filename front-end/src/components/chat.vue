<template>
    <v-container class="d-flex justify-center ma-3" fluid>
        <v-row height="850px">
            <v-col cols="4">
                <v-card max-width="100%" height="100%"  class="ma-3 grey lighten-4" elevation="2">
                    <v-card-title class="deep-purple" style="color:white">Conversations with friends</v-card-title>
                    <v-card-text>
                        <!-- <v-subheader style="color:white">Friends</v-subheader> -->
                        <v-list rounded two-line class="overflow-y-auto mt-2" max-height="750px">
                            <v-list-item-group v-model="selected_convo" color="deep-purple darken-5" >
                                <v-template v-for="friend in convos" :key="friend">
                                    <v-divider></v-divider>
                                    <v-list-item id="myFont" :class="{'d-flex mb-1 mt-1': friend.read, 'not_seen': !friend.read}" @click="conv=friend.name, friend.read=true">
                                        <v-badge :value="!friend.read" left color="teal accent-4" bordered icon="far fa-envelope">
                                            <v-avatar class="justify-start mr-2" size="40"><v-img :src="friend.avatar"></v-img></v-avatar>
                                        </v-badge>
                                        <v-col cols="9">
                                            <v-row><h3 class="mb-1 mt-2">{{friend.name}}</h3></v-row>
                                            <v-row class="ma-1"><v-card-text class="mt-1 pa-0 d-flex justify-start" style="text-overflow: ellipsis; overflow:hidden; white-space: nowrap;">{{friend.last_msg}}</v-card-text></v-row>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col cols="2" class="adjust-end"><v-card-tex> 12:30</v-card-tex></v-col>
                                    </v-list-item>
                                </v-template>
                            </v-list-item-group>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card max-width="100%" height="100%" class="ml-3 mr-3 mt-3 pb-0 mb-0" elevation="0" >
                    <!-- <v-card-title class="teal" style="color:white">Chat</v-card-title> -->
                    <v-card-actions class="mr-2 mr-2">
                        <v-spacer></v-spacer>
                        <v-btn class="grey darken-2" style="color:white">open friends profile</v-btn>
                    </v-card-actions>
                    <v-card-text class="pt-0 pb-0 mb-0" style="height:100%">
                        <MsgFriend :conv="conv"/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import MsgFriend from './msgfriend.vue'

export default ({
    name: 'Chat',
    components: {
        MsgFriend
    },
    data() {
        return {
            conv:false,
            selected_convo: null,
            convos: [
                {
                    name: 'kei',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvslksdpksdjsdv sivj odn voij sov sdlvslksdpksdjsdv sivj odn voij sov sdlvslksdpksdjsdv sivj odn voij sov sdlvslksdpksdjsdv sivj odn voij sov sdlvslksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: false
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: false

                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: false

                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: true

                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: true

                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: true

                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: false

                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: false

                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: false

                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: true

                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: true

                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png'),
                    read: false

                },
                
            ]
        }
    },
})
</script>

<style>

.not_seen, .not_seen h3, .not_seen h4, .not_seen .v-card-text{
    background-color:#57576B !important;
    color: white !important;
    display: flex;
    margin-bottom: 4px;
    margin-top: 4px;
}

</style>
