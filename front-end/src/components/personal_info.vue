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
                            <!-- <v-file-input v-model='profile_photo' label="choose a new profile pic" v-if='update'></v-file-input> -->
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
                                <v-col><v-text-field label="Last Name" :value="this.last_name" @input="user.personal.lastName=$event" :readonly='!update'></v-text-field></v-col>
                            </v-row>
                            <v-row>
                                <v-col style="max-width: 15%" ><v-card-text>Birth Date</v-card-text></v-col>
                                <v-col>
                                    <!-- <v-row>
                                        <v-col><v-select :value="this.birth_day" @input="user.personal.birth_day=$event" id="bd" label="Day" :items="days" v-on:click="fill_days" :readonly='!update'></v-select></v-col>
                                        <v-col><v-select v-model="birth_month" id="bm" label="Month" :items="months" item-text="name" item-value="number" :rules="[check_day]" :readonly='!update'></v-select></v-col>
                                        <v-col><v-select v-model="birth_year" label="Year" :items="years" v-on:click="fill_years" :readonly='!update'></v-select></v-col>
                                    </v-row> -->
                                </v-col>
                                <v-col style="max-width:17%;" v-if="update"><v-switch class="small_switch" :value="this.birthdate.private" @input="user.personal.birthday.value=$event" label="private"></v-switch></v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-select label="Country" :value="this.country.value" @input="user.personal.country.value=$event" :readonly='!update' :items="countries" prepend-icon="fas fa-globe"></v-select>
                                </v-col>
                                <v-col style="max-width:17%;" v-if="update"><v-switch class="small_switch" label="private" :value="this.country.private" @change="user.personal.country.private=$event"></v-switch></v-col>
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
                                <v-col><v-text-field label="Telephone Number" :value="this.telephone.value" @input="user.contact.phoneNum.value=$event" :readonly='!update' prepend-icon="fas fa-phone"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col style="max-width:28%;" v-if="update"><v-switch :value="this.telephone.private" @change="user.contact.phoneNum.private=$event"  class="small_switch" label="private"></v-switch></v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col cols="6"><v-text-field label="Personal E-mail" :value="this.per_mail.value" @input="user.contact.perEmail.value=$event" :readonly='!update' prepend-icon="fas fa-envelope"></v-text-field></v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3" style="max-width:25%;" v-if="update"><v-switch  class="small_switch" label="private" :value="this.per_mail.private" @change="user.contact.perEmail.private=$event"></v-switch></v-col>
                                <v-col cols="6"><v-text-field label="Professional E-mail" :value="this.prof_mail.value" @input="user.contact.profEmail=$event" :readonly='!update' prepend-icon="far fa-envelope"></v-text-field></v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="3" style="max-width:25%;" v-if="update"><v-switch class="small_switch" label="private" :value="this.prof_mail.private" @change="user.contact.private=$event"></v-switch></v-col>
                            </v-row>
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
                            </v-card-text>
                            <v-card-title>Skill Set</v-card-title>
                        <v-card-text  style="">
                            <v-flex v-if="update!=true" style="max-height:200px; overflow: auto;">
                                <v-chip class="ma-1" color="pink white--text" v-for="skill in skill_list.list" :key="skill" >{{skill}}</v-chip>
                            </v-flex>
                            <v-card v-else>
                                <v-autocomplete clearable shaped filled solo type item-color="pink" color="pink" rounded :items="allSkills" item-text="category" item-value="skill_list" v-model="catlist" label="Hard Skills Categories">
                                </v-autocomplete>
                                <v-card flat>
                                    <v-chip :class="{'ma-2': checkList(skill_list.list,skill)!=1, 'pink pink--text small ma-2':checkList(skill_list.list,skill)==1}"
                                    v-for="skill in catlist" :key="skill" outlined large v-on:click="ClickSkill(skill_list.list,skill)">
                                        {{skill}}
                                    </v-chip>
                                </v-card>
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
            id: '_id',
            countries: 'countrie_list',
            first_name: 'firstName',
            last_name: 'lastName',
            birthdate: 'birthday',
            // birth_month: ,
            // birth_year: null,
            telephone: 'phoneNum',
            country: 'country',
            per_mail: 'perEmail',
            prof_mail: 'profEmail',
            skill_list: 'skills',
            allSkills: 'allSkills'
        }),
    },
    data() {
        return {

            user: {
                personal:{
                    firstName: this.first_name,
                    lastName: this.lastName,
                    image: null,
                    birthday: {value: null, private: null },
                    country: {value: null, private: null }
                },
                contact: {
                    phoneNum: {value: null, private: null},
                    perEmail: {value: null, private: null},
                    profEmail: {value: null, private: null}
                },
                attrs: {
                    resume: {value: null, private: null},
                    profession:  {value: null, private: null},
                    workplace:  {value: null, private: null},
                    skill_list:  {list: null, private: null}
                }
            },
            catlist: null,
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

            this.user.attrs.skill_list.list = skill_array;
        },
        checkList(skill_array, skill) {
            let index = skill_array.indexOf(skill);
            if(index > -1) {
                return 1;
            }
            return 0;
        },
        async submit() {
            // console.log('user: ', this.user)
            // this.updateUserProfile(user)
            
            await this.updateUserProfile(this.user)
            .then(res=>{
                console.log('res: ;',res)})
            .catch(err=>{console.log('err: ', err)})
        },
        mpla(event){
            console.log('eve: ', event)
        }
    }
})
</script>

<style>
.small_switch{
    transform: scale(0.750) !important;
}

</style>