<template>
    <v-card elevation="0">
        <v-card-title>
            <v-row justify="space-between">
                <v-col class=text-left>
                    <v-avatar>
                    <v-img :src=user_avatar></v-img>
                    </v-avatar>
                    <strong id="user_name" v-html=user></strong>
                </v-col>
                <v-col id="time" class=text-right >{{this.post.Date}}</v-col>
            </v-row>
        </v-card-title>
        <v-img :src="post_photo" max-height="200px" contain></v-img>
        <v-card-text>
            <v-row>
                <v-card-text>{{this.post.content}}</v-card-text>
            </v-row>
        </v-card-text>
        <v-row>
            <v-col id="rcts" class=text-left><v-icon left small>far fa-hand-spock</v-icon>{{reacts}}</v-col>
        </v-row>
        <v-divider style="margin-right:5%; margin-left:5%"></v-divider>
        <v-card-actions id="actions">
            <v-row>
                <v-col><v-btn text color="teal" @click="React"><v-icon left>far fa-hand-spock</v-icon>React</v-btn></v-col>
                <v-col><v-btn text color="teal" @click="comm = true"><v-icon left>far fa-comment-dots</v-icon>Comment</v-btn></v-col>
                <v-col><v-btn text style="color:cornflowerblue"><v-icon left>far fa-share-square</v-icon>Share</v-btn></v-col>
            </v-row>
        </v-card-actions>
        <v-row v-if="comm==true">
            <v-card class="rounded-pill mt-2 pr-4 pl-4 mb-1 d-flex" 
                    flat width="100%" height="60px"
                    style="margin-right:5%; margin-left:5%; margin-top:1% lenght: length:100%;"
                    color="teal lighten-5"
                    v-click-outside="Hide_new_comm">
                <v-text-field v-model="new_comm" label="Write a comment..." color="teal accent-4" v-on:keyup.enter="post_new_comm"></v-text-field>
                {{new_comm}}
            </v-card>
        </v-row>
        <v-row>
            <v-divider style="margin-right:5%; margin-left:5%; margin-top:1%"></v-divider>
            <CommentsComp/>
        </v-row>
    </v-card>
</template>

<script>

import CommentsComp from './comments_comp.vue'
import { mapActions } from 'vuex'

export default ({
    name: 'PostComp',
    components:{
        CommentsComp
    },
    data() {
        return {
            post: null,
            creator: null,
            user: '',
            user_avatar: require('../icons/avatars/haruka.jpg'),
            post_photo: require('../icons/avatars/haruka.jpg'),
            time: '',
            text: '',
            reacts: null,
            comm: false,
            new_comm: null
        }
    },
    props:{
        id: String,
    },
    methods: {
        ...mapActions(["getPost","getUser"]),
        post_new_comm() {
            let new_comment = {
                user_avatar: this.user_avatar,
                user: this.user,
                comment_text: this.new_comm
            }
            CommentsComp.comment_array.push(new_comment)
        },
        Hide_new_comm() {
            if (this.comm == true)
                this.comm = false;
        },
        React() {
            // search react list of comment and if not already there add 
            this.reacts++;
            // else reacts -- and remove from react list
        }
    },
    
    async beforeMount(){
        console.log('id: ', this.id)
        await this.getPost(this.id)
            .then(res=>{
                this.post=res.post;
            })
        await this.getUser(this.post.creator)
        .then(res=>{
            this.creator = res;
        })
        // console.log('post: ', this.post);
    }
})
</script>

<style>


.avatar {
    width: 100%;
}

#user_name {
    font-family:Verdana;
    padding-left: 2%;
    /* color: blueviolet; */
    white-space: nowrap; 
  /* width: 100px;  */
  overflow: hidden;
  text-overflow: ellipsis; 
}

#user_name:hover {
    color: blueviolet;
}

#time {
    color: cornflowerblue;
    font-size: 15px;
    /* justify-content: center; */
}

#rcts {
    margin-left: 5%;
    font-size: 15px;
    color: grey;
}

</style>

