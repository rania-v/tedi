<template>
    <v-container>
        <v-card>
            <v-card-title class="justify-center orange mb-3" style="color:white" @click="show_job_ads=false">
                CREATE A NEW JOB AD
            </v-card-title>
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
            <v-card-title class="justify-center orange mb-3" style="color:white" @click="show_job_ads=true">JOB ADS</v-card-title>
            <div v-show="show_job_ads==true">
                <v-card-actions>
                    search
                </v-card-actions>
                <v-card-text  style="display:flex; flex-wrap: wrap;  justify-content: center;" class="pr-5 pl-5">
                    <v-container v-for="i in '{1,2,3}'" :key="i"  style="width:30%;" class="mr-2 ml-2">
                        <Ad/>
                    </v-container>
                </v-card-text>
            </div>
        </v-card>
        <!-- <v-footer>
            lalal
        </v-footer> -->
    </v-container>
</template>

<script>
import Ad from './ad.vue'
import CreateAd from './create_ad.vue'

export default ({
    name: 'JobAds',
    components: {
        Ad,
        CreateAd
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