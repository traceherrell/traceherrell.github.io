<template>
  <div class="container">
  <div class="row">
  <div class="col-md-6">
    <div class="card" style="width: 20rem;">
      <img class="card-img-top img-fluid" src="../assets/launchstudio.png" alt="Launch Studio">
      <div class="card-body">
        <h4 class="card-title">Bluetooth Launch Studio</h4>
        <p class="card-text">A tool to complete the Bluetooth qualification process. This tool is only for bluetooth members so I can't link directly to the application.  I'll be putting together some screen shots soon to show more about this application.</p>
        <b-button variant="primary" v-b-modal.modal1>View Screen Shots</b-button>
      </div>
    </div>
  </div>
   <div class="col-md-6">
     
  <div class="card" style="width: 20rem;">
      <img class="card-img-top img-fluid" src="../assets/j_search.png" alt="John L Scott">
      <div class="card-body">
        <h4 class="card-title">John L Scott</h4>
        <p class="card-text">Search and find realestate listings similar to Redfin and Zillow.  Since this is a public site you can click the button below to try it out yourself. </p>
        <a href="https://www.johnlscott.com/search" class="btn btn-primary">JohnLScott.com</a>
      </div>
    </div>
   </div>
  </div>
      <div>
        
        
        <!-- Modal Component -->
        <b-modal id="modal1"
                 ref="modal1"
                 size="lg"
                 title="Bluetooth Launch Studio"
                >
                <b-carousel id="carousel1"
                controls
                background="#ababab"
                :interval="3000"
                v-model="slide"
                @slide="onSlide"
                @slid="onSlid"
    >

     
      <b-carousel-slide >
          <img slot="img" class="d-block img-fluid"
             src="../assets/launchstudio-search.png" alt="image slot">
      </b-carousel-slide>

      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid"
             src="../assets/launchstudio-newproject.png" alt="image slot">
      </b-carousel-slide>

      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid"
             src="../assets/tcm2.png" alt="image slot">
      </b-carousel-slide>
 
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid"
             src="../assets/tcm3.png" alt="image slot">
      </b-carousel-slide>

        </b-carousel>         
        </b-modal>
    </div>
  </div>

</template>

<script>
export default {
  name: 'portfolio',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    blankImg (x, y) {
      // Return a blank SVG image with specified width and height
      // Handy for maintaining aspect ratio for text only slides
      return 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D' +
             'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg ' +
             'viewBox%3D\'0 0 ' + x + ' ' + y + '%2F%3E'
    },
    onSlide (slide) {
      this.sliding = true
    },
    onSlid (slide) {
      this.sliding = false
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

