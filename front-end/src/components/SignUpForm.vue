<template>
    <v-card id="card" max-width="70%">
        <v-card-title>
            <h2 id="be_part">Be Part of the Community Now</h2>
        </v-card-title>
        <v-row>
            <v-spacer></v-spacer>
            <v-btn @click="close" text small><i class="fas fa-times"></i></v-btn>
        </v-row>
        <v-card-text>
                <v-form @submit.prevent="handleSubmit(onSubmit)">
                    <v-row justify="space-between" align="center">
                        <v-col>
                            <v-text-field label="First Name" required v-model="name"></v-text-field>
                            <v-text-field label="phone number" type="text" @keypress="phone_check" v-model="phone_number" :maxlength="10" required></v-text-field>
                            <v-text-field label="e-mail" v-model="email" ></v-text-field>
                            <v-text-field label="password" v-model="password" :type="'password'" required></v-text-field>
                            <v-text-field label="confirm password" v-model="conf_password" v-on:blur="pass_confirm" :type="'password'" required></v-text-field>
                            <span v-if="conf_password==false">password not the same</span>
                        </v-col>
                        <v-col>
                            <v-text-field label="Last Name" v-model="last_name" required></v-text-field>
                                <v-file-input label="Photo" accept="image/png, image/jpeg, image/bmp" placeholder="Upload Photo" chips clear-icon v-model=photo prepend-inner-icon="fas fa-camera"></v-file-input>
                                <v-img :src="photo" max-width="auto" aspect-ratio="1"></v-img>
                            <v-img src="../svgs/talking.svg"></v-img>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col><v-checkbox label="Accept Terms & Conditions"></v-checkbox></v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-card-actions class="">
                        <v-btn id="valid" type="submit" dark @click="submit" >Sign Up</v-btn>
                    </v-card-actions>
                </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'SignUpForm',
    data() {
        return {
            name:'',
            last_name:'',
            phone_number: null,
            email:'',
            password:'',
            conf_password: null,
            message: '',
            checked: false,
            valid: true,
            visible: null,
            photo: require('../icons/avatars/user1.png')
        };
    },
    methods: {
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
