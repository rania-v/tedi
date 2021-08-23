<template>
<v-container>
    <v-card width="100%" class="ma-2 pb-2" >
        <v-img :src="user.photo"></v-img>
        <v-card-title>
            <v-row class="d-flex justify-center">{{user.name}}</v-row>
        </v-card-title>
        <v-card-text>
            <v-row class="d-flex justify-center">{{user.profession}}</v-row>
            <v-row class="d-flex justify-center">{{user.workplace}}</v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
            <v-btn color="orange" outlined>Delete</v-btn>
            <v-btn color="orange" style="color:white">Accept</v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<script>

export default ({
    name: 'Request',
    data() {
        return {
            user: {
                photo: require('../icons/avatars/sailormoon.jpeg'),
                name: 'Chaka Khan',
                profession: 'Singer',
                workplace: 'Vietnam Singing Bar'
            }
        }    
    },
})
</script>

<style>
 
</style>