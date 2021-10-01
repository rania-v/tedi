<template>
  <div id="app">
    <v-overlay v-if="this.isLoading" class="fa-3x" style="position:fixed;height: 100%">
      <i class="fas fa-spinner fa-spin" ></i>
    </v-overlay>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>

import{ mapGetters} from 'vuex';

export default {
  name: 'App',
  data () {
    return {
      signup: false,
      signin: false
    };
  },
  computed:{
    ...mapGetters({
      isLoading:"isLoading"
    })
  }
}
</script>
<style>

</style>
