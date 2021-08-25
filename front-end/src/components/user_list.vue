<template>
    <v-container>
        <v-card>
            <v-row>
                <v-col class="d-flex justify-center">
                    <v-card-title>User List</v-card-title>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex justify-center">
                    <v-card-actions>
                        <v-btn :class="{'orange lighten-4 orange--text': pick_to_extract==true, 'orange white--text': pick_to_extract==false}" v-on:click="pick_to_extract=true">Select users to extract data</v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
            <v-card-text class="d-flex justify-center flex-wrap">
                <v-card v-for="i in 10" :key="i" class="ma-2" max-width="20%" outlined>
                    <v-card-actions style="max-height:40px" v-if="pick_to_extract">
                        <v-spacer></v-spacer>
                        <v-checkbox v-on:click="add_to_list()" color="orange"></v-checkbox>
                    </v-card-actions>
                    <v-card-text class="d-flex justify-center pt-0">
                        <UserCard/>
                    </v-card-text>
                </v-card>
                {{to_extract}}
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import UserCard from './user_card.vue'

export default ({
    name: 'UserList',
    components: {
        UserCard
    },
    data() {
      return {
            extract: {},
            pick_to_extract: false
      }  
    },
    methods: {
        add_to_list(id) {
            this.add_to_list.push(id);
        }
    }
})
</script>

<style>

</style>