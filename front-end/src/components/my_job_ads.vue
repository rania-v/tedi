<template>
    <v-container>
        <v-card-title></v-card-title>
        <v-card-text style="display:flex; flex-wrap: wrap;  justify-content: center;">
            <v-container v-for="i in '{1,2,3}'" :key="i"  style="width:30%;" class="mr-2 ml-2">
                <Ad/>
            </v-container>
        </v-card-text>
    </v-container>
</template>

<script>
import Ad from './ad.vue'

export default ({
    name: 'MyJobAds',
    components: {
        Ad
    },
    data() {
        return {

        }
    },
})
</script>

<style>

</style>