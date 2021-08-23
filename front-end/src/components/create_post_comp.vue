<template>
    <v-container>
        <v-card class="amber lighten-4" elevation="0">
            <v-subheader class="d-flex justify-center">CREATE AN AWESOME POST</v-subheader>
            <v-card-text :class="color">
                <v-textarea placeholder="Share your thoughts with your network" v-on:click="focus_rows=3" v-on:blur="focus_rows=1" :rows="focus_rows" color="orange"></v-textarea>
            </v-card-text>
            <v-card-actions>
                <v-row class="d-flex align-center pa-0">
                    <v-spacer></v-spacer>
                    <v-col><v-btn outlined color="orange"><v-icon small left>fas fa-camera</v-icon>upload photo/video</v-btn></v-col>
                    <v-file-input class="mt-6" dense outlined color="orange" placeholder="attach file"></v-file-input>
                    <v-spacer></v-spacer>
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
        }
    }
}
</script>

<style>

</style>