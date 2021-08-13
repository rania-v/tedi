<template>
  <div id='welcome_headr'>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<style>
#welcome_headr {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 100px;
  direction:rtl;
  display:inline-block;
  text-indent:-100px;
  font-size: 100px;
  /* color: #587b7f; */
  color: #a0e338;
  margin-top: 60px;
  padding: 5%;
}

/* #welcome_headr:after {
  content:" ";
  margin: -100px;
} */

</style>