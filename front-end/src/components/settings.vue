<template>
    <v-container fluid class="d-flex">
        <v-col cols="3" class="d-flex">
            <v-img :src="sett_img_left" max-width="100%" class="align-self-start" contain></v-img>
        </v-col>
        <v-col cols="6">

        <v-card class="pb-5 pt-5 pr-3 pl-3">
            <v-card-title class="justify-center">Settings</v-card-title>
            <v-subheader class="justify-center">Update Login Information</v-subheader>
            <v-card-text>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col class="d-flex justify-end align-start flex-wrap" cols="2">Login E-mail</v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="3">
                            <v-text-field v-if="!update" label="login email" v-model="this.login_email.value" :readonly="!update"></v-text-field>
                            <v-text-field v-if="update" label="type new login email" v-model="form.new_email" ></v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row >
                        <v-spacer></v-spacer>
                        <v-col class="d-flex justify-end align-start flex-wrap"  cols="2">Password</v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="3">
                            <v-text-field v-if="!update" label="password" type='password' readonly v-model="password"></v-text-field>
                            <v-text-field v-if="update" label="type old password" type='password' v-model="form.pass_for_check"></v-text-field>
                            <v-text-field v-if="update" label="type new password" type='password' v-model="form.new_pass"></v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row v-if="save && !update">
                        <v-col>
                            <v-spacer></v-spacer>
                            <v-alert class="ma-2" dense text type="success" color="teal">Your Log In information have been updated successfully</v-alert>
                        </v-col>
                    </v-row>
            </v-card-text>
            <v-card-actions class="d-">
                <v-btn outlined @click="exit()" color="pink">log out</v-btn>
                <v-spacer></v-spacer>
                <v-btn v-if="!update" v-on:click="update=true" text style="color:teal"><v-icon class="fas fa-edit" left></v-icon>Update</v-btn>
                <v-btn v-if="update" v-on:click="store()" text style="color:teal"><v-icon class="fas fa-save" left></v-icon>Save</v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
         <v-col cols="3" class="d-flex">
            <v-img :src="sett_img_right" max-width="100%" class="align-self-end" contain></v-img>
        </v-col>
    </v-container>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default ({
    name: 'Settings',
    data() {
        return {
            sett_img_left: require('../illustrations/190.svg'),
            sett_img_right: require('../illustrations/196.svg'),
            password: '123456789',
            update: false,
            save: null,

            form:{
                new_email: null,
                pass_for_check: null,
                new_pass: null,
            }
        }
    },
    methods: {
        ...mapActions(['updateUserSettings','logout']),
        store(){
            this.updateUserSettings(this.form)
        },
        update_login_email() {

        },
        update_password() {

        },
        save_changes() {
            this.save = true;
            this.update = false;
            this.password = this.new_pass;
            this.login_email = this.new_email;
        },
        exit(){
            console.log('mphke')
            this.logout()
            .then(response=>{
                console.log(response);
                this.$router.push({name:"wlcm"})
            })
        }
    },
    computed:{
        ...mapGetters({
            login_email: 'profEmail'
        })
    }
})
</script>

<style>

</style>