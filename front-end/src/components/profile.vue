<template>
    <v-card>
            <v-card-title id="profile_card" >Profile</v-card-title>
            <v-img  id="user_prof_pic" :src='image'></v-img>
            <v-container id="personal">
                <v-card elevation="1">
                    <v-card-title>Personal Info</v-card-title>
                    <v-card-text style="margin:2%">
                        <v-row>{{this.firstName + ' ' + this.lastName}}</v-row>
                        <v-row>{{this.birthday.value}}</v-row>
                        <v-row>{{this.profession.value}}</v-row>
                        <!-- <v-row>{{this.friends.list}}</v-row> -->
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text color="teal" :to="{ name: 'PersonalInfo' , params:{ page_title : 'Προσωπικά Στοιχεία'}}">more...</v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
            <v-container id="personal">
                <v-card elevation="1">
                    <v-card-title>Social</v-card-title>
                    <v-card-text class="d-flex flex-wrap" style="max-height:210px; overflow:hidden;">
                        <v-col cols="3"  v-for="friend in this.network" :key="friend._id">
                            <v-badge :content=friend.name :value=hover color="deep-purple lighten-1" overlap>
                                <router-link  :to="{ name: 'Friend_Profile', params:{ id: friend._id} }">
                                    <v-avatar>
                                        <v-img v-bind:src="friend_image" class="ma-2" @mouseover="hover=true, usr=friend.user" @mouseleave="hover=false, usr=null" v-on:click="ShowFriendProf(friend.user)"></v-img>
                                    </v-avatar>
                                </router-link>
                            </v-badge>
                        </v-col>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text color="teal" :to="{ name: 'MyNetwork', params:{ page_title : 'Δίκτυο'} }" >more...</v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-card>
</template>

<script>

import { mapActions, mapGetters } from "vuex"

export default ({
    name: "Profile",
    data() {
       return {
            id: this.$route.params.id,
            image: require('../images/usagi_1.png'),
            hover: false,
            usr:null,
            network: [],
            loading_list: this.buildNetwork(),
            friend_image: require('../icons/avatars/rei.png'),
       }
    },
    computed:{
        ...mapGetters({
            firstName: "firstName",
            lastName: "lastName",
            birthday: "birthday",
            image2: "image",
            profession: "profession",
            friends: "friends",
            country: "country",
            frequests: "frequests"
        }),
    },
    methods: {
        ...mapActions(['getUser', 'getFriends']),
        Open_Network() {
            // let p = this.$parent;
            // if(p.$options.name == 'Home')
                this.$emit('Goto', 'Δίκτυο');
                // this.$emit('update:msg', 'NO')
        },
        ShowFriendProf(nam) {
            this.name = nam;
            this.$emit('ChangePT', nam);
        },

        async buildNetwork(){
            let users = [];
            users = await this.getFriends()
                .then(res => {this.network = res;})
            return users;
        }
    }
})
</script>

<style>

#profile_card {
    padding-bottom: 10%;
    padding-top: 10%;
    margin-right: auto;
    font-size: 70px;
    /* font-family: 'Lobster Two', cursive; */
        /* font-family: 'Gowun Dodum', sans-serif; */
        font-family: 'Montserrat', sans-serif;
}

#user_prof_pic {
    max-width: auto;
    aspect-ratio: 1;
    margin: auto;
}

#personal {
    font-size: 20px;

    /* margin-left: 5%;
    margin-bottom: 5%; */
    /* font-family: 'Gowun Dodum', sans-serif; */
}

#personal .v-btn {
  text-transform: unset !important;
}
</style>
