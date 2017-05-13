
<template>
  <div id="app">

   <nav-title></nav-title>
   <div style="margin-top:50px;"  class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavTitle from './components/NavTitle'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome...  '
    }
  },
  components: {NavTitle}
}
</script>
<style >

</style>
