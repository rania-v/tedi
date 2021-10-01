<template>

    <v-app id="home">
        <Banner/>
        <v-card min-height="88%">
            <v-toolbar id="tb" style="position: -webkit-sticky; position: sticky; top: 0rem; z-index: 2;">
                <v-toolbar-title>{{page_title}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <template v-slot:extension>
                    <v-tabs align-with-title grow color="teal">
                        <v-tabs-slider color="teal"></v-tabs-slider>
                        <v-tab v-for="item in items" :key="item.page_name" :to="{ name: item.route_name, params:{ page_title : item.page_name}}">
                            {{ item.page_name }}
                            <div v-if="item.route_name=='Notifications'&&notify" id='newNotify'></div>
                        </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
            <v-card-text  class="grey lighten-4">
                <router-view></router-view>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
    import Banner from './banner.vue'
    import {mapGetters} from 'vuex'

export default {
    name: 'HomePage',
    components: {
        Banner
    },
    props: {
        page_title: String
    }        
    ,
    data() {
        return {
            items: [
                {page_name:'Αρχική Σελίδα', route_name: 'Home'},
                {page_name: 'Δίκτυο', route_name: 'MyNetwork'},
                {page_name: 'Αγγελίες', route_name: 'AllJobAds'},
                {page_name: 'Συζήτηση', route_name: 'Chat'},
                {page_name: 'Ειδοποιήσεις', route_name: 'Notifications'},
                {page_name: 'Προσωπικά Στοιχεία', route_name: 'PersonalInfo'},
                {page_name: 'Ρυθμίσεις', route_name: 'Settings'},
                {page_name: 'ADMIN', route_name: 'UserList'}
            ],
        };
    },
    computed:{
        ...mapGetters({
            notifications:'notifications',
            isAdmin:'isAdmin'
        }),
        notify(){
            if(this.notifications.frequests.length>0)
                return true;
            return false;
        }
    },
    beforeMount(){
        // if(this.isAdmin)
            // this.items = [this.items.pop(),this.items.pop()]
        // else
            // this.items.pop()
    },
    methods: {
        // Goto(tab_name) {
        //     this.page_title = tab_name;
        // }
    }
}

</script>

<style>

#home {
        background: lightgray;

    /* background: #FFC107; */
    /* margin: 2%; */
}

#tb {
    margin-bottom: 1%;
}

#router_tab {
    color: grey;
    margin: 0px;
    padding: 4px;
    width: 100%;
}

#newNotify{
    /* position:absolute; */
    height:8px;
    width:8px;
    background-color:red;
    border-radius:50%;
    display:inline-block;
    margin-top:-15px;
    margin-left:5px;
    /* margin:0 0 auto auto; */
    border:2px solid red
}
</style>
