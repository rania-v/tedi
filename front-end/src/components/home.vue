<template>
    <v-row>
        <!-- <h1  v-on:ShowFriendProf="ChangePT($event)">{{msg}}</h1> -->
        <v-spacer></v-spacer>
        <v-col cols="2">
            <Profile @Goto_Net="openNet" style="position: -webkit-sticky; position: sticky; top: 120px; z-index: 2;"/>
        </v-col>
        <v-col cols="6">
            <!-- <v-container> -->
                <PostCreate @new_post='show_new_post($event)'/>
                <!-- <v-card  v-if="new_post_txt!=null" class="pa-3 ma-3 teal lighten-5" >
                    <MyPost/>
                </v-card> -->
                <v-card v-for="item in this.postsToSee" :key="item" class="pa-3 ma-3" elevation="0">
                    <PostComp :id="item"/>
                </v-card>
            <!-- </v-container> -->
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script>
import PostComp from './post_comp.vue'
import PostCreate from './create_post_comp.vue'
import Profile from './profile.vue'
// import MyPost from './my_post.vue'
import { mapActions, mapGetters } from 'vuex'


export default ({
    name: 'Home',
    components: {
        PostComp,
        PostCreate,
        Profile,
        // MyPost
    },
    data() {
        return {
            msg: "lala",
            new_post_txt: null,
            time: null,
            timer: 10000,
        }
    },
    computed:{
        ...mapGetters({
            postsToSee: "postsToSee"
        })
    },
    methods: {
        ...mapActions(['refreshUser']),
        openNet() {
        },
        ChangePT(pt) {
            this.msg = pt;
        },
        show_new_post() {
            this.$forcedUpdate();
        },
        async refresh(){
            await this.refreshUser()
            this.time = setTimeout(this.refresh, this.timer)
        }
    },
    async mounted(){
        this.time = setTimeout(this.refresh, this.timer)
    },
    async beforeDestroy(){
        clearTimeout(this.time)
    }
})
</script>

<style>

/* body {
} */

</style>