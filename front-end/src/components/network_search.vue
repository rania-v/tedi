<template>
    <v-container class="width:100%">
        <v-card class="deep-purple white--text" rounded="xl" elevation="0">
            <v-card-title class="justify-center">
                FIND MORE PEOPLE TO CONNECT WITH
            </v-card-title>
            <v-card-actions>
                <v-toolbar rounded="xl">
                    <v-toolbar-title>
                        Search
                    </v-toolbar-title>
                    <v-autocomplete class="mx-4" flat hide-no-data hide-details label="Find People"></v-autocomplete>
                </v-toolbar>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>

export default ({
    name: 'NetworkSearch',
    data() {
        return {

        }
    },
})
</script>

<style>

#search_card {
    /* background-color: #FFB74D; */
    color: white;
}

</style>