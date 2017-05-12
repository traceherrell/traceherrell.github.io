<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
  

     <ul>
      <li> <router-link to="/bluetooth">Bluetooth api playground</router-link></li>
    
    </ul>
    <input-select-list></input-select-list>
   
  </div>
</template>

<script>
import InputSelectList from './InputSelectList'

export default {
  name: 'components',
  data () {
    return {
      msg: 'Welcome...  Below are a couple examples of custom components I have built '
    }
  },
  components: {InputSelectList}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
