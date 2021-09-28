<template>
  <v-container>
    {{this.id}}
      <div class="d-flex">
      <v-avatar size="32" class="justify-start"><img :src="image" alt="u1"></v-avatar>
      <strong class=" d-flex align-content-center flex-wrap" style="width:100%">
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
          <div id="user_name" style="width:calc(80%)" v-bind="attrs" v-on="on">{{creator}}</div>
          </template>
          <span>
              <div>{{creator}}</div>
          </span>
        </v-tooltip>
      </strong>
    </div>
    <v-card class="mt-1">
        <!-- <v-img :src="image" ></v-img> -->
        <v-card-title class="pb-1">{{ad.title}}</v-card-title>
        <v-card-actions  class="justify-space-between pt-0" style="overflow-y: hidden;">
          <v-btn icon @click="show = !show" v-bind="size" >
            <v-icon v-show="show==false" v-bind="size" >fas fa-caret-down</v-icon>
            <v-icon v-show="show==true" v-bind="size" >fas fa-caret-up</v-icon>
          </v-btn>
          <v-spacer></v-spacer>      
          <v-btn color="teal lighten-2" text x-small  :to="{name: 'OpenAd', params:{ open:'open', id: this.id, ad: this.ad}}" v-bind="size">
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
          ad: this.loadAd(),
          creator: null,
          show: false,
          image: require('../images/3.jpg'),
        }
    },
    props:{
      id: String
    },
    methods: {
      ...mapActions(['getAd', 'getUser']),
      openad() {
        this.$emit('opened_ad', 'this.open');
      },
       async loadAd(){
        let a = await this.getAd(this.id)
          .then(res => {this.title = res.title; this.ad = res;})

        await this.getUser(this.ad.creator)
          .then(res => {
            console.log('res: ', res)
            this.creator = res.user.name;
          })
        return a;
      }
    },
    computed: {
      size () {
        const size = {xs:'x-small',sm:'small',lg:'large',xl:'x-large'}[this.$vuetify.breakpoint.name];
        return size ? { [size]: true } : {}
      }
    },
    // async beforeMount(){

    //   await this.getAd(this.id)
    //     .then(res => { this.ad = res})
    //   await this.getUser(this.ad.creator)
    //     .then(res => {this.creator =  res})
    //   console.log(this.ad);
    // }
})
</script>

<style scoped>

</style>