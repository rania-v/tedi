<template>
    <v-form id="new_ad" class="pr-10 pl-10">
        <v-card class="mb-4" elevation="0">
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
                <v-row>
                    <v-col><v-file-input prepend-icon="far fa-image" label="Ad Image" v-model="ad_image" @change="ShowImg" :color="form_text_color"></v-file-input></v-col>
                    <v-col style="max-width:50%; max-height:50%;"><v-img v-if="img_prev!=null" :src="img_prev"></v-img></v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card class="mb-4"  elevation="0">
            <v-card-title style="color:#7E57C2">Qualifications</v-card-title>
            <v-card-text>
                <v-textarea clearable :clear-icon="cl_icon" :rules="req" label="Key qualifications" :color="form_text_color" rows="3" prepend-icon="fas fa-key"></v-textarea>
                <v-text-field :rules="req" label="Required Experience" :color="form_text_color" prepend-icon="fas fa-briefcase"></v-text-field>
                <v-autocomplete clearable shaped filled solo type item-color="pink" color="pink"  rounded :items="hard_skills" item-text="category" item-value="list" v-model="catlist" label="Hard Skills Categories">
                </v-autocomplete>
                <v-card flat>
                    <v-chip :class="{'ma-2': checkList(job_hard_skills,skill)!=1, 'pink pink--text small ma-2':checkList(job_hard_skills,skill)==1}"
                    v-for="skill in catlist" :key="skill" outlined large v-on:click="ClickSkill(job_hard_skills,skill)">
                        {{skill}}
                    </v-chip>
                </v-card>
                <v-card-actions>
                                <v-spacer></v-spacer>
                                    <v-btn v-if="!isEmpty(job_hard_skills)" small text class="pink--text" v-on:click="job_hard_skills = EmptyList()">clear</v-btn>
                                </v-card-actions>
                <!-- <v-card> -->
                    <v-chip class="ma-1" v-for="skill in job_hard_skills" :key="skill" color="deep-purple lighten-4" close @click:close="ClickSkill(job_hard_skills,skill)">{{skill}}</v-chip>
                <!-- </v-card> -->
            </v-card-text>
        </v-card>

        <v-card class="mb-4"  elevation="0">
            <v-card-title style="color:#7E57C2">Job Description</v-card-title>
            <v-card-text>
                <v-text-field label="describe duties associated with the position" :color="form_text_color" prepend-icon="fas fa-align-left"></v-text-field>
                <v-text-field label="describe work enviroment" :color="form_text_color" prepend-icon="fas fa-align-left"></v-text-field>
                <v-switch label="Remote Work" :color="form_text_color"></v-switch>
                <v-textarea :rules="req" label="Job Description" :color="form_text_color"></v-textarea>
            </v-card-text>
        </v-card>

        <v-card class="mb-4"  elevation="0">
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
        <v-card >
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
            post: false,
            catlist: null,
            job_hard_skills:[],
            hard_skills: [
                {
                    category: 'Technical skills',
                    list: [
                        'CAD','Lean manufacturing',' Multivariate analysis', 'Linear regression', 'Prototyping',
                        'Workflow development', 'STEM skills', 'Web: HTML, CSS, Javascript', 'Payment processing',
                        'Automated Billing Systems', 'CRM Platforms', 'Research', 'Troubleshooting'
                    ]
                },
                {
                    category: 'Computer skills',
                    list: [
                        'Google Drive', 'Spreadsheets', 'Email', 'Presentations/Slideshows', 'Database Management', 'Quickbooks', 'Social media', 'Web', 'Typing',
                        'Graphics', 'Enterprise systems', 'WPM', 'Java', 'PHP', 'MySQL', 'SQL', 'C#', 'JavaScript', 'C++', 'Python', 'iOS/Swift', 'Ruby on Rails'
                    ]
                },
                {
                    category: 'Analytical skills',
                    list: [
                        'Research', 'Forecasting', 'Data mining', 'Data presentation', 'Resource management', 'Data engineering', 'Database management',
                        'Data and metrics interpreting', 'Reporting', 'Diagnostics', 'Creativity', 'Theorizing'
                    ]
                },
                {
                    category: 'Marketing skills',
                    list: [
                        'SEO/SEM: Ahrefs, SEMRush', 'SEO Power Suite', 'Majestic',
                        'PPC', 'Social media marketing and paid social media advertising', 'Writing', 'CRO and A/B testing', 'Email marketing and automation',
                        'HubSpot', 'Aritic PinPoint', 'ONTRAPORT', 'Infusionsoft',
                        'Funnel management', 'UX Design', 'Data visualization', 'Google Analytics and Google Search Console', 'AdWords, Facebook Paid Ads'
                    ]
                },
                {
                    category: 'Presentation skills',
                    list: [
                        'Visual communication', 'Slideshows', 'Research', 'Data analysis', 'Reporting', 'Persuasion', 'Graphic design'
                    ]
                },
                {
                    category: 'Management Skills',
                    list: [
                        'Business knowledge', 'Budgeting', 'Project management', 'Hiring', 'Finance', 'Office management skills', 'Logistics',
                        'New business development', 'Negotiating', 'Planning'
                    ]
                },
                {
                    category: "Project management skills",
                    list: [
                            'Project scheduling', 'Strategic planning', 'Project lifecycle management', 'Agile software', 'Scrum management',
                            'Financial modeling', 'Kanban', 'Forecasting', 'Performance tracking', 'Budgeting'
                    ]
                },
                {
                    category: 'Writing skills',
                    list: [
                        'Note-taking', 'Letter writing', 'Email writing', 'Business writing reports, press releases, content management',
                        'Data visualization', 'Creative writing: plotting, worldbuilding, dialogue', 'Academic writing', 'Storytelling',
                        'Copywriting', 'SEO', 'Editing', 'Journalism', 'Proposal writing', 'Social media', 'Presentation writing'
                    ]
                },
                {
                    category: 'Design SKills',
                    list: [
                        'Photoshop', 'Illustrator', 'InDesign', 'UX/UI design', 'UX research', 'Data visualization', 'Color theory', 'Acrobat',
                        'HTML/CSS', 'Free Hand', 'Corel Draw', 'Sketching', 'Typography', 'Print design', 'Layout'
                    ]
                }    
            ]
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