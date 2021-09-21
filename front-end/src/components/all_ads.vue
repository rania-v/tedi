<template>
    <v-card class="mt-4 mb-4" elevation="0">
        <!-- <div v-show="show_job_ads==true"> -->
            <v-card-actions   class="pr-14">
                <v-spacer></v-spacer>
                <!-- <v-btn v-if="show_job_ads==true" @click="show_job_ads=null, show_my_ads=null, show_create_ad=null" x-small color="teal" text ><v-icon size="13">fas fa-times</v-icon></v-btn> -->
            </v-card-actions>
            <v-card-actions>
                <v-card-title>SEARCH</v-card-title>
            </v-card-actions>
            <v-card-text v-if="empty(job_ads) != 0"  style="display:flex; flex-wrap: wrap;  justify-content: center;" class="pr-5 pl-5">
                <v-container v-for="i in '{1,2,3}'" :key="i"  style="width:30%;" class="mr-2 ml-2">
                    <Ad @opened_ad="open_ad=true"/>
                </v-container>
            </v-card-text>
            <v-card-text v-if="empty(job_ads) == 0" style="display:flex; justify-content: center;">
                <v-card id="myFont" width="50%" class="rounded-xl" color="deep-purple" elevation="0">
                    <v-card-title style="word-break:break-word;" class="white--text ml-10 mr-10 mt-3">
                        There are no job ads available for you right now... Try expanding your network so we can provide more oportunities for you! 
                    </v-card-title>
                    <v-img :src="jad_empty" max-height="300px" contain></v-img>
                </v-card>
            </v-card-text>
        <!-- </div> -->
    </v-card>
</template>

<script>
import Ad from './ad.vue'

export default {
    name: 'AllJobAds',
    components: {
        Ad
    },
    data() {
        return {
            job_ads:[],
            new_applies: true,
            jad_empty: require('../illustrations/115.svg'),
            jad_img_left: require('../illustrations/451_dark.svg'),
            jad_img_right: require('../illustrations/450.svg'),
            open_ad: false,
            open_my_ad: false,
            show_job_ads: true,
            show_my_ads: false,
            show_create_ad: false
        }
    },
    methods: {
        empty(a) {
            if(a.length === 0)
                return 0;
            return 1;
        }
    }
}
</script>

<style>

</style>