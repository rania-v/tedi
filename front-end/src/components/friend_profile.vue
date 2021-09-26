<template>
    <div>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="8">
                <v-card color="deep-purple" height="320px">
                    <v-row class="d-fex ma-2">
                        <v-img :src="image" class="ma-3 pa-2" max-width="300px" min-width="300px" aspect-ratio="1"></v-img>
                        <v-col>
                            <v-row>
                                <v-col class="ma-0 pa-0" cols="6">
                                    <h1 id="myFont" class="ma-3 pa-2 d-flex justify-start align-start white--text">{{user.name}}</h1>
                                    <!-- <v-card-title id="myFont" class="ml-3 mt-0 pl-2 pt-0 pb-0 d-flex justify-start align-start white--text">{{user.attrs.profession.value}}</v-card-title> -->
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col class="ma-3 pa-2 d-flex">
                                    <!-- <v-btn class="ma-1" small>send friend request</v-btn> -->
                                    <v-btn v-if="!isfriend" class="ma-1" small rounded v-on:click="sendReq(from_id, id)">send friend request</v-btn>
                                    <v-btn v-else class="ma-1" small rounded v-on:click="delFriend()">Delete Friend</v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="3">
                                        <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Personal</v-card-title>
                                        <v-card-text class="ml-3 pl-2 pt-0 pb-1 d-flex justify-start align-start white--text">
                                            {{user.country}}<br/>
                                            {{user.birthday}}<br/>
                                        </v-card-text>
                                        <v-card-title id="myFont" class="ml-3 pl-2 pt-1 pb-0 d-flex justify-start align-start white--text">Contact</v-card-title>
                                        <v-card-text class="ml-3 pl-2 pt-0 d-flex justify-start align-start white--text">
                                            {{user.contact.phoneNum}}<br/>
                                            {{user.contact.perEmail}}<br/>
                                            {{user.contact.profEmail}}<br/>
                                        </v-card-text>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3">
                                    <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Resume</v-card-title>
                                    <v-card-text class="ml-3 pl-2 pt-0 d-flex justify-start align-start white--text">
                                            <v-btn small outlined color="white">{{user.attrs.resume.filename}}</v-btn>
                                    </v-card-text>
                                    <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Ads</v-card-title>
                                    <v-card-text class="ml-3 pl-2 pt-0 d-flex justify-start align-start white--text">
                                            <v-btn small outlined color="white">see {{user.name}}'s ads</v-btn>
                                    </v-card-text>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3" class="d-flex align-center">
                                    <v-card color="deep-purple" v-on:click="openNetwork = true">
                                        <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Network</v-card-title>
                                        <v-card-text class="ml-3 pl-2 pt-0 pb-1 d-flex flex-wrap" style="max-height:210px; overflow:hidden;">
                                            <v-col cols="3"  v-for="friend in user.friends" :key="friend">
                                                <v-badge :content=friend :value=hover color="deep-purple lighten-1" overlap>
                                                    
                                                </v-badge>
                                            </v-col>
                                        </v-card-text>
                                        <v-dialog v-model="openNetwork" width="800px">
                                            <v-card>
                                                <h2 id="myFont" class="pa-2 d-flex justify-start align-start deep-purple--text">{{user.firstName}}'s Network</h2>
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

import { mapActions, mapGetters } from 'vuex';

export default ({
    name:"FriendProfile",
    components: {
        // Profile,
        PostComp
    },
    data() {
        return {
            ...mapGetters({
                from_id: '_id',
                f_list: 'friends'
            }),
            isfriend: this.isFriend(),
            id: this.$route.params.id,
            openNetwork: false,
                    image: require("../banner/banner_img.svg"),
            show: "Posts",
            actions: [
                {action: 'Conact', icon: 'fas fa-comment'},
                {action: 'Friend', icon: 'fas fa-user-friends'}
            ],
            loading_user: this.loadUser(),
            user: null,
        };
    },
    methods:{
        ...mapActions(['getUser', 'sendfreq', 'removeFriend']),
        mpla(){
            console.log('id: ',this.$route.params.id);
            return null;
        },
        sendReq(f, t) {
            console.log(this.from_id)
            let a = {
                from: f, 
                to_user: t,
            }
            this.sendfreq(a);
        },
        isFriend() {
            return this.f_list.includes(this.id)
        },
        delFriend() {
            console.log(this.id)
            this.removeFriend(this.id);
            this.isfriend = this.isFriend();
        },
        async loadUser() {
            let i = this.$route.params.id
            let a = await this.getUser(i)
                .then(res => {return res.user})
                console.log('a: ', a)
            this.user=a;
            return a;
        }
    }
})
</script>

<style>

</style>