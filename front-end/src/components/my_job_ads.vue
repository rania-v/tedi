<template>
    <v-container>
        <v-card-title></v-card-title>
        <v-card-text style="display:flex; flex-wrap: wrap;  justify-content: center;">
            <v-container v-for="i in '{1,2,3}'" :key="i"  style="width:30%;" class="mr-2 ml-2">
                <MyAd @open_my_ad="openmy_ad"/>
            </v-container>
        </v-card-text>
    </v-container>
</template>

<script>
import MyAd from './my_ad.vue'

export default ({
    name: 'MyJobAds',
    components: {
        MyAd
    },
    data() {
        return {

        }
    },
    methods: {
        openmy_ad() {
        this.$emit('opened_my_ad', '');
      }
    }
})
</script>

<style>

</style>