<template>
    <v-container style="max-height: 685px;">
        <v-row >
            <v-col cols="7">
                <!-- <v-container class="overflow-hidden deep-purple lighten-4 rounded pt-4 pb-4 pr-2 pl-2" :style="{'max-height': height}"> -->
                    <OpenAd :open="open"/>
                <!-- </v-container> -->
            </v-col>
            <v-col cols="5">
                <v-card class="mb-5" elevation="0">
                    <v-card-title class="white--text  deep-purple"  id="myFont">
                        Applications
                        <v-spacer></v-spacer>
                        <v-btn v-if="!show_applications" plain v-on:click="show_applications=true, show_views=false"><i class="fas fa-chevron-down white--text"></i></v-btn>
                        <v-btn v-if="show_applications" plain v-on:click="show_applications=false"><i class="fas fa-chevron-up white--text"></i></v-btn>
                    </v-card-title>
                    <v-card-text v-if="show_applications" class="pa-0">
                        <v-row class="ma-1"  style="max-height:540px; overflow:scroll; overflow-x:hidden;" >
                            <v-col cols="4"  v-for="i in [1,2,3,4,5,6,7,7,8,8,8,0,8,8]" :key="i">
                                <UserCard/>
                            </v-col>                 
                        </v-row>
                    </v-card-text>
                </v-card>
                <v-card elevation="0" class="mt-2">
                    <v-card-title class="teal--text" id="myFont">
                        Views
                        <v-spacer></v-spacer>
                        <v-btn v-if="!show_views" plain v-on:click="show_views=true, show_applications=false"><i class="fas fa-chevron-down"></i></v-btn>
                        <v-btn v-if="show_views" plain v-on:click="show_views=false"><i class="fas fa-chevron-up"></i></v-btn>
                    </v-card-title>
                    <v-card-text v-if="show_views" class="pa-0">
                        <v-row class="ma-1" style="max-height:540px; overflow:scroll; overflow-x:hidden;">
                            <v-col cols="4" v-for="i in [1,2,3,4,5,6,7,7,8,8,8,0,8,8]" :key="i">
                                <UserCard/>
                            </v-col>                 
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import OpenAd from './open_ad.vue'
import UserCard from './user_card.vue'

export default ({
    name: 'OpenMyAd',
    components: {
        OpenAd,
        UserCard,
    },
    data() {
        return{
            open: false,
            height: '100%',
            closed: true,
            show_views: true,
            show_applications: false
        }
    },
})
</script>


<style>

#myFont {
  font-family: 'Fira Sans Extra Condensed', sans-serif !important;
}

</style>