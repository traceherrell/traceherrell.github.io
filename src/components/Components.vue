<template>
  <div class="container" >
    <h3>Here are a couple examples of some custom, reusable components I built with Vue</h3>
    <div class="row well">
      <div class="col-md-7">
        <input-select-list></input-select-list>
      </div>
      <div class="col-md-5">
      
      </div>
    </div>
    <div class="row">
      <div class="col-md-7">
         <!-- <interval-timer> </interval-timer> -->
      </div>
       <div class="col-md-5">
      
      </div>
    </div>
  </div>
</template>

<script>
import InputSelectList from './InputSelectList'
import IntervalTimer from './IntervalTimer'

export default {
  name: 'components',
  data () {
    return {
      msg: 'Welcome...  Below are a couple examples of custom components I have built '
    }
  },
  components: {InputSelectList, IntervalTimer}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h3 {
   margin-bottom: 30px;
   padding-bottom: 20px;
   border-bottom: solid 1px #EEEEEE
 }
 .container {
   margin-top: 50px;
 }
</style>
