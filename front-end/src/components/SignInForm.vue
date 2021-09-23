<template>
<v-container class="justify-center">
    <v-card max-width="100%" max-height="100%" class="rounded-xl" color="white" text elevation="0">
        <v-card-title>
            <h2 id="get_in">Get In Now</h2>
        </v-card-title>
        <!-- <v-row>
                <v-spacer></v-spacer>
            <v-col cols="2">
                <v-btn @click="close" text x-small><i class="fas fa-times"></i></v-btn>
            </v-col>
        </v-row> -->
        <v-card-text>
            <v-form action="/HomePage.vue" method="get">
                <v-row>
                    <v-spacer></v-spacer>
                        <v-col cols="6">
                            <v-text-field  label="e-mail" v-model="email" color="purple"></v-text-field>
                            <v-text-field label="password" v-model="password" type="password" required color="purple"></v-text-field>
                        </v-col>
                    <v-spacer></v-spacer>
                </v-row>
                <v-btn id="valid" type="submit" dark @click="submit" >Sign In</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</v-container>
</template>

<script>
export default {
    name: 'SignInForm',
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
            valid: true
        };
    },
    methods: {
        close() {
            this.$emit('close_in','');
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
        onSubmit ()
        {
            console.log(this.FormData)
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

#get_in {
    font-size: 35px;
    /* color: #a0e338; */
    color: #E91E63;
    font-family:monospace;
    font-weight: normal;
    margin-left: auto;
    margin-right: auto;
    /* margin-top: -5%; */
    /* text-shadow: -4px 3px 0 #ffffff, -8px 6px 0 #ebe0f8; */
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


p{
    color: black;
}
</style>
