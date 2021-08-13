<template>
    <v-row>
        <!-- <h1  v-on:ShowFriendProf="ChangePT($event)">{{msg}}</h1> -->
        <Profile/>
        <v-container>
            <PostCreate/>
            <PostComp v-for="item in 7" :key="item"/>
        </v-container>
    </v-row>
</template>

<script>
import PostComp from './post_comp.vue'
import PostCreate from './create_post_comp.vue'
import Profile from './profile.vue'

export default ({
    name: 'Home',
    components: {
        PostComp,
        PostCreate,
        Profile
    },
    data() {
       return {
        msg: "lala"
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
        }
    }
})
</script>

<style>

/* body {
} */

</style>