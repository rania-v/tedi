<template>
    <v-container class="width:100%">
        <v-card class="deep-purple white--text" rounded="xl" elevation="0">
            <v-card-title class="justify-center">
                FIND MORE PEOPLE TO CONNECT WITH
            </v-card-title>
            <v-card-actions>
                <v-toolbar rounded="xl">
                    <v-toolbar-title>
                        Search
                    </v-toolbar-title>
                    <v-autocomplete class="mx-4"
                        flat
                        hide-no-data
                        chips
                        :items="people.fr.concat(this.searched)"
                        item-text="name"
                        item-value="_id"
                        cache-items
                        hide-details
                        label="Find People"
                        :search-input.sync="search"
                        >
                    </v-autocomplete>
                </v-toolbar>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

export default ({
    name: 'NetworkSearch',
    data() {
        return {
            search: null,
            searched: []
        }
    },
    methods:{
        ...mapActions(['searchUsers']),
        buildFrList(){return []},
    },
    computed:{
        ...mapGetters({
           friends:'friends' 
        }),
        people(){
            return{
                // fr: this.buildFrList(this.friends.list),
                fr: [{name: 'test', _id:'test'}],
                // searched: [],
            }
        }
    },
    watch:{
        async search(val){
            if(!val) return;
            this.people.searched = [];
            let a = await this.searchUsers(val);
            this.searched = a.list
        }
    }
})
</script>

<style>

#search_card {
    /* background-color: #FFB74D; */
    color: white;
}

</style>