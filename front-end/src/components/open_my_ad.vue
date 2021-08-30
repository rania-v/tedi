<template>
    <v-container>
        <v-row>
            <v-col cols="7">
                <v-container class="max-length: 20%; wrap:">
                    <OpenAd/>
                </v-container>
            </v-col>
            <v-col>
                views
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import OpenAd from './open_ad.vue'

export default ({
    name: 'OpenMyAd',
    components: {
        OpenAd
    },
    data() {
        return{

        }
    },
})
</script>
