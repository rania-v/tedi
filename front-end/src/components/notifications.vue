<template>
    <v-container class="pa-0"  style="width:100%">
        <v-container>
            <v-card-title>
                Friend requests
                <v-spacer></v-spacer>
                <v-btn v-if="!show_requests" plain v-on:click="show_requests=true"><i class="fas fa-chevron-down"></i></v-btn>
                <v-btn v-if="show_requests" plain v-on:click="show_requests=false"><i class="fas fa-chevron-up"></i></v-btn>
            </v-card-title>
            <v-card-text class="ma-0 pa-0" v-if="show_requests">
                <v-slide-group v-if="this.notifications.frequests.length!=0">
                    <v-slide-item v-for="i in this.notifications.frequests" :key="i">
                        <Request :id='i'/>
                    </v-slide-item>
                </v-slide-group>
                <v-card v-else flat>
                    <v-card-text>No friend request, nbody wants to be friends with you</v-card-text>
                </v-card>
            </v-card-text>
        </v-container>
        <v-divider></v-divider>
        <v-container>
            <v-card-title>See what your friends have been up to</v-card-title>
            <v-card-text class="ma-0 pa-0" >
                <Notification class="ma-1" v-for="not in this.notifications.reacts" :key="not" :notification='not' type="reaction"/>
            </v-card-text>
            <v-card-text class="ma-0 pa-0" >
                <Notification class="ma-1" v-for="not in this.notifications.comments" :key="not" :notification='not' type="comment"/>
            </v-card-text>
        </v-container>
    </v-container>
</template>

<script>
import Request from './request.vue'
import Notification from './notific_comp.vue'

import { mapGetters } from 'vuex';

export default({
    name: 'Notifications',
    components: {
        Request,
        Notification
    },
    data() {
        return {
            show_requests: true,
        }
    },
    computed:{
        ...mapGetters({
            notifications: 'notifications'
        })
    }
})
</script>

<style>

</style>