<template>
    <v-card width="100%" class="mt-2 pb-2" max-height="300px" @mouseover.native="overlay=true" @mouseleave="overlay=false">
        <v-img :src="user.image ? user.image : require('../icons/avatars/user1.png') ">
            <v-overlay absolute v-if="choices" :value="overlay" color="white" >
                <v-responsive :aspect-ratio="13/4" class="">
                    <v-btn id="ovr-btn" class="ma-2" color="teal" :to="{ name: 'Friend_Profile', params:{ id: user._id,  page_title : 'Δίκτυο'}}">open profile</v-btn>
                    <v-btn id="ovr-btn" class="ma-2" color="deep-purple" >send message</v-btn>
                    <v-btn id="ovr-btn" class="ma-2" color="red" tlined>delete friend</v-btn>
                </v-responsive>
            </v-overlay>
        </v-img>
        <v-card-title>
            <router-link :to="{ name: 'Friend_Profile', params:{ id: user._id,  page_title : 'Δίκτυο'}}">
                <v-row class="d-flex justify-center" style="word-break: break-word;">{{user.name}}</v-row>
            </router-link>
        </v-card-title>
        <v-card-text>
            <v-row class="d-flex justify-center">{{user.attrs.profession}}</v-row>
            <v-row class="d-flex justify-center">{{user.attrs.workplace}}</v-row>
        </v-card-text>
    </v-card>
</template>

<script>

export default ({
    name: 'UserCard',
    data() {
      return {
          overlay: false,
        }
    },
    props:{
        user: Object,
        choices:{type: Boolean, default: true}
    },
})
</script>

<style>
#ovr-btn{
    width:10%;
    height:10%;
}
</style>