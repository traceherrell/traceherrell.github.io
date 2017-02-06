<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Vuejs</a></li>
      <li><a href="https://webbluetoothcg.github.io/web-bluetooth/" target="_blank">Bluetooth Web Api</a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">WebPack</a></li>
    </ul>

     <ul>
      <li> <router-link to="/bluetooth">Bluetooth api playground</router-link></li>
    
    </ul>
   
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome...  '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
