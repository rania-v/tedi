<template>
    <v-form id="new_ad" class="pr-10 pl-10">
        <v-card class="mb-4">
            <v-card-title style="color:#7E57C2">Ad Information</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-text-field v-model="ad_title" :rules="req" clearable :clear-icon="cl_icon" label="Ad Title" :color="form_text_color" prepend-icon="fab fa-readme"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="job_title" :rules="req" clearable :clear-icon="cl_icon" label="Job Title" :color="form_text_color" prepend-icon="fas fa-briefcase"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field clearable :clear-icon="cl_icon" :rules="req" label="Company Name" :color="form_text_color" prepend-icon="fas fa-building"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field clearable :clear-icon="cl_icon" :rules="req" label="Job Location" :color="form_text_color" prepend-icon="fas fa-map-marker-alt"></v-text-field>
                    </v-col>
                </v-row>
                <!-- <v-spacer></v-spacer> -->
                <v-row>
                    <v-col><v-file-input prepend-icon="far fa-image" label="Ad Image" v-model="ad_image" @change="ShowImg" :color="form_text_color"></v-file-input></v-col>
                    <!-- <v-spacer></v-spacer> -->
                    <v-col style="max-width:50%; max-height:50%;"><v-img v-if="img_prev!=null" :src="img_prev"></v-img></v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card class="mb-4">
            <v-card-title style="color:#7E57C2">Qualifications</v-card-title>
            <v-card-text>
                <v-textarea clearable :clear-icon="cl_icon" :rules="req" label="Key qualifications" :color="form_text_color" rows="3" prepend-icon="fas fa-key"></v-textarea>
                <v-text-field :rules="req" label="Required Experience" :color="form_text_color" prepend-icon="fas fa-briefcase"></v-text-field>

            </v-card-text>
        </v-card>

        <v-card class="mb-4">
            <v-card-title style="color:#7E57C2">Job Description</v-card-title>
            <v-card-text>
                <v-text-field label="describe duties associated with the position" :color="form_text_color" prepend-icon="fas fa-align-left"></v-text-field>
                <v-text-field label="describe work enviroment" :color="form_text_color" prepend-icon="fas fa-align-left"></v-text-field>
                <v-switch label="Remote Work" :color="form_text_color"></v-switch>
                <v-textarea :rules="req" label="Job Description" :color="form_text_color"></v-textarea>
            </v-card-text>
        </v-card>

        <v-card class="mb-4">
            <v-card-title style="color:#7E57C2">Benefits</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col><v-select :rules="req" :items="employment_types" label="Employment type" :color="form_text_color" item-color="deep-purple lighten-1"></v-select></v-col>
                    <v-icon class="ml-3 mr-3 ">fas fa-money-bill-wave</v-icon>
                    <v-col><v-text-field label="Min Salary" :color="form_text_color"></v-text-field></v-col>
                    <v-col><v-text-field label="Max Salary" :color="form_text_color"></v-text-field></v-col>
                </v-row>
                <v-textarea label="Benefits" :color="form_text_color" rows="2"></v-textarea>
                
            </v-card-text>
        </v-card>

        <!-- <v-text-field label="Work Hours" :color="form_text_color"></v-text-field> -->
        <v-card>
            <v-card-title style="color:#7E57C2">How to apply:</v-card-title>
            <v-card-text id="hta_txt">
                <v-row  class="mr-2 ml-2 pa-2 justify-space-between ">
                    <v-col class="d-flex">
                        <v-checkbox v-model="email_active" :color="form_text_color" label="e-mail" class="d-flex"></v-checkbox>
                        <v-text-field v-model="new_email" :color="form_text_color" :disabled="!email_active" class="ml-4" v-on:keyup.enter="addEmail"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-chip v-for="email in email_list" :key="email" close @click.close="removeEmail(email)">
                            {{email}}
                        </v-chip>
                        {{email_list}}
                    </v-col>
                </v-row>
                <v-row  class="mr-2 ml-2 pa-2 justify-space-between ">
                    <v-checkbox v-model="site_active" :color="form_text_color" label="site link"></v-checkbox>
                    <v-text-field :color="form_text_color" :disabled="!site_active" class="ml-4"></v-text-field>
                </v-row>
            </v-card-text>
        </v-card>


        <v-textarea clearable :clear-icon="cl_icon" label="Write some more info about this job (Optional)" rows="3" :color="form_text_color"></v-textarea>

        <v-btn :color="form_text_color" style="color:white">Post Ad!</v-btn>
    </v-form>
</template>

<script>

export default ({
    name: 'CreateAd',
    data() {
        return {
            req: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
            ],
            ad_title: null,
            job_title:null,
            apply_link: null,
            apply_alert:false,
            form_text_color: '#7E57C2',
            email_active: false,
            site_active: false,
            new_email: null,
            cl_icon: 'fas fa-times',
            email_list: [],
            employment_types: ['full-time', 'part-time', 'casual employment', 'Internship', 'Commission'],
            ad_image: null,
            img_prev: null,
            post: false
        }
    },
    methods: {
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
            if(this.ad_image == null)
                this.img_prev=null
            this.img_prev= URL.createObjectURL(this.ad_image)
        },
        removeEmail(email) {
            this.email_list.splice(this.email_list.indexOf(email),1);
        },
        validate(){
            if(this.ad_title==null)
                this.post=true;
            else
                this.post=true;
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