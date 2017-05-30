webpackJsonp([1],Array(32).concat([function(t,e,a){"use strict";var s=a(10),n=a.n(s),i=a(107),o=a(90),r=a.n(o),c=a(96),l=a.n(c),u=a(92),d=a.n(u),m=a(91),v=a.n(m),p=a(97),f=a.n(p);n.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Resume",component:f.a},{path:"/bluetooth",name:"Bluetooth",component:r.a},{path:"/portfolio",name:"Portfolio",component:l.a},{path:"/contact",name:"Contact",component:d.a},{path:"/components",name:"Components",component:v.a},{path:"/resume",name:"Resume",component:f.a}]})},function(t,e,a){"use strict";var s=a(10),n=a.n(s),i=a(31),o=a(18),r=a.n(o);n.a.use(i.a);var c={people:[],menuItems:[]},l={addPerson:function(t,e){t.people.push(e)},removePerson:function(t,e){t.people=r.a.filter(t.people,function(t){return t.id!==e.id})}},u={addPerson:function(t,e){return(0,t.commit)("addPerson",e)},removePerson:function(t,e){return(0,t.commit)("removePerson",e)}},d={people:function(t){return t.people},menuItems:function(t){return c.menuItems}};e.a=new i.a.Store({state:c,getters:d,actions:u,mutations:l})},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){a(50);var s=a(2)(a(39),a(101),null,null);t.exports=s.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(10),n=a.n(s),i=a(37),o=a.n(i),r=a(32),c=a(33),l=a(34),u=(a.n(l),a(35)),d=(a.n(u),a(36)),m=(a.n(d),a(19)),v=a.n(m);n.a.use(v.a,{container:"body",duration:500,easing:"ease",offset:0,onDone:!1,onCancel:!1}),new n.a({el:"#app",router:r.a,store:c.a,template:"<App/>",components:{App:o.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(95),n=a.n(s);e.default={name:"app",data:function(){return{msg:"Welcome...  "}},components:{NavTitle:n.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bluetooth",data:function(){return{msg:"Hey this is the bluetooth   "}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(94),n=a.n(s);e.default={name:"components",data:function(){return{msg:"Welcome...  Below are a couple examples of custom components I have built "}},components:{InputSelectList:n.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(60),n=a.n(s),i={apiKey:"AIzaSyCVDbEj5IBDz2OEs1h_WMsXbO8wT60yXFw",authDomain:"trace-herrell-github-io.firebaseapp.com",databaseURL:"https://trace-herrell-github-io.firebaseio.com",projectId:"trace-herrell-github-io",storageBucket:"trace-herrell-github-io.appspot.com",messagingSenderId:"530588887396"};n.a.initializeApp(i);var o=n.a.database().ref("contacts");e.default={name:"contact",data:function(){return{contact:{name:"",email:"",msg:"message me..."},submitted:!1}},methods:{addContact:function(){o.push(this.contact),this.contact.email="",this.contact.msg="",this.contact.name="",this.submitted=!0}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(18),n=a.n(s);e.default={name:"inputselect",props:["value","list","placeholder","textfield","resetOnSelected"],data:function(){return{current:0,isSelected:!1}},computed:{filtered:function(){var t=n.a.filter(this.list,function(t){return n.a.includes(n.a.toUpper(t[this.textfield]),n.a.toUpper(this.value))}.bind(this));return n.a.take(n.a.orderBy(t,this.textfield),15)},marked:function(){var t=new RegExp(this.value,"gi");return n.a.map(this.filtered,function(e){return e[this.textfield].replace(t,'<strong style="font-size: 1.1em">'+this.value+"</strong>")}.bind(this))},show:function(){return!!this.value}},methods:{updateValue:function(t){var e=t;e!==t&&(this.$refs.input.value=e),this.$emit("input",e)},setActive:function(t){this.current=t},activeClass:function(t){return{active:this.current===t}},hit:function(){this.filtered[this.current]&&this.show&&this.onHit(this.filtered[this.current])},up:function(){this.current>0?this.current--:-1===this.current?this.current=this.filtered.length-1:this.current=-1},down:function(){this.current<this.filtered.length-1?this.current++:this.current=-1},onHit:function(t){this.$emit("input",t[this.textfield]),this.$emit("selected",t),this.resetOnSelected&&this.reset()},reset:function(){this.current=0,this.$emit("input","")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(18),n=a.n(s),i=a(93),o=a.n(i),r=a(31);e.default={name:"inputSelectList",data:function(){return{lookup:[{name:"Trace",id:1},{name:"Simone",id:2},{name:"Nathan",id:3},{name:"Molly",id:4},{name:"John",id:5},{name:"bbbcc",id:6},{name:"ccceeeff",id:7},{name:"ggghhhiii",id:8},{name:"jjjkkklll",id:9},{name:"mmmmnnnooop",id:10},{name:"quvwxyz",id:11},{name:"Abby",id:12}],selectedName:""}},computed:a.i(r.b)(["people"]),methods:{onSelected:function(t){this.$store.dispatch("addPerson",t),this.lookup=n.a.filter(this.lookup,function(e){return t.id!==e.id})},remove:function(t){this.$store.dispatch("removePerson",t),this.lookup.push(t)}},components:{InputSelect:o.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navtitle",data:function(){return{title:"traceherrell.com",menuItems:["Resume","Portfolio","Contact","Components"],active:"active",open:!1}},methods:{toggle:function(){this.open=!this.open}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"portfolio",data:function(){return{msg:"Hey this is Portfolio   "}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(19),n=a.n(s);e.default={name:"resume",data:function(){return{}},directives:{scrollTo:n.a}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){t.exports=a.p+"static/img/j_search.fbdf001.png"},function(t,e,a){t.exports=a.p+"static/img/launchstudio.be16c9d.png"},function(t,e,a){t.exports=a.p+"static/img/trace_profile.06d1881.jpg"},function(t,e,a){var s=a(2)(a(40),a(100),null,null);t.exports=s.exports},function(t,e,a){a(49);var s=a(2)(a(41),a(99),"data-v-3e2d08a9",null);t.exports=s.exports},function(t,e,a){a(55);var s=a(2)(a(42),a(106),null,null);t.exports=s.exports},function(t,e,a){a(51);var s=a(2)(a(43),a(102),"data-v-52be0b3a",null);t.exports=s.exports},function(t,e,a){a(54);var s=a(2)(a(44),a(105),"data-v-6d8c9abe",null);t.exports=s.exports},function(t,e,a){a(52);var s=a(2)(a(45),a(103),null,null);t.exports=s.exports},function(t,e,a){a(48);var s=a(2)(a(46),a(98),null,null);t.exports=s.exports},function(t,e,a){a(53);var s=a(2)(a(47),a(104),"data-v-5c17c080",null);t.exports=s.exports},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"card",staticStyle:{width:"20rem"}},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:a(88),alt:"Launch Studio"}}),t._v(" "),s("div",{staticClass:"card-block"},[s("h4",{staticClass:"card-title"},[t._v("Bluetooth Launch Studio")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("A tool to complete the Bluetooth qualification process. This tool is only for bluetooth members so I can't link directly to the application.  I'll be putting together some screen shots soon to show more about this application.")]),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:"https://bluetooth.com"}},[t._v("Bluetooth.com")])])])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"card",staticStyle:{width:"20rem"}},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:a(87),alt:"John L Scott"}}),t._v(" "),s("div",{staticClass:"card-block"},[s("h4",{staticClass:"card-title"},[t._v("John L Scott")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("Search and find realestate listiings similar to Redfin and Zillow.  Since this is a public site you can click the button below to try it out yourself. ")]),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:"https://johnlscott.com/search"}},[t._v("JohnLScott.com")])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h3",[t._v("Here are a couple examples of some custom, reusable components I built with Vue")]),t._v(" "),a("div",{staticClass:"row well"},[a("div",{staticClass:"col-md-7"},[a("input-select-list")],1),t._v(" "),a("div",{staticClass:"col-md-5"})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7"}),t._v(" "),a("div",{staticClass:"col-md-5"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bluetooth"},[a("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-title"),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"}},[a("input",{ref:"input",staticClass:"form-control",attrs:{placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.updateValue(e.target.value)},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;t.down(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;t.up(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.hit(e)}]}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticStyle:{height:"auto",width:"100%","z-index":"10",top:"38px","background-color":"#ffffff",position:"absolute",overflow:"hidden","border-bottom-left-radius":"3px","border-bottom-right-radius":"3px","border-bottom":"solid 1px #EEEEEE","border-left":"solid 1px #EEEEEE","border-right":"solid 1px #EEEEEE"}},[a("ul",t._l(t.marked,function(e,s){return a("li",{class:t.activeClass(s),domProps:{innerHTML:t._s(e)},on:{mousedown:t.hit,mousemove:function(e){t.setActive(s)}}})}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-toggleable-md navbar-inverse bg-primary"},[a("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button"},on:{click:t.toggle}},[a("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",class:t.open?" show ":"",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav",on:{click:function(e){t.open=!1}}},t._l(t.menuItems,function(e){return a("router-link",{staticClass:"nav-item",attrs:{tag:"li",to:"/"+e,activeClass:"active"}},[a("a",{staticClass:"nav-link"},[t._v(t._s(e))])])}))])])},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"hero-unit header",attrs:{id:"header"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-6"},[a("h2",{staticClass:"heading"},[t._v("Hello, I'm Trace")]),t._v(" "),a("p",[t._v("A Full Stack Software Engineer from Seattle. Want to know more about me?")]),t._v(" "),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about-me",expression:"'#about-me'"}],staticClass:"btn btn-secondary",attrs:{href:"#"}},[t._v("Read More")]),t._v(" "),t._m(1)])])])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-responsive",attrs:{src:a(89),alt:"Profile Picture"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn btn-primary",attrs:{href:"https://www.linkedin.com/pub/trace-herrell/66/a84/423"}},[a("i",{staticClass:"fa fa-lg fa-linkedin"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section about-me",attrs:{id:"about-me"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"heading"},[t._v("About Me")]),t._v(" "),a("div",[a("p",[t._v("I have over a decade of experience building end to end solutions in a variety of verticals: healthcare, insurance, advertising, real estate, and most recently\n        "),a("span",{staticClass:"fa fa-bluetooth"}),t._v("IoT.  I’m strong in all areas of the stack but in last few years I’ve really began focusing more on the middle to front end with modern javascript technology like React, Vue, Vuex, Kendo UI, Angular, Node, Webpack, Babel.\n      ")])]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"50px"}},[a("p",[t._v("This is site is built with Vue single file componets, vue-router, webpack, babel.  It does not require a server and is being statically hosted on GitHubs GitPages.  Here's the link to the "),a("a",{attrs:{href:"https://github.com/traceherrell/traceherrell.github.io"}},[t._v(" source.")])]),t._v(" "),a("p")]),t._v(" "),a("div",{staticClass:"row interest"},[a("div",{staticClass:"col-md-3"},[a("h3",{staticClass:"sub-heading"},[a("i",{staticClass:"fa fa-lg fa-html5"}),t._v(" HTML/CSS3 ")]),t._v(" "),a("p",[t._v(" Implement responsive designs for a usable experience across desktop, tablet, and phone browsers. Sass, Less, HTML5")])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("h3",{staticClass:"sub-heading"},[a("i",{staticClass:"fa fa-lg fa-code"}),t._v(" Code")]),t._v(" "),a("p",[t._v("\n          Well versed in functional and OO programming. JavaScript, C#.")])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("h3",{staticClass:"sub-heading"},[a("i",{staticClass:"fa fa-lg fa-cloud"}),t._v(" API ")]),t._v(" "),a("p",[t._v("\n          Develop RESTful interfaces that incorporate stateless designs, self-descriptive messages and semantic URLs. Web API 2.0, NodeJs, Google Map, Facebook Social, AWS Cloud, OATH2")])]),t._v(" "),a("div",{staticClass:"col-md-3"},[a("h3",{staticClass:"sub-heading"},[a("i",{staticClass:"fa fa-lg fa-database"}),t._v(" Database ")]),t._v(" "),a("p",[t._v("\n          Skillful in creating conceptual models based on business logic and executing performance tuning on Databases. Relational, SQL Server, document storage, MongoDB, TSQL, Modeling, Query optimization.")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section resume",attrs:{id:"resume"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"heading"},[t._v("Resume")]),t._v(" "),a("ul",{staticClass:"timeline"},[a("li",{staticClass:"event"},[a("h3",{staticClass:"heading"},[t._v("Senior Software Engineer / Architect")]),t._v(" "),a("span",{staticClass:"month"},[a("i",{staticClass:"fa fa-calendar"}),t._v("April 2016 - ")]),t._v(" "),a("p",[t._v(" Employee of the quarter twice. ")]),t._v(" "),a("p",[t._v(" Using architectural patterns such as Separation of Concerns, Encapsulation, Caching, Dependency injection, MVC, MVVM design patterns I significantly improved the design of a project currently two years into development. Measured by performance, maintainability, and user feedback we able to finally launch a successful beta.\n            "),a("a",{attrs:{href:"http://www.bluetooth.com"}},[t._v("www.bluetooth.com")])])]),t._v(" "),a("li",{staticClass:"event"},[a("h3",{staticClass:"heading"},[t._v("Senior/Lead Software Engineer - Freelance")]),t._v(" "),a("span",{staticClass:"month"},[a("i",{staticClass:"fa fa-calendar"}),t._v("Decemmber 2014 - March 2016")]),t._v(" "),a("p",[t._v(" Complete responsive redesign and implementation for John L. Scott's public facing search application as we well as the back end broker tools. Built new front end using JavaScript MVVM frame works, React, Flux, bootstrap, and google api's (map, geography, social).\n            "),a("a",{attrs:{href:"http://www.johnlscott.com/search"}},[t._v("www.johnlscott.com")])])]),t._v(" "),a("li",{staticClass:"year"},[t._v("2015")]),t._v(" "),a("li",{staticClass:"event"},[a("h3",{staticClass:"heading"},[t._v("Senior Developer at Childrens Hospital")]),t._v(" "),a("span",{staticClass:"month"},[a("i",{staticClass:"fa fa-calendar"}),t._v("May 2012 – Oct 2014")]),t._v(" "),a("p",[t._v(" Designed/Implemented a new web application for the IPU, replacing the current white board manual process. Used Asp.net MVC 5. Razor, Bootstrap, JQuery and Entity Framework.")])]),t._v(" "),a("li",{staticClass:"event"},[a("h3",{staticClass:"heading"},[t._v("Senior Developer - Freelance")]),t._v(" "),a("span",{staticClass:"month"},[a("i",{staticClass:"fa fa-calendar"}),t._v("January 2012 – May 2012")]),t._v(" "),a("p",[t._v("Implemented a Cole and Weber designed Facebook application for Washington State Lottery. JQuery, CSS, .Net 4.0, ASP.Net, SQL server to build the “Group Play” application. ")])]),t._v(" "),a("li",{staticClass:"year"},[t._v("2012")]),t._v(" "),a("li",{staticClass:"event"},[a("h3",{staticClass:"heading"},[t._v("Software Engineer at Vertafore")]),t._v(" "),a("span",{staticClass:"month"},[a("i",{staticClass:"fa fa-calendar"}),t._v("October 2007 – January 2012")]),t._v(" "),a("p",[t._v("End to end full stack software engineer and scrum master. 6 major releases. 100,000+ users.")])]),t._v(" "),a("li",{staticClass:"event"},[a("h3",{staticClass:"heading"},[t._v("Software Developer at Childrens Hospital")]),t._v(" "),a("span",{staticClass:"month"},[a("i",{staticClass:"fa fa-calendar"}),t._v("Jan 2000 – March 2007")]),t._v(" "),a("p",[t._v(" Working closely with executive stake holders I built several web applications that focused on improving patient outcomes and reducing clinical administrative overhead.")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input-select",{attrs:{list:t.lookup,textfield:"name",placeholder:"Start typing to slelect a name",resetOnSelected:!0},on:{selected:t.onSelected},model:{value:t.selectedName,callback:function(e){t.selectedName=e},expression:"selectedName"}}),t._v(" "),a("section",{staticStyle:{"margin-top":"30px"}},[a("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.people,function(e){return a("li",{key:e},[a("h4",[t._v(" "+t._s(e.name)+" "),a("i",{staticClass:"fa fa-trash",on:{click:function(a){t.remove(e)}}})])])}))],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.submitted,expression:"!submitted"}]},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.contact.name},on:{input:function(e){e.target.composing||(t.contact.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.email,expression:"contact.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.contact.email},on:{input:function(e){e.target.composing||(t.contact.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Message")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.msg,expression:"contact.msg"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.contact.msg},on:{input:function(e){e.target.composing||(t.contact.msg=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:t.addContact}},[t._v("Submit")])]),t._v(" "),t._m(0)]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.submitted,expression:"submitted"}]},[t._v(" Thanks! ")])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myContact"},[t._v("Or just email me at "),a("a",{attrs:{href:"mailto:trace.herrell@gmail.com"}},[t._v(" trace.herrell@gmail.com ")])])}]}}]),[38]);