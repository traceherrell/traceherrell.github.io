<template>
  <div class="hello">
    
    <ul>
      <li><a href="https://vuejs.org" target="_blank">vuejs</a></li>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    
    </ul>
     
  </div>
</template>

<script>
import InputSelectList from './InputSelectList'

export default {
  name: 'hello',
  data () {
    return {
      msg: ' '
    }
  },
  components: {InputSelectList}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
