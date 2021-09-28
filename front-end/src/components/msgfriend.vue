<template>
<v-container  style="height:93%">
    <v-card class="rounded-xl " min-height="100%" v-if="full_conv==null" elevation="0">
        <v-card-title class="justify-center deep-purple--text">Start talking to some friends now!</v-card-title>
        <v-img :src="chat_ill" v-if="!conv" max-width="100%"></v-img>
    </v-card>
    <v-card  v-else id="chat" class="rounded-xl" height="670px" :img="chatb" color="white" elevation="0" style="overflow:scroll; flex-direction: column-reverse;" >
        <!-- <v-card-title class="justify-center text-h4">Chat</v-card-title> -->
        <v-card-text v-if="full_conv.content.length>0">
                <div>
                    <v-row v-for="message in full_conv.content" :key="message.Date" class="ma-0" :class="{'justify-end ma-0': message.creator==_id}">
                        <div :class="{m_you: message.creator==_id, m_friend: message.creator!=_id}">
                            <v-row :class="{'justify-end justify-flow-reverse ma-0': message.creator==_id}">
                                <v-avatar><img :src=image alt="u1"></v-avatar>
                                <v-card-title >{{message.creator}}</v-card-title>
                            </v-row>
                            <v-card-text class="rounded-pill pb-1 pt-2"
                                :class="{'teal lighten-4': message.creator==_id, 'grey lighten-3': message.creator!=_id}">
                                    {{ message.content}}
                            </v-card-text>
                        </div>
                    </v-row>
                </div>
        </v-card-text>
        <div v-else>
            <v-card-title class="justify-center deep-purple--text">
                Dont be shy! Someone has to make the start!
            </v-card-title>
        </div>
    </v-card>
    <v-row class="pt-2" v-if="full_conv!=null">
        <v-spacer></v-spacer>
        <v-col cols="11">
            <v-card-actions>
                <v-text-field label="Message" v-model="nm" class="rounded-pill teal lighten-4 pb-0 pt-4 pr-5 pl-5 justify-flow-reverse" color="deep-purple darken-4"
                @keyup.enter.prevent="sendNew()"></v-text-field>
            </v-card-actions>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


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
            chatb: require('../images/ch6.jpg'),
            nm: null,
        } 
    },
    props:{
        conv: Object
    },
    computed:{
        ...mapGetters({
            _id:'_id'
        }),
    },
    methods: {
        ...mapActions(['getChat','sendMssg']),
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
        },
        async sendNew(){
            let frid = ''
            if(this._id == this.full_conv.users[0])
                frid = this.full_conv.users[1]
            else
                frid = this.full_conv.users[0]

            let m = this.nm;
            this.nm = '';
            // console.log('frid: ', frid)
            // console.log('myid: ', this._id)
            await this.sendMssg({
                to_user: frid,
                content: m
            })
            .then(res=>{
                console.log('res Mssg: ', res)
            })
            await this.getChat({id:this.conv.chatid, prev: false})
            .then(res=>{
                this.full_conv = res.chat;
            })
        },
        async refresh(){
            await this.getChat({id:this.conv.chatid, prev: false})
            .then(res=>{
                this.full_conv = res.chat;
            })
        }
    },
    watch:{
        async conv(conv){
            if(conv==null)
                return
            await this.refresh();
            // while(conv!=null){
                // setTimeout(this.refresh, 10000)
            // }
        }
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