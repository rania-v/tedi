import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/HomePage",
        name: "HomePage",
        component: HomePage
    },
];

const router = new VueRouter({
    mode: "history",
    base: '/',routes,
});

export default router;