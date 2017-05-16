<template>

<nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">{{title}}</a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <router-link class="nav-item" v-for="item in menuItems" 
              tag="li" 
              :to="'/'+ item"
              :activeClass="'active'"
              >
                  <a class="nav-link">{{item}}</a>
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
      title: 'trace.herrell.io',
      menuItems: ['Resume', 'Portfolio', 'Contact', 'Components'],
      active: 'active'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
