<template>
    <v-container>
        <v-card color="orange lighten-5 rounded-lg" elevation="0">
            <v-row>
                <v-col cols="2" class="d-block pb-0">
                    <v-avatar>
                        <v-img :src="user.photo"></v-img>
                    </v-avatar>
                    <v-subheader class="d-flex justify-center" style="color:orange width:100%">{{user.name}}</v-subheader>                     
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