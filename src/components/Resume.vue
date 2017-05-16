<template>
  <div>
    <header id="header" class="hero-unit header">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="avatar">
              <img src="../assets/trace_profile.jpg" alt="Profile Picture" class="img-responsive">
            </div>
          </div>
          <div class="col-md-6">
            <h2 class="heading">Hello, I'm Trace</h2>
            <p>A Full Stack Software Engineer from Seattle. Want to know more about me?</p>
            <a href="#" class="btn btn-secondary" v-scroll-to="'#about-me'">Read More</a>
            <a href="https://www.linkedin.com/pub/trace-herrell/66/a84/423" class="btn btn-primary">
              <i class="fa fa-lg fa-linkedin"></i>
            </a>
          </div>
  
        </div>
      </div>
    </header>
    <section id="about-me" class="section about-me">
      <div class="container">
        <h2 class="heading">About Me</h2>
        <div>
        <p>I have over a decade of experience building end to end solutions in a variety of verticals: healthcare, insurance, advertising, real estate, and most recently
          <span class="fa fa-bluetooth"></span>IoT.  I’m strong in all areas of the stack but in last few years I’ve really began focusing more on the middle to front end with modern javascript technology like React, Vue, Vuex, Kendo UI, Angular, Node, Webpack, Babel.
        </p>
        </div>
        <div style="margin-bottom: 50px;">
          <p>This is site is built with Vue single file componets, vue-router, webpack, babel.  It does not require a server and is being statically hosted on GitHubs GitPages. </p>
          <p> </p>
        </div>

        <div  class="row interest">
          <div class="col-md-3">
            <h3 class="sub-heading">
            <i class="fa fa-lg fa-html5"></i> HTML/CSS3 </h3>
            <p> Implement responsive designs for a usable experience across desktop, tablet, and phone browsers. Sass, Less, HTML5</p>
          </div>
          <div class="col-md-3">
            <h3 class="sub-heading">
            <i class="fa fa-lg fa-code"></i> Code</h3>
            <p>
            Well versed in functional and OO programming. JavaScript, C#.</p>
          </div>
          <div class="col-md-3">
            <h3 class="sub-heading">
            <i class="fa fa-lg fa-cloud"></i> API </h3>
            <p>
            Develop RESTful interfaces that incorporate stateless designs, self-descriptive messages and semantic URLs. Web API 2.0, NodeJs, Google Map, Facebook Social, AWS Cloud, OATH2</p>
          </div>
          <div class="col-md-3">
            <h3 class="sub-heading">
            <i class="fa fa-lg fa-database"></i> Database </h3>
            <p>
            Skillful in creating conceptual models based on business logic and executing performance tuning on Databases. Relational, SQL Server, document storage, MongoDB, TSQL, Modeling, Query optimization.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="resume" class="section resume">
      <div class="container">
        <h2 class="heading">Resume</h2>
        <ul class="timeline">
  
          <li class="event">
            <h3 class="heading">Senior Software Engineer / Architect</h3>
            <span class="month">
              <i class="fa fa-calendar"></i>April 2016 - </span>
            <p> Employee of the quarter twice. </p>
            <p> Using architectural patterns such as Separation of Concerns, Encapsulation, Caching, Dependency injection, MVC, MVVM design patterns I significantly improved the design of a project currently two years into development. Measured by performance, maintainability, and user feedback we able to finally launch a successful beta.
              <a href="http://www.bluetooth.com">www.bluetooth.com</a>
            </p>
          </li>
  
          <li class="event">
            <h3 class="heading">Senior/Lead Software Engineer - Freelance</h3>
            <span class="month">
              <i class="fa fa-calendar"></i>Decemmber 2014 - March 2016</span>
            <p> Complete responsive redesign and implementation for John L. Scott's public facing search application as we well as the back end broker tools. Built new front end using JavaScript MVVM frame works, React, Flux, bootstrap, and google api's (map, geography, social).
              <a href="http://www.johnlscott.com/search">www.johnlscott.com</a>
            </p>
          </li>
          <li class="year">2015</li>
  
          <li class="event">
            <h3 class="heading">Senior Developer at Childrens Hospital</h3>
            <span class="month">
              <i class="fa fa-calendar"></i>May 2012 – Oct 2014</span>
            <p> Designed/Implemented a new web application for the IPU, replacing the current white board manual process. Used Asp.net MVC 5. Razor, Bootstrap, JQuery and Entity Framework.</p>
          </li>
  
          <li class="event">
            <h3 class="heading">Senior Developer - Freelance</h3>
            <span class="month">
              <i class="fa fa-calendar"></i>January 2012 – May 2012</span>
            <p>Implemented a Cole and Weber designed Facebook application for Washington State Lottery. JQuery, CSS, .Net 4.0, ASP.Net, SQL server to build the “Group Play” application. </p>
          </li>
          <li class="year">2012</li>
          <li class="event">
            <h3 class="heading">Software Engineer at Vertafore</h3>
            <span class="month">
              <i class="fa fa-calendar"></i>October 2007 – January 2012</span>
            <p>End to end full stack software engineer and scrum master. 6 major releases. 100,000+ users.</p>
          </li>
  
          <li class="event">
            <h3 class="heading">Software Developer at Childrens Hospital</h3>
            <span class="month">
              <i class="fa fa-calendar"></i>Jan 2000 – March 2007</span>
            <p> Working closely with executive stake holders I built several web applications that focused on improving patient outcomes and reducing clinical administrative overhead.</p>
          </li>
  
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'
export default {
  name: 'resume',
  data () {
    return {
    }
  },
  directives: {
    scrollTo: VueScrollTo
  }
}
</script>

<style scoped>
.resume {
  background-color: #efefef;
}

.thumbnail {
  padding: 0;
  border-radius: 0;
  box-shadow: 0 0 5px #ccc, inset 0 0 0 #000;
}

.fa {
  margin-right: 6px;
}

.hero-unit {
  background-size: cover;
  background-image: url('../assets/hero-bg.png');
  background-repeat: no-repeat;
  background-position: top center;
  padding-top: 7em;
  padding-bottom: 7em;
  text-align: center;
}

.avatar {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  border: 20px solid rgba(0, 0, 0, 0.1);
}

.avatar img {
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  width: 100%;
  margin: 0 auto;
}

.avatar img {
  margin: 0;
}

.header {
  text-align: left;
}

.header .heading {

  font-size: 5em;
  margin-bottom: 0;
  color: #fff;
}

.header p {
  font-size: 2.3em;
  margin-bottom: 55px;
  line-height: 1.5;
  font-weight: 200;
  color: #fff;
}

.heading {
  margin-top: 20px;
}

section {
  margin-bottom: 100px
}


.section .heading {
  font-size: 3em;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center
}

.about-me p {
  font-size: 1.2em;
}

.timeline {
  background-image: url(../assets/vertical-line.png);
  background-repeat: repeat-y;
  background-position: 50% 0;
  max-width: 960px
}

.timeline {
  margin: 0 auto;
  max-width: 700px;
  overflow: hidden;
  height: auto;
  position: relative;
  padding: 0;
  list-style-type: none;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEElEQVQIW2NMTEz8z8gABAAPKwIlXWq1kgAAAABJRU5ErkJggg==);
  background-repeat: repeat-y;
  background-position: 50% 0
}

.timeline .heading {
  font-weight: 700;
  font-size: 1.2em;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: left;
  margin-bottom: 0
}

.timeline .year {
  font-size: 1em;
  line-height: 4;
  color: #FFF;
  width: 6em;
  border-radius: 50%;
  background: #505050;
  max-width: 4em;
  clear: both;
  margin: 1em auto;
  text-align: center;
  margin-top: 50px
}



@media screen and (min-width: 992px) {
  .timeline .year {
    margin-bottom: 30px
  }
}

.timeline .year+.event {
  margin-top: 50px
}

.timeline .month {
  display: block;
  margin-bottom: 15px;
  color: #aea08b;
  font-size: .9em
}

.timeline .month i {
  margin-right: 5px
}

.timeline .event {
  width: 100%;
  margin: 50px 0;
  padding: 1.3em;
  background: #f4f4f4;
  border-color: #bcbcbc;
  text-align: left;
  color: #3c3c3c
}

@media screen and (min-width: 992px) {
  .timeline .event {
    width: 45%;
    margin: 110px 2.5% 50px
  }
}

.timeline .event:hover {
  background: #f4f4f4
}

.timeline .event:hover:after {
  background: #2C3E50
}

.timeline .event:after {
  width: 25px;
  height: 12px;
  border-color: #efefef;
  border-width: 5px;
  background: #95a5a6;
  top: 1.8em;
  left: -29px
}

.timeline .event:nth-of-type(2n):after {
  right: -31px
}

.timeline .heading {
  color: #2C3E50;
  font-weight: 700;
  font-size: 1.2em;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: left;
  margin-bottom: 0
}

.timeline.timeline-right .event:nth-of-type(2n) {
  float: right;
  clear: right
}

.timeline.timeline-right .event:nth-of-type(2n):after {
  right: auto;
  left: -29px
}

@media screen and (min-width: 992px) {
  .timeline.timeline-right .event {
    margin-top: 30px
  }
}

.timeline.timeline-left .event {
  float: left;
  clear: left
}

.timeline.timeline-left .event:after {
  left: auto;
  right: -29px
}



.timeline *,
.timeline :after,
.timeline:after,
.timeline :before,
.timeline:before,
{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box
}

.timeline .year:first-of-type {
  margin-top: 0!important
}

.timeline .year+.event {
  margin-top: -1.5em
}

.timeline .event {
  position: relative;
  float: right;
  clear: right;
  width: 45%;
  margin: 10px 2.5%;
  border-radius: 5px;
  list-style-type: none;
  display: block;
  padding: .4em;
  background: #fff;
  z-index: 15;
  color: #4d4d4d;
  border: 1px solid #d0d0d0;
  text-decoration: none;
  -webkit-transition: background .15s linear;
  -moz-transition: background .15s linear;
  -ms-transition: background .15s linear;
  -o-transition: background .15s linear;
  transition: background .15s linear
}

.timeline .event.featured {
  width: 95%!important
}

.timeline .event.featured:after,
.timeline .event.featured:before,
{
  display: none
}

@media all and (max-width: 600px) {
  .timeline .event {
    width: 85%
  }
}

.timeline .event.offset-first {
  margin-top: -1.5em
}

.timeline .event img {
  margin-top: 10px;
  max-width: 100%
}

.timeline .event:hover {
  background: #f6f6f6
}

.timeline .event:hover:after {
  background: #505050
}

.timeline .event:nth-of-type(2n) {
  float: left;
  clear: left
}

.timeline .event:nth-of-type(2n):after {
  right: -5%;
  left: auto
}

@media all and (min-width: 650px) {
  .timeline .event:after {
    display: block;
    content: ' ';
    height: 9px;
    width: 9px;
    background: #9d9d9d;
    border-radius: 50%;
    position: absolute;
    left: -5%;
    top: 1.5em;
    border: 2px solid #fff
  }
}

.timeline time {
  display: block;
  font-weight: 700
}
</style>
