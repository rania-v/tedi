<template>
    <v-container style="width:50%">
        <v-card class="pb-5 pt-5 pr-3 pl-3">
            <v-card-title class="justify-center">Settings</v-card-title>
            <v-subheader class="justify-center">Update Login Information</v-subheader>
            <v-card-text>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col class="d-flex justify-end align-start flex-wrap" cols="2">Login E-mail</v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="3">
                            <v-text-field v-if="!update" label="login email" v-model="login_email" :readonly="!update"></v-text-field>
                            <v-text-field v-if="update" label="type new login email" v-model="new_email" ></v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row >
                        <v-spacer></v-spacer>
                        <v-col class="d-flex justify-end align-start flex-wrap"  cols="2">Password</v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="3">
                            <v-text-field v-if="!update" label="password" type='password' readonly v-model="password"></v-text-field>
                            <v-text-field v-if="update" label="type old password" type='password' v-model="pass_for_check"></v-text-field>
                            <v-text-field v-if="update" label="type new password" type='password' v-model="new_pass"></v-text-field>
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
                <v-spacer></v-spacer>
                <v-btn v-if="!update" v-on:click="update=true" text style="color:orange"><v-icon class="fas fa-edit" left></v-icon>Update</v-btn>
                <v-btn v-if="update" v-on:click="save_changes" text style="color:orange"><v-icon class="fas fa-save" left></v-icon>Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>

export default ({
    name: 'Settings',
    data() {
        return {
            login_email: 'lala@la.org',
            password: '123456789',
            pass_for_check: null,
            new_pass: null,
            new_email: null,
            update: false,
            save: null,
        }
    },
    methods: {
        update_login_email() {

        },
        update_password() {

        },
        save_changes() {
            this.save = true;
            this.update = false;
            this.password = this.new_pass;
            this.login_email = this.new_email;
        }
    }
})
</script>

<style>

</style>