<template>
    <v-row>
        <Profile/>
        <v-col style="max-width:7%" class="friend_action">
            <v-btn v-for="action in ['Posts','Contact', 'Add To Favs']" :key="action" v-on:click="show=action">{{action}}</v-btn>
        </v-col>
        <v-col class="pt-0">
            <PostComp v-if="show=='Posts'"/>
            <MsgFriend v-if="show=='Contact'"/>
            <PostComp v-if="show=='Add To Favs'"/>
        </v-col>
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

.friend_action {
    margin-right: 0% !important;
    padding-top: 0% !important;
    padding-left: 0%;
}

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