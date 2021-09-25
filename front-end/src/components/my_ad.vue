<template>
<div>
  <v-container v-if="!this.isLoading">
    <v-card class="mt-1">
        <v-img :src="image ? image : image"></v-img>
      <v-badge top  overlap color="red accent-2" icon="fas fa-plus" bordered>
        <v-card-title class="pb-1">{{ad.title}}</v-card-title>
      </v-badge>
        <v-card-actions  class="justify-space-between pt-0">
          <v-btn icon @click="show = !show" >
            <v-icon v-show="show==false">fas fa-caret-down</v-icon>
            <v-icon v-show="show==true">fas fa-caret-up</v-icon>
          </v-btn>
          <v-spacer></v-spacer>        
          <v-btn color="teal lighten-2" text  @click="openmyad" :to="{name: 'OpenMyAd', params: {id: this.id}}">
            View Info
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
  {{this.ad}}
</div>
</template>

<script>


// import { mapGetters } from "vuex"
import { mapActions, mapGetters } from "vuex"

export default ({
    name: 'Ad',
    data() {
        return {
          ad: this.loadAd(),
          image: require('../images/3.jpg'),
          namechip:false,
          show: false
        }
    },
    props:{
      id: String,
    },
    methods: {
      ...mapActions(['getAd']),
      openmyad() {
        // this.$emit('open_my_ad', '');
      },
      async loadAd(){
        let a = await this.getAd(this.id);
        console.log('a: ', a);
        return a;
      }
      
    },
    computed:{
      ...mapGetters({
        isLoading:'isLoading'
      })
      // aa: function (){return this.getAd(this.id)}
    },
    created(){
      // this.ad = this.getAd(this.id)
      // this.$forceUpdate();
      // console.log('NA SOIU PE8ANEI')
      // console.log('ad: ', this.ad)
    }
})
</script>

<style scoped>

</style>