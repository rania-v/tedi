<template>
  <div id="app">

    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
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
