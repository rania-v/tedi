<template>
<v-div>
  <v-chip v-if="namechip==true" class="mb-7 ml-0" style="position: absolute"> {{friend_name}}</v-chip>
  <v-container>
    <div class="d-flex">
      <v-avatar size="32" class="justify-start"><img :src=friend_avatar alt="u1"></v-avatar>
      <strong class=" d-flex align-content-center flex-wrap" style="width:100%">
        <div id="user_name" style="width:calc(80%)">{{friend_name}}</div>
      </strong>
    </div>
    <v-card class="mt-1">
        <v-img :src="image"></v-img>
        <v-card-title class="pb-1">{{ad_title}}</v-card-title>
        <v-card-actions  class="justify-space-between pt-0">
          <v-btn icon @click="show = !show" >
            <v-icon v-show="show==false">fas fa-caret-down</v-icon>
            <v-icon v-show="show==true">fas fa-caret-up</v-icon>
          </v-btn>
          <v-btn color="orange lighten-2" text @click="open_on_new_window">
            Open Ad
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

export default ({
    name: 'Ad',
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
      showName() {
      }
    }
})
</script>

<style scoped>

</style>