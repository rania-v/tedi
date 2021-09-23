<template>
    <v-container class="pa-0 ma-0 d-flex" style="max-height: 120px; min-width:100%;">
        
            <div style="height:40px;width:40px;border:2px solid red;" @click="mpla_();">
                {{firstName}}kjsbksusu
            </div>
            <!-- <v-img :src="banner_back" max-height="120px" min-width="101%" style="top: 0; right: 0; z-index:1 !important"></v-img> -->
            <v-img :src="banner_img" max-height="120px" max-width="200px" contain aspect-ratio="1" style="z-index:3"></v-img>
            <v-card-title style="color: white">AWESOME SITE NAME</v-card-title>
    </v-container>
</template>

<script>


import { mapActions, mapGetters } from "vuex"

export default({
    name: 'Banner',
    data() {
        return {
            banner_img: require("../banner/banner_img.svg"),
            banner_back: require("../banner/back.jpg")
        }
    },
    methods:{
        ...mapActions(["mpla",]),
        mpla_(){
            alert(this.mpla());
        },
    },
    computed:{
        ...mapGetters({
            firstName: "firstName",
        }),  
    },
})
</script>

<style>

</style>