<template>
    <v-container>
        <v-row >
            <v-col cols="7">
                <v-container class="overflow-hidden teal" :style="{'max-height': height}">
                    <OpenAd/>
                </v-container>
            </v-col>
            <v-col>
                <v-card class="pb-3" elevation="1">
                    <v-card-title class="teal--text"  id="myFont">
                        Applications
                        <v-spacer></v-spacer>
                        <v-btn v-if="!show_applications" plain v-on:click="show_applications=true"><i class="fas fa-chevron-down"></i></v-btn>
                        <v-btn v-if="show_applications" plain v-on:click="show_applications=false"><i class="fas fa-chevron-up"></i></v-btn>
                    </v-card-title>
                    <v-text v-if="show_applications">
                        <v-row class="pa-2">
                            <v-col cols="4"  v-for="i in [1,2,3,4,5,6,7,7,8,8,8,0,8,8]" :key="i">
                                <UserCard/>
                            </v-col>                 
                        </v-row>
                    </v-text>
                </v-card>
                <v-card elevation="1" class="mt-2">
                    <v-card-title class="teal--text" id="myFont">
                        Views
                        <v-spacer></v-spacer>
                        <v-btn v-if="!show_views" plain v-on:click="show_views=true"><i class="fas fa-chevron-down"></i></v-btn>
                        <v-btn v-if="show_views" plain v-on:click="show_views=false"><i class="fas fa-chevron-up"></i></v-btn>
                    </v-card-title>
                    <v-text v-if="show_views">
                        <v-row class="pa-2">
                            <v-col cols="4"  v-for="i in [1,2,3,4,5,6,7,7,8,8,8,0,8,8]" :key="i">
                                <UserCard/>
                            </v-col>                 
                        </v-row>
                    </v-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import OpenAd from './open_ad.vue'
import UserCard from './user_card.vue'
// import UserList from './user_list.vue'

export default ({
    name: 'OpenMyAd',
    components: {
        OpenAd,
        UserCard,
        // UserList
    },
    data() {
        return{
            height: '100%',
            closed: true,
            show_views: true,
            show_applications: true
        }
    },
})
</script>


<style>

#myFont {
  font-family: 'Fira Sans Extra Condensed', sans-serif !important;
}

</style>