<template>
    <v-card class="pa-0"  elevation="0"  height="700px" style="overflow:scroll; overflow-x:hidden;" >
        <!-- v-if open : add to favs only if not one of my ads -->
        <v-card-actions style="margin:10px 15px auto auto;" class="d-flex justify-end" v-if="open">
            <v-btn style="position:sticky"
                :class="{
                    'teal--text pointer-events:none disabled': apply==true,
                    'teal white--text elevation-15': apply==false
                }"
                :outlined="apply"
                :disabled="apply"
                large
                v-on:click="quickApply">
                    {{!apply? apply_btn_msg : 'Applied !'}}
            </v-btn>
        </v-card-actions>
        <v-row class="pa-0 ma-0"  style="height:auto;">
            <!-- <v-spacer></v-spacer> -->
            <v-subheader class="teal--text justify-start">{{ad.Date.slice(0,10)}}</v-subheader>
        </v-row>
        <v-row style="margin-top:0">
            <v-col cols="6">
                <v-card-title id="title_wrap">{{ad.title}}</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row>
                        <v-col cols="5" id="field">Job Title</v-col>
                         <v-divider vertical></v-divider>
                        <v-col id="value">{{ad.basic_info.job_title}}</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5" id="field">Compmany Name</v-col>
                         <v-divider vertical></v-divider>
                        <v-col id="value">{{ad.basic_info.company_name}}</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5" id="field">Location</v-col>
                         <v-divider vertical></v-divider>
                        <v-col id="value">{{ad.basic_info.location}}</v-col>
                    </v-row>
                </v-card-text>
            </v-col>
            <v-col cols="6" align-self="center">
                <v-img :src="ad.image" max-height="300px" contain></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-card-title id="title_wrap">Qualifications
                    <v-spacer></v-spacer>
                    <v-btn v-if="!open_q" plain v-on:click="open_q=true" rounded><i class="fas fa-chevron-down"></i></v-btn>
                    <v-btn v-if="open_q" plain v-on:click="open_q=false" rounded><i class="fas fa-chevron-up"></i></v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text v-if="open_q">
                    <v-row>
                        <v-col cols="5" id="field">key_qualifications</v-col>
                        <v-divider vertical></v-divider>
                        <v-col><v-card-text id="value">{{ad.qualifications.key_qualifications}}</v-card-text></v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                        <div id="field" class="justify-start">Skills</div>
                        <v-divider ></v-divider>
                            <v-chip class="ma-1" color="pink white--text" v-for="skill in ad.qualifications.skill_list" :key="skill">
                                {{skill}}
                            </v-chip>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-title id="title_wrap">Benefits
                    <v-spacer></v-spacer>
                    <v-btn v-if="!open_bn" plain v-on:click="open_bn=true" rounded><i class="fas fa-chevron-down"></i></v-btn>
                    <v-btn v-if="open_bn" plain v-on:click="open_bn=false" rounded><i class="fas fa-chevron-up"></i></v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text v-if="open_bn">
                    <v-row  id="basic_info">
                        <v-col cols="3" id="field">Salary: </v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="9" id="value">min:{{ad.benefits.salary.min}} - max:{{ad.benefits.salary.max}}</v-col>
                    </v-row>
                    
                </v-card-text>
            </v-col>
            <v-col cols="6">
                <v-card-title id="title_wrap">Job Description
                    <v-spacer></v-spacer>
                    <v-btn v-if="!open_jd" plain v-on:click="open_jd=true" rounded><i class="fas fa-chevron-down"></i></v-btn>
                    <v-btn v-if="open_jd" plain v-on:click="open_jd=false" rounded><i class="fas fa-chevron-up"></i></v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text v-if="open_jd">
                    <v-row>
                        <v-col cols="5" id="field">Position Duties</v-col>
                        <v-divider vertical></v-divider>
                        <v-col id="value">{{ad.job_Description.pos_duties}}</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5" id="field">Work Enviroment</v-col>
                        <v-divider vertical></v-divider>
                        <v-col id="value">{{ad.job_Description.work_env}}</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5" id="field">Remote Work</v-col>
                        <v-divider vertical></v-divider>
                        <v-col id="value"><div v-if="ad.job_Description.remote == true">Yes</div><div v-else>No</div></v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5" id="field">Job Description</v-col>
                        <v-divider vertical></v-divider>
                        <v-col id="value">{{ad.job_Description.job_desc}}</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5" id="field">Position Duties</v-col>
                        <v-divider vertical></v-divider>
                        <v-col id="value">{{ad.job_Description.pos_duties}}</v-col>
                    </v-row>
                </v-card-text>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card-title id="title_wrap" class="pt-0 pb-1" >
                    <v-spacer></v-spacer>
                    How to Apply
                    <v-spacer></v-spacer>
                    <v-btn v-if="!open_apl" plain v-on:click="open_apl=true" rounded><i class="fas fa-chevron-down"></i></v-btn>
                    <v-btn v-if="open_apl" plain v-on:click="open_apl=false" rounded><i class="fas fa-chevron-up"></i></v-btn>
                </v-card-title>
                    <v-divider></v-divider>
                <v-card-text v-if="open_apl">
                    <v-row>
                        <v-col cols="5" id="field">Link</v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="5" id="value">{{ad.apply.link}}</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5" id="field">Email</v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="5" id="value">{{ad.apply.email}}</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="5" id="field">Email link</v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="5" id="value">{{ad.apply.site_link}}</v-col>
                    </v-row>
                </v-card-text>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
// import { ref } from 'vue'

export default ({
    name: 'OpenAd',
    props: {
        id: String,
        open: Boolean,
        ad: Object
    },
    data() {
        return {
            open_q: this.open,
            open_jd: this.open,
            open_bn: this.open,
            open_apl: this.open,
            apply_btn_msg: 'Apply Here !',
            apply: false,
            star_icon: 'far fa-star',
            fullstar: 'fas fa-star',
            emptystar: 'far fa-star',
        }
    },
    computed:{
        ...mapGetters({
            _id:'_id'
        })
    },
    methods: {
        ...mapActions(['getAd','jobApply']),
        // async setUp() {
            // this.ad = ref(await this.getAd(this.id));
        // // return ad;
        // },
        async quickApply() {
            await this.jobApply(this.ad._id)
            .then(res=>{
                console.log(res.message)
            })
            await this.getAd(this.ad._id)
            .then(res=>{
                this.ad = res
            })
            this.apply = true;
            
        }
    },
    beforeMount(){
        if(this.ad.applicants.includes(this._id))
            this.apply=true
    }
})
</script>

<style>

#title_wrap {
        color: teal !important;

    display: flex;
    white-space:pre-wrap;
    word-break:break-word;
    justify-content: center;
}

#field{
    color: grey;
    /* background: crimson; */

    white-space:pre-wrap;
    word-break:break-word;
    display: flex;
    justify-content: flex-end;
    /* white-space: ; */
}

#value {
    /* color: teal !important; */
    display: flex;
    white-space:pre-line;
    word-break:break-word;
    justify-content: flex-start;
}

</style>