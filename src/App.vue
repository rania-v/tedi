<template>
  <div id="app">
      <wlcm/>
  </div>
</template>

<script>
import wlcm from './components/wlcm.vue'

export default {
  name: 'App',
  components: {
    wlcm
  },
  data () {
    return {
      signup: false,
      signin: false
    };
  }
}
</script>
<style>

</style>
