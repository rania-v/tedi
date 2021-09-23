<template>
    <v-app>
        <!-- <v-overlay color="deep-purple" style="auto"> -->

        <v-container class="d-flex justify-center deep-purple lighten-2" fluid>
            <v-card class="pa-3" color="deep-purple" min-height="950px" width="1000px" v-if="step==1">
                <v-card-title class="white--text justify-center">Hard Skills</v-card-title>
                <v-subtitle class="white--text">
                    Lets get you sterted with your Profession Profile!<br/><br/>
                    {{hard_subtitle}}<br/><br/><br/>
                    First, go through the various categories and select what skills best describe your abilities as an employee
                </v-subtitle>
                    <v-card class="ma-5 pa-0 deep-purple" flat min-height="550px" height="65%">
                        <v-row class="ma-1 pa-0">
                            <v-spacer></v-spacer>
                            <v-col cols="6">
                                <v-autocomplete clearable light shaped filled solo type item-color="pink" color="pink"  rounded :items="this.hard_skills" item-text="category" item-value="skill_list" v-model="catlist" label="Hard Skills Categories">
                                </v-autocomplete>
                            </v-col>
                            <v-spacer></v-spacer>
                        </v-row>
                        <v-row class="ma-1 pa-0">
                            <v-spacer></v-spacer>
                            <v-col cols="10">
                                <v-card class="" color="deep-purple" flat>
                                    <v-chip  :class="{'white--text ma-2': checkList(user_hard_skills,skill)!=1, 'pink white--text small ma-2':checkList(user_hard_skills,skill)==1}"
                                    v-for="skill in catlist" :key="skill" outlined large v-on:click="ClickSkill(user_hard_skills,skill)">
                                        {{skill}}
                                    </v-chip>
                                    <!-- <v-chip-group v-model="user_hard_skills" column multiple>
                                        <v-chip :value="skill" large filter v-for="skill in catlist" :key="skill">{{skill}}</v-chip>
                                    </v-chip-group> -->
                                </v-card>
                            </v-col>
                            <v-spacer></v-spacer>
                        </v-row>
                        <!-- <v-row> -->
                            <!-- <v-card max-height="200px" color="deep-purple" flat style="overflow-y: auto"> -->
                            <v-card color="deep-purple" flat>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                    <v-btn v-if="!isEmpty(user_hard_skills)" small text class="white--text" v-on:click="user_hard_skills = EmptyList()">clear</v-btn>
                                </v-card-actions>
                                <v-spacer></v-spacer>
                                <v-chip class="ma-1" color="pink white--text" v-for="skill in user_hard_skills" :key="skill" close @click:close="ClickSkill(user_hard_skills,skill)">{{skill}}</v-chip>
                                <v-spacer></v-spacer>
                            </v-card>
                        <!-- </v-row> -->
                    </v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-on:click="step++">NEXT</v-btn>
                </v-card-actions>
            </v-card>
            <v-card color="deep-purple" height="950px" width="1000px" v-if="step==2">
                <v-layout column light class=" pa-10" >
                    <h2 class="white--text justify-center">Your Skill set is ready!</h2>
                    <h3 class="white--text">
                        Remember, you can edit and update your skill set list any time from your Personal Info Tab.
                    </h3>
                </v-layout>
                    
                <v-card-actions>
                    <v-btn class="ma-3" v-on:click="step--">return</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="ma-3" large color="pink" elevation="0" :to="'Home'">Go to Profile!</v-btn>
                </v-card-actions>
            </v-card>
            
        </v-container>
        <!-- </v-overlay> -->
    </v-app>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'GettingSttarted',
    data() {
        return{
            step: 1,
            user_hard_skills:[],
            catlist: null,
            hard_subtitle: "Hard skills are abilities that let you tacklejob-specific duties and responsibilities. Hard skills can be learned through courses, vocational training, and on the job. These skills are usually focused on specific tasks and processes such as the use of tools, equipment, or software.",
            // hard_skills: [
            //     {
            //         category: 'Technical skills',
            //         list: [
            //             'CAD','Lean manufacturing',' Multivariate analysis', 'Linear regression', 'Prototyping',
            //             'Workflow development', 'STEM skills', 'Web: HTML, CSS, Javascript', 'Payment processing',
            //             'Automated Billing Systems', 'CRM Platforms', 'Research', 'Troubleshooting'
            //         ]
            //     },
            //     {
            //         category: 'Computer skills',
            //         list: [
            //             'Google Drive', 'Spreadsheets', 'Email', 'Presentations/Slideshows', 'Database Management', 'Quickbooks', 'Social media', 'Web', 'Typing',
            //             'Graphics', 'Enterprise systems', 'WPM', 'Java', 'PHP', 'MySQL', 'SQL', 'C#', 'JavaScript', 'C++', 'Python', 'iOS/Swift', 'Ruby on Rails'
            //         ]
            //     },
            //     {
            //         category: 'Analytical skills',
            //         list: [
            //             'Research', 'Forecasting', 'Data mining', 'Data presentation', 'Resource management', 'Data engineering', 'Database management',
            //             'Data and metrics interpreting', 'Reporting', 'Diagnostics', 'Creativity', 'Theorizing'
            //         ]
            //     },
            //     {
            //         category: 'Marketing skills',
            //         list: [
            //             'SEO/SEM: Ahrefs, SEMRush', 'SEO Power Suite', 'Majestic',
            //             'PPC', 'Social media marketing and paid social media advertising', 'Writing', 'CRO and A/B testing', 'Email marketing and automation',
            //             'HubSpot', 'Aritic PinPoint', 'ONTRAPORT', 'Infusionsoft',
            //             'Funnel management', 'UX Design', 'Data visualization', 'Google Analytics and Google Search Console', 'AdWords, Facebook Paid Ads'
            //         ]
            //     },
            //     {
            //         category: 'Presentation skills',
            //         list: [
            //             'Visual communication', 'Slideshows', 'Research', 'Data analysis', 'Reporting', 'Persuasion', 'Graphic design'
            //         ]
            //     },
            //     {
            //         category: 'Management Skills',
            //         list: [
            //             'Business knowledge', 'Budgeting', 'Project management', 'Hiring', 'Finance', 'Office management skills', 'Logistics',
            //             'New business development', 'Negotiating', 'Planning'
            //         ]
            //     },
            //     {
            //         category: "Project management skills",
            //         list: [
            //                 'Project scheduling', 'Strategic planning', 'Project lifecycle management', 'Agile software', 'Scrum management',
            //                 'Financial modeling', 'Kanban', 'Forecasting', 'Performance tracking', 'Budgeting'
            //         ]
            //     },
            //     {
            //         category: 'Writing skills',
            //         list: [
            //             'Note-taking', 'Letter writing', 'Email writing', 'Business writing reports, press releases, content management',
            //             'Data visualization', 'Creative writing: plotting, worldbuilding, dialogue', 'Academic writing', 'Storytelling',
            //             'Copywriting', 'SEO', 'Editing', 'Journalism', 'Proposal writing', 'Social media', 'Presentation writing'
            //         ]
            //     },
            //     {
            //         category: 'Design SKills',
            //         list: [
            //             'Photoshop', 'Illustrator', 'InDesign', 'UX/UI design', 'UX research', 'Data visualization', 'Color theory', 'Acrobat',
            //             'HTML/CSS', 'Free Hand', 'Corel Draw', 'Sketching', 'Typography', 'Print design', 'Layout'
            //         ]
            //     }    
            // ]
        }
    },
    computed:{
        ...mapGetters({
            hard_skills: "allSkills"
        }),
    },
    methods: {
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
}
</script>

<style>
#skills .v-autocomplete-content, .v-select-list {
    color: red;
    background-color: chartreuse;
}

</style>