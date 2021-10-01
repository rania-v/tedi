<template>
<v-container>
    <v-dialog v-model="popup"  width="20%">
        <v-card>
            <v-card-title id="myFont" style="word-break: break-word;">Are you sure you want to delete this friend request?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn id="myFont" class="error ma-1">HELL YEAH</v-btn>
                <v-spacer></v-spacer>
                <v-btn id="myFont" class="primary ma-1">Nope</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
        <v-template >

    <v-card width="20%" height="320px" class="ma-2 pb-2">
        <v-img :src="img" height="60%"></v-img>
        <v-card-title class="mb-0 pa-0">
            <v-tooltip class="mt-0" top>
          <template v-slot:activator="{on, attrs}">
          <div id="user_name" style="width:calc(100%)" v-bind="attrs" v-on="on">{{user.name}}</div>
          </template>
          <span>
              <div>{{user.name}}</div>
          </span>
        </v-tooltip>
        </v-card-title>
        <v-card-text style="height: 15%;">
            <v-row class="mt-1 d-flex justify-center">{{user.profession}}</v-row>
            <v-row class="d-flex justify-center">{{user.workplace}}</v-row>
        </v-card-text>
        <v-card-actions class="mb-1 d-flex justify-center">
            <v-btn color="teal" outlined v-on:click="denyfreq(id)">Delete</v-btn>
            <v-btn color="teal" style="color:white" v-on:click="accept()">Accept</v-btn>
        </v-card-actions>
    </v-card>
        </v-template>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default ({
    name: 'Request',
    props: {
        id: String
    },
    data() {
        return {
            user: Object,
            popup: false,
            img: require("../images/7.jpg"),
        }    
    },
    computed: { 
    },
    methods: {
        ...mapActions(['acceptfreq', 'denyfreq', 'getSenderByReqId', 'getUser', 'fillJobsFeed']),
        async accept(){
            await this.acceptfreq(this.id)
            await this.fillJobsFeed();
        }
    },
    async beforeMount() {
        let c

        await this.getSenderByReqId(this.id)
            .then(res => {c = res})

        await this.getUser(c)
            .then(res => {console.log('res:', res); this.user = res.user})
        // console.log("result user", this.user)
    }
})
</script>

<style>
 
</style>