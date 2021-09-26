<template>
    <v-card id="card">
        <v-card-title class="pink--text">Be Part of the Community Now</v-card-title>
        <v-card-text>
            <v-form @submit.prevent="handleSubmit(onSubmit)">
                <v-row justify="space-between" align="center">
                    <v-col id="tf">
                        <v-text-field label="First Name" required v-model="user.personal.firstName"></v-text-field>
                        <v-text-field label="phone number" type="text" @keypress="phone_check" v-model="user.contact.phoneNum.value" :maxlength="10" required></v-text-field>
                        <v-text-field label="e-mail" v-model="user.contact.profEmail.value" ></v-text-field>
                        <v-text-field label="password" v-model="user.personal.password" :type="'password'" required></v-text-field>
                        <v-text-field label="confirm password" v-model="conf_password" v-on:blur="pass_confirm" :type="'password'" required></v-text-field>
                        <v-alert v-if="password!='' && conf_password!='' && !checkPass()" color="error" dense text>password not the same</v-alert>
                    </v-col>
                    <v-col id="tf">
                        <v-text-field label="Last Name" v-model="user.personal.lastName" required></v-text-field>
                            <!-- <v-file-input label="Photo" accept="image/png, image/jpeg, image/bmp" placeholder="Upload Photo" chips clear-icon v-model='photo'></v-file-input> -->
                            <v-col><v-file-input prepend-icon="far fa-image" label="Ad Image" v-model="photo" @change="ShowImg" :color="form_text_color"></v-file-input></v-col>
                            <v-img :src="photo" max-width="auto" aspect-ratio="1"></v-img>
                    
                        <v-img src="../svgs/talking.svg"></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-spacer></v-spacer>
                    <!-- <v-checkbox label="accept"></v-checkbox> -->
                    <v-col><v-checkbox label="Accept Terms & Conditions" color="purple"></v-checkbox></v-col>
                    <v-spacer></v-spacer>
                </v-row>
                <v-card-actions class="">
                    <v-btn id="valid" type="submit" dark @click="submit()">Sign Up</v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'SignUpForm',
    data() {
        return {
            conf_password: '',
            message: '',
            checked: false,
            valid: true,
            visible: '',
            photo: require('../icons/avatars/user1.png'),
            user:{
                personal:{
                    firstName: null,
                    lastName: null,
                    password: null,
                    image: null,
                },
                contact:{
                    phoneNum:{value: null},
                    profEmail:{value: null},
                }
            }
        };
    },
    methods: {
        ...mapActions(['register']),
        async submit(){
            await this.register(this.user)
            .then(response=>{
                console.log(response)
                this.$router.push({name:"GettingStarted", params:{usr_name:this.user.personal.firstName}});
            })
            .catch(error=>{
                console.log(error);
            })
        },
        close() {
            this.$emit('close_up','');
        },
        validate () {
            this.$refs.form.validate()
        },
        phone_check (evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                evt.preventDefault();
            }
        },
        pass_confirm (e) {
            if(e.sameAs(this.password))
                this.conf_password == true;
            else
                this.conf_password == false;
        },
        ShowImg() {
            this.photo= URL.createObjectURL(this.photo)
        },
        checkPass() {
            if(this.password === this.conf_password)
                return true;
            else return false;
        }
    }
}

</script>

<style>
#siform {
    color: black;
  width: 30%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* margin-left: 30%;
  margin-right: 30%; */
  /* padding: 5%; */
}

#be_part {
    font-size: 35px;
    color: #a0e338;
    font-family:monospace;
    font-weight: normal;
    margin-left: auto;
    margin-right: auto;
    margin-top: -5%;
    text-shadow: -4px 3px 0 #ffffff, -8px 6px 0 #ebe0f8;
}

.v-input--is-focused .v-input__slot{
    color: purple !important;
}

.v-input--is-focused .v-input__slot  .v-label{
    color: purple !important;
    caret-color: purple;
}


#checkbox {
    display: inline;
    margin-right: 5px;
}

#valid {
    size: x-large;
    background-color : #5d1889 ;
    margin-top: 1%;
    margin-left: auto;
    margin-right: auto;
}

#card{
    margin-left: auto;
    margin-right: auto;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 1%;
}

p{
    color: black;
}
</style>
