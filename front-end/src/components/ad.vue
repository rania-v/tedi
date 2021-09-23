<template>
  <v-container>
    <div class="d-flex">
      <v-avatar size="32" class="justify-start"><img :src=friend_avatar alt="u1"></v-avatar>
      <strong class=" d-flex align-content-center flex-wrap" style="width:100%">

        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">

          <div id="user_name" style="width:calc(80%)" v-bind="attrs" v-on="on">{{friend_name}}</div>
          </template>
          <span>
                  <div>{{friend_name}}</div>
          </span>
        </v-tooltip>
      </strong>
    </div>
    <v-card class="mt-1">
        <v-img :src="image" ></v-img>
        <v-card-title class="pb-1">{{ad_title}}</v-card-title>
        <v-card-actions  class="justify-space-between pt-0">
          <v-btn icon @click="show = !show" v-bind="size" >
            <v-icon v-show="show==false" v-bind="size" >fas fa-caret-down</v-icon>
            <v-icon v-show="show==true" v-bind="size" >fas fa-caret-up</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <!-- <v-btn color="teal lighten-2" text  @click="$router.push('OpenAd')">
            Open Ad
          </v-btn> -->          
          <v-btn color="teal lighten-2" text   :to="{name: 'OpenAd', params:{ open:'open'}}" v-bind="size">
            Open Ad
          </v-btn>
          <v-btn color="teal lighten-2" outlined v-bind="size">
            Apply
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
</template>

<script>
// import OpenAd from './open_ad.vue'

export default ({
    name: 'Ad',
    components: {
      // OpenAd
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
      openad() {
        this.$emit('opened_ad', 'this.open');
      }
    },
    computed: {
    size () {
      const size = {xs:'x-small',sm:'small',lg:'large',xl:'x-large'}[this.$vuetify.breakpoint.name];
      return size ? { [size]: true } : {}
    }
  }
})
</script>

<style scoped>

</style>