<template>
    <v-container class="pt-0">
        <v-card class="teal lighten-4" elevation="0">
            <v-subheader class="d-flex justify-center">CREATE AN AWESOME POST</v-subheader>
            <v-card-text :class="color">
                <v-textarea placeholder="Share your thoughts with your network" v-model="post_txt" v-on:click="focus_rows=3, create=true" v-on:blur="check_post" :rows="focus_rows" color="teal"></v-textarea>
            </v-card-text>
            <v-card-actions>
                <v-row class="d-flex align-center pa-0">
                    <v-spacer></v-spacer>
                    <v-col><v-btn outlined color="teal"><v-icon small left>fas fa-camera</v-icon>upload photo/video</v-btn></v-col>
                    <v-file-input class="mt-6" dense outlined color="teal" placeholder="attach file"></v-file-input>
                    <v-spacer></v-spacer>
                    <!-- <v-div> -->
                        <v-btn v-if="create" :disabled="post_txt==null || post_txt==''" class="deep-purple white--text" v-on:click="post">post</v-btn>
                        <v-spacer v-if="create"></v-spacer>
                    <!-- </v-div> -->
                </v-row>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'PostCreate',
    data() {
        return {
            color: 'white',
            focus_rows: '1',
            create: false,
            post_txt: null,

        }
    },
    methods: {
        check_post() {
            this.focus_rows=1;
            if(this.post_txt == null || this.post_txt == "")
            {    this.create = false;
                return false;
            }
            else
                this.create = true;
                return true;
        },
        post() {
            this.$emit('new_post', this.post_txt)
        }
    }
}
</script>

<style>

</style>