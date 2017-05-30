<template>

<nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
  <button @click="toggle" class="navbar-toggler navbar-toggler-right" type="button">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">{{title}}</a>
  <div :class="open ? ' show ' : '' " class="collapse navbar-collapse" id="navbarNav">
    <ul @click="open = false" class="navbar-nav">
      <router-link class="nav-item" v-for="item in menuItems" 
              tag="li" 
              :to="'/'+ item"
              :activeClass="'active'" >
                  <a   class="nav-link">{{item}}</a>
             </router-link>                
    </ul>
  </div>
</nav>


  
</template>

<script>
export default {
  name: 'navtitle',
  data () {
    return {
      title: 'traceherrell.com',
      menuItems: ['Resume', 'Portfolio', 'Contact', 'Components'],
      active: 'active',
      open: false
    }
  },
  methods: {
    toggle: function () {
      this.open = !this.open
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
