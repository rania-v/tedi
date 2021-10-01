<template>
    <v-container style="max-height: 685px;">
        <v-row >
            <v-col cols="7">
                <!-- <v-container class="overflow-hidden deep-purple lighten-4 rounded pt-4 pb-4 pr-2 pl-2" :style="{'max-height': height}"> -->
                    <OpenAd :open="open" :id="id" :ad="ad"/>
                <!-- </v-container> -->
            </v-col>
            <v-col cols="5">
                <v-card class="mb-5" elevation="0">
                    <v-card-title class="teal--text" id="myFont">
                        Views
                        <v-spacer></v-spacer>
                        {{this.ad.views}}
                    </v-card-title>
                </v-card>
                <v-card elevation="0" class="mt-2">
                    <v-card-title class="white--text  deep-purple"  id="myFont">
                        Applications
                        <v-spacer></v-spacer>
                        <v-btn v-if="!show_applications" plain v-on:click="show_applications=true, show_views=false"><i class="fas fa-chevron-down white--text"></i></v-btn>
                        <v-btn v-if="show_applications" plain v-on:click="show_applications=false"><i class="fas fa-chevron-up white--text"></i></v-btn>
                    </v-card-title>
                    <v-card-text v-if="show_applications" class="pa-0">
                        <v-card-text v-if="allAppl.length == 0">No applications yet</v-card-text>
                        <v-row class="ma-1"  style="max-height:540px; overflow:scroll; overflow-x:hidden;" >
                            <v-col cols="4"  v-for="i in allAppl" :key="i">
                                <UserCard :user="i" :choices="true"/>
                            </v-col>                 
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import OpenAd from './open_ad.vue'
import UserCard from './user_card.vue'

export default ({
    name: 'OpenMyAd',
    components: {
        OpenAd,
        UserCard,
    },
    props: {
        id:String,
        ad: Object
    },
    data() {
        return{
            open: false,
            height: '100%',
            closed: true,
            show_views: true,
            show_applications: false,
            allAppl: ''
        }
    },
    methods:{
        ...mapActions(['getUser']),
    },
    async beforeMount(){
        let appls=[];
        console.log('this.ad: ', this.ad)
        for(let u of this.ad.applicants){
            await this.getUser(u)
            .then(res=>{
                appls.push(res.user)
            })
        }
        this.allAppl=appls
    }
})
</script>


<style>

#myFont {
  font-family: 'Fira Sans Extra Condensed', sans-serif !important;
}

</style>