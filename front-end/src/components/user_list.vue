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
                        <v-btn v-if="!pick_to_extract" :class="{'teal lighten-4 teal--text': pick_to_extract==true, 'teal white--text': pick_to_extract==false}" v-on:click="pick_to_extract=true">Select users to extract data</v-btn>
                        <v-btn v-if="pick_to_extract" class="teal white--text" v-on:click="popup=true" :disabled="extract_list==''">Extract users datadata</v-btn>
                        <v-btn v-if="pick_to_extract" class="teal white--text" v-on:click="selectAll">Select All</v-btn>
                        <v-btn v-if="pick_to_extract" class="teal lighten-4 teal--text" v-on:click="close_pick"><i class="fas fa-times"></i></v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
            <v-row class="pa-0 ma-0">
                    <v-spacer></v-spacer>
                <v-col cols="3" class="pa-0 ma-0">
                    <v-btn small class="mr-1 ml-1 teal lighten-4 white--text" v-on:click="cust_size='15%'"><v-icon size="15">{{size_icon}}</v-icon></v-btn>
                    <v-btn small class="mr-1 ml-1 teal lighten-4 white--text" v-on:click="cust_size='20%'"><v-icon size="20">{{size_icon}}</v-icon></v-btn>
                    <v-btn small class="mr-1 ml-1 teal lighten-4 white--text" v-on:click="cust_size='30%'"><v-icon size="30">{{size_icon}}</v-icon></v-btn>
                </v-col>
            </v-row>
            <v-card-text class="d-flex justify-center flex-wrap">
                <v-card v-for="user in user_list" :key="user" class="ma-2" :max-width="cust_size" outlined>
                    <v-card-actions style="max-height:40px" v-if="pick_to_extract">
                        <v-spacer></v-spacer>
                        <v-checkbox v-model="extract_list" :value="user" color="teal"></v-checkbox>
                    </v-card-actions>
                    <v-card-text class="d-flex justify-center pt-0">
                        <UserCard :user='user'/>
                    </v-card-text>
                </v-card>
                {{extract_list}}
            </v-card-text>
        </v-card>
        <v-dialog v-model="popup" width="30%">
            <v-card>
                <v-card-title>EXTRACT users' data</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col v-for="i in data_type" :key="i"><v-checkbox :color="check_color" :label="i.type" v-model="i.status"></v-checkbox></v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <div style="column-count: 2">
                        <v-checkbox :color="check_color" v-for="i in extract_data" :key="i" :label="i.data" v-model="i.status"></v-checkbox>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="teal white--text" v-on:click="extract=true">extract</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import {mapActions} from 'vuex'
import UserCard from './user_card.vue'

export default ({
    name: 'UserList',
    components: {
        UserCard
    },
    data() {
      return {
            user_list:[1,2,3,4,5,6,7,8,10],
            pick_to_extract: false,
            popup: false,
            extract: false,
            extract_list:[],
            cust_size: '20%',
            size_icon:'fas fa-ellipsis-h',
            check_color: 'teal',
            data_type: [
                {type: 'XML', status: false},
                {type: 'JSON', status: false}                
            ],
            extract_data: [
                {data:'bio', status: false},
                {data:'posts', status: false},
                {data:'ads', status: false},
                {data:'qualifications', status: false},
                {data:'interest in ads', status: false},
                {data:'network', status: false},
                {data:'comments in posts', status: false}
            ]
      }  
    },
    methods: {
        ...mapActions('getUser'),
        close_pick() {
            this.extract_list = [];
            this.pick_to_extract = false;
        },
        selectAll() {
            this.extract_list = this.user_list;
        },
        clear() {
            this.extract_list = '';
        },
        // export_xml(userid_list) {
        //     var user;
        //     for (id of userid_list) {
        //         user = getUser(id);
        //     }
        // }
    }
})
</script>

<style>

</style>