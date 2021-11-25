(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(1),a=s(6),l=s.n(a),r=s(5),n=s(7);var j=function(){return Object(c.jsx)(n.a,{children:Object(c.jsx)("div",{role:"navigation",children:Object(c.jsxs)("nav",{id:"mainNavbar",className:"navbar navbar-expand-lg fixed-top ",children:[Object(c.jsx)(r.a,{to:"#",className:"navbar-brand",children:" BH "}),Object(c.jsx)("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-label":"Toggle navigation","aria-expanded":"false",children:Object(c.jsx)("i",{className:"fas fa-bars ",children:" "})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navLinks",children:Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.a,{smooth:!0,activeClass:"active",to:"#",className:"nav-link",children:" HOME "})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.a,{smooth:!0,to:"#about",className:"nav-link",children:" ABOUT "})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.a,{smooth:!0,to:"#resume",className:"nav-link",children:" RESUME "})}),Object(c.jsxs)("li",{className:"nav-item",children:[Object(c.jsx)(r.a,{smooth:!0,to:"#blog",className:"nav-link",children:" BLOG "})," "]}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.a,{smooth:!0,to:"#contacts",className:"nav-link",children:" CONTACTS "})})]})})]})})})};var d=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("section",{className:"sidebar",children:Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("table",{style:{backgroundColor:"#FECE2E"},className:"table",children:Object(c.jsxs)("tbody",{children:[Object(c.jsx)("tr",{children:Object(c.jsx)("th",{className:"px-2 py-4",scope:"col",children:Object(c.jsx)("a",{href:"https://github.com/bahar-hosseini",className:"fab fa-github",target:"_blank",rel:"noreferrer"})})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{className:"px-2 py-4",scope:"col",children:Object(c.jsx)("a",{href:"https://www.linkedin.com/in/maryam-hosseini-163310192/",className:"fab fa-linkedin",target:"_blank",rel:"noreferrer",children:" "})})}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{className:"px-2 py-3",scope:"col",children:Object(c.jsx)("a",{href:"mailto:bahar.hosseini@gmail.com",className:"fas fa-envelope-square",rel:"noreferrer"})})})]})})})})})},o=s(18),b=s.n(o);var h=function(e){var t=e.children,s=Object(i.useRef)(null);return Object(i.useEffect)((function(){b()(Object(a.findDOMNode)(s.current)).animate("slow")}),[]),Object(c.jsx)("div",{ref:s,children:t})},x=s(3),O=function(){var e=Object(i.useState)(window.innerWidth>756),t=Object(x.a)(e,2),s=t[0],a=t[1],l=function(){a(window.innerWidth>756)};Object(i.useEffect)((function(){return window.addEventListener("resize",l),function(){return window.removeEventListener("resize",l)}}));var r=function(e,t,s){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(s,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return r.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,c=200-100*Math.random();this.isDeleting&&(c/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,c=500):(c=this.period,this.isDeleting=!0),setTimeout((function(){s.tick()}),c)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var s=e[t].getAttribute("data-type"),c=e[t].getAttribute("data-period");s&&new r(e[t],JSON.parse(s),c)}var i=document.createElement("style");i.type="text/css",i.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #FECE2E}",document.body.appendChild(i)},Object(c.jsx)("div",{children:s?Object(c.jsx)("h3",{href:"",className:"typewrite","data-period":"2000","data-type":'[ "A FULL-STACK SOFTWARE ENGINEER" ]',children:Object(c.jsx)("span",{class:"wrap"})}):Object(c.jsx)("h6",{href:"",className:"typewrite","data-period":"2000","data-type":'[ "A FULL - STACK SOFTWARE ENGINEER" ]',children:Object(c.jsx)("span",{class:"wrap"})})})};var m=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"row align-items-center mt-5 pt-5",children:[Object(c.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:Object(c.jsx)("div",{id:"headingGroup",className:" text-center  animate__animated animate__bounce",children:Object(c.jsxs)(h,{children:[Object(c.jsxs)("h2",{children:[" ",Object(c.jsx)("span",{children:" I'm "})," Bahar Hosseini"]})," "]})})}),Object(c.jsx)("div",{className:"col-lg-8 col-sm-6 col-md-6 mt-5",children:Object(c.jsx)("img",{className:"float-end homeBg ",src:"/images/web.gif",alt:"home page"})}),Object(c.jsx)("div",{id:"typewrite",className:"text-center my-3 py-3",children:Object(c.jsx)(O,{})})]})})};var u=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{id:"about",className:"about",children:Object(c.jsx)("div",{className:" container-fluid px-2 about-container py-3",children:Object(c.jsxs)("div",{className:"row align-items-center",children:[Object(c.jsx)("img",{className:"img-fluid col-lg-4 col-md-3 col-sm-2 profileBahar p-5",src:"/images/bahar.png",alt:" Home IMG "}),Object(c.jsx)("div",{className:"col-lg-8 col-sm-9",children:Object(c.jsx)("div",{className:" row text-center justify-content-start d-lg-inline-block animate__animated animate__bounce titleGroup ",children:Object(c.jsxs)("div",{className:"mb-5 titleGroup",children:[Object(c.jsxs)("h2",{className:"text-center text-light py-3 ",children:[" ",Object(c.jsx)("span",{children:"ABOUT"})," ME"]}),Object(c.jsx)("p",{className:"text-light lead ",children:"I am a passionate full-stack software engineer who loves solving real-world problems using software. I have experience working for small, mid-size and large companies and this experience helps me to look at problems from different angles. My goal is not only to grow as an individual but also help my team grow and succeed."}),Object(c.jsx)("hr",{className:"about-line text-center "}),Object(c.jsxs)("div",{className:"text-white row ",children:[Object(c.jsxs)("div",{className:"col ",children:[Object(c.jsx)("h4",{children:"Location"}),Object(c.jsx)("p",{children:"Ontario, Canada "})]}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("h4",{children:"Email"}),Object(c.jsx)("p",{children:"Bahar.Hosseini@gmail.com"})]})]})]})})})]})})})})};var p=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"bg-light py-3",children:Object(c.jsxs)("div",{className:" row text-center animate__animated animate__bounce titleGroup",children:[Object(c.jsxs)("h2",{children:[" ",Object(c.jsx)("span",{children:"S"}),"KILLS"]}),Object(c.jsx)("i",{className:"fas fa-magic "})]})}),Object(c.jsx)("div",{class:"",children:Object(c.jsxs)("div",{className:"row skillTable bg-skills p-lg-1",children:[Object(c.jsx)("div",{className:"container col-lg-6 table-responsive-lg p-3 ",children:Object(c.jsxs)("table",{className:"table table-hover table-sm mr-5",children:[Object(c.jsx)("thead",{class:"table-dark ",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Languages"}),Object(c.jsx)("th",{scope:"col",colspan:"6",children:"Frameworks / Libraries"})]})}),Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"JavaScript"}),Object(c.jsx)("td",{children:"React"}),Object(c.jsx)("td",{children:"Redux"}),Object(c.jsx)("td",{children:"Next.js"}),Object(c.jsx)("td",{children:"JQuery"}),Object(c.jsx)("td",{children:"TypeScript"}),Object(c.jsx)("td",{children:"Gatsby"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"NodeJS"}),Object(c.jsx)("td",{children:"ExpressJS"}),Object(c.jsx)("td",{children:"WebSockets"}),Object(c.jsx)("td",{children:"EJS"}),Object(c.jsx)("td",{})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"-"}),Object(c.jsx)("td",{children:"-"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"HTML & CSS"}),Object(c.jsx)("td",{children:"LESS"}),Object(c.jsx)("td",{children:"SASS/SCSS"}),Object(c.jsx)("td",{children:"Bootstrap"}),Object(c.jsx)("td",{children:"Material-UI"}),Object(c.jsx)("td",{children:"Semantic UI"})]})]})]})}),Object(c.jsx)("div",{className:"container col-lg-6 p-3 table-responsive",children:Object(c.jsxs)("table",{className:"table table-hover table-sm mr-5",children:[Object(c.jsx)("thead",{className:"table-dark ",children:Object(c.jsx)("tr",{children:Object(c.jsx)("th",{scope:"col ",colspan:"6",children:"Other Skills"})})}),Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"Linux"}),Object(c.jsx)("td",{children:"ubuntu"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"Docker"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"Git"}),Object(c.jsx)("td",{children:"GitHub"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"Heroku"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"cloud services: AWS"}),Object(c.jsx)("td",{children:"Lambda"}),Object(c.jsx)("td",{children:"S3"}),Object(c.jsx)("td",{children:"EC2"}),Object(c.jsx)("td",{children:"AWS API Gateway"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"Scrum"}),Object(c.jsx)("td",{children:"agile"}),Object(c.jsx)("td",{children:"waterfall"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]})]})]})}),Object(c.jsx)("div",{className:" container col-lg-6 p-3 table-responsive ",children:Object(c.jsxs)("table",{className:"table table-hover table-sm mr-3",children:[Object(c.jsx)("thead",{className:"table-dark ",children:Object(c.jsx)("tr",{children:Object(c.jsx)("th",{scope:"col ",colspan:"5 ",children:"Databases"})})}),Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"SQL"}),Object(c.jsx)("td",{children:"SQL Server"}),Object(c.jsx)("td",{children:"PostgreSQL"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"NoSQL"}),Object(c.jsx)("td",{children:"MongoDB"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]})]})]})}),Object(c.jsx)("div",{className:"container col-lg-6 p-3 table-responsive ",children:Object(c.jsxs)("table",{className:"table table-hover table-sm mr-3",children:[Object(c.jsx)("thead",{className:"table-dark ",children:Object(c.jsx)("tr",{children:Object(c.jsx)("th",{scope:"col",colspan:"5",children:"Automated Testing"})})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row ",children:"NodeJS & JavaScript"}),Object(c.jsx)("td",{children:"Mocha"}),Object(c.jsx)("td",{children:"Chai"}),Object(c.jsx)("td",{children:"Jasmine"})]})})]})})]})})]})};var g=function(){return Object(c.jsxs)("div",{id:"resume",children:[Object(c.jsx)("div",{className:"bg-light py-3 ",children:Object(c.jsxs)("div",{className:"text-center animate__animated animate__bounce titleGroup",children:[Object(c.jsxs)("h2",{className:"pb-2 ",children:[Object(c.jsx)("span",{children:"RE"}),"SUME"]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"btn text-center rounded-pill ",type:"submit ",name:"button ",children:Object(c.jsx)("a",{style:{color:"inherit"},href:"Bahar_Hosseini_Resume.pdf",download:!0,className:"far fa-file ",children:"  DOWNLOAD CV "})})})]})}),Object(c.jsx)("section",{children:Object(c.jsx)("div",{className:"",children:Object(c.jsxs)("div",{className:"row bgResume",children:[Object(c.jsx)("div",{className:"container col-lg-6 py-5 pr-5 pl-5",children:Object(c.jsxs)("table",{className:"table table-hover",children:[Object(c.jsx)("thead",{className:"EXP-EDU",children:Object(c.jsx)("tr",{children:Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("h3",{class:"text-center",children:"EDUCATION"})})})}),Object(c.jsx)("tbody",{className:"backgroundTable",children:Object(c.jsx)("tr",{children:Object(c.jsx)("div",{children:Object(c.jsx)("th",{scope:"row ",children:Object(c.jsxs)("ul",{className:"timeline ",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:"Master of Industrial Engineering"}),Object(c.jsx)("p",{children:"Science and Research, Tehran, Iran"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:"Bachelors of Industrial Engineering"}),Object(c.jsx)("p",{children:"Iran University of Science and Technology- Tehran, Iran"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:"# ",children:"Awesome Employers"}),Object(c.jsx)("a",{href:"# ",className:"float-right ",children:"1 April, 2014"}),Object(c.jsx)("p",{children:"Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh..."})]})]})})})})})]})}),Object(c.jsx)("div",{className:"container col-lg-6 py-5 pr-5",children:Object(c.jsxs)("table",{className:"table table-hover ",children:[Object(c.jsx)("thead",{className:"EXP-EDU ",children:Object(c.jsx)("tr",{children:Object(c.jsx)("th",{scope:"col",children:Object(c.jsx)("h3",{className:"text-center py-1",children:"EXPERIENCE"})})})}),Object(c.jsx)("tbody",{className:"backgroundTable",children:Object(c.jsx)("tr",{children:Object(c.jsx)("div",{children:Object(c.jsx)("th",{scope:"row ",children:Object(c.jsxs)("ul",{className:"timeline ",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:"Freelance"}),Object(c.jsx)("h6",{children:"21 March, 2014"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:"Project Manager"}),Object(c.jsx)("h6",{children:Object(c.jsx)("b",{children:"Pishro Cloud Computing - Tehran, Iran"})}),Object(c.jsx)("p",{children:"Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin..."})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:"Assistant Project Manager"}),Object(c.jsx)("h6",{children:Object(c.jsx)("b",{children:"Sharif ICT Innovation Center-Tehran, Iran"})}),Object(c.jsx)("p",{children:"Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin..."})]})]})})})})})]})})]})})})]})},v=s(19),N=(s(29),function(){var e=["/images/portfolio.jpg","/images/portfolio.jpg","/images/portfolio.jpg"];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"bg-light py-3",children:Object(c.jsxs)("div",{className:"text-center  animate__animated animate__bounce titleGroup",children:[Object(c.jsxs)("h2",{children:[" ",Object(c.jsx)("span",{children:"MY"})," PORTFILIO"]}),Object(c.jsx)("h1",{children:Object(c.jsx)("i",{className:"fas fa-inbox "})})]})}),Object(c.jsx)("div",{className:"bgPortfolio container-fluid",children:Object(c.jsx)("div",{className:"align-self-center text-center",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{id:"typewrite",className:"text-center titleGroup p-5",children:Object(c.jsx)("h3",{children:"Click on a product to learn more"})}),Object(c.jsxs)(v.Slide,{easing:"ease",className:"slider",children:[Object(c.jsx)("div",{className:"each-slide",children:Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(e[0],")"),borderRadius:"30px"}})}),Object(c.jsx)("div",{className:"each-slide",children:Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(e[1],")"),borderRadius:"30px"}})}),Object(c.jsx)("div",{className:"each-slide",children:Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(e[2],")"),borderRadius:"30px"}})})]})]})})})]})});var f=function(){return Object(c.jsxs)("div",{id:"blog",children:[Object(c.jsx)("div",{className:"bg-light py-3",children:Object(c.jsxs)("div",{className:"text-center  animate__animated animate__bounce titleGroup",children:[Object(c.jsxs)("h2",{children:[" ",Object(c.jsx)("span",{children:"BLOG "})," POSTS"]}),Object(c.jsx)("h6",{children:"LATEST ARTICLES"}),Object(c.jsx)("h1",{children:Object(c.jsx)("i",{className:"fas fa-comments pt-2 "})})]})}),Object(c.jsxs)("div",{className:"container-fluid text-center py-5",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-lg-4 col-md-10",children:[Object(c.jsx)("img",{className:"img-fluid",src:"/images/cloud.png",alt:"blog1 "}),Object(c.jsx)("p",{className:"py-3 ",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio molestiae possimus rem, aut provident inventore reprehenderit saepe eius soluta.0"})]}),Object(c.jsxs)("div",{className:"col-lg-4 col-md-10 ",children:[Object(c.jsx)("img",{className:"img-fluid  blogImage",src:"/images/head-phone.jpg",alt:"blog2"}),Object(c.jsx)("p",{className:"py-3 ",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio molestiae possimus rem, aut provident inventore reprehenderit saepe eius soluta.0"})]}),Object(c.jsxs)("div",{className:"col-lg-4 col-md-10 ",children:[Object(c.jsx)("img",{className:"img-fluid ",src:"/images/cloud.png",alt:"blog3 "}),Object(c.jsx)("p",{className:"py-3 ",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio molestiae possimus rem, aut provident inventore reprehenderit saepe eius soluta.0"})]})]}),Object(c.jsx)("button",{className:"btn btn-warning rounded-pill align-self-center mb-2",type:"submit ",name:"button ",children:"SEE ALL POSTS"})]})]})},y=s(20),w=s.n(y),S=s(4);var E=function(){var e=Object(i.useState)(!1),t=Object(x.a)(e,2),s=t[0],a=t[1],l=Object(i.useState)(""),r=Object(x.a)(l,2),n=r[0],j=r[1],d=Object(i.useState)(""),o=Object(x.a)(d,2),b=o[0],h=o[1],O=Object(i.useState)(""),m=Object(x.a)(O,2),u=m[0],p=m[1],g=function(e){e.preventDefault();var t={email:n,subject:b,message:u};!function(e){e.email?e.subject?e.message||Object(S.b)("please fill out message field"):Object(S.b)("please fill out subject field"):Object(S.b)("please fill out email field")}({email:n,subject:b,message:u}),w.a.post("/",JSON.stringify(t),{headers:{"Content-Type":"application/json"}}).then((function(e){var s=e.data,c=e.status;console.log(s),200===c&&""!==t.email?S.b.success("successfully sent",{closeOnClick:!0}):S.b.error("Sorry your message wasn't sent"),j(""),h(""),p("")})).catch((function(e){S.b.error("Sorry your message wasn't sent"),console.log(e)}))};return Object(c.jsxs)("div",{id:"contacts",children:[Object(c.jsx)("div",{className:"bg-light py-3",children:Object(c.jsxs)("div",{className:" row text-center d-lg-block animate__animated animate__bounce titleGroup",children:[Object(c.jsxs)("h2",{children:[" ",Object(c.jsx)("span",{children:"CONTACT"})," ME"]}),Object(c.jsx)("h6",{children:"GET IN TOUCH"}),Object(c.jsx)("i",{className:"fas fa-envelope "})]})}),Object(c.jsxs)("div",{className:" bg-dark rounded-3",children:[Object(c.jsx)("form",{action:"/",method:"POST",className:"text-center row justify-content-center pl-5 pr-5 pt-5",onSubmit:g,children:Object(c.jsxs)("div",{className:"form-group col-lg-6 col-md-6 col-sm-6",children:[Object(c.jsx)("label",{for:"email"}),Object(c.jsx)("input",{className:"form-control ",id:"emailID ",type:"text ",name:"email",placeholder:"Email",value:n,onChange:function(e){return j(e.target.value)}}),Object(c.jsx)("label",{for:"col-form-label "}),Object(c.jsx)("input",{className:"form-control ",id:"subjectID ",type:"text ",name:"subject",placeholder:"Subject",value:b,onChange:function(e){return h(e.target.value)}}),Object(c.jsx)("label",{for:"inputMessage "}),Object(c.jsx)("textarea",{className:"form-control mb-3",placeholder:"Message ",name:"message",rows:"8 ",cols:"80 ",value:u,onChange:function(e){return p(e.target.value)}}),Object(c.jsx)("button",{className:"btn btn-warning rounded-pill px-5 mb-2 ",type:"submit",name:"button",onMouseOver:function(){a(!0)},onClick:g,style:{backgroundColor:s?"black":"gold"},children:"Send"})]})}),Object(c.jsxs)("footer",{className:"col-xl-12 text-center footer",children:[Object(c.jsx)("a",{style:{color:"inherit"},href:"https://github.com/bahar-hosseini",className:"fab fa-github",target:"_blank",rel:"noreferrer",children:" "}),Object(c.jsx)("a",{style:{color:"inherit"},href:"https://www.linkedin.com/in/maryam-hosseini-163310192/",className:"fab fa-linkedin",target:"_blank",rel:"noreferrer",children:" "}),Object(c.jsx)("a",{style:{color:"inherit"},href:"mailto:bahar.hosseini@gmail.com",className:"fas fa-envelope-square",target:"_blank",rel:"noreferrer",children:" "})]}),Object(c.jsx)("p",{className:"text-white text-center",children:Object(c.jsx)("small",{children:"\xa9 copyright 2021 designed with \ud83e\udde1 by BAHAR"})}),Object(c.jsx)(S.a,{}),Object(c.jsx)("br",{})]})]})};var k=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(d,{}),Object(c.jsx)(m,{}),Object(c.jsx)(u,{}),Object(c.jsx)(p,{}),Object(c.jsx)(N,{}),Object(c.jsx)(g,{}),Object(c.jsx)(f,{}),Object(c.jsx)(E,{})]})};s(48),s(49);l.a.render(Object(c.jsx)(k,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.ff72958c.chunk.js.map