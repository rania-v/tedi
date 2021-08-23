<template>
    <v-container>
        <v-conainer>
            <v-row>
                <v-col><v-btn @click="show_job_ads=false" :class="{'orange': show_job_ads==false, 'orange lighten-4': show_job_ads==true}">CREATE A NEW JOB AD</v-btn></v-col>
                <v-col><v-btn @click="show_job_ads=true" :class="{'orange': show_job_ads==true, 'orange lighten-4': show_job_ads==false}">JOB ADS</v-btn></v-col>
                <v-col><v-btn>MY ADS</v-btn></v-col>
            </v-row>
        </v-conainer>
        <v-card class="mt-4 mb-4">
            <!-- <v-card-title class="justify-center orange mb-3" style="color:white" @click="show_job_ads=false">
                <v-spacer></v-spacer>
                CREATE A NEW JOB AD
                <v-spacer></v-spacer>
                <i class="fas fa-angle-double-down" v-if="show_job_ads==true || show_job_ads==null"></i>
            </v-card-title> -->
            <div  v-if="show_job_ads==false">
                <v-card-actions  class="pr-14">
                    <v-spacer></v-spacer>
                    <v-btn v-if="show_job_ads==false" @click="show_job_ads=null" x-small color="orange" rounded outlined><v-icon size="13">fas fa-times</v-icon></v-btn>   
                </v-card-actions>
                <v-card-text>
                    <CreateAd/>
                </v-card-text>
            </div>
        </v-card>
        <v-card class="mt-4 mb-4">
            <!-- <v-card-title class="justify-center orange mb-3" style="color:white" @click="show_job_ads=true">
            <v-spacer></v-spacer>
                JOB ADS
                <v-spacer></v-spacer>
                <i class="fas fa-angle-double-down" v-if="show_job_ads==false || show_job_ads==null"></i>
            </v-card-title> -->
            <div v-show="show_job_ads==true">
                <v-card-actions   class="pr-14">
                    <v-spacer></v-spacer>
                    <v-btn v-if="show_job_ads==true" @click="show_job_ads=null" x-small color="orange" rounded outlined><v-icon size="13">fas fa-times</v-icon></v-btn>
                </v-card-actions>
                <v-card-actions>
                    <v-card-title>SEARCH</v-card-title>
                </v-card-actions>
                <v-card-text  style="display:flex; flex-wrap: wrap;  justify-content: center;" class="pr-5 pl-5">
                    <v-container v-for="i in '{1,2,3}'" :key="i"  style="width:30%;" class="mr-2 ml-2">
                        <Ad/>
                    </v-container>
                </v-card-text>
            </div>
        </v-card>
        <v-card>
            <MyJobAds/>
        </v-card>
        <!-- <v-footer>
            lalal
        </v-footer> -->
    </v-container>
</template>

<script>
import Ad from './ad.vue'
import CreateAd from './create_ad.vue'
import MyJobAds from './my_job_ads.vue'

export default ({
    name: 'JobAds',
    components: {
        Ad,
        CreateAd,
        MyJobAds
    },
    data() {
        return {
            show_job_ads: true,
        }
    }
})
</script>


<style>

</style>