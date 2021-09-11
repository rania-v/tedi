<template>
    <v-container>
        <v-div v-if="open_ad==false && open_my_ad==false">

        <v-conainer>
            <v-row>
                <v-col><v-btn @click="show_job_ads=false, show_my_ads=false, show_create_ad=true" :class="{'teal white--text': show_create_ad==true, 'deep-purple lighten-5 deep-purple--text': show_create_ad!=true}">CREATE A NEW JOB AD</v-btn></v-col>
                <v-col><v-btn @click="show_job_ads=true, show_my_ads=false, show_create_ad=false" :class="{'teal white--text': show_job_ads==true, 'deep-purple lighten-5 deep-purple--text': show_job_ads!=true}">JOB ADS</v-btn></v-col>
                <v-col><v-btn @click="show_job_ads=false, show_my_ads=true, show_create_ad=false" :class="{'teal white--text': show_my_ads==true, 'deep-purple lighten-5 deep-purple--text': show_my_ads!=true}">MY ADS</v-btn></v-col>
            </v-row>
        </v-conainer>
        <v-card class="mt-4 mb-4">
            <div  v-if="show_create_ad==true">
                <v-card-actions  class="pr-14">
                    <v-spacer></v-spacer>
                    <v-btn v-if="show_job_ads==false" @click="show_job_ads=null, show_my_ads=null, show_create_ad=null" x-small color="teal" rounded outlined><v-icon size="13">fas fa-times</v-icon></v-btn>   
                </v-card-actions>
                <v-card-text>
                    <CreateAd/>
                </v-card-text>
            </div>
        </v-card>
        <v-card class="mt-4 mb-4">
            <div v-show="show_job_ads==true">
                <v-card-actions   class="pr-14">
                    <v-spacer></v-spacer>
                    <v-btn v-if="show_job_ads==true" @click="show_job_ads=null, show_my_ads=null, show_create_ad=null" x-small color="teal" rounded outlined><v-icon size="13">fas fa-times</v-icon></v-btn>
                </v-card-actions>
                <v-card-actions>
                    <v-card-title>SEARCH</v-card-title>
                </v-card-actions>
                <v-card-text  style="display:flex; flex-wrap: wrap;  justify-content: center;" class="pr-5 pl-5">
                    <v-container v-for="i in '{1,2,3}'" :key="i"  style="width:30%;" class="mr-2 ml-2">
                        <Ad @opened_ad="open_ad=true"/>
                    </v-container>
                </v-card-text>
            </div>
        </v-card>
        <div  v-if="show_my_ads==true">
            <v-card>
                <v-card-actions  class="pr-14">
                    <v-spacer></v-spacer>
                    <v-btn v-if="show_job_ads==false" @click="show_job_ads=null, show_my_ads=null, show_create_ad=null" x-small color="teal" rounded outlined><v-icon size="13">fas fa-times</v-icon></v-btn>   
                </v-card-actions>
                <v-card-text>
                    <MyJobAds @opened_my_ad="open_my_ad=true"/>
                </v-card-text>
            </v-card>
        </div>
        </v-div>
        <v-div v-if="open_ad">
            <OpenAd/>
        </v-div>
        <v-div v-if="open_my_ad">
            <OpenMyAd/>
        </v-div>
    </v-container>
</template>

<script>
import Ad from './ad.vue'
import CreateAd from './create_ad.vue'
import MyJobAds from './my_job_ads.vue'
import OpenAd from './open_ad.vue'
import OpenMyAd from './open_my_ad.vue'

export default ({
    name: 'JobAds',
    components: {
        Ad,
        CreateAd,
        MyJobAds,
        OpenAd,
        OpenMyAd
    },
    data() {
        return {
            open_ad: false,
            open_my_ad: false,
            show_job_ads: true,
            show_my_ads: false,
            show_create_ad: false
        }
    }
})
</script>


<style>

</style>