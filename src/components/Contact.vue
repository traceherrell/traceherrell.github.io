<template>
  <div class="container" >
   
     <div v-show="!submitted">

     
     <form >
      <div class="form-group">
        <label>Name</label>
        <input v-model="contact.name" type="text" class="form-control"  placeholder="Name">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input v-model="contact.email" type="text" class="form-control" placeholder="Email">
      </div>
      <div class="form-group">
        <label>Message</label>
        <input v-model="contact.msg" type="text" class="form-control" placeholder="Email">
      </div>
      <button @click="addContact" class="btn btn-primary">Submit</button>
   
       
       </form>
  
    <div class="myContact">Or just email me at <a href="mailto:trace.herrell@gmail.com"> trace.herrell@gmail.com </a></div>
</div>
  <transition name="fade">
  <div v-show="submitted"> Thanks! </div>
  </transition>
  </div>
</template>

<script>
import firebase from 'firebase'
// Setup Firebase
var config = {
  apiKey: 'AIzaSyCVDbEj5IBDz2OEs1h_WMsXbO8wT60yXFw',
  authDomain: 'trace-herrell-github-io.firebaseapp.com',
  databaseURL: 'https://trace-herrell-github-io.firebaseio.com',
  projectId: 'trace-herrell-github-io',
  storageBucket: 'trace-herrell-github-io.appspot.com',
  messagingSenderId: '530588887396'
}
firebase.initializeApp(config)

let contactRef = firebase.database().ref('contacts')

export default {
  name: 'contact',
  data () {
    return {
      contact: {
        name: '',
        email: '',
        msg: 'message me...'
      },
      submitted: false
    }
  },
  methods: {
    addContact: function () {
      contactRef.push(this.contact)
      this.contact.email = ''
      this.contact.msg = ''
      this.contact.name = ''
      this.submitted = true
    }
  }
}
</script>

<style>
.container {
  margin-top: 35px;
}
.myContact {
  margin-top: 35px;
  font-size: 20px;
}
</style>
