<template>
    <v-container>
        <v-card color="teal lighten-5 rounded-lg" elevation="0">
            <v-row class="pb-0 pt-0">
                <v-col cols="2"  class="d-block">
                        <router-link :to="{name:'Friend_Profile', params:{id:name}}">
                    <v-avatar size="35">
                            <v-img :src="user.photo"></v-img>
                    </v-avatar>
                    <v-subheader class="d-flex justify-center" style="color:teal; width:100%; height:30%; ">{{user.name}}</v-subheader>                     
                        </router-link>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                    <v-card-text>
                        liked your post...
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>

export default ({
    name: 'Notification',
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