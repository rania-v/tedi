<template>
    <v-card class="pa-10" :img="chatb">
        <v-card-title class="justify-center text-h4">Chat</v-card-title>
        <v-card-text class="pr-10 pl-10" >
                <v-row v-for="message in messages" :key="message" class="ma-0" :class="{'justify-end ma-0': message.user=='u1'}">
                    <div :class="{m_you: message.user=='u1', m_friend: message.user=='u2'}">
                        <v-row :class="{'justify-end justify-flow-reverse ma-0': message.user=='u1'}">
                            <v-avatar><img :src=image alt="u1"></v-avatar>
                            <v-card-title >{{message.user}}</v-card-title>
                        </v-row>
                        <v-card-text class="rounded-pill pb-1 pt-2" :class="{'teal lighten-4': message.user=='u1', 'light-blue lighten-5': message.user=='u2'}">{{message.msg}}</v-card-text>
                    </div>
                </v-row>
        </v-card-text>
        <v-card-actions class="pr-10 pl-10" >
            <v-text-field label="Message" v-model="nm" class="rounded-pill teal lighten-4 pb-0 pt-4 pr-5 pl-5 justify-flow-reverse" color="teal accent-4" @keyup.enter.prevent="SendMesage"></v-text-field>
        </v-card-actions>
    </v-card>
</template>

<script>

export default ({
    name: 'MsgFriend',
    data() {
        return {
            image: require('../images/5.jpg'),
            color: "pink",
            you: 'u1',
            friend: 'u2',
            chatb: require('../images/ch6.jpg'),
            nm: null,
            messages: [
                {
                    user: 'u1',
                    time: '1:11',
                    status: 'read',
                    msg: 'LALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALA'
                },
                {
                    user: 'u2',
                    time: '1:11',
                    status: 'read',
                    msg: 'LALALALLALA'
                },
                {
                    user: 'u1',
                    time: '1:11',
                    status: 'read',
                    msg: 'LALALALLALA'
                }, 
                {
                    user: 'u1',
                    time: '1:11',
                    status: 'read',
                    msg: 'LALALALLALA'
                },
                {
                    user: 'u2',
                    time: '1:11',
                    status: 'read',
                    msg: 'LALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALALALALALLALA'
                },
            ]
        } 
    },
    methods: {
        SendMesage() {
            if(this.nm != null)
                this.messages.push({
                    user: this.you,
                    time: '000',
                    status: 'sent',
                    msg: this.nm
                })
            this.nm = null;
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