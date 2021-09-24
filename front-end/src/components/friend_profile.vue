<template>
    <div>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="8">
                <v-card color="deep-purple" height="320px">
                    <v-row class="d-fex ma-2">
                        <v-img :src="other_user.personal.image" class="ma-3 pa-2" max-width="300px" min-width="300px" aspect-ratio="1"></v-img>
                        <v-col>
                            <v-row>
                                <v-col class="ma-0 pa-0" cols="6">
                                    <h1 id="myFont" class="ma-3 pa-2 d-flex justify-start align-start white--text">{{other_user.personal.firstName}} {{other_user.personal.lastName}}</h1>
                                    <v-card-title id="myFont" class="ml-3 mt-0 pl-2 pt-0 pb-0 d-flex justify-start align-start white--text">{{other_user.attrs.profession.value}}</v-card-title>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col class="ma-3 pa-2 d-flex">
                                    <v-btn class="ma-1" small>send friend request</v-btn>
                                    <v-btn class="ma-1" small>send friend request</v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="3">
                                        <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Personal</v-card-title>
                                        <v-card-text class="ml-3 pl-2 pt-0 pb-1 d-flex justify-start align-start white--text">
                                            {{other_user.personal.country.value}}<br/>
                                            {{other_user.personal.birthday.value}}<br/>
                                        </v-card-text>
                                        <v-card-title id="myFont" class="ml-3 pl-2 pt-1 pb-0 d-flex justify-start align-start white--text">Contact</v-card-title>
                                        <v-card-text class="ml-3 pl-2 pt-0 d-flex justify-start align-start white--text">
                                            {{other_user.contact.phoneNum.value}}<br/>
                                            {{other_user.contact.perEmail.value}}<br/>
                                            {{other_user.contact.profEmail.value}}<br/>
                                        </v-card-text>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3">
                                    <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Resume</v-card-title>
                                    <v-card-text class="ml-3 pl-2 pt-0 d-flex justify-start align-start white--text">
                                            <v-btn small outlined color="white">{{other_user.attrs.resume.filename}}</v-btn>
                                    </v-card-text>
                                    <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Ads</v-card-title>
                                    <v-card-text class="ml-3 pl-2 pt-0 d-flex justify-start align-start white--text">
                                            <v-btn small outlined color="white">see {{other_user.personal.firstName}}'s ads</v-btn>
                                    </v-card-text>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3" class="d-flex align-center">
                                    <v-card color="deep-purple" v-on:click="openNetwork = true">
                                        <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Network</v-card-title>
                                        <v-card-text class="ml-3 pl-2 pt-0 pb-1 d-flex flex-wrap" style="max-height:210px; overflow:hidden;">
                                            <v-col cols="3"  v-for="friend in other_user.personal.friendsList.slice(0,7)" :key="friend">
                                                <v-badge :content=friend :value=hover color="deep-purple lighten-1" overlap>
                                                    <!-- <router-link  :to="{ name: 'Friend_Profile', params:{ id: friend.user} }">
                                                        <v-avatar>
                                                            <v-img v-bind:src=friend.avatar class="ma-2" @mouseover="hover=true, usr=friend.user" @mouseleave="hover=false, usr=null" v-on:click="ShowFriendProf(friend.user)"></v-img>
                                                        </v-avatar>
                                                    </router-link> -->
                                                </v-badge>
                                            </v-col>
                                        </v-card-text>
                                        <v-dialog v-model="openNetwork" width="800px">
                                            <v-card>
                                                <h2 id="myFont" class="pa-2 d-flex justify-start align-start deep-purple--text">{{other_user.personal.firstName}}'s Network</h2>
                                            </v-card>
                                        </v-dialog>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="2">
                <!-- <Profile/> -->
            </v-col>
            <v-col cols="6" class="">
                <v-row>
                    <!-- <v-col cols="4">
                        <v-btn v-for="a in actions" :key="a.action" v-on:click="show=a.action" class="mr-1 ml-0" :class="{'teal white--text': show==a.action, 'teal lighten-4 teal--text': show!=a.action}"><v-icon left>{{a.icon}}</v-icon>{{a.action}}</v-btn>
                    </v-col> -->
                    <v-spacer></v-spacer>
                </v-row>
                <PostComp/>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        </div>
</template>

<script>
// import Profile from './profile.vue'
import PostComp from './post_comp.vue'

import { mapActions } from 'vuex';

export default ({
    name:"FriendProfile",
    components: {
        // Profile,
        PostComp
    },
    data() {
        return {
            openNetwork: false,
            show: "Posts",
            actions: [
                {action: 'Conact', icon: 'fas fa-comment'},
                {action: 'Friend', icon: 'fas fa-user-friends'}
            ],
            user:this.getUser(this.id),
            // user:this.mpla(),
                        other_user: {
                            personal:{
                                firstName: 'Zoro',
                                lastName: 'Name',
                                image: require("../banner/banner_img.svg"),
                                birthday: {value:'IT', private:0},
                                country: {value:'IT', private:0},
                                friendsList:[  'user', 'user', 'user', 'user', 'user', 'user', 'user', 'user', 'user', 'user', 'user', 'user', 'user' ],
                                // frequests:[ { type: mongoose.Schema.Types.ObjectId, ref: 'frequests' } ],
                                myJobsAds:[  'Ad1', 'Ad2', 'Ad3'  ],
                                // myChats:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' } ],
                                myPosts:[  'Post1', 'Post2', 'Post3' ],
                            },
                            contact:{
                                phoneNum: {value:'IT', private:0},
                                perEmail: {value:'IT', private:0},
                                profEmail: {value:'IT', private:0}
                            },
                            attrs:{
                                resume:{
                                    file: {type: Buffer},
                                    filename: 'My Cool Juicy Resume',
                                    mimetype: { type: String}
                                },
                                profession: {value:'Software Engineer', private:0} ,
                                workplace: {value:'IT', private:0},
                                skill_list: [ 'workahiolic bitch']
                            },    
                        }

        };
    },
    props:{
        id: String,
    },
    methods:{
        ...mapActions(['getUser']),
        mpla(){
            console.log('id: ',this.id);
            return null;
        }
    }
})
</script>

<style>

</style>