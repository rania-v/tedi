<template>
<v-app>
  <v-container>
      <v-card>
        <PostComp :id="id"/>
      </v-card>
  </v-container>
</v-app>
</template>

<script>
import PostComp from '../components/post_comp.vue'
export default {
    name: 'OpenedPost',
    components: {PostComp},
    props:{
        id: String,
    }
}
</script>

<style>

</style>