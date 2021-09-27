<template>
<v-container  style="height:93%">
    <v-card class="rounded-xl " min-height="100%" v-if="!conv" elevation="0">
        <v-card-title class="justify-center deep-purple--text">Start talking to some friends now!</v-card-title>
        <v-img :src="chat_ill" v-if="!conv" max-width="100%"></v-img>
    </v-card>
    <v-card  v-if="conv" id="chat" class="rounded-xl" height="670px" :img="chatb" color="white" elevation="0" style="overflow:scroll; flex-direction: column-reverse;" >
        <!-- <v-card-title class="justify-center text-h4">Chat</v-card-title> -->
        <v-card-text>
                <v-row v-for="message in messages" :key="message" class="ma-0" :class="{'justify-end ma-0': message.user=='u1'}">
                    <div :class="{m_you: message.user=='u1', m_friend: message.user=='u2'}">
                        <v-row :class="{'justify-end justify-flow-reverse ma-0': message.user=='u1'}">
                            <v-avatar><img :src=image alt="u1"></v-avatar>
                            <v-card-title >{{message.user}}</v-card-title>
                        </v-row>
                        <v-card-text class="rounded-pill pb-1 pt-2" :class="{'teal lighten-4': message.user=='u1', 'grey lighten-3': message.user=='u2'}">{{message.msg}}</v-card-text>
                    </div>
                </v-row>
        </v-card-text>
    </v-card>
    <v-row class="pt-2" v-if="conv">
        <v-spacer></v-spacer>
        <v-col cols="11">
            <v-card-actions>
                <v-text-field label="Message" v-model="nm" class="rounded-pill teal lighten-4 pb-0 pt-4 pr-5 pl-5 justify-flow-reverse" color="deep-purple darken-4" @keyup.enter.prevent="SendMesage"></v-text-field>
            </v-card-actions>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</v-container>
</template>

<script>
import { mapActions } from 'vuex';


export default ({
    name: 'MsgFriend',
    data() {
        return {
            full_conv: null,
            image: require('../images/5.jpg'),
            chat_ill: require('../illustrations/147_teal.svg'),
            color: "pink",
            you: 'u1',
            friend: 'u2',
            // chatb: require('../images/ch6.jpg'),
            nm: null,
            messages: [
                {
                    user: 'u1',
                    time: '1:11',
                    status: 'read',
                    msg: 'LALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALA'
                },
            ]
        } 
    },
    props:{
        conv: Object
    },
    methods: {
        ...mapActions(['getChat']),
        SendMesage() {
            var element = document.getElementById("chat");
            if(this.nm != null) {
                this.messages.push({
                    user: this.you,
                    time: '000',
                    status: 'sent',
                    msg: this.nm
                })
                element.scrollTop = element.scrollHeight + 100;
            }
            this.nm = null;
        }
    },
    async beforeMoun(){
        console.log('prop conv: ', this.conv)
        let data={
            chatId: this.conv.chatid,
            prev: false
        }
        await this.getChat(data)
        .then(res=>{
            this.full_conv = res.chat;
        })
        console.log('full conv: ', this.full_conv);
    }
})
</script>

<style>

.m_you {
    /* background-color: teal; */
    max-width: 80% !important;
    justify-self: end !important;
}

.m_you .v-card-text {
    background-color: teal !important;
    max-width: 80% !important;
    justify-self: end !important;
}

.m_friend {
    max-width: 80% !important;
}

</style>