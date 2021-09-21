<template>
    <v-container>
        <v-card-title></v-card-title>
        <router-view></router-view>
    </v-container>
</template>

<script>
// import MyAdsList from './my_ads_list.vue'
// import OpenMyAd from './open_my_ad.vue'

export default ({
    name: 'MyJobAds',
    components: {
        // MyAdsList,
        // OpenMyAd
    },
    data() {
        return {

        }
    },
    methods: {
        openmy_ad() {
            // this.$router.push({name: 'OpenMyAd', params: 15});
        // this.$emit('opened_my_ad', '');
      }
    }
})
</script>

<style>

</style>