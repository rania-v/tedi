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

    <v-card width="20%" class="ma-2 pb-2">
        <v-img :src="user.photo"></v-img>
        <v-card-title>
            <v-row class="d-flex justify-center">{{user.name}}</v-row>
        </v-card-title>
        <v-card-text>
            <v-row class="d-flex justify-center">{{user.profession}}</v-row>
            <v-row class="d-flex justify-center">{{user.workplace}}</v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
            <v-btn color="teal" outlined v-on:click="denyfreq(id)">Delete</v-btn>
            <v-btn color="teal" style="color:white" v-on:click="this.acceptfreq(this.id)">Accept</v-btn>
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
        id: null
    },
    data() {
        return {
            popup: false,
            user: {
                photo: require('../icons/avatars/sailormoon.jpeg'),
                name: 'Chaka Khan',
                profession: 'Singer',
                workplace: 'Vietnam Singing Bar'
            }
        }    
    },
    methods: {
        ...mapActions(['acceptfreq', 'denyfreq']),
    }
})
</script>

<style>
 
</style>