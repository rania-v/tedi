<template>
    <v-container class="d-flex justify-center" style="max-width:90%">
        <v-row>
            <v-col cols="4">
                <v-card max-width="100%" class="ma-3 orange lighten-4">
                    <v-card-title class="orange" style="color:white">Conversations with friends</v-card-title>
                    <v-card-text>
                        <!-- <v-subheader style="color:white">Friends</v-subheader> -->
                        <v-list rounded two-line class="overflow-y-auto mt-2" max-height="450">
                            <v-list-item-group v-model="selected_convo" color="orange" >
                                <v-template v-for="friend in convos" :key="friend">
                                    <v-divider></v-divider>
                                    <v-list-item class="d-flex mb-1 mt-1">
                                        <v-avatar class="justify-start mr-2" size="40"><v-img :src="friend.avatar"></v-img></v-avatar>
                                        <v-col>
                                            <v-row><h3>{{friend.name}}</h3></v-row>
                                            <v-row>{{friend.last_msg}}</v-row>
                                        </v-col>
                                        <v-col cols="2" class="adjust-end">12:30</v-col>
                                    </v-list-item>
                                </v-template>
                            </v-list-item-group>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card max-width="100%" class="ma-3">
                    <!-- <v-card-title class="orange" style="color:white">Chat</v-card-title> -->
                    <v-card-actions class="mr-2 mr-2">
                        <v-spacer></v-spacer>
                        <v-btn class="orange" style="color:white">open friends profile</v-btn>
                    </v-card-actions>
                    <v-card-text class="pt-0">
                        <MsgFriend/>
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
            selected_convo: null,
            convos: [
                {
                    name: 'kei',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                {
                    name: 'lalal',
                    last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvs',
                    avatar: require('../icons/avatars/rei.png')
                },
                
            ]
        }
    },
})
</script>
