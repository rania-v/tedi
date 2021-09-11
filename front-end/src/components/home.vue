<template>
    <v-row>
        <!-- <h1  v-on:ShowFriendProf="ChangePT($event)">{{msg}}</h1> -->
        <v-spacer></v-spacer>
        <v-col cols="2">
            <Profile/>
        </v-col>
        <v-col cols="6">
            <v-container>
                <PostCreate @new_post='show_new_post($event)'/>
                <v-card  v-if="new_post_txt!=null" class="pa-3 ma-3 teal lighten-5" >
                    <MyPost/>
                </v-card>
                <v-card v-for="item in 7" :key="item" class="pa-3 ma-3" outlined>
                    <PostComp/>
                </v-card>
            </v-container>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script>
import PostComp from './post_comp.vue'
import PostCreate from './create_post_comp.vue'
import Profile from './profile.vue'
import MyPost from './my_post.vue'

export default ({
    name: 'Home',
    components: {
        PostComp,
        PostCreate,
        Profile,
        MyPost
    },
    data() {
       return {
        msg: "lala",
        new_post_txt: null
       }
    },
    methods: {
        Goto_Net(e) {
            this.msg = e
            // let p = this.$parent;
            // if(this.goto_net == true)
            //     this.root.$emit('ChangeTab', 'Δίκτυο');
            // if(p.$options.name == 'HomePage')
            //     p.page_title='Δίκτυο';
        },
        ChangePT(pt) {
            console.log("called from child!")
            this.msg = pt;
        },
        show_new_post(e) {
            this.new_post_txt = e;
        }
    }
})
</script>

<style>

/* body {
} */

</style>