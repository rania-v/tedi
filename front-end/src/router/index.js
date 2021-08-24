import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import wlcm from '../components/wlcm.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "wlcm",
        component: wlcm
    },{
        path: "/HomePage",
        name: "HomePage",
        component: HomePage,
        // children: [
        //     {
        //       path: "aggelies",
        //       name: "aggelies",
        //       component: AggeliesComp,
        //     },
        // ]
    },
];

const router = new VueRouter({
    mode: "history",
    base: "/",routes,
});

export default router;