<template>
    <v-container class="d-flex justify-center ma-3" fluid>
        <v-row height="850px">
            <v-col cols="4">
                <v-card max-width="100%" height="100%"  class="ma-3 grey lighten-4" elevation="2">
                    <v-card-title class="deep-purple" style="color:white">Conversations with friends</v-card-title>
                    <v-card-text>
                        <!-- <v-subheader style="color:white">Friends</v-subheader> -->
                        <v-list rounded two-line class="overflow-y-auto mt-2" max-height="750px">
                            <v-list-item-group color="deep-purple darken-5">
                                <v-container v-for="friend in ConvosArray()" :key="friend.name">
                                    <v-divider></v-divider>
                                    <v-list-item id="myFont" :class="{'d-flex mb-1 mt-1': friend.read, 'not_seen': !friend.read}" @click="openChat(friend)">
                                        <v-badge :value="!friend.read" left color="teal accent-4" bordered icon="far fa-envelope">
                                            <v-avatar class="justify-start mr-2" size="40"><v-img :src="friend.avatar"></v-img></v-avatar>
                                        </v-badge>
                                        <v-col cols="9">
                                            <v-row><h3 class="mb-1 mt-2">{{friend.name}}</h3></v-row>
                                            <v-row class="ma-1">
                                                <v-card-text class="mt-1 pa-0 d-flex justify-start" style="text-overflow: ellipsis; overflow:hidden; white-space: nowrap;">
                                                    {{friend.last_msg}}
                                                </v-card-text>
                                            </v-row>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col cols="2" class="adjust-end"><div> 12:30</div></v-col>
                                    </v-list-item>
                                </v-container>
                            </v-list-item-group>
                        </v-list>
                    </v-card-text>
                    <v-card-actions class="mr-3 ml-3 mb-0 rounded-xl white">
                        <v-autocomplete
                            v-model="find_chat"
                            :items="friends_list"
                            item-text="name"
                            item-value='_id'
                            label="start chating with a friend">
                        </v-autocomplete>

                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card max-width="100%" height="100%" class="ml-3 mr-3 mt-3 pb-0 mb-0" elevation="0" >
                    <!-- <v-card-title class="teal" style="color:white">Chat</v-card-title> -->
                    <v-card-actions class="mr-2 mr-2" v-if="selected_convo!=null">
                        <v-spacer></v-spacer>
                        <router-link style="text-decoration:none;" :to="{ name: 'Friend_Profile', params:{ id: selected_convo!=null ? selected_convo.id : '', page_title: 'Δίκτυο'}}">
                            <v-btn class="pink white--text" >open friends profile</v-btn>
                        </router-link>
                    </v-card-actions>
                    <v-card-text class="pt-0 pb-0 mb-0" style="height:100%">
                        <MsgFriend :conv="selected_convo"/>
                        <!-- {{selected_convo}} -->
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import MsgFriend from './msgfriend.vue'
import {mapGetters, mapActions} from 'vuex'
export default ({
    name: 'Chat',
    components: {
        MsgFriend
    },
    computed: {
        ...mapGetters({
            friends: 'friends',
            myChats: 'myChats'
        })
    },
    data() {
        return {
            find_chat: null,
            new_chat: null,
            conv:false,
            selected_convo: null,
            selected_name: null,
            convos: [
                // {
                //     name: 'kei',
                //     last_msg: 'lksdpksdjsdv sivj odn voij sov sdlvslksdpksdjsdv sivj odn voij sov sdlvslksdpksdjsdv sivj odn voij sov sdlvslksdpksdjsdv sivj odn voij sov sdlvslksdpksdjsdv sivj odn voij sov sdlvslksdpksdjsdv sivj odn voij sov sdlvs',
                //     avatar: require('../icons/avatars/rei.png'),
                //     read: false
                // },
                
            ],
            tmp: null,
            friends_list:[],
        }
    },
    methods: {
        ...mapActions(['getChat','createChat','getUser']),
        openChat(chat){
            console.log('chat:', chat);
            this.selected_convo = chat;
            console.log('selected: ', this.selected_convo)
            for(let i of this.convos){
                console.log('i: ', i)
                if(i.name == chat.name){
                    //seen mssg??
                    i.read=true;
                }
            }
        },
        ConvosArray() {
            return this.convos;
        },
        async fillAll(){
            //load chats

            var module = {chat: null, user: null};
            for(let ch of this.myChats){
                var temp = null;
                // console.log('edw')
                await this.getChat({id: ch, prev: true})
                .then(res=>{
                    // console.log('i got: ', res)
                    module.chat = res.chat;
                    temp = res.user2
                })
                await this.getUser(temp)
                .then(res=>{
                    module.user=res.user;
                })
                // console.log('module: ', module)
                this.convos.push({
                    name: module.user.name,
                    last_msg: module.chat.content ? module.chat.content[0].content : '',
                    avatar: module.user.image,
                    read: module.chat.content ? module.chat.content[0].status : false,
                    id: module.user._id,
                    chatid: module.chat._id,
                });

                // console.log('convos: ',this.convos)
            }

            //load friends list
            for(let i of this.friends.list){
                await this.getUser(i)
                .then(res=>{
                    this.friends_list.push(res.user);
                })
            }
        }
    },
    async beforeMount(){
        this.fillAll();
        // console.log('f_list: ', this.friends_list)
    },
    watch:{
        async find_chat(val){
            if(!val)
                return;
            for(let i of this.convos){
                if(i.id==val){
                    this.selected_convo=i
                    return;
                }
            }
            console.log('val: ',val)
            // not existing chat with that friend
            await this.createChat({to_user:val})
            .then(res=>{
                this.selected_convo = {
                    name: '',
                    last_msg: '',
                    avatar: '',
                    read: '',
                    id: val,
                    chatid: res.chat._id,
                }
                console.log(this.selected_convo)
            })
            // newChat();
            // this.selected_convo=
            this.fillAll();
            return;
        }
    }
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
