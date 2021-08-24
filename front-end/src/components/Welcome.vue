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
  /* color: #a0e338; */
  /* color: #e08d2d; */
  /* color: #2c7456; */
    color: hsl(0, 0%, 100%);

  /* margin-top: 60px; */
  padding: 5%;
  /* padding: 0 5% 5% 5%; */
    /* text-shadow: -4px 3px 0 #ebe0f8, -14px 7px 0 #ffffff; */
}

/* #welcome_headr:after {
  content:" ";
  margin: -100px;
} */

/* #relief {
  background-color: #3a50d9;
  color: #e0eff2;
  font: italic bold 100px Georgia, Serif;
  text-shadow: -4px 3px 0 #3a50d9, -14px 7px 0 #0a0e27;
} */

</style>