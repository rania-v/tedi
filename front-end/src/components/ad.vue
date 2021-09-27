<template>
  <v-container>
    <div class="d-flex">
      <v-avatar size="32" class="justify-start"><img :src="creator.personal.image ? creator.personal.image : require('../icons/avatars/user1.png')" alt="u1"></v-avatar>
      <strong class=" d-flex align-content-center flex-wrap" style="width:100%">

        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">

          <div id="user_name" style="width:calc(80%)" v-bind="attrs" v-on="on">{{friend_name}}</div>
          </template>
          <span>
                  <div>{{creator.personal.firstName + ' ' + creator.personal.LastName}}</div>
          </span>
        </v-tooltip>
      </strong>
    </div>
    <v-card class="mt-1">
        <v-img :src="ad.image ? ad.image : require()" ></v-img>
        <v-card-title class="pb-1">{{ad.title}}</v-card-title>
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
            <div>{{ad.basic_info.job_title}}</div>
            <div>{{ad.basic_info.location}}</div>
            <div>{{ad.benefits.pos_benefits}}</div>
            <div>{{ad.basic_info.company_name}}</div>
        </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import OpenAd from './open_ad.vue'

import { mapActions } from 'vuex';

export default ({
    name: 'Ad',
    components: {
      // OpenAd
    },
    data() {
        return {
          ad: null,
          creator: null,
          show: false
        }
    },
    props:{
      id: String
    },
    methods: {
      ...mapActions(['getAd', 'getUser']),
      openad() {
        this.$emit('opened_ad', 'this.open');
      }
    },
    computed: {
      size () {
        const size = {xs:'x-small',sm:'small',lg:'large',xl:'x-large'}[this.$vuetify.breakpoint.name];
        return size ? { [size]: true } : {}
      }
    },
    beforeMount(){
      this.ad = this.getAd(this.id);
      this.creator = this.getUser(this.ad.creator);
      console.log(this.creator);
    }
})
</script>

<style scoped>

</style>