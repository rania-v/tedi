<template>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="2">
            <Profile/>
        </v-col>
        <v-col cols="1" class="friend_action">
            <v-btn v-for="action in ['Posts','Contact', 'Add To Favs']" :key="action" v-on:click="show=action">{{action}}</v-btn>
        </v-col>
        <v-col cols="6" class="pt-0">
            <PostComp v-if="show=='Posts'"/>
            <MsgFriend v-if="show=='Contact'"/>
            <PostComp v-if="show=='Add To Favs'"/>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>     
</template>

<script>
import Profile from './profile.vue'
import PostComp from './post_comp.vue'
import MsgFriend from './msgfriend.vue'

export default ({
    name:"FriendProfile",
    components: {
        Profile,
        PostComp,
        MsgFriend
    },
    data() {
        return {
            show: "Posts"
        };
    },
})
</script>

<style>


.friend_action .v-btn {
    font-size: 90% !important;
    height: 8% !important;
    margin-bottom: 10% !important;
    background-color: orange !important;
    color: cornsilk !important;
    width: 100%;
    /* white-space: normal !important; */
    /* word-wrap: break-word !important; */
}

</style>