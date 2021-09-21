<template>
    <v-app>
        <v-container>
            <v-card color="deep-purple" height="930px" v-if="step==1">
                <v-card-title class="white--text justify-center">Hard Skills</v-card-title>
                <v-subtitle class="white--text">
                    Lets get you sterted with your Profession Profile!<br/><br/>
                    {{hard_subtitle}}<br/><br/><br/>
                    First, go through the various categories and select what skills best describe your abilities as an employee
                </v-subtitle>
                    <v-card class="d-flex ma-5 deep-purple" height="70%">
                        <v-row class="ma-3">
                            <v-autocomplete :items="hard_skills" item-text="category" return-object v-model="hard_skill_category" label="Hard Skills Categories">
                            </v-autocomplete>
                        </v-row>
                        <v-row class="ma-3">
                            <v-card>
                                <v-chip v-for="skill in hard_skill_category.list" :key="skill" x-large>{{skill}}</v-chip>
                            </v-card>
                        </v-row>
                    </v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-on:click="step++">NEXT</v-btn>
                </v-card-actions>
            </v-card>
            <v-card color="deep-purple" height="930px" v-if="step==2">
                <v-card-title class="white--text justify-center">Soft Skills</v-card-title>
                <v-card-actions>
                    <v-btn v-on:click="step--">return</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn v-on:click="step++">NEXT</v-btn>
                </v-card-actions>
            </v-card>
            
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'GettingSttarted',
    data() {
        return{
            step: 1,
            user_skills:[],
            hard_skill_category: null,
            hard_subtitle: "Hard skills are abilities that let you tacklejob-specific duties and responsibilities. Hard skills can be learned through courses, vocational training, and on the job. These skills are usually focused on specific tasks and processes such as the use of tools, equipment, or software.",
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
                }       
            ]
                
     
    // Management skills
    // Project management skills
    // Writing skills
    // Language skills
    // Design skills
    // Certifications
        }
    }
}
</script>

<style>

</style>