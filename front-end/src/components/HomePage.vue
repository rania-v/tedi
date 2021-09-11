<template>

    <v-app id="home">
        <Banner/>
        <v-card>
            <v-toolbar id="tb">
                <v-toolbar-title>{{page_title}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <template v-slot:extension>
                    <v-tabs align-with-title grow color="teal">
                        <v-tabs-slider color="teal"></v-tabs-slider>

                        <v-tab v-for="item in items" :key="item" v-on:click="page_title = item">
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
            <v-card-text v-on:GotoNet="ChangeTab($event)">
                <Home v-if="page_title=='Αρχική Σελίδα'"/>
                <Network v-else-if="page_title=='Δίκτυο'"/>
                <JobAds v-else-if="page_title=='Αγγελίες'"/>
                <Chat v-else-if="page_title=='Συζήτηση'"/>
                <Notifications v-else-if="page_title=='Ειδοποιήσεις'"/>
                <PersonalInfo v-else-if="page_title=='Προσωπικά Στοιχεία'"/>
                <Settings v-else-if="page_title=='Ρυθμίσεις'"/>
                <UserList v-else-if="page_title=='ADMIN'"/>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
import Banner from './banner.vue'
import Home from './home.vue'
import Network from './network.vue'
// import Profile from './profile.vue'
import JobAds from './job_ads.vue'
import PersonalInfo from './personal_info.vue'
import Settings from './settings.vue'
import Chat from './chat.vue'
import Notifications from './notifications.vue'
import UserList from './user_list.vue'

export default {
    name: 'HomePage',
    components: {
        Banner,
        Home,
        Network,
        // Profile,
        JobAds,
        PersonalInfo,
        Settings,
        Chat,
        Notifications,
        UserList
    },
    data() {
        return {
            items: ['Αρχική Σελίδα', 'Δίκτυο', 'Αγγελίες', 'Συζήτηση', 'Ειδοποιήσεις', 'Προσωπικά Στοιχεία', 'Ρυθμίσεις', 'ADMIN'],
            page_title: 'Αρχική Σελίδα'
        };
    },
    methods: {
        changeImage ()
        {
        },
        ChangeTab(e) {
            this.page_title = e;
            console.log("alallas");
        }
    },
    watch: {
        $route(to) {
            if(to.name == 'Αρχική Σελίδα')
                this.page_title ='Αρχική Σελίδα';
            // else if(to.name == 'coWorkers')
            //     this.selected_id = 2;
            // else if(to.name == 'profSettings')
            //     this.selected_id = 3;
            // else if(to.name == 'Upgrade')
            //     this.selected_id = 4;
            // else if(to.name == 'profLogout')
            //     this.selected_id = 5;
        }
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


</style>
