<template>
    <v-container class="mt-0 d-flex" fluid>
        <v-col cols="2" class="align-self-end">
            <v-img :src="pr_img_left"></v-img>
        </v-col>
        <v-col cols="8">
            <v-row class="mb-1" style="position: -webkit-sticky; position: sticky; top: 120px; z-index: 2;">
                <v-spacer></v-spacer>
                <v-btn v-if="!update" v-on:click="update=true" class="white--text deep-purple"><v-icon class="fas fa-edit" left></v-icon>Update</v-btn>
                <v-btn v-if="update" v-on:click="save=true,  update=false" class="white--text deep-purple"><v-icon class="fas fa-save" left></v-icon>Save</v-btn>
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
                                <v-col><v-text-field label="First Name" v-model="first_name" :readonly='!update'></v-text-field></v-col>
                                <v-col><v-text-field label="Last Name" v-model="first_name" :readonly='!update'></v-text-field></v-col>
                            </v-row>
                            <v-row>
                                <v-col style="max-width: 15%" ><v-card-text>Birth Date</v-card-text></v-col>
                                <v-col>
                                    <v-row>
                                        <v-col><v-select v-model="birth_day" id="bd" label="Day" :items="days" v-on:click="fill_days" :readonly='!update'></v-select></v-col>
                                        <v-col><v-select v-model="birth_month" id="bm" label="Month" :items="months" item-text="name" item-value="number" :rules="[check_day]" :readonly='!update'></v-select></v-col>
                                        <v-col><v-select v-model="birth_year" label="Year" :items="years" v-on:click="fill_years" :readonly='!update'></v-select></v-col>
                                    </v-row>
                                </v-col>
                                <v-col style="max-width:17%;" v-if="update"><v-switch class="small_switch" label="private"></v-switch></v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-select label="Country" v-model="country" :readonly='!update' :items="countries" prepend-icon="fas fa-globe"></v-select>
                                </v-col>
                                <v-col style="max-width:17%;" v-if="update"><v-switch class="small_switch" label="private"></v-switch></v-col>
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
                                <v-col cols="3" style="max-width:25%;" v-if="update"><v-switch class="small_switch" label="private" v-model="per_mail.private"></v-switch></v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="4"><v-text-field label="Facebook" v-model="facebook.value" :readonly='!update' prepend-icon="fab fa-facebook-square"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col class="d-flex justify-end pr-11" cols="5" v-if="update"><v-switch  class="small_switch" label="private" v-model="facebook.private"></v-switch></v-col>
                                
                                <v-col cols="4"><v-text-field label="LinkedIn" v-model="linkedin.value" :readonly='!update' prepend-icon="fab fa-linkedin"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col class="d-flex justify-end pr-11" cols="5" v-if="update"><v-switch class="small_switch" label="private" v-model="linkedin.private"></v-switch></v-col>
                                
                                <v-col cols="4"><v-text-field label="Instagram" v-model="instagram.value" :readonly='!update' prepend-icon="fab fa-instagram"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col class="d-flex justify-end pr-11" cols="5" v-if="update"><v-switch class="small_switch" label="private" v-model="instagram.private"></v-switch></v-col>
                            </v-row>
                            <v-row>
                                <v-col><v-text-field label="Website" v-model="website.value" :readonly='!update' prepend-icon="fas fa-window-maximize"></v-text-field></v-col>
                                <v-spacer v-if="update"></v-spacer>
                                <v-col style="max-width:28%;" v-if="update"><v-switch class="small_switch" label="private" v-model="website.private"></v-switch></v-col>
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


                            <v-flex style="height:200px; overflow: hidden">
                                <v-chip class="ma-1" color="pink white--text" v-for="skill in skill_list" :key="skill" >{{skill}}</v-chip>
                            </v-flex>
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

export default({
    name: 'PersonalInfo',
    data() {
        return {
            pr_img_left: require('../illustrations/12.svg'),
            pr_img_right: require('../illustrations/70.svg'),
            profile_photo: require('../images/usagi_1.png'),
            update: false,
            save: false,
            skill_list:[
                'CAD','Lean manufacturing',' Multivariate analysis', 'Linear regression', 'Prototyping',
                        'Workflow development', 'STEM skills', 'Web: HTML, CSS, Javascript', 'Payment processing',
                        'Automated Billing Systems', 'CRM Platforms','CAD','Lean manufacturing',' Multivariate analysis', 'Linear regression', 'Prototyping',
                        'Workflow development', 'STEM skills', 'Web: HTML, CSS, Javascript', 'Payment processing',
                        'Automated Billing Systems', 'CRM Platforms'
            ],
            first_name: 'lalala',
            last_name: 'lallaa ',
            birth_day: null,
            birth_month: null,
            birth_year: null,
            birthdate_private: false, 
            telephone: {value: null, private: true},
            country: {value: null, private: false},
            per_mail: {value: null, private: false},
            prof_mail: {value: null, private: false},
            facebook: {value: null, private: false},
            instagram: {value: null, private: false},
            linkedin: {value: null, private: false},
            website: {value: null, private: false},
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
            countries: [
                "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla",
                "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas",
                "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
                "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam",
                "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands",
                "Central African Republic", "Chad", "Chile", "China, People's republic of", "Christmas Island", "Cocos (Keeling) Islands", "Colombia",
                "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire",
                "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
                "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
                "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana",
                "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar",
                "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
                "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
                "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
                "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait",
                "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya",
                "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar",
                "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius",
                "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat",
                "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles",
                "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands",
                "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Palestine", "Peru", "Philippines", "Pitcairn",
                "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda",
                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
                "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore",
                "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
                "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon",
                "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic",
                "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Tibet", "Togo", "Tokelau", "Tonga",
                "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine",
                "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay",
                "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)",
                "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
            ]
        }
    },
    methods: {
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
        }
    }
})
</script>

<style>

/* #info_card .v-card-title, .v-card-actions{
    background-color: teal !important;
} */

.small_switch{
    /* max-height: 10px !important;
    min-height: 10px !important;
    font-size: 10px !important; */
    transform: scale(0.750) !important;
    /* transform-origin: left !important; */
}

/* #info_card .v-card-title {
    color: brown !important;
    background: brown !important;
} */

</style>