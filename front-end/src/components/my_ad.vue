<template>
<v-div>
  <v-container>
    <v-card class="mt-1">

        <v-img :src="image"></v-img>
      <v-badge top  overlap color="red accent-2" icon="fas fa-plus" bordered>
        <v-card-title class="pb-1">{{ad_title}}</v-card-title>
      </v-badge>
        <v-card-actions  class="justify-space-between pt-0">
          <v-btn icon @click="show = !show" >
            <v-icon v-show="show==false">fas fa-caret-down</v-icon>
            <v-icon v-show="show==true">fas fa-caret-up</v-icon>
          </v-btn>
          <v-spacer></v-spacer>        
          <v-btn color="teal lighten-2" text  @click="openmyad" :to="{name: 'OpenMyAd', params: {id: friend_name}}">
            View Info
          </v-btn>
        </v-card-actions>
        <v-card-text v-if="show==true" class="pt-0">
            <div>{{job_title}}</div>
            <div>{{location}}</div>
            <div>{{benefits}}</div>
            <div>{{company}}</div>
        </v-card-text>
    </v-card>
  </v-container>
</v-div>
</template>

<script>


// import { mapGetters } from "vuex"
// import { mapActions, mapGetters } from "vuex"

export default ({
    name: 'Ad',
    components: {
    },
    data() {
        return {
          image: require('../images/3.jpg'),
          friend_avatar: require('../icons/avatars/homer.png'),
          friend_name:'Homer Simpson aljsfnlabcjahbsjhabshjbaksfbasfabksjfhbaksj',
          ad_title: 'Network Engineer wanted',
          job_title: 'Network Engineer',
          location: 'London',
          benefits: 'kserw gw',
          company: 'riot',
          namechip:false,
          show: false
        }
    },
    methods: {
      openmyad() {
        // this.$emit('open_my_ad', '');
      }
    }
})
</script>

<style scoped>

</style>