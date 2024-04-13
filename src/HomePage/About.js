// import React, { useEffect, useState } from 'react';
// import Pos56 from '../images/Aboutus.3gp'
// const About = () => {
//   const [isTriggered, setTriggered] = useState(false);

//   const handleScroll = () => {
//     const scrollY = window.scrollY || window.pageYOffset;
//     const triggerOffset = document.getElementById('about').offsetTop;

//     if (scrollY > triggerOffset - window.innerHeight / 2) {
//       setTriggered(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//     <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');

   
    
   
//     .wf-about-us {
//       opacity: 0;
//       transform: translateY(20px);
//       transition: opacity 0s ease, transform 1s ease;
//     }

//     .wf-about-us.triggered {
//       opacity: 1;
//       transform: translateY(0);
//     }

//     p{
//       font-size: 15px;
//       line-height: 1.8;
//     }
    
//     .primary-cta {
//       background: linear-gradient(to right,#ff6c26 0%,#ffa526 100%);
//       color: #ffffff;
//       padding: 10px 25px;
//       border-radius: 50px;
//       transition: 0.3s linear all;
//       box-shadow: none;
//       border: none;
//       text-transform: uppercase;
//       display: inline-block;
//     }
    
//     .primary-cta:hover {
//       background: #222222;
//       color: #ffffff;
//       transition: 0.3s linear all;
//     }
    
 
    
//     .wf-space{
//       padding: 60px 90px;
    
//     }
    
//     .wf-left-heading{
//       font-size: 50px;
//       text-transform: capitalize;
//       position: relative;
//       margin: 0;
//       font-weight: 400;
    
//     }
    
//     .wf-left-heading span{
     
//       z-index: 99;
//     }
    
//     .wf-left-heading:after {
//       position: absolute;
//       content: "";
//       height: 100%;
//       width: 33px;
//        left: 0;
//       top: 0;
//     }
    
//     .container{
//       display: flex;
//       z-index: 99;
      
//     }
    
//     .wf-about-us__image{
//       position: relative;
//     }
//     .wf-about-us__image:after {
//       position: absolute;
//       content: "";
//       left: 0px;
//       width: 1px;
//       height: 100%;
//       background: linear-gradient(to right,#ff6c26 0%,#ffa526 100%);
//       top: -0px;
//       bottom: 0;
//       padding: 8px;
//     }
//     .column {
//       flex: 0 0 50%;
//       position: relative;
//     }
//     .wf-about-us__image img{
//       z-index: 9;
//       position: relative;
//       display: block;
//     }
    
//     .wf-about-us__content {
//       padding-left: 35px;
//     }
    
//     .wf-about-us{
//       position: relative;
//     }
//     .wf-about-us:after {
//       position: absolute;
//       content: "";
      
//       background-size: cover;
//       background-repeat: no-repeat;
//       opacity: 0.4;
//       left: 0;
//       right: 0;
//       width: 100%;
//       height: 100%;
//       top: 30%;
//     }
    
//     @media (max-width: 1024px){
//       .wf-space {
//         padding: 60px 40px;
//       }
//       .wf-about-us__content p{
//         font-size: 13px;
//       }
    
//       .wf-left-heading {
//         font-size: 35px;
//       }
    
//       .wf-left-heading:after{
//         width: 25px;
//       }
//     }
    
//     @media (max-width: 767px){
    
//       .container{
//         display: block;
//       }
    
//       .wf-about-us__content {
//         padding-left: 0;
//         margin-left: -15px;
//         padding-top: 30px;
//       }
//     }`}</style>
//          <section id="about" className={`wf-about-us wf-space ${isTriggered ? 'triggered' : ''}`}>
//   <div className="container">
//     <div className="column">
//     <div className="wf-about-us__image">
//   <video
//     autoPlay
//     loop
//     muted
//     playsInline
//     width="100%"
//   >
//     <source src={Pos56} type="video/3gpp" />
//     Your browser does not support the video tag.
//   </video>
// </div>
//     </div>
//     <div className="column">
//       <div className="wf-about-us__content">
//         <h2 className="wf-left-heading">
//           <b>about <em>us</em></b>
//         </h2>
//         <p style={{color:'black'}}>
//         Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States, due to the quality of education at an affordable cost, 
//         without any hidden fees policy. In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were the only 
//         Institutes in Sehore & nearby six districts offering 
//         Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. 
//         The majority of the population is agriculture-dependent & the percentage of the population living at a low standard of living is 80.6. 
//         The growth rate recorded recently is 21.5%.
//         </p>
//         <a className="primary-cta" href="#">
//           know more
//         </a>
//       </div>
//     </div>
//   </div>
// </section>

//     </>
//   )
// }

// export default About
// import React from 'react'
// import { Link } from "react-router-dom";
// const About = () => {
//   return (
//     <>
//     <style>
//       {
//         `
//   .sectionClass {
//   padding: 20px 0px 50px 0px;
//   position: relative;
//   display: block;
// }

// .fullWidth {
//   width: 100% !important;
//   display: table;
//   float: none;
//   padding: 0;
//   min-height: 1px;
//   height: 90%;
//   position: relative;
// }


// .sectiontitle {
//   background-position: center;
//   margin: 30px 0 0px;
//   text-align: center;
//   min-height: 20px;
// }

// .sectiontitle h2 {
//   font-size: 30px;
//   color: #222;
//   margin-bottom: 0px;
//   padding-right: 10px;
//   padding-left: 10px;
// }


// .headerLine {
//   width: 160px;
//   height: 2px;
//   display: inline-block;
//   background: #101F2E;
// }


// .projectFactsWrap{
//     display: flex;
//   margin-top: 30px;
//   flex-direction: row;
//   flex-wrap: wrap;
// }


// #projectFacts .fullWidth{
//   padding: 0;
// }

// .projectFactsWrap .item{
//   width: 25%;
//   height: 100%;
//   padding: 50px 0px;
//   text-align: center;
// }

// .projectFactsWrap .item:nth-child(1){
//   background: rgb(16, 31, 46);
// }

// .projectFactsWrap .item:nth-child(2){
//   background: rgb(18, 34, 51);
// }

// .projectFactsWrap .item:nth-child(3){
//   background: rgb(21, 38, 56);
// }

// .projectFactsWrap .item:nth-child(4){
//   background: rgb(23, 44, 66);
// }

// .projectFactsWrap .item p.number{
//   font-size: 40px;
//   padding: 0;
//   font-weight: bold;
// }

// .projectFactsWrap .item p{
//   color: rgba(255, 255, 255, 0.8);
//   font-size: 18px;
//   margin: 0;
//   padding: 10px;
//   font-family: 'Open Sans';
// }


// .projectFactsWrap .item span{
//   width: 60px;
//   background: rgba(255, 255, 255, 0.8);
//   height: 2px;
//   display: block;
//   margin: 0 auto;
// }


// .projectFactsWrap .item i{
//   vertical-align: middle;
//   font-size: 50px;
//   color: rgba(255, 255, 255, 0.8);
// }


// .projectFactsWrap .item:hover i, .projectFactsWrap .item:hover p{
//   color: white;
// }

// .projectFactsWrap .item:hover span{
//   background: white;
// }

// @media (max-width: 786px){
//   .projectFactsWrap .item {
//      flex: 0 0 50%;
//   }
// }

// /* AUTHOR LINK */






//         // ////////////////////////////////////////////////////////////////////////////////////////
        
        
      
        
// .about-section{
//   position: relative;
//   padding: 120px 0 70px;
// }

// .about-section .sec-title{
//   margin-bottom: 45px;
// }

// .about-section .content-column{
//   position: relative;
//   margin-bottom: 50px;
// }

// .about-section .content-column .inner-column{
//   position: relative;
//   padding-left: 30px;
// }

// .about-section .text{
//   margin-bottom: 40px;
//   font-size: 16px;
//   line-height: 26px;
//   color: #848484;
//   font-weight: 400;
// }

// .about-section .list-style-one{
//   margin-bottom: 45px;
// }

// .about-section .btn-box{
//   position: relative;
// }

// .about-section .btn-box a{
//   padding: 15px 50px;
// }

// .about-section .image-column{
//   position: relative;
// }

// .about-section .image-column .text-layer{
//     position: absolute;
//     right: -110px;
//     top: 50%;
//     font-size: 325px;
//     line-height: 1em;
//     color: #ffffff;
//     margin-top: -175px;
//     font-weight: 500;
// }

// .about-section .image-column .inner-column{
//   position: relative;
//   padding-left: 120px;
//   padding-bottom: 125px;
// }

// .about-section .image-column .inner-column:before{
//   position: absolute;
//   left: -75px;
//   top: 65px;
//   height: 520px;
//   width: 520px;
//   background-image:url(https://i.ibb.co/fxJ1jtC/about-circle-1.png);
//   content: "";
// }

// .about-section .image-column .image-1{
//   position: relative;
// }

// .about-section .image-column .image-2{
//   position: absolute;
//   left: 0;
//   bottom: 0;
// }

// .about-section .image-column .image-2 img,
// .about-section .image-column .image-1 img{
//   box-shadow: 0 30px 50px rgba(8,13,62,.15);
// }

// .about-section .image-column .video-link{
//   position: absolute;
//   left: 70px;
//   top: 170px;
// }

// .about-section .image-column .video-link .link{
//   position: relative;
//   display: block;
//   font-size: 22px;
//   color: #191e34;
//   font-weight: 400;
//   text-align: center;
//   height: 100px;
//   width: 100px;
//   line-height: 100px;
//   background-color: #ffffff;
//   border-radius: 50%;
//   box-shadow: 0 30px 50px rgba(8,13,62,.15);
//   -webkit-transition: all 300ms ease;
//   -moz-transition: all 300ms ease;
//   -ms-transition: all 300ms ease;
//   -o-transition: all 300ms ease;
//   transition: all 300ms ease;
// }

// .about-section .image-column .video-link .link:hover{
//   background-color: #191e34;
//   color: #f
//  // ///////////////////////////////////////////////////////////////////////////
//   ` }
//     </style>
//       <section className="about-section">
//     <div className="container">
//       <div className="row">
//         <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
//           <div className="inner-column">
//             <div className="sec-title">
//               <span className="title" style={{fontSize:"40px",fontWeight:"bold"}}>About University</span>
              
//             </div>
//             <div className="text" style={{fontSize:"15px"}}>
//             Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States, due to the quality of education at an affordable cost, without any hidden fees policy. In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. The majority of the population is agriculture-dependent & the percentage of the population living at a low standard of living is 80.6. The growth rate recorded recently is 21.5%.


//             </div>
          
//             <Link to="/contact"><div className="btn-box">
//               <a href="#" className="theme-btn btn-style-one">
//                 Contact Us
//               </a>
//             </div></Link>
//           </div>
//         </div>

//         <div className="image-column col-lg-6 col-md-12 col-sm-12">
//           <div className="inner-column wow fadeInLeft">
//             <figure className="image-1">
//               <a href="#" className="lightbox-image" data-fancybox="images">
//                 <img  style={{width:"100%",height:"200px",marginTop:"20px"}} src="https://www.depaul.edu/virtual-campus-tour/PublishingImages/2021/ArtsLetters_01.jpg" alt="" />
//               </a>
//             </figure>
//             <figure className="image-2">
//               <a href="#" className="lightbox-image" data-fancybox="images" >
//                 <img style={{width:"70%"}} src="https://www.sssutms.co.in/cms/Areas/Website/Files/Gallery/1/SSSUTMS_Building(7).jpg" alt="" />
//               </a>
//             </figure>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//          <div id="projectFacts" className="sectionClass">
//     <div className="fullWidth eight columns">
//       <div className="projectFactsWrap ">
//         <div
//           className="item wow fadeInUpBig animated animated"
//           data-number={12}
//           style={{ visibility: "visible" }}
//         >
//           <i className="fa fa-briefcase" />
//           <p id="number1" className="number">
//             12
//           </p>
//           <span />
//           <p>Projects done</p>
//         </div>
//         <div
//           className="item wow fadeInUpBig animated animated"
//           data-number={55}
//           style={{ visibility: "visible" }}
//         >
//             <i className="fa fa-briefcase" />
//           <p id="number2" className="number">
//             55
//           </p>
//           <span />
//           <p>Happy clients</p>
//         </div>
//         <div
//           className="item wow fadeInUpBig animated animated"
//           data-number={359}
//           style={{ visibility: "visible" }}
//         >
//           <i className="fa fa-coffee" />
//           <p id="number3" className="number">
//             359
//           </p>
//           <span />
//           <p>Cups of coffee</p>
//         </div>
//         <div
//           className="item wow fadeInUpBig animated animated"
//           data-number={246}
//           style={{ visibility: "visible" }}
//         >
//           <i className="fa fa-camera" />
//           <p id="number4" className="number">
//             246
//           </p>
//           <span />
//           <p>Photos taken</p>
//         </div>
//       </div>
//     </div>
//   </div>

// </>  
//   )
// }

// export default About
// import React from 'react'

// const About = () => {
//   return (
// <>
// <style>{`
// .about {
//   padding: 130px 0;
// }

// .about .heading h2 {
//   font-size: 30px;
//   font-weight: 700;
//   margin: 0;
//   padding: 0;

// }

// .about .heading h2 span {
//   color: #F24259;
// }

// .about .heading p {
//   font-size: 15px;
//   font-weight: 400;
//   line-height: 1.7;
//   color: #999999;
//   margin: 20px 0 60px;
//   padding: 0;
// }

// .about h3 {
//   font-size: 25px;
//   font-weight: 700;
//   margin: 0;
//   padding: 0;
// }

// .about p {
//   font-size: 15px;
//   font-weight: 400;
//   line-height: 1.7;
//   color: #999999;
//   margin: 20px 0 15px;
//   padding: 0;
// }

// .about h4 {
//   font-size: 15px;
//   font-weight: 500;
//   margin: 8px 0;
// }

// .about h4 i {
//   color: #F24259;
//   margin-right: 10px;
// }`}</style>
// <section className="about" id="about">
//   <div className="container">
//     <div className="heading text-center">
//       <h2>
//         About
//         <span>Us</span>
//       </h2>
      
//     </div><br/><br/>
//     <div className="row">
//       <div className="col-lg-6">
//         <img
//           src="https://i.ibb.co/qpz1hvM/About-us.jpg"
//           alt="about"
//           className="img-fluid"
//           width="100%"
//         />
//       </div>
//       <div className="col-lg-6">
//         <h3>Sri Satya Sai University of Technology & Medical Science </h3>
//         <p>
//         Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States, due to the quality of education at an affordable cost, without any hidden fees policy. In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. 
//         The majority of the population is agriculture-dependent
//          & the percentage of the population living at a low standard of living is 80.6. 
//         The growth rate recorded recently is 21.5%.
//         </p>
//         <div className="row">
//           <div className="col-md-6">
//             <h4>
//               <i className="far fa-star" />
//               Awesome Design
//             </h4>
//           </div>
//           <div className="col-md-6">
//             <h4>
//               <i className="far fa-star" />
//               Creative Design
//             </h4>
//           </div>
//           <div className="col-md-6">
//             <h4>
//               <i className="far fa-star" />
//               Better Client Service
//             </h4>
//           </div>
//           <div className="col-md-6">
//             <h4>
//               <i className="far fa-star" />
//               Digital Marketing &amp; Branding
//             </h4>
//           </div>
//           <div className="col-md-6">
//             <h4>
//               <i className="far fa-star" />
//               Creative Design
//             </h4>
//           </div>
//           <div className="col-md-6">
//             <h4>
//               <i className="far fa-star" />
//               Speed And Flexibility
//             </h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// </>
//   )
// }

// export default About
import React from 'react'

const About = () => {
  function activeModal() {
    let modal = document.getElementById("about-modal");
    let switchButton = document.getElementById("modalSwitchButton");
  
    if (modal.classList.contains("active")) {
      modal.classList.remove("switched");
      switchButton.innerHTML = "Me contacter";
    }
  
    modal.classList.toggle("active");
  }
  
  function closeModal() {
    let modal = document.getElementById("about-modal");
    let switchButton = document.getElementById("modalSwitchButton");
  
    modal.classList.add("close");
  
    setTimeout(function () {
      modal.classList.remove("close");
      modal.classList.remove("switched");
      modal.classList.remove("active");
      switchButton.innerHTML = "Me contacter";
    }, 300);
  }
  
  function switchModal() {
    let modal = document.getElementById("about-modal");
    let switchButton = document.getElementById("modalSwitchButton");
    modal.classList.toggle("switched");
  
    if (modal.classList.contains("switched")) {
      switchButton.innerHTML = "Retour";
    } else {
      switchButton.innerHTML = "Me contacter";
    }
  }
  
  // Formulaire
  const formGroups = document.querySelectorAll(".form-group");
  formGroups.forEach((formGroup) => {
    const inputField = formGroup.querySelector("input, textarea");
  
    inputField.addEventListener("focus", () => {
      formGroup.classList.add("active");
    });
  
    inputField.addEventListener("blur", () => {
      if (inputField.value === "" && !inputField.classList.contains("filled")) {
        formGroup.classList.remove("active");
      }
    });
  
    // Vérifier si les champs ont déjà une valeur lors du chargement de la page
    if (inputField.value !== "") {
      inputField.classList.add("filled");
      formGroup.classList.add("active");
    }
  
    inputField.addEventListener("input", () => {
      if (inputField.value === "") {
        inputField.classList.remove("filled");
      } else {
        inputField.classList.add("filled");
      }
    });
  });
  
  return (
<>
<style>{`
@import url("https://fonts.googleapis.com/css2?family=Cabin+Condensed:wght@400;500;600;700&family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
	margin: 0;
	padding: 0;
}

:root {
	--color-light: #dae1e7;
}



.flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}

/* Header */

.header {
	position: relative;
	height: 100vh;
	width: 100%;
	background: linear-gradient(225deg, #112b3c 40%, #1c4b82 100%);
	display: flex;
	justify-content: center;
	align-items: center;
}

.header .content {
	position: relative;
	display: flex;
	height: 100%;
	width: 70%;
	justify-content: center;
	flex-direction: column;
	color: var(--color-light);
	max-width: 1000px;
}

.header .content span {
	background: linear-gradient(180deg, #f06449 30%, #ef3636 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.header .content p {
	color: #dae1e7;
	font-family: Cabin Condensed;
	font-size: 25px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
}

.header hr {
	width: 72px;
	height: 2px;
	flex-shrink: 0;
	background: var(--color-light);
	margin-top: 30px;
	margin-bottom: 30px;
}

.header .title {
	z-index: 1;
}

.header .logo {
	position: absolute;
	right: 0;
	z-index: 0;
}

.bbg {
	background: linear-gradient(225deg, #112b3c 30%, #1c4b82 100%);
	color: white;
}

.cbg {
	background: linear-gradient(225deg, #ef3636 0%, #f06449 100%);
	color: white;
}

.lbg {
	background: #dae1e7;
	color: #253e4e;
}

.dbg {
	background: #112b3c;
	color: white;
}

h1 {
	font-size: 70px;
	font-weight: 900;
}

h2 {
	font-size: 56px;
	font-weight: 900;
}

h3 {
	font-size: 42px;
	font-weight: 900;
}

h4 {
	font-size: 36px;
	font-weight: 700;
}

h5 {
	font-size: 26px;
	font-weight: 700;
}

h6 {
	color: rgba(239, 54, 54, 0.9);
	text-align: justify;
	font-family: Cabin Condensed;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: uppercase;
}

p {
	font-size: 16px;
}

/* Modal */

.modal {
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: 9999;
	transition: 0.3s;
	justify-content: center;
	align-items: center;
	display: none;
}

.modal.active {
	display: flex;
}

.modal.close {
	transform: translateY(-100%);
	opacity: 0;
}

.modal .groups {
	position: relative;
	height: 90vh;
	width: 90vw;
	max-width: 1100px;
	display: flex;
	justify-content: center;
}

.modal .groups .group-1,
.modal .groups .group-2 {
	position: relative;
	width: 50%;
	background: #dae1e7;
	box-shadow: 5px 5px 50px 0px rgba(0, 0, 0, 0.3);
	opacity: 0;
}

.modal.active .groups .group-1 {
	animation: groupe-1 0.5s ease-in-out both;
}

.modal.active .groups .group-2 {
	animation: groupe-2 0.5s 0.2s ease-in-out both;
}

@keyframes groupe-1 {
	0% {
		-webkit-transform: translateY(-100%);
		transform: translateY(-100%);
		opacity: 0;
	}

	100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes groupe-2 {
	0% {
		-webkit-transform: translateY(100%);
		transform: translateY(100%);
		opacity: 0;
	}

	100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		opacity: 1;
	}
}

.modal .groups .group-2 .close-section {
	position: absolute;
	width: 20px;
	height: 20px;
	right: -50px;
}

.about-picture {
	position: relative;
	height: 70%;
	width: 70%;
	margin-bottom: 9.5%;
	background-image: url(https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg);
	background-position: center;
	background-size: cover;
}

.frame-picture {
	position: absolute;
	top: 15.5%;
	left: 20%;
	height: 70%;
	width: 70%;
	border-radius: 0px 0px 20px 0px;
	border: 3px solid #ef3636;
}

.close-section .close-container {
	position: relative;
	margin: auto;
	width: 50px;
	height: 50px;
	cursor: pointer;
}

.close-section .close-container .leftright {
	height: 4px;
	width: 50px;
	position: absolute;
	margin-top: 24px;
	background-color: #dae1e7;
	border-radius: 2px;
	transform: rotate(45deg);
	transition: all 0.3s ease-in;
}

.close-section .close-container .rightleft {
	height: 4px;
	width: 50px;
	position: absolute;
	margin-top: 24px;
	background-color: #dae1e7;
	border-radius: 2px;
	transform: rotate(-45deg);
	transition: all 0.3s ease-in;
}

.close-section .close-container label {
	color: white;
	font-family: Helvetica, Arial, sans-serif;
	font-size: 0.6em;
	text-transform: uppercase;
	letter-spacing: 2px;
	transition: all 0.3s ease-in;
	opacity: 0;
}

.close-section .close-container .close {
	margin: 60px 0 0 0;
	position: absolute;
}

.close-section .close-container:hover .leftright {
	transform: rotate(-45deg);
	background-color: #ef3636;
}

.close-section .close-container:hover .rightleft {
	transform: rotate(45deg);
	background-color: #ef3636;
}

.close-section .close-container:hover label {
	opacity: 1;
}

.modal.active .groups .layer-1,
.modal.active .groups .layer-2 {
	position: absolute;
	width: 100%;
	height: 100%;
	transition: 0.8s;
}

.layer-content {
	padding: 90px;
}

.modal.active .groups .group-2 .layer-1 {
	z-index: 999;
}

.modal.active.switched .groups .group-2 .layer-1 {
	transform: translateX(-100%);
}

.modal.active .groups .layer-content p {
	text-align: justify;
}

/* Formulaire */

.form-group {
	position: relative;
	margin-bottom: 20px;
}

input,
textarea {
	font-family: Cabin Condensed;
	padding-top: 10px;
	padding-bottom: 10px;
	border: none;
	border-bottom: 1px solid #dae1e7;
	outline: none;
	font-size: 16px;
	background: transparent;
	color: #dae1e7;
	width: 100%;
	resize: vertical;
}

label {
	position: absolute;
	font-family: Cabin Condensed;
	top: 10px;
	left: 0px;
	pointer-events: none;
	transition: 0.2s ease all;
	color: #dae1e750;
}

input:focus + label,
textarea:focus + label,
input.filled + label,
textarea.filled + label {
	top: -10px;
	font-size: 12px;
	color: #dae1e730;
}

input:valid + label {
	top: -10px;
	font-size: 12px;
	color: #dae1e730;
}
`}</style>
  <div id="about-modal" className="modal">
    <div className="groups">
      <div className="group-1">
        <div className="layer-1 dbg flex-center">
          <div className="frame-picture" />
          <div className="about-picture" />
        </div>
      </div>
      <div className="group-2">
        <div className="close-section" onclick="closeModal();">
          <div className="close-container">
            <div className="leftright" />
            <div className="rightleft" />
            <label className="close">Fermer</label>
          </div>
        </div>
        <div className="layer-1 lbg flex-center">
          <div className="layer-content">
            <h3 style={{ marginBottom: 15 }}>Permettez-moi de me présenter</h3>
            <h6 style={{ marginBottom: 50 }}>Développeur web full stack</h6>
            <p style={{ marginBottom: 15 }}>
              Bonjour, je suis DEFAY Florian, développeur web indépendant
              passionné âgé de 20 ans. Depuis mon plus jeune âge, j'ai toujours
              été fasciné par les technologies et l'impact qu'elles peuvent
              avoir sur la vie des gens. En grandissant, j'ai développé un
              intérêt particulier pour la création de solutions digitales
              innovantes lors de mon BTS Systèmes Numériques en option
              Informatique et Réseau afin d’aider les entreprises à atteindre
              leurs objectifs.
            </p>
            <p style={{ marginBottom: 15 }}>
              Je suis constamment à l'affût des dernières tendances et
              technologies pour garantir que mes solutions sont à la pointe de
              l'innovation. J'aime explorer de nouveaux outils et frameworks
              pour améliorer mes compétences et trouver de nouvelles façons de
              créer des solutions plus efficaces pour mes clients.
            </p>
            <p style={{ marginBottom: 50 }}>
              Si vous cherchez à créer une solution digitale pour votre
              entreprise ou si vous avez des questions sur mes services,
              n'hésitez pas à me contacter pour échanger de votre projet. Je
              suis disponible et heureux de vous aider à atteindre vos objectifs
              avec des solutions sur mesure.
            </p>
            <div className="btn-arrow-2 light" onclick="switchModal();">
              <div id="modalSwitchButton">Me contacter</div>
              <svg
                width={24}
                height={8}
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-icon"
              >
                <path d="M15 4H4V1" stroke="#112b3c" />
                <path d="M14.5 4H3.5H0" stroke="#112b3c" />
                <path
                  d="M15.8536 4.35355C16.0488 4.15829 16.0488 3.84171 15.8536 3.64645L12.6716 0.464466C12.4763 0.269204 12.1597 0.269204 11.9645 0.464466C11.7692 0.659728 11.7692 0.976311 11.9645 1.17157L14.7929 4L11.9645 6.82843C11.7692 7.02369 11.7692 7.34027 11.9645 7.53553C12.1597 7.7308 12.4763 7.7308 12.6716 7.53553L15.8536 4.35355ZM15 4.5L15.5 4.5L15.5 3.5L15 3.5L15 4.5Z"
                  fill="#112b3c"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="layer-2 dbg  flex-center">
          <div className="layer-content">
            <h3 style={{ marginBottom: 15 }}>Parlez-moi de votre projet !</h3>
            <h6 style={{ marginBottom: 50 }}>Me contacter</h6>
            <div className="form-group">
              <input type="text" id="name" required="" />
              <label htmlFor="name">Nom</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" required="" />
              <label htmlFor="email">E-mail</label>
            </div>
            <div className="form-group" style={{ marginBottom: 50 }}>
              <textarea id="message" cols={30} rows={10} defaultValue={""} />
              <label htmlFor="message">Message</label>
            </div>
            <div className="btn-arrow linear-bg-1">
              Envoyer le message
              <svg
                width={24}
                height={8}
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-icon"
              >
                <path d="M15 4H4V1" stroke="white" />
                <path d="M14.5 4H3.5H0" stroke="white" />
                <path
                  d="M15.8536 4.35355C16.0488 4.15829 16.0488 3.84171 15.8536 3.64645L12.6716 0.464466C12.4763 0.269204 12.1597 0.269204 11.9645 0.464466C11.7692 0.659728 11.7692 0.976311 11.9645 1.17157L14.7929 4L11.9645 6.82843C11.7692 7.02369 11.7692 7.34027 11.9645 7.53553C12.1597 7.7308 12.4763 7.7308 12.6716 7.53553L15.8536 4.35355ZM15 4.5L15.5 4.5L15.5 3.5L15 3.5L15 4.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header */}
  <div className="header">
    <div className="content">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={636}
          height={617}
          viewBox="0 0 636 617"
          fill="none"
        >
          <path
            d="M628.164 270.574L626.73 267.431L624.877 264.517C606.606 235.831 580.994 220.116 558.409 206.26C522.386 184.159 493.945 166.713 485.487 91.5971L475.216 0.387912L404.296 58.7936C378.514 80.0194 359.845 106.845 350.301 136.366C340.926 165.36 340.986 195.647 350.45 221.647L350.709 222.344L350.978 223.03C351.257 223.736 351.536 224.432 351.825 225.129L337.848 238.238C329.799 245.777 322.716 253.864 316.659 262.358C310.751 254.033 303.867 246.106 296.057 238.696L282.19 225.526C282.509 224.731 282.837 223.935 283.146 223.129L283.425 222.443L283.674 221.757C293.029 195.856 293.118 165.678 283.933 136.794C274.539 107.273 256.099 80.4372 230.606 59.1915L159.546 0L149.186 91.806C140.678 167.2 112.505 184.726 76.8407 206.907C54.4558 220.822 29.0923 236.587 10.9911 265.302L9.14812 268.217L7.73351 271.35C0.730137 286.866 -1.53126 303.368 1.00908 320.406C3.28044 335.594 9.30751 350.932 19.429 367.284C24.5595 375.569 30.1981 383.556 36.2052 391.036C58.61 419.065 83.3958 437.665 107.365 455.658C128.325 471.384 148.13 486.244 165.255 507.032C167.705 510.026 170.076 512.94 172.357 515.745C177.289 521.822 181.762 527.422 186.085 532.833C196.426 545.783 205.362 556.973 213.83 566.273L214.637 567.158L215.474 568.004L227.837 580.347C251.516 603.98 282.987 617 316.469 617C349.952 617 381.422 603.98 405.102 580.347L417.924 567.526L418.651 566.8L419.358 566.034C427.876 556.784 436.872 545.674 447.272 532.803C451.735 527.293 456.338 521.603 461.418 515.407C463.819 512.482 466.21 509.608 468.501 506.853L468.521 506.833L468.541 506.813C485.925 485.945 506.009 471.035 527.278 455.25C551.526 437.257 576.6 418.647 599.274 390.628C605.321 383.178 611.019 375.211 616.22 366.936C626.51 350.534 632.627 335.176 634.948 319.948C637.568 302.781 635.287 286.17 628.164 270.574ZM574.02 340.508C569.746 347.311 565.243 353.567 560.531 359.366C522.795 405.995 472.277 424.565 430.247 475.004C427.697 478.058 425.246 481.022 422.895 483.886C405.79 504.724 393.377 520.768 382.688 532.375L369.876 545.176L356.447 555.859C355.391 556.525 354.316 557.152 353.23 557.759L349.942 559.479C348.836 560.027 347.721 560.544 346.585 561.031C346.027 561.28 345.459 561.519 344.891 561.747C335.796 565.428 326.133 567.268 316.469 567.268C306.199 567.268 295.928 565.189 286.354 561.031C285.218 560.544 284.103 560.027 282.997 559.479C281.891 558.932 280.795 558.356 279.709 557.759C278.623 557.152 277.547 556.525 276.491 555.859C271.72 552.875 267.207 549.324 263.063 545.176L250.7 532.833C240.15 521.235 227.896 505.212 211.02 484.384C208.689 481.519 206.269 478.555 203.768 475.501C162.276 425.093 112.356 406.582 75.1073 359.983C70.455 354.184 66.0119 347.938 61.7979 341.134C48.3491 319.411 47.4126 304.482 53.1408 291.8C89.134 234.717 181.871 246.394 198.687 97.376C237.56 129.762 247.821 174.402 236.812 204.888C200.999 295.56 128.385 299.12 207.085 366.388C247.91 329.308 252.054 297.897 261.738 274.732C274.708 287.045 327.288 341.801 254.196 413.495C255.232 414.728 256.527 416.29 258.042 418.13C259.456 419.861 260.931 421.522 262.465 423.103C266.539 427.281 270.992 430.901 275.714 433.945C276.302 434.323 276.9 434.701 277.498 435.059C278.484 435.656 279.48 436.223 280.486 436.76C281.313 437.217 282.15 437.655 282.987 438.073C284.232 438.68 285.487 439.266 286.743 439.803C296.256 443.872 306.438 445.911 316.629 445.911C321.351 445.911 326.073 445.473 330.725 444.598C331.911 444.379 333.076 444.13 334.242 443.842C334.561 443.772 334.889 443.693 335.208 443.613C336.354 443.325 337.5 443.006 338.625 442.668C339.442 442.419 340.259 442.161 341.076 441.882C342.022 441.564 342.959 441.216 343.895 440.858C347.89 439.326 351.785 437.436 355.511 435.188C357.304 434.114 359.048 432.96 360.761 431.727C365.892 428.027 370.653 423.601 374.897 418.448C376.671 416.3 378.175 414.49 379.35 413.117C305.551 341.602 358.808 286.807 371.949 274.483C381.691 297.609 385.846 328.99 427.059 365.981C506.746 298.633 433.335 295.192 397.262 204.649C386.174 174.203 396.625 129.573 435.985 97.1572C452.751 246.036 546.544 234.22 582.846 291.203C588.625 303.855 587.648 318.785 574.02 340.508Z"
            fill="url(#paint0_linear_443_46)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_443_46"
              x1={318}
              y1={0}
              x2={318}
              y2={617}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1C4B82" />
              <stop offset={1} stopColor="#1C4B82" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="title">
        <h1 style={{ marginBottom: 10 }}>
          About me <span>modal</span>
        </h1>
        <p>
          <span>Open</span> the modal to learn more about me
        </p>
        <hr />
        <div className="btn-arrow linear-bg-1" onclick="activeModal();">
          About me
          <svg
            width={24}
            height={8}
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow-icon"
          >
            <path d="M15 4H4V1" stroke="white" />
            <path d="M14.5 4H3.5H0" stroke="white" />
            <path
              d="M15.8536 4.35355C16.0488 4.15829 16.0488 3.84171 15.8536 3.64645L12.6716 0.464466C12.4763 0.269204 12.1597 0.269204 11.9645 0.464466C11.7692 0.659728 11.7692 0.976311 11.9645 1.17157L14.7929 4L11.9645 6.82843C11.7692 7.02369 11.7692 7.34027 11.9645 7.53553C12.1597 7.7308 12.4763 7.7308 12.6716 7.53553L15.8536 4.35355ZM15 4.5L15.5 4.5L15.5 3.5L15 3.5L15 4.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default About
