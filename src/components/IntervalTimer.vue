<template>
  <div class="form interval-timer">
   <input class="form-control" type="text" v-model="numIntervals"/>
   <input class="form-control" type="text" v-model="intervalLength"/>
   <input class="form-control" type="text" v-model="timeBetweenInterval"/>
  <input class="form-control" type="text" v-model="currentTimeCount"/>  
  <button @click="startStop" type="button">{{buttonText}}</button> 
  <b-alert variant="success" :show="showSuccess">Success Alert</b-alert>

  </div>
</template>

<script>
export default {
  name: 'intervalTimer',
  data () {
    return {
      numIntervals: 3,
      intervalLength: 60,
      running: false,
      timeBetweenInterval: 30,
      currentTimeCount: 0,
      buttonText: 'Start',
      intervalQueue: [],
      showSuccess: false
    }
  },
  methods: {
    startStop: function () {
      if (this.running) {
        this.running = false
        this.buttonText = 'Start'
      } else {
        this.buttonText = 'Stop'
        this.running = true
        this.run()
      }
    },
    run: function () {
      // init queue;
      this.intervalQueue = []
      for (var i = 0; i < this.numIntervals; i++) {
        this.intervalQueue.push(this.intervalLength)
        if (i < this.numIntervals - 1) {
          this.intervalQueue.push(this.timeBetweenInterval)
        }
      }
      this.countDown(this.intervalQueue.shift())
    },
    countDown: function (seconds) {
      var id = setInterval(function () {
        this.currentTimeCount = seconds--
        if (!this.running || !seconds) {
          clearInterval(id)
          this.currentTimeCount = 0
          if (this.intervalQueue.length) {
            this.countDown(this.intervalQueue.shift())
          } else {
            this.startStop()
            this.showSuccess = true
          }
        }
      }.bind(this), 1000)
    }
  }
}
</script>

<style scoped>
 li {
   list-style: none;
 }
</style>
