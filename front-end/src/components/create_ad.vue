<template>
    <v-form id="new_ad" class="pr-10 pl-10" ref="form" v-model="valid" lazy-validation>
        <v-card class="mb-4" elevation="0">
            <v-card-title style="color:#7E57C2">Ad Information</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-text-field v-model="form.title" :rules="req || 'not valid'" clearable :clear-icon="cl_icon" label="Ad Title" :color="form_text_color" prepend-icon="fab fa-readme"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="form.basic_info.job_title" :rules="req" clearable :clear-icon="cl_icon" label="Job Title" :color="form_text_color" prepend-icon="fas fa-briefcase"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field clearable :clear-icon="cl_icon" :rules="req" v-model="form.basic_info.company_name" label="Company Name" :color="form_text_color" prepend-icon="fas fa-building"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field clearable :clear-icon="cl_icon" :rules="req" v-model="form.basic_info.location" label="Location" :color="form_text_color" prepend-icon="fas fa-map-marker-alt"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col><v-file-input prepend-icon="far fa-image" label="Ad Image" v-model="form.image" @change="ShowImg" :color="form_text_color"></v-file-input></v-col>
                    <v-col style="max-width:50%; max-height:50%;"><v-img v-if="img_prev!=null" :src="img_prev"></v-img></v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card class="mb-4"  elevation="0">
            <v-card-title style="color:#7E57C2">Qualifications</v-card-title>
            <v-card-text>
                <v-textarea clearable :clear-icon="cl_icon" :rules="req" v-model="form.qualifications.key_qualifications" label="Key qualifications" :color="form_text_color" rows="3" prepend-icon="fas fa-key"></v-textarea>
                <v-text-field :rules="req" label="Required Experience" :color="form_text_color" v-model="form.qualifications.req_experiense" prepend-icon="fas fa-briefcase"></v-text-field>
                <v-autocomplete clearable shaped filled solo type item-color="pink" color="pink"  rounded :items="hard_skills" item-text="category" item-value="skill_list" v-model="catlist" label="Hard Skills Categories">
                </v-autocomplete>
                <v-card flat>
                    <v-chip :class="{'ma-2': checkList(form.qualifications.skill_list,skill)!=1, 'pink pink--text small ma-2':checkList(form.qualifications.skill_list,skill)==1}"
                    v-for="skill in catlist" :key="skill" outlined large v-on:click="ClickSkill(form.qualifications.skill_list,skill)">
                        {{skill}}
                    </v-chip>
                </v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="!isEmpty(form.qualifications.skill_list)" small text class="pink--text" v-on:click="form.qualifications.skill_list = EmptyList()">clear</v-btn>
                </v-card-actions>
                <v-chip class="ma-1" v-for="skill in form.qualifications.skill_list" :key="skill" color="deep-purple lighten-4" close @click:close="ClickSkill(skill_list,skill)">{{skill}}</v-chip>
            </v-card-text>
        </v-card>

        <v-card class="mb-4"  elevation="0">
            <v-card-title style="color:#7E57C2">Job Description</v-card-title>
            <v-card-text>
                <v-text-field label="describe duties associated with the position" v-model="form.job_Description.pos_duties" :color="form_text_color" prepend-icon="fas fa-align-left"></v-text-field>
                <v-text-field label="describe work enviroment" v-model="form.job_Description.work_env" :color="form_text_color" prepend-icon="fas fa-align-left"></v-text-field>
                <v-switch label="Remote Work" v-model="form.job_Description.remote" :color="form_text_color"></v-switch>
                <v-textarea :rules="req" label="Job Description" v-model="form.job_Description.job_desc" :color="form_text_color"></v-textarea>
            </v-card-text>
        </v-card>

        <v-card class="mb-4"  elevation="0">
            <v-card-title style="color:#7E57C2">Benefits</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col><v-select :rules="req" :items="employment_types" label="Employment type" v-model="form.job_Description.employmentType" :color="form_text_color" item-color="deep-purple lighten-1"></v-select></v-col>
                    <v-icon class="ml-3 mr-3 ">fas fa-money-bill-wave</v-icon>
                    <v-col><v-text-field label="Min Salary" v-model="form.benefits.min" :color="form_text_color"></v-text-field></v-col>
                    <v-col><v-text-field label="Max Salary" v-model="form.benefits.max" :color="form_text_color"></v-text-field></v-col>
                </v-row>
                <v-textarea label="Benefits" v-model="form.benefits.pos_benefits" :color="form_text_color" rows="2"></v-textarea>
                
            </v-card-text>
        </v-card>

        <!-- <v-text-field label="Work Hours" :color="form_text_color"></v-text-field> -->
        <v-card >
            <v-card-title style="color:#7E57C2">How to apply:</v-card-title>
            <v-card-text id="hta_txt">
                <v-row  class="mr-2 ml-2 pa-2 justify-space-between ">
                    <v-col class="d-flex">
                        <v-checkbox v-model="email_active" :color="form_text_color" label="e-mail" class="d-flex"></v-checkbox>
                        <v-text-field v-model="new_email" :color="form_text_color" :disabled="!email_active" class="ml-4" v-on:keyup.enter="addEmail"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-chip v-for="email in form.apply.email_list" :key="email" close @click.close="removeEmail(email)">
                            {{email}}
                        </v-chip>
                        {{form.apply.email_list}}
                    </v-col>
                </v-row>
                <v-row  class="mr-2 ml-2 pa-2 justify-space-between ">
                    <v-checkbox v-model="site_active" :color="form_text_color" label="site link"></v-checkbox>
                    <v-text-field :color="form_text_color" v-model="form.apply.apply_link" :disabled="!site_active" class="ml-4"></v-text-field>
                </v-row>
            </v-card-text>
        </v-card>


        <v-textarea clearable v-model="more_info" :clear-icon="cl_icon" label="Write some more info about this job (Optional)" rows="3" :color="form_text_color"></v-textarea>

        <v-btn v-if="!posted" :color="form_text_color" v-on:click="validate_and_submit()" style="color:white" :disabled="!valid">Post Ad!</v-btn>
        <v-alert v-else color="success " dense text>your ad is posted!</v-alert>
    </v-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default ({
    name: 'CreateAd',
    computed:{
        ...mapGetters({
            hard_skills: "allSkills"
        }),
    },
    data() {
        return {
            valid: false,
            posted: false,
            req: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
            ],
            form : {
                title : '',
                image : '',
                basic_info : {
                    job_title : '',
                    company_name : '',
                    location : '',
                },
                qualifications : {
                    key_qualifications : '',
                    req_experiense : '',
                    skill_list : []
                },
                job_Description : {
                    pos_duties : '',
                    work_env : null,
                    remoteWork : false,
                    job_desc: '',
                    employmentType : '',
                },
                benefits : {
                    salary : {
                        min : '',
                        max : '',
                    },
                    pos_benefits : '',
                },
                apply : {
                    link : null,
                    email : null,
                    site_link: null,
                },
                more_job_info : ''
            },
            apply_alert:false,
            form_text_color: '#7E57C2',
            email_active: false,
            site_active: false,
            new_email: null,
            cl_icon: 'fas fa-times',
            employment_types: ['full-time', 'part-time', 'casual employment', 'Internship', 'Commission'],
            img_prev: null,
            post: false,
            catlist: null,
            // skill_list:[],
        }
    },
    methods: {
        ...mapActions(['createAd']),
        check_apply() {
            if(this.email_list==null && this.apply_link==null)
                this.apply_alert=true;
        },
        addEmail() {
            if(this.new_email!=null)
            {this.email_list.push(this.new_email);
            this.new_email=null;}
        },
        ShowImg() {
            if(this.form.image == null)
                this.img_prev=null
            this.img_prev= URL.createObjectURL(this.form.image)
        },
        removeEmail(email) {
            this.email_list.splice(this.email_list.indexOf(email),1);
        },
        validate(){
            if(this.form.title==null)
                this.post=true;
            else
                this.post=true;
        },
        CategoryList(array, cat) {
            let obj = array.filter(x => x.category === cat);
            // return obj.list;
            return obj.list + 'lalalalal';
        },
        ClickSkill(skill_array, skill) {
            let index = skill_array.indexOf(skill);
            //if already in skill array , remove
            if(index > -1) {
                skill_array.splice(index, 1)
            }
            // if not in skill-array then add
            else
                skill_array.push(skill);
        },
        checkList(skill_array, skill) {
            let index = skill_array.indexOf(skill);
            if(index > -1) {
                return 1;
            }
            return 0;
        },
        EmptyList() {
            let l = [];
            return l;
        },
        isEmpty(list) {
            if(list.length == 0)
                return 1;
            else
                return 0;
        },
        validate_and_submit () {
            this.valid = this.$refs.form.validate()
            if( this.valid == true  )
            {    this.createAd(this.form);
                this.posted = true;}
        }
    }
})
</script>

 <style >

#hta_txt .v-text-field {
    min-width: 70%;
    max-width: 70%;
}

 </style>