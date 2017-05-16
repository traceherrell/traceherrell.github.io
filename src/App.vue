
<template>
  <div id="app">

   <nav-title></nav-title>
   <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 2s ease;
}



.fade-leave-active {
    transition: opacity 1.5 ease;
    opacity: 0;
}

</style>
