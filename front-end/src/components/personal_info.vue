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
                                <v-col><v-text-field label="First Name" :value="this.first_name" v-bind="user.firstName" :readonly='!update'></v-text-field></v-col>
                                <v-col><v-text-field label="Last Name" v-model="this.last_name" :readonly='!update'></v-text-field></v-col>
                            </v-row>
                            <v-row>
                                <v-col style="max-width: 15%" ><v-card-text>Birth Date</v-card-text></v-col>
                                <v-col>
                                    <v-row>
                                        <v-col><v-select v-model="birth_day" id="bd" label="Day":items="days" v-on:click="fill_days" :readonly='!update'></v-select></v-col>
                                        <v-col><v-select v-model="birth_month" id="bm" label="Month" :items="months" item-text="name" item-value="number" :rules="[check_day]" :readonly='!update'></v-select></v-col>
                                        <v-col><v-select v-model="birth_year" label="Year" :items="years" v-on:click="fill_years" :readonly='!update'></v-select></v-col>
                                    </v-row>
                                </v-col>
                                <v-col style="max-width:17%;" v-if="update"><v-switch class="small_switch" v-model="birthdate.private" label="private"></v-switch></v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-select label="Country" v-model="country.value" :readonly='!update' :items="countries" prepend-icon="fas fa-globe"></v-select>
                                </v-col>
                                <v-col style="max-width:17%;" v-if="update"><v-switch class="small_switch" label="private" v-model="country.private"></v-switch></v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>                    
                </v-col>
            </v-row>
            <v-row>
                <v-col class="deep-purple lighten-4 rounded-r-lg mr-1 mt-1">
                    <v-card id="info_card">
                        <v-card-title>Contact Info</v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col><v-text-field label="Telephone Number" v-model="telephone.value" :readonly='!update' prepend-icon="fas fa-phone"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col style="max-width:28%;" v-if="update"><v-switch v-model="telephone.private"  class="small_switch" label="private"></v-switch></v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col cols="6"><v-text-field label="Personal E-mail" v-model="per_mail.value" :readonly='!update' prepend-icon="fas fa-envelope"></v-text-field></v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3" style="max-width:25%;" v-if="update"><v-switch  class="small_switch" label="private" v-model="per_mail.private"></v-switch></v-col>
                                <v-col cols="6"><v-text-field label="Professional E-mail" v-model="prof_mail.value" :readonly='!update' prepend-icon="far fa-envelope"></v-text-field></v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3" style="max-width:25%;" v-if="update"><v-switch class="small_switch" label="private" v-model="prof_mail.private"></v-switch></v-col>
                            </v-row>
                            <!-- lkaslkasndlasndlkasndlaknsdlansdlkasndlk -->
                            <v-row>
                                <!-- <v-col cols="4"><v-text-field label="Facebook" v-model="facebook.value" :readonly='!update' prepend-icon="fab fa-facebook-square"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col class="d-flex justify-end pr-11" cols="5" v-if="update"><v-switch  class="small_switch" label="private" v-model="facebook.private"></v-switch></v-col>
                                
                                <v-col cols="4"><v-text-field label="LinkedIn" v-model="linkedin.value" :readonly='!update' prepend-icon="fab fa-linkedin"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col class="d-flex justify-end pr-11" cols="5" v-if="update"><v-switch class="small_switch" label="private" v-model="linkedin.private"></v-switch></v-col>
                                
                                <v-col cols="4"><v-text-field label="Instagram" v-model="instagram.value" :readonly='!update' prepend-icon="fab fa-instagram"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col class="d-flex justify-end pr-11" cols="5" v-if="update"><v-switch class="small_switch" label="private" v-model="instagram.private"></v-switch></v-col> -->
                            </v-row>
                            <v-row>
                                <!-- <v-col><v-text-field label="Website" v-model="website.value" :readonly='!update' prepend-icon="fas fa-window-maximize"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col style="max-width:28%;" v-if="update"><v-switch class="small_switch" label="private" v-model="website.private"></v-switch></v-col> -->
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="teal lighten-4 rounded-b-lg ml-1 mt-n1 " >
                    <v-card id="info_card">
                        <v-card-title>Qualification Info</v-card-title>
                        <v-card-text>
                            <v-file-input label="Upload Resume"></v-file-input>
                            <!-- <v-col cols="4"><v-text-field label="Profession" v-model="instagram.value" :readonly='!update' prepend-icon="fab fa-instagram"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col class="d-flex justify-end pr-11" cols="5" v-if="update"><v-switch label="private" v-model="instagram.private"></v-switch></v-col> -->
                            
                        </v-card-text>
                            <v-card-title>Skill Set</v-card-title>
                        <v-card-text  style="">


                            <v-flex v-if="update!=true" style="height:200px; overflow: auto;">
                                <v-chip class="ma-1" color="pink white--text" v-for="skill in skill_list.list" :key="skill" >{{skill}}</v-chip>
                            </v-flex>
                            <v-card v-else>
                                <v-autocomplete clearable shaped filled solo type item-color="pink" color="pink"  rounded :items="allSkills" item-text="category" item-value="skill_list" v-model="catlist" label="Hard Skills Categories">
                                </v-autocomplete>
                                <v-card flat>
                                    <v-chip :class="{'ma-2': checkList(skill_list.list,skill)!=1, 'pink pink--text small ma-2':checkList(skill_list.list,skill)==1}"
                                    v-for="skill in catlist" :key="skill" outlined large v-on:click="ClickSkill(skill_list.list,skill)">
                                        {{skill}}
                                    </v-chip>
                                </v-card>
                                <!-- <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn v-if="!isEmpty(skill_list.list)" small text class="pink--text" v-on:click="skill_list.list = EmptyList()">clear</v-btn>
                                </v-card-actions> -->
                                    <v-chip class="ma-1" v-for="skill in skill_list.list" :key="skill" color="deep-purple lighten-4" close @click:close="ClickSkill(skill_list.list,skill)">{{skill}}</v-chip>
                            </v-card>
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
        })
    },
    data() {
        return {
            user: {
                    firstName: this.first_name,
                    lastName: this.last_name,
                    image: this.image,
                    birthday: this.birth_day,
                    country: this.country,

                    phoneNum: this.telephone,
                    perEmain: this.per_mail,
                    profEmail: this.prof_mail,
                    resume: this.resume,
                    professions: this.profession,
                    workplace: this.workplace,
                    skill_list: this.skill_list
            },
            catlist: [],
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
            years: []
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
            this.updateUserProfile(this.user);
        }
    }
})
</script>

<style>
.small_switch{
    transform: scale(0.750) !important;
}

</style>