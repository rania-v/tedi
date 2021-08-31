<template>
    <v-container>
        <v-card>
            <v-card-actions class="d-flex justify-end">
                <v-btn :class="{'orange--text': fav==false, 'white orange--text elevation-2': fav==true }" :outlined="!fav" :fab="fav" small v-on:click="addtoFavAds"><v-icon small >{{star_icon}}</v-icon>{{fav_btn_msg}}</v-btn>
            </v-card-actions>
            <v-row>
                <v-spacer></v-spacer>
                <v-col><v-subheader class="orange--text justify-end">{{ad.date}}</v-subheader> </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-card-title id="title_wrap">{{ad.title}}</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-row v-for="i in ad.basic_info" :key="i" id="basic_info">
                            <v-col cols="4" id="field">{{i.field}}</v-col>
                            <v-divider vertical></v-divider>
                            <v-col cols="8" id="value">{{i.value}}</v-col>
                        </v-row>
                    </v-card-text>
                </v-col>
                <v-col cols="6" align-self="center">
                    <v-img :src="ad.image" max-height="300px" contain></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-card-title id="title_wrap">Qualifications</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-row v-for="i in ad.qualifications" :key="i" id="basic_info">
                            <v-col cols="3" id="field">{{i.field}}</v-col>
                            <v-divider vertical></v-divider>
                            <v-col cols="9" id="value">{{i.value}}</v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-title id="title_wrap">Benefits</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-row  id="basic_info">
                            <v-col cols="3" id="field">Salary: </v-col>
                            <v-divider vertical></v-divider>
                            <v-col cols="9" id="value">{{ad.benefits.salary.min}} - {{ad.benefits.salary.max}}</v-col>
                        </v-row>
                        <v-row v-for="i in ad.benefits" :key="i" id="basic_info">
                            <v-col cols="3" id="field">{{i.field}}</v-col>
                            <v-divider vertical></v-divider>
                            <v-col cols="9" id="value">{{i.value}}</v-col>
                        </v-row>
                    </v-card-text>
                </v-col>
                <v-col cols="6">
                    <v-card-title id="title_wrap">Job Description</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-row v-for="i in ad.job_description" :key="i" id="basic_info">
                            <v-col cols="4" id="field">{{i.field}}</v-col>
                            <v-divider vertical></v-divider>
                            <v-col cols="8" id="value">{{i.value}}</v-col>
                        </v-row>
                    </v-card-text>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card-title id="title_wrap">How to Apply</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-row v-for="i in ad.apply" :key="i" id="basic_info">
                            <v-col cols="5" id="field">{{i.field}}</v-col>
                            <v-divider vertical></v-divider>
                            <v-col cols="7" id="value">{{i.value}}</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="5" id="field">{{ad.apply.link.field}}</v-col>
                            <v-divider vertical></v-divider>
                            <v-col cols="7" id="value">
                                <a href="url">{{ad.apply.link.value}}</a>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>

export default ({
    name: 'OpenAd',
    data() {
        return {
            fav_btn_msg: 'Add to Favourites',
            fav: false,
            star_icon: 'far fa-star',
            fullstar: 'fas fa-star',
            emptystar: 'far fa-star',
            ad: {
                date: '1/1/2021',
                title: 'Amazing Platform Software Engineer',
                image: require('../images/5.jpg'),
                basic_info:{
                    // ad_title: {field: 'Title', value: 'Amazing Platform Software Engineer'},
                    job_title: {field: 'Job title', value: 'Platform Software Engineer'},
                    company_name: {field: 'Company', value: 'HireVue'},
                    location: {field: 'Location', value: 'Dublin'},
                    // ad_image:{field: 'Ad Image', value: require('../images/7.jpg')},
                },
                qualifications: {
                    key_qualifications: {field: 'Key Qualifications', value: 'Proven working experience in software engineering,\n BS degree in Computer Science or Engineering,\n Experience in hands-on development and troubleshooting on embedded targets,\n Solid programming experience in C or C++,\n Proven experience in embedded systems design with preemptive,\n multitasking real-time operating systems,\n Familiarity with software configuration management tools,\n defect tracking tools,\n and peer review,\n Excellent knowledge of OS coding techniques,\n IP protocols,\n interfaces and hardware subsystems,\n Adequate knowledge of reading schematics and data sheets for components,\n Strong documentation and writing skills'},
                    req_experience: {field: 'Required Experience', value: '..........'},
                },
                job_description: {
                    pos_duties: {field: 'Position Duties', value: "Design and implement software of embedded devices and systems from requirements to production and commercial deployment, Design, develop, code, test and debug system software, Review code and design, Analyze and enhance efficiency, stability and scalability of system resources ,Integrate and validate new product designs, Support software QA and optimize I/O performance, Provide post production support, Interface with hardware design and development, Assess third party and open source software"},
                    work_env: {field: 'Work Enviroment', value: '.Design and implement software of embedded devices and systems from requirements to production and commercial deployment, Design, develop, code, test and debug system software, Review code and design, Analyze and enhance efficiency, stability and scalability of system resources ,Integrate and validate new product designs, Support software QA and optimize I/O performance, Provide post production support, Interface with hardware design and development, Assess third party and open source software.....'},
                    job_desc: {field: 'Job Description', value: '......'},
                    employment_type: {field: 'Employment Type', value: '......'},
                },
                benefits: {
                    salary:{
                        min: '300$',
                        max: '500$',
                    },
                    pos_benefits: {field: 'Position Benefits', value: '......'},
                },
                apply: {
                    link: {field: 'Apply link', value: 'www.amazingjobcompany.com'},
                    email: {field: 'email', value: 'applyto@amazingjobcompany.com'},
                    site_link: {field: 'site', value: '......'},
                },
                more_job_info: '...'
            }
        }
    },
    methods: {
        addtoFavAds() {
            if(!this.fav)
            {
                this.star_icon = this.fullstar
                this.fav_btn_msg = ''
            }
            else
            {
                this.star_icon = this.emptystar
                this.fav_btn_msg = 'Add to Favotites'
            }
            this.fav = !this.fav;
        }
    }
})
</script>

<style>

#title_wrap {
        color: orange !important;

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
    justify-content: end;
    /* white-space: ; */
}

#value {
    /* color: orange !important; */
    display: flex;
    white-space:pre-line;
    word-break:break-word;
    justify-content: start;
}

</style>