<template>
    <v-app id="home">
        <v-card>
            <v-toolbar id="tb">
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

                <v-toolbar-title>{{page_title}}</v-toolbar-title>
                <v-spacer></v-spacer>

                <template v-slot:extension>
                    <v-tabs align-with-title grow color="orange">
                        <v-tabs-slider color="orange"></v-tabs-slider>

                        <v-tab v-for="item in items" :key="item" v-on:click="page_title = item">
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                    <!-- <v-tabs-items>
                        <v-tab-item v-for="item in items" :key="item" >
                            <v-card flat>
                                
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items> -->
                </template>
            </v-toolbar>
            <v-card-text v-on:GotoNet="ChangeTab($event)">
                <Home v-if="page_title=='Αρχική Σελίδα'"/>
                <Network v-else-if="page_title=='Δίκτυο'"/>
                <JobAds v-else-if="page_title=='Αγγελίες'"/>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
import Home from './home.vue'
import Network from './network.vue'
// import Profile from './profile.vue'
import JobAds from './job_ads.vue'

export default {
    name: 'HomePage',
    components: {
        Home,
        Network,
        // Profile,
        JobAds
    },
    data() {
        return {
            items: ['Αρχική Σελίδα', 'Δίκτυο', 'Αγγελίες', 'Συζήτηση', 'Ειδοποιήσεις', 'Προσωπικά Στοιχεία', 'Ρυθμίσεις'],
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
