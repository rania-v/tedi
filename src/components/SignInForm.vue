<template>
    <v-card>
        <v-card-title>
            <h2>SIGN UP</h2>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3">
                <v-text-field label="First Name" v-model="name" prepend-icon="folder"></v-text-field>
                <v-text-field label="Last Name" v-model="last_name"></v-text-field>
                <v-text-field label="phone number" v-model="phone_number"></v-text-field>
                <v-text-field label="e-mail" v-model="email"></v-text-field>
                <v-text-field label="password" v-model="password"></v-text-field>
                <v-text-field label="confirm password" v-model="conf_password"></v-text-field>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'SignInForm',
    data() {
        return {
            name:'',
            last_name:'',
            phone_number:'',
            email:'',
            password:'',
            conf_password:''
        }
    }
}
</script>

<style>
#siform {
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30%;
  margin-right: 30%;
  padding: 5%;
}
</style>
