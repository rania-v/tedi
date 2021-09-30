<template>
    <v-container class="pt-0">
        <v-card class="teal lighten-4" elevation="0">
            <v-subheader class="d-flex justify-center">CREATE AN AWESOME POST</v-subheader>
            <v-card-text :class="color">
                <v-textarea placeholder="Share your thoughts with your network" v-model="newpost.content" v-on:click="focus_rows=3, create=true" :rows="focus_rows" color="teal"></v-textarea>
            </v-card-text>
            <v-card-actions>
                <v-row class="d-flex align-center pa-0">
                    <v-spacer></v-spacer>
                    <v-col><v-btn outlined color="teal"><v-icon small left>fas fa-camera</v-icon>upload photo/video</v-btn></v-col>
                    <v-file-input class="mt-6" dense outlined color="teal" placeholder="attach file"></v-file-input>
                    <v-spacer></v-spacer>
                    <!-- <v-div> -->
                        <v-btn v-if="create" :disabled="newpost.content=='' || false" class="deep-purple white--text" v-on:click="newPost();">post</v-btn>
                        <v-spacer v-if="create"></v-spacer>
                    <!-- </v-div> -->
                </v-row>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'PostCreate',
    data() {
        return {
            color: 'white',
            focus_rows: '1',
            create: false,
            newpost:{
                content: '',
            }
        }
    },
    methods: {
        ...mapActions(['createPost']),
        newPost(){
            console.log('con: ', this.newpost.content);
            // this.createPost(this.newpost);
        },
        check_post() {
            this.focus_rows=1;
            if(this.newpost.content == null || this.newpost.content == "")
            {    this.create = false;
                return false;
            }
            else
                this.create = true;
                return true;
        },
        skata(){
            console.log('cont: ', this.newpost.content);
        }
    }
}
</script>

<style>

</style>