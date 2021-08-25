<template>
    <v-card class="pa-2 ma-3" outlined>
        <v-card-actions>
            <v-row>
                <v-spacer></v-spacer>
                <v-btn v-on:click="more = true" small icon class="ml-3"><i class="fas fa-ellipsis-v"></i></v-btn>
            </v-row>
        </v-card-actions>
        <PostComp/>
    </v-card>
</template>

<script>
import PostComp from './post_comp.vue'

export default ({
    name:'MyPost',
    components: {
        PostComp
    },
    data() {
        return {
            more: false,
            delete: false,
            make_private: false,
        }        
    },
})
</script>

<style>

</style>