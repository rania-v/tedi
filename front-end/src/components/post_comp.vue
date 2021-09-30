<template>
    <v-card elevation="0" v-if="gotPost()" >
        <v-card-title>
            <v-row justify="space-between">
                <v-col class=text-left>
                    <v-avatar>
                    <v-img :src="user_avatar"></v-img>
                    </v-avatar>
                    <h5 id="myFont">{{this.creator.name}}</h5>
                </v-col>
                <v-col id="time" class=text-right >{{this.post.Date}}</v-col>
            </v-row>
        </v-card-title>
        <v-img :src="this.post_photo" max-height="200px" contain></v-img>
        <v-card-text>
            <v-row>
                <v-card-text>{{post.content}}</v-card-text>
            </v-row>
        </v-card-text>
        <v-row>
            <v-col id="rcts" class=text-left><v-icon left small>far fa-hand-spock</v-icon>{{reacts}}</v-col>
        </v-row>
        <v-divider style="margin-right:5%; margin-left:5%"></v-divider>
        <v-card-actions id="actions">
            <v-row>
                <v-col>
                    <v-btn text color="teal" @click="React">
                        <v-icon v-if="!has_reacted" left>far fa-hand-spock</v-icon>
                        <v-icon v-else left>fas fa-hand-spock</v-icon>
                            React
                    </v-btn>
                </v-col>
                <v-col><v-btn text color="teal" @click="comm = true"><v-icon left>far fa-comment-dots</v-icon>Comment</v-btn></v-col>
                <v-col><v-btn text style="color:cornflowerblue"><v-icon left>far fa-share-square</v-icon>Share</v-btn></v-col>
            </v-row>
        </v-card-actions>
        <v-row v-if="this.comm==true">
            <v-card class="rounded-pill mt-2 pr-4 pl-4 mb-1 d-flex" 
                    flat width="100%" height="60px"
                    style="margin-right:5%; margin-left:5%; margin-top:1% lenght: length:100%;"
                    color="teal lighten-5"
                    v-click-outside="Hide_new_comm">
                <v-text-field v-model="new_comm" label="Write a comment..." color="teal accent-4" v-on:keyup.enter="post_new_comm"></v-text-field>
            </v-card>
        </v-row>
        <v-row>
            <v-divider style="margin-right:5%; margin-left:5%; margin-top:1%"></v-divider>
            <CommentsComp :comm_list="this.post.comments" />
        </v-row>
    </v-card>
</template>

<script>

import CommentsComp from './comments_comp.vue'
import { mapActions, mapGetters } from 'vuex'

export default ({
    name: 'PostComp',
    components:{
        CommentsComp
    },
    data() {
        return {
            user_avatar: require('../icons/avatars/haruka.jpg'),
            post_photo: require('../images/12.jpg'),
            time: '',
            text: '',
            reacts: null,
            comm: false,
            new_comm: null,
            has_reacted: this.reacted
        }
    },
    props:{
        creator: String,
        post: Object,
        id: String,
    },
    methods: {
        ...mapActions(["getPost","getUser",'createComment','react']),
        async post_new_comm() {
            let a = {
                postId: this.id,
                form: {content: this.new_comm}
            }
            await this.createComment(a)

            await this.loadPost()

            this.new_comm=''
        },
        async loadPost(){
            await this.getPost(this.id)
            .then(res=>{this.post=res.post})
            this.post.Date = this.post.Date.slice(0,10)
            this.reacts = this.post.reacts.length;
        },
        gotPost(){
            return this.post
        },
        Hide_new_comm() {
            if (this.comm == true)
                this.comm = false;
        },
        async React() {
            // search react list of comment and if not already there add 
            if(this.reacted){   // remove react
            }
                                // post react
            await this.react({postId: this.post._id, react: 1})
            // .then(res=>{console.log('res: ', res)})
            // this.has_reacted=true

            await this.loadPost();
            this.reacted();
            // else reacts -- and remove from react list
        },
        reacted(){
            // console.log('reacts: ', this.post.reacts)
            for(let r of this.post.reacts){
                if(r.creator == this._id){
                    this.has_reacted=true;
                    return;
                }
            }
            this.has_reacted=false
        },
    },
    computed:{
        ...mapGetters({
            _id: '_id'
        }),
    },
    
    async beforeMount(){
        console.log('id: ', this.id)
        await this.loadPost();
        await this.getUser(this.post.creator)
        .then(res=>{
            console.log('res:', res)
            this.creator = res.user;
        })
        this.reacted();
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

