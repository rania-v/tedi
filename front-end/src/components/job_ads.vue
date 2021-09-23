<template>
    <v-container class="d-flex" fluid>
        <v-col cols="2">
            <v-img :src="jad_img_left"></v-img>
        </v-col>
        <v-col cols="8">
            <v-div v-if="open_ad==false && open_my_ad==false">
                <v-conainer>
                    <v-row>
                        <v-col>
                            <v-btn :to="{name: 'CreateAd'}" class="deep-purple lighten-5 deep-purple--text">CREATE A NEW JOB AD</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn :to="{name: 'AllJobAds'}" class="deep-purple lighten-5 deep-purple--text">JOB ADS</v-btn>
                        </v-col>
                        <v-col>
                            <v-badge :value="new_applies" overlap color="red accent-1" icon="fas fa-check" bordered>
                                <v-btn :to="{name: 'MyAdsList'}" class="deep-purple lighten-5 deep-purple--text">MY ADS</v-btn>
                            </v-badge>
                        </v-col>
                    </v-row>
                </v-conainer>
                <v-card class="mt-4 pt-5 pb-5 mb-4" color="grey lighten-4" elevation="0">
                    <router-view></router-view>
                </v-card>
            </v-div>

            <!-- <v-div v-if="open_ad">
                <OpenAd :open="true"/>
            </v-div>
            <v-div v-if="open_my_ad">
                <OpenMyAd/>
            </v-div> -->
        </v-col>
        <v-col cols="2" class="align-self-end">
            <v-img :src="jad_img_right"></v-img>
        </v-col>
    </v-container>
</template>

<script>
// import CreateAd from './create_ad.vue'
// import OpenAd from './open_ad.vue'
// import OpenMyAd from './open_my_ad.vue'

export default ({
    name: 'JobAds',
    props: {
        show_job_ads: Boolean,
        show_my_ads: Boolean,
        show_create_ad: Boolean
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
        }
    },
    methods: {
        empty(a) {
            if(a.length === 0)
                return 0;
            return 1;
        }
    }
})
</script>


<style>

</style>