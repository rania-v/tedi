<template>
    <div>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="2">
                <Profile/>
            </v-col>
            <v-col cols="6" class="">
                <v-row>
                    <v-col cols="4">
                        <v-btn v-for="a in actions" :key="a" v-on:click="show=a.action" class="mr-1 ml-0" :class="{'teal white--text': show==a.action, 'teal lighten-4 teal--text': show!=a.action}"><v-icon left>{{a.icon}}</v-icon>{{a.action}}</v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
                <PostComp/>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-dialog max-width="30%" v-model="show" v-if="show=='Friend'">
            <v-card>
                <v-card-title class="teal lighten-4 teal--text">Friend</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="teal white--text"><v-icon size="17" left>fas fa-user-times</v-icon> Delete friend</v-btn>
                    <v-btn color="purple white--text"><v-icon size="17" left>fas fa-star</v-icon> Add to favorites</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Profile from './profile.vue'
import PostComp from './post_comp.vue'

export default ({
    name:"FriendProfile",
    components: {
        Profile,
        PostComp
    },
    data() {
        return {
            show: "Posts",
            actions: [
                {action: 'Conact', icon: 'fas fa-comment'},
                {action: 'Friend', icon: 'fas fa-user-friends'}
            ]
        };
    },
})
</script>

<style>

</style>