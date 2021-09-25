<template>
    <v-container class="mt-0 d-flex" fluid>
        <v-col cols="2" class="align-self-end">
            <v-img :src="pr_img_left"></v-img>
        </v-col>
        <v-col cols="8">
            <v-row class="mb-1" style="position: -webkit-sticky; position: sticky; top: 120px; z-index: 2;">
                <v-spacer></v-spacer>
                <v-btn v-if="!update" v-on:click="update=true" class="white--text deep-purple"><v-icon class="fas fa-edit" left></v-icon>Update</v-btn>
                <v-btn v-if="update" v-on:click="save=true,  update=false, submit()" class="white--text deep-purple"><v-icon class="fas fa-save" left ></v-icon>Save</v-btn>
            </v-row>
            <v-row id="personal_info">
                <v-col style="max-width:30%" class="deep-purple lighten-4 rounded-t-lg mr-1 mb-n1">
                    <v-card id="info_card">
                        <v-card-title>Profile Photo</v-card-title>
                        <v-card-text>
                            <v-file-input v-model='profile_photo' label="choose a new profile pic" v-if='update'></v-file-input>
                            <v-img :src="profile_photo" max-height="187" contain class="teal lighten-5" :class="{'mt-9 mb-9': update == false}"></v-img>      
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col style="max-height:auto" class="teal lighten-4 rounded-t-lg ml-1 mb-1" >
                    <v-card id="info_card" >
                        <v-card-title>Personal Info</v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col class="d-flex align-content-center flex-wrap" style="max-width: 6%;"><i class="fas fa-user-alt"></i></v-col>
                                <v-col><v-text-field label="First Name" :value="this.first_name" @input="user.personal.firstName=$event" :readonly='!update'></v-text-field></v-col>
                                <v-col><v-text-field label="Last Name" v-model="user.personal.lastName" :readonly='!update'></v-text-field></v-col>
                            </v-row>
                            
                        </v-card-text>
                    </v-card>                    
                </v-col>
            </v-row>
            
        </v-col>
        <v-col cols="2">
            <v-img :src="pr_img_right"></v-img>
        </v-col>
    </v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default({
    name: 'PersonalInfo',
    computed: {
        ...mapGetters({
            id: '',
            countries: 'countrie_list',
            first_name: 'firstName',
            last_name: 'lastName',
            birthdate: 'birthday',
            birth_month: null,
            birth_year: null,
            telephone: 'phoneNum',
            country: 'country',
            per_mail: 'perEmail',
            prof_mail: 'profEmail',
            facebook: 'country',
            instagram: {value: null, private: false},
            linkedin: {value: null, private: false},
            website: {value: null, private: false},
            skill_list: 'skills',
            allSkills: 'allSkills'
        }),
    },
    data() {
        return {

            user: {
                personal:{
                    firstName: '',
                    lastName: '',
                    image: '',
                    birthday: {value: '', private: null },
                    country: {value: '', private: null }

                },
                contact: {
                    phoneNum: {value: '', private: null},
                    perEmail: {value: '', private: null},
                    profEmail: {value: '', private: null}
                },
                attrs: {
                    resume: {value: '', private: null},
                    professions:  {value: '', private: null},
                    workplace:  {value: '', private: null},
                    skill_list:  {value: '', private: null}
                }
            },
            catlist: [],
            // user.contact.perEmail.value
            
            pr_img_left: require('../illustrations/12.svg'),
            pr_img_right: require('../illustrations/70.svg'),
            profile_photo: require('../images/usagi_1.png'),
            update: false,
            save: false,
            // facebook: {value: null, private: false},
            // instagram: {value: null, private: false},
            // linkedin: {value: null, private: false},
            // website: {value: null, private: false},
            months: [
                {number: 1, name: "January"},
                {number: 2, name: "February"},
                {number: 3, name: "March"},
                {number: 4, name: "April"},
                {number: 5, name: "May"},
                {number: 6, name: "June"},
                {number: 7, name: "July"},
                {number: 8, name: "August"},
                {number: 9, name: "September"},
                {number: 10, name: "October"},
                {number: 11, name: "November"},
                {number: 12, name: "December"}
            ],
            days: [],
            years: [],
        }
    },
    methods: {
        ...mapActions(['updateUserProfile']),
        fill_days()
        {
            let year = this.birth_year;
            let month = this.birth_month;
            var end;
            if(month == null || year == null)
                end = 31;

            end =  new Date(year, month, 0).getDate();

            this.days = Array.from({length: end}, (_, i) => i + 1)
        },
        check_day() {
            let year = this.birth_year;
                var el = document.getElementById('bm');
            let month = this.birth_month;
            var end;
            if(month == null || year == null)
                end = 31;

            end =  new Date(year, month, 0).getDate();
            if(end < this.birth_day)
            {
                return false || 'Invalid day or month';
            }
            else
            {   
                el.rules = true;
                return this.error;
            }
        },
        fill_years()
        {
            let curr_year = new Date().getFullYear()
            var end = 100;
            this.years = Array.from({length: end}, (_, i) => i + curr_year - 100);
        },ClickSkill(skill_array, skill) {
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
        submit() {
            console.log('user: ', this.user)
            // this.updateUserProfile(user);
        },
    }
})
</script>

<style>
.small_switch{
    transform: scale(0.750) !important;
}

</style>