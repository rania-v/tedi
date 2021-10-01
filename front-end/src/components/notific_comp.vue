<template>
    <v-container>
        <v-card color="teal lighten-5 rounded-lg" elevation="0">
            <v-row class="pb-0 pt-0">
                <v-col cols="2"  class="d-block">
                        <router-link :to="{name:'Friend_Profile', params:{id:this.user._id}}">
                    <v-avatar size="35">
                            <v-img :src="image"></v-img>
                    </v-avatar>
                    <v-subheader class="d-flex justify-center" style="color:teal; width:100%; height:30%; ">{{user.name}}</v-subheader>                     
                        </router-link>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                    <v-card-text v-if="type == 'reaction'">
                        reacted to your post
                    </v-card-text>
                    <v-card-text v-if="type == 'comment'">
                        commented on your 
                        <v-btn text small color="deep-purple" :to="{name:'OpenedPost', params:{id: comment_post_id}}">post</v-btn>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>

import { mapActions } from 'vuex';

export default ({
    name: 'Notification',
    data() {
        return {
            user: {
                // photo: require('../icons/avatars/sailormoon.jpeg'),
                // name: 'Chaka Khan',
                // profession: 'Singer',
                // workplace: 'Vietnam Singing Bar'
            },
            open_comment: false,
            comment_post_id: null,
            image: require('../icons/avatars/homer.png')
        }
    },
    props:{
        notification: null,
        type: String,
    },
    methods:{
        ...mapActions(['getComment', 'getChat', 'getUser'])
    },
    async beforeMount() {
        if(this.type == 'reaction') {
            await this.getUser(this.notification.creator)
                .then(res => {console.log('res:', res.user);this.user = res.user})
        }
        if(this.type == 'comment') {
            let comm;
            await this.getComment(this.notification)
                .then(res => {console.log('comm:', res.comment); comm = res.comment})
            await this.getUser(comm.creator)
                .then(res => {console.log('comm name:', res.user);this.user = res.user})
            this.comment_post_id = comm.post
            return comm;
        }
    }
})
</script>

<style>

</style>