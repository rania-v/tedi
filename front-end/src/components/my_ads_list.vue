<template>
    <v-card-text style="display:flex; flex-wrap: wrap;  justify-content: center;">
        <v-container v-for="i in myads.list" :key="i"  style="width:30%;" class="mr-2 ml-2">
            <MyAd :id="i" @open_my_ad="openmy_ad"/>
        </v-container>
    </v-card-text>
</template>

<script>

import MyAd from './my_ad.vue'
// import OpenMyAd from './open_my_ad.vue'
import { mapActions, mapGetters } from 'vuex';

export default ({
    name: 'MyAdsList',
    components: {
        MyAd,
        // OpenMyAd
    },
    data() {
        return {
            
            }
    },
    computed:{
        ...mapGetters({
            myads: 'myJobs'
        })
    },
    methods: {
        ...mapActions(['getAd']),
        openmy_ad() {
            // this.$router.push({name: 'OpenMyAd', params: 15});
        // this.$emit('opened_my_ad', '');
      },
      get(i){
          return this.getAd(i);
      }
    }
})
</script>
<style>

</style>