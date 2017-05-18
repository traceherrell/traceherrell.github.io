<template>
  <div class="container">
  <div class="row">
  <div class="col-md-6">
    <div class="card" style="width: 20rem;">
      <img class="card-img-top img-fluid" src="../assets/launchstudio.png" alt="Launch Studio">
      <div class="card-block">
        <h4 class="card-title">Bluetooth Launch Studio</h4>
        <p class="card-text">A tool to complete the Bluetooth qualification process. This tool is only for bluetooth members so I can't link directly to the application.  I'll be putting together some screen shots soon to show more about this application.</p>
        <a href="https://bluetooth.com" class="btn btn-primary">Bluetooth.com</a>
      </div>
    </div>
  </div>
   <div class="col-md-6">
  <div class="card" style="width: 20rem;">
      <img class="card-img-top img-fluid" src="../assets/j_search.png" alt="John L Scott">
      <div class="card-block">
        <h4 class="card-title">John L Scott</h4>
        <p class="card-text">Search and find realestate listiings similar to Redfin and Zillow.  Since this is a public site you can click the button below to try it out yourself. </p>
        <a href="https://johnlscott.com/search" class="btn btn-primary">JohnLScott.com</a>
      </div>
    </div>
   </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      msg: 'Hey this is Portfolio   '
    }
  }
}
</script>

<style>
  .card {
    margin-top: 50px;
   
    float: left;
  }
</style>

