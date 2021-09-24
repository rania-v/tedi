import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import wlcm from '../components/wlcm.vue'
import OpenAd from '../components/open_ad.vue'
import FriendProfile from '../components/friend_profile.vue'

import Home from '../components//home.vue'
import Network from '../components//network.vue'
// import Profile from './profile.vue'
import JobAds from '../components//job_ads.vue'
import PersonalInfo from '../components//personal_info.vue'
import Settings from '../components//settings.vue'
import Chat from '../components/chat.vue'
import Notifications from '../components//notifications.vue'
import UserList from '../components//user_list.vue'

import CreateAd from '../components/create_ad.vue'
import MyJobAds from '../components/my_job_ads.vue'
import AllJobAds from '../components/all_ads.vue'

// import MyAd from ' ../components/my_ad.vue'
import OpenMyAd from '../components/open_my_ad.vue'
import MyAdsList from '../components//my_ads_list.vue'

import MyNetwork from '../components/my_network.vue'

import GettingStarted from '../components/getting_started.vue'
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "wlcm",
        component: wlcm,
    },
    {
        path: '/GettingStarted',
        name: "GettingStarted",
        component: GettingStarted
    },
    {
        path: "/HomePage",
        name: "HomePage",
        component: HomePage,
        props: true,
        children: [
            {
                path: '/Home',
                name: 'Home',
                component: Home,
            },
            {
                path: '/Network',
                name: 'Network',
                component: Network,
                children: [
                    {
                        path: '/Network/Profile-:id',
                        name: 'Friend_Profile',
                        props: true,
                        component: FriendProfile
                    },
                    {
                        path: '/Network/my_network',
                        name: 'MyNetwork',
                        component: MyNetwork
                    }
                ]
            },
            {
                path: '/JobAds',
                name: 'JobAds',
                component: JobAds,
                children: [
                    {
                        path: '/JobAds/create-a-new-ad',
                        name: 'CreateAd',
                        component: CreateAd
                    },
                    {
                        path: '/JobAds/all-ads',
                        name: 'AllJobAds',
                        component: AllJobAds
                    },
                    {
                        path: '/JobAds/my-ads',
                        name: 'MyJobAds',
                        component: MyJobAds,
                        children: [
                            {
                                path: '/JobAds/my-ads/my-ads-list',
                                name: 'MyAdsList',
                                component: MyAdsList,
                                children: [
                                    // {
                                    //     path: '/JobAds/my-ads/my-ads',
                                    //     name: 'MyAd',
                                    //     component: MyAd
                                    // }
                                ]
                            },
                            {
                                path: '/JobAds/my-ads/my-ad-id-:id',
                                name: 'OpenMyAd',
                                component: OpenMyAd
                            }
                        ]
                    },
                    {
                        path: '/JobAds/open-ad/ad-id',
                        name: 'OpenAd',
                        component: OpenAd,
                        props: true
                    }
                ]
            },
            {
                path: '/PersonalInfo',
                name: 'PersonalInfo',
                component: PersonalInfo
            },
            {
                path: '/Settings',
                name: 'Settings',
                component: Settings
            },
            {
                path: '/Chat',
                name: 'Chat',
                component: Chat
            },
            {
                path: '/UserList',
                name: 'UserList',
                component: UserList
            },
            {
                path: '/Notifications',
                name: 'Notifications',
                component: Notifications
            },
        ]
    },
    {
        path: '/OpenAd',
        name: 'OpenAd',
        component: OpenAd
    }
];

const router = new VueRouter({
    mode: "history",
    base: "/",routes,
});

export default router;