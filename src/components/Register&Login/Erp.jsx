// import React from "react";
// import { Link } from "react-router-dom";
// import "./Erp.css";
// import student from "../../images/student.png";
// import employee from "../../images/employee.png";
// import certificate from "../../images/ErpCertificate.png";
// import shop from "../../images/ErpShop.png";
// import library from "../../images/ErpLibrary.png";
// import adminn from "../../images/adminn.png";

// import OnlyHeader from "../../AdminComponent/OnlyHeader";

// function Cards() {
//   return (
//     <>
//       <OnlyHeader />
//       <div className="erpBG">
//         <div className="cardCont">
//           <meta charSet="utf-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <div className="container" style={{ marginTop: 65  }}>
//             <div className="row">
//               <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12" >
//                 <Link to="/erp/studentlogin" style={{ textDecoration: "none" }}>
//                   <div className="card" style={{marginTop:"20px"}}>
//                     <div className="card-body" >
//                       <div className="card-image" style={{ color: "#213661" }}>
//                         <img
//                           src={student}
//                           style={{
//                             width: "100px",
//                             height: "100px",
//                             textAlign: "center",
//                           }}
//                           alt="Girl in a jacket"
//                         />
//                       </div>

//                       <p className="card-text"> STUDENT LOGIN </p>
//                       <p
//                         style={{
//                           color: "black",
//                           fontSize: "14px",
//                           textAlign: "center",
//                         }}
//                       >
//                         Click here for Student Login
//                       </p>
//                     </div>
//                   </div>
//                 </Link>{" "}
//               </div>

//               <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
//                 <Link to="/erp/hodlogin" style={{ textDecoration: "none" }}>
//                   <div className="card" style={{marginTop:"20px"}}>
//                     <div className="card-body">
//                       <div className="card-image" style={{ color: "#213661" }}>
//                         <img
//                           src={employee}
//                           style={{
//                             width: "100px",
//                             height: "100px",
//                             textAlign: "center",
//                           }}
//                           alt="Girl in a jacket"
//                           width="500"
//                           height="600"
//                         />
//                       </div>

//                       <p className="card-text"> HOD LOGIN</p>
//                       <p
//                         style={{
//                           color: "black",

//                           fontSize: "14px",
//                           textAlign: "center",
//                         }}
//                       >
//                         Click here for Hod Login
//                       </p>
//                     </div>
//                   </div>
//                 </Link>{" "}
//               </div>
//               <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
//                 <Link to="/adminlogin" style={{ textDecoration: "none" }}>
//                   <div className="card" style={{marginTop:"20px"}}>
//                     <div className="card-body">
//                       <div className="card-image" style={{ color: "#213661" }}>
//                         <img
//                           src={adminn}
//                           style={{ width: "100px", height: "100px" }}
//                           alt="Girl in a jacket"
//                           width="500"
//                           height="600"
//                         />
//                       </div>

//                       <p className="card-text"> Admin Login</p>
//                       <p
//                         style={{
//                           color: "black",
//                           textDecoration: "none",
//                           fontSize: "14px",
//                           textAlign: "center",
//                         }}
//                       >
//                         Click here for Admin Login 
//                       </p>
//                     </div>
//                   </div>
//                 </Link>{" "}
//               </div>
//             </div>
//           </div>

//           <meta charSet="utf-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <link
//             rel="stylesheet"
//             href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//           />
//           <link
//             rel="stylesheet"
//             href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
//             integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
//             crossOrigin="anonymous"
//           />
//           <div className="container " style={{ marginTop: 10 }}>
//             <div className="row">
//               <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
//                 <Link to="https://sssutms.ac.in:2096/" target="_blank" style={{ textDecoration: "none" }}>
//                   <div className="card">
//                     <div className="card-body">
//                       <div className="card-image" style={{ color: "#213661" }}>
//                         <img
//                           src={library}
//                           style={{ width: "100px", height: "100px" }}
//                           alt="Girl in a jacket"
//                           width="500"
//                           height="600"
//                         />
//                       </div>

//                       <p className="card-text"> Web Mail login </p>
//                       <p
//                         style={{
//                           color: "black",
//                           textDecoration: "none",
//                           fontSize: "14px",
//                           textAlign: "center",
//                         }}
//                       >
//                         Click here for Web Mail  Login
//                       </p>
//                     </div>
//                   </div>
//                 </Link>{" "}
//               </div>
//               <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
//                 <Link to="" style={{ textDecoration: "none" }}>
//                   <div className="card">
//                     <div className="card-body">
//                       <div className="card-image" style={{ color: "#213661" }}>
//                         <img
//                           src={shop}
//                           style={{ width: "100px", height: "100px" }}
//                           alt="Girl in a jacket"
//                           width="500"
//                           height="600"
//                         />
//                       </div>

//                       <p className="card-text"> STORE DEPARTMENT LOGIN</p>
//                       <p
//                         style={{
//                           color: "black",
//                           textDecoration: "none",
//                           fontSize: "14px",
//                           textAlign: "center",
//                         }}
//                       >
//                         Click here for Store Department Login
//                       </p>
//                     </div>
//                   </div>
//                 </Link>{" "}
//               </div>

//               <div className="col-lg-4 col-sm-4 col-md-4 col-xl-4 col-xs-12">
//                 <Link to="" style={{ textDecoration: "none" }}>
//                   <div className="card">
//                     <div className="card-body">
//                       <div className="card-image" style={{ color: "#213661" }}>
//                         <img
//                           src={certificate}
//                           style={{ width: "100px", height: "100px" }}
//                           alt="Girl in a jacket"
//                           width="500"
//                           height="600"
//                         />
//                       </div>

//                       <p className="card-text"> CERTIFICATE LOGIN</p>
//                       <p
//                         style={{
//                           color: "black",
//                           textDecoration: "none",
//                           fontSize: "14px",
//                           textAlign: "center",
//                         }}
//                       >
//                         Click here for Certificate Login
//                       </p>
//                     </div>
//                   </div>
//                 </Link>{" "}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import student from "../../images/student.png";
import employee from "../../images/employee.png";
import certificate from "../../images/ErpCertificate.png";
import shop from "../../images/ErpShop.png";
import libb from "../../images/libb.png";
import adminn from "../../images/adminn.png";
import ERP from "../../images/ERP.jpg";
import Socialmedia from "../../HomePage/Socialmedia";
function Erp() {



  return (
    <>
    <Socialmedia/>
      <style>
        {
          `
          .containerrrr {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start; /* Align items to the top */
            gap: 20px;
            margin-top: 0;
            overflow-x: hidden; /* Hide horizontal overflow */
          }
     .row{
          width:100%;
          margin-left:50px;
       }
            
  .coll{
          width:320px;
          margin-top:40px;
         
        }
        
 .roww{
          margin-left:-50px;
        }

 .container{
          -webkit-transform-style: preserve-3d;
                  transform-style: preserve-3d;
          -webkit-perspective: 1000px;
                  perspective: 1000px;
        }
        
        .front,
        .back{
          background-size: cover;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
          border-radius: 10px;
          background-position: center;
          -webkit-backface-visibility: hidden;
                  backface-visibility: hidden;
          text-align: center;
          min-height: 280px;
          height: auto;
          border-radius: 10px;
          color: #fff;
          font-size: 1.5rem;
        }
        

.divhai {
  position: relative;
  width: 100%;
  height: 340px;
  margin-bottom: 20px;
  // max-width: 800px;
}

.divhai img {
  width: 100%;
   height: 100%;
    object-fit: cover;
     object-position: 100% 100%;
      opacity: 0.5;
       position: absolute;
        top: 50%;
        transform: translateY(-50%) ;
}

.divhai h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 50px;
font-family: poppins;
    margin-left: 330px; 
    font-weight: bold;
  }

        .hena{
          width: 100%;
           height: 100%;
            background-color: red;
        }
        .inner{
            -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
                    transform: translateY(-50%) translateZ(60px) scale(0.94);
            top: 50%;
            position: absolute;
            left: 0;
            width: 100%;
            padding: 2rem;
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            outline: 1px solid transparent;
            -webkit-perspective: inherit;
                    perspective: inherit;
            z-index: 2;
        }
    
  
        
        .container .front{
            -webkit-transform: rotateY(0deg);
                    transform: rotateY(0deg);
            -webkit-transform-style: preserve-3d;
                    transform-style: preserve-3d;
        }
        
        .front .inner p{
          font-size: 18px;
          text-align: center;
          text-transform: uppercase;
          font-weight: bold;
           margin-top: 18px;
          line-height: 1;
          color:black
        }
        
        .front .inner span{
        
          font-size: 13px;
          text-align: center;
          color:black
    }
      }

/* Media Queries */
@media (max-width: 768px) {
 

  .col,
  .coll {
    width: 100%;
    margin: 1rem 0;
  }

  .inner img {
    max-width: 100%;
    height: auto;
  }

  .front .inner p {
    font-size: 16px;
  }

  .front .inner span {
    font-size: 12px;
  }


  
}


/* For screens smaller than 768px (mobile devices) */
@media (max-width: 767px) {
  .roww {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:0px;
  }



}



@media (max-width: 480px) {


  .front .inner p {
    font-size: 14px;
  } 
  
.front .inner span {
    font-size: 10px;
  }

  .hena{
    width: 100%;
    height: 85%;
    background-color: red;
    margin-top:-95px
  }

  .divhai img{
    max-width: 100%;
    height: 57%;
    display: block;
    margin-top: -19%;
  }


  .divhai{
    width:100%;
  }

  .row{
    margin-top:-205px;
    margin-left:30px
  }


  .divhai h1{
    text-align:center;
    font-size:60px;
    color:white;
  }

  .roww{
    margin-top:187px;
    margin-left:14px;
  }

  
}
        }`
        }
      </style>

      <div className="containerrrr">
      <div className='divhai'>
        <div className="hena"></div>
        <img className="img" src={ERP} />
        <h1>SSSUTMS ERP</h1>
      </div>



      <div className="row">
        <div className="coll">
          <Link to="/erp/studentlogin" >
            <div className="container">
              <div className="front" >
                <div className="inner">

                  <img src={student} style={{ height: '150px', width: '180px', marginLeft: '10px', filter: `invert(42%) sepia(78%) saturate(1811%) hue-rotate(335deg) brightness(101%) contrast(107%)` }}></img>

                  <p>student login</p>
                  <span>Click here for student login</span>
                </div>
              </div>
            </div></Link>
        </div>


        <div className="coll">
          <Link to="/adminlogin">
            <div className="container">
              <div className="front" >
                <div className="inner">

                  <img src={adminn} style={{ height: '150px', width: '180px', marginLeft: '10px', filter: `invert(42%) sepia(78%) saturate(1811%) hue-rotate(335deg) brightness(101%) contrast(107%)` }}></img>
                  <p>admin login</p>
                  <span>Click here for ADMIN login</span>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div className="coll">
          <Link to="/erp/hodlogin">
            <div className="container">
              <div className="front" >
                <div className="inner">



                  <img src={employee} style={{ height: '150px', width: '180px', marginLeft: '10px', filter: `invert(42%) sepia(78%) saturate(1811%) hue-rotate(335deg) brightness(101%) contrast(107%)` }}></img>
                  <p>hod login</p>     <span>Click here for HOD login</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="coll">
          <Link to="">
            <div className="container">
              <div className="front" >
                <div className="inner">

                  <img src={libb} style={{ height: '150px', width: '180px', marginLeft: '10px', filter: `invert(42%) sepia(78%) saturate(1811%) hue-rotate(335deg) brightness(101%) contrast(107%)` }}></img>

                  <p>web mail login</p>  <span>Lorem ipsum</span>
                </div>
              </div>
            </div></Link>
        </div>


      </div>
      <div className="roww">
        <div className="row" >
          <div className="coll">
            <div className="container">
              <div className="front" >
                <div className="inner">

                  <img src={certificate} style={{ height: '150px', width: '180px', marginLeft: '10px', filter: `invert(42%) sepia(78%) saturate(1811%) hue-rotate(335deg) brightness(101%) contrast(107%)` }}></img>
                  <p>certificate</p>

                </div>
              </div>
            </div>
          </div>


          <div className="coll">
            <div className="container">
              <div className="front" >
                <div className="inner">

                  <img src={shop} style={{ height: '150px', width: '180px', marginLeft: '10px', filter: `invert(42%) sepia(78%) saturate(1811%) hue-rotate(335deg) brightness(101%) contrast(107%)` }}></img>
                  <p>store department login</p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>









    </>
  );
}

export default Erp;
