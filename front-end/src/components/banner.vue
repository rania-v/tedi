<template>
    <v-container class="pa-0 ma-0 d-flex deep-purple" style="max-height: 120px; min-width:100%;">
            <!-- <v-img :src="banner_back" max-height="120px" min-width="101%" style="top: 0; right: 0; z-index:1 !important"></v-img> -->
            <v-img :src="banner_img" max-height="120px" max-width="200px" contain aspect-ratio="1" style="z-index:3"></v-img>
            <h1 id="myFont" class="pa-5 d-flex align-center" style="color: white;">FaceIn</h1>
    </v-container>
</template>

<script>

export default({
    name: 'Banner',
    data() {
        return {
            banner_img: require("../banner/banner_img.svg"),
            banner_back: require("../banner/back.jpg")
        }
    },
})
</script>

<style>

</style>