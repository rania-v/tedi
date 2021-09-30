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
                                    <h1 id="myFont" class="ma-3 pa-2 d-flex justify-start align-start white--text">{{this.user.name}}</h1>
                                    <!-- <v-card-title id="myFont" class="ml-3 mt-0 pl-2 pt-0 pb-0 d-flex justify-start align-start white--text">{{user.attrs.profession.value}}</v-card-title> -->
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col class="ma-3 pa-2 d-flex">
                                    <!-- <v-btn class="ma-1" small>send friend request</v-btn> -->
                                    <v-btn v-if="!this.isFriend(this.f_list) && !this.pending_req" class="ma-1" small rounded v-on:click="sendReq(from_id, id)">send friend request</v-btn>
                                    <v-btn v-if="this.isFriend(this.f_list) && !this.pending_req" class="ma-1" small rounded v-on:click="delFriend()">Delete Friend</v-btn>
                                    <v-btn v-if="!this.isFriend(this.f_list) && this.pending_req" class="ma-1" small rounded disabled>Pending Friend Request</v-btn>
                                    <!-- {{this.user.personal.frequests}} -->
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="3">
                                        <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Personal</v-card-title>
                                        <v-card-text class="ml-3 pl-2 pt-0 pb-1 d-flex justify-start align-start white--text">
                                            {{this.user.country}}<br/>
                                            {{this.user.birthday}}<br/>
                                        </v-card-text>
                                        <v-card-title id="myFont" class="ml-3 pl-2 pt-1 pb-0 d-flex justify-start align-start white--text">Contact</v-card-title>
                                        <v-card-text class="ml-3 pl-2 pt-0 d-flex justify-start align-start white--text">
                                            {{this.user.contact.phoneNum ? this.user.contact.phoneNum : ''}}<br/>
                                            {{this.user.contact.perEmail ? this.user.contact.perEmail : ''}}<br/>
                                            {{this.user.contact.profEmail ? this.user.contact.profEmail : ''}}<br/>
                                        </v-card-text>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3">
                                    <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Resume</v-card-title>
                                    <v-card-text class="ml-3 pl-2 pt-0 d-flex justify-start align-start white--text">
                                            <v-btn small outlined color="white">{{this.user.attrs.resume.filename}}</v-btn>
                                    </v-card-text>
                                    <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Ads</v-card-title>
                                    <v-card-text class="ml-3 pl-2 pt-0 d-flex justify-start align-start white--text">
                                            <v-btn small outlined color="white" v-on:click="openAds=true">see {{this.user.firstName}}'s ads</v-btn>
                                            <v-dialog v-model="openAds" width="1000px">
                                            <v-card>
                                                <h2 id="myFont" class="pa-2 d-flex justify-start align-start deep-purple--text">{{user.firstName}}'s Network</h2>
                                                <v-card-text style="display:flex; flex-wrap: wrap;  justify-content: center;">
                                                    <v-col cols="4" v-for="ad in this.user.myJobs" :key="ad">
                                                        <Ad :id="ad"/>
                                                        {{ad}}
                                                    </v-col>
                                                </v-card-text>
                                            </v-card>
                                        </v-dialog>
                                    </v-card-text>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3" class="d-flex align-center">
                                    <v-card color="deep-purple" v-on:click="openNetwork = true">
                                        <v-card-title id="myFont" class="ml-3 pl-2 pb-0 d-flex justify-start align-start white--text">Network</v-card-title>
                                        <v-card-text class="ml-3 pl-2 pt-0 pb-1 d-flex flex-wrap" style="max-height:210px; overflow:hidden;">
                                            <v-col cols="3"  v-for="friend in user_list" :key="friend._id">
                                                <v-badge :content=friend.name :value=hover color="deep-purple lighten-1" overlap>
                                                    <v-avatar>
                                                        <v-img :src="image" ></v-img>
                                                    </v-avatar>
                                                </v-badge>
                                            </v-col>
                                        </v-card-text>
                                        <v-dialog v-model="openNetwork" width="800px">
                                            <v-card>
                                                <h2 id="myFont" class="pa-2 d-flex justify-start align-start deep-purple--text">{{user.firstName}}'s Network</h2>
                                                <v-col cols="3"  v-for="friend in user_list" :key="friend._id">
                                                    <UserCard :user="friend"/>
                                                </v-col>
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
                <v-card flat style="position: -webkit-sticky; position: sticky; top: 120px; z-index: 2; overflow-y: scroll;">
                    <v-card-title id="myFont">Skill Set</v-card-title>
                    <v-chip class="pink white--text small ma-2"
                    v-for="skill in this.user.attrs.skill_list" :key="skill" small>
                        {{skill}}
                    </v-chip>
                </v-card>
            </v-col>
            <v-col cols="6" class="">
                <v-row>
                    <!-- <v-col cols="4">
                        <v-btn v-for="a in actions" :key="a.action" v-on:click="show=a.action" class="mr-1 ml-0" :class="{'teal white--text': show==a.action, 'teal lighten-4 teal--text': show!=a.action}"><v-icon left>{{a.icon}}</v-icon>{{a.action}}</v-btn>
                    </v-col> -->
                    <v-spacer></v-spacer>
                </v-row>
                <v-card v-for="item in this.user.posts" :key="item" class="pa-3 ma-3" elevation="0">
                {{item}}
                    <PostComp :id="item"/>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        </div>
</template>

<script>
// import Profile from './profile.vue'
import PostComp from './post_comp.vue'
import UserCard from '../components/user_card.vue'
import Ad from '../components/ad.vue'

import { mapActions, mapGetters } from 'vuex';

export default ({
    name:"FriendProfile",
    components: {
        // Profile,
        PostComp,
        UserCard,
        Ad
    },
    data() {
        return {
            // isfriend: this.isFriend(),
            id: this.$route.params.id,
            openNetwork: false,
            openAds: false,
                    image: require("../banner/banner_img.svg"),
            show: "Posts",
            actions: [
                {action: 'Conact', icon: 'fas fa-comment'},
                {action: 'Friend', icon: 'fas fa-user-friends'}
            ],
            user_list: [],
            ads_list: [],
            pending_req: false,
            // loading_user: this.loadUser(),
            user: Object,
        };
    },
    computed:{
        ...mapGetters({
            from_id: '_id',
            f_list: 'friends',
        }),
    },
    async beforeMount(){
        let i = this.$route.params.id
        await this.getUser(i)
            .then(res => {this.user = res.user})
            console.log('user: ', this.user)
        let f;
        for(let friend of this.user.friends) {
                await this.getUser(friend)
                    .then(res => { f = res.user});
                this.user_list.push(f);
        }
        // if(this.user.frequests.includes(this.from_id) == true)
        //         this.pending_req = true;
        // console.log("arr:", this.user.frequests, "id:", this.from_id)

        // let ad;
        // for(let a of this.user.myJobsAds) {
        //         await this.getAd(a)
        //             .then(res => { ad = res});
        //             // console.log('fri: ', f);
        //         this.ads_list.push(ad);
        // }
    },
    methods:{
        ...mapActions(['getUser', 'sendfreq', 'removeFriend', 'getAd']),
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
            this.pending_req = true;
            this.$forceUpdate();
        },
        delFriend() {
            console.log(this.id)
            this.removeFriend(this.id);
            this.isfriend = this.isFriend();
            this.$forceUpdate();
        },
        isFriend(farray) {
            console.log('arr: ', farray)
            if(!farray)
                return false
            if(farray.list.includes(this.id))
                return true
            return false
        }
    }
})
</script>

<style>

</style>