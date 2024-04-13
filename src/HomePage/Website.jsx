import React, { useEffect,useState} from "react";
import SSSLOGOALL from "../images/bottom-logo-2023.png";
import "./Website.css";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import SliderRequiter from "./SliderRequiter";
import About from '../HomePage/About';
import Facilities from '../HomePage/Facilities';
import sacn from '../images/scan.jpeg';
import Our from '../HomePage/Our';
import PosI from '../images/Event1.png';
import PosI1 from '../images/Event5.png';
import PosI2 from '../images/Event14.png';
import PosI3 from '../images/Event3.png'
import PosI4 from '../images/Event8.png';
import PosI5 from '../images/Event8.png';
import PosI6 from '../images/Hai.png'
import PosI7 from '../images/Event11.png';
import PosI8 from '../images/Event3.png';
import PosI9 from '../images/Event2.png';
import PosI10 from '../images/Event7.png';
import logo from '../images/SSSUTMS_Logo2-removebg-preview.png';
import PosI11 from '../images/Event14.png'
import PosI12 from '../images/lAB.png';
import PosI13 from '../images/library.png';
import PosI14 from '../images/123.png';
import PosI15 from '../images/DSC_0031.png';

// import logoo from "../images/logoo.png"
import Counter from "./Counter";
import Imp from '../images/IMG_00011_page-0001.jpg'
// import Whatsapplogo from '../images/whatsapp.png'
import Off from '../images/office_Order_page-0001.jpg'
import Not from '../images/IMG_page-0001.jpg'
import ex from '../images/Notice_Copy_page-0001.jpg'
const Website = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  const [isOpen12, setIsOpen12] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };
  const handleMouseEnter3 = () => {
    setIsOpen3(true);
  };

  const handleMouseLeave3 = () => {
    setIsOpen3(false);
  };
  const handleMouseEnter4 = () => {
    setIsOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setIsOpen4(false);
  };
  const handleMouseEnter5 = () => {
    setIsOpen5(true);
  };

  const handleMouseLeave5 = () => {
    setIsOpen5(false);
  };

  const handleMouseEnter8 = () => {
    setIsOpen8(true);
  };

  const handleMouseLeave8 = () => {
    setIsOpen8(false);
  };

  const handleMouseEnter9 = () => {
    setIsOpen9(true);
  };

  const handleMouseLeave9 = () => {
    setIsOpen9(false);
  };
  const handleMouseEnter10 = () => {
    setIsOpen10(true);
  };

  const handleMouseLeave10 = () => {
    setIsOpen10(false);
  };

  const handleMouseEnter12 = () => {
    setIsOpen12(true);
  };

  const handleMouseLeave12 = () => {
    setIsOpen12(false);
  };
  
  // Global variables
  let element;

  // Detect onclick event
  useEffect(() => {
    if (window.matchMedia("(max-width: 920px)").matches === false) {
      $(".ham").on("click", function () {
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "99");
      });

      $(".close").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });

      $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });
    } else {
      $(".ham").on("click", function () {
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "9");
      });

      $(".close").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });

      $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });
    }
  }, []);

  // Scroller Nav
  window.onscroll = function () {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("nav").addClass("fixed_nav");
    } else {
      $("nav").removeClass("fixed_nav");
    }
  };

  // Detect ESC Key Pressed
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      if ($(".overlay").css("opacity") === "1") {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      }
    }
  };

  // Dropdown
  $(".dropdown").click(function () {
    if ($(this).children("aside").is(":hidden")) {
      $(this).children("aside").show("slow");
      $(this).children("a").css("color", "var(--white)");
    } else {
      $(this).children("aside").hide("slow");
      $(this).children("a").css("color", "var(--lite)");
    }
  });

  // Global variables
  let slidestoshow, arrowmark;
  if (window.matchMedia("(max-width: 920px)").matches === false) {
    slidestoshow = 4;
    arrowmark = true;
  } else {
    slidestoshow = 1;
    arrowmark = false;
  }



  return (
    <>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/*GOOGLE FONTS*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;400;500;600;700;800;900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      {/*PLUGIN*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
      />
      {/*TOP MENU*/}
      {/* <menu className="top_menu flex">
        <section className="flex_content">
          <a href="emailto:info@lilliovi.com">
            <i className="fa fa-envelope-o" />
            SSSUTMS.AC.IN
          </a>
          <a href="tel:1234567890">
            <i className="fa fa-headphones" />
            +91-07562-292201
          </a>
          <Link to="/Epravesh/Student/Register">
          <a style={{ color: 'whitesmoke', animation: 'blink 1s infinite' }}>
            E-Pravesh

          </a>
          </Link>

          <Link to="/entrance/form">
            <a style={{ color: 'whitesmoke' }}>Entrance Exam</a>
          </Link>
        </section>
        <section className="flex_content"></section>
      </menu> */}

      {/*NAV*/}
      <>
      <style>{`
        .navbar {
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
        }
        // .navbar-brand{
        //   pading-right: 80px;
        // }
        .navbar .navbar-brand img {
          max-width: 100px;
        }
        .navbar .navbar-nav .nav-link {
          color: #000;
        }
        @media screen and (min-width: 1024px) {
          .navbar {
            letter-spacing: 0.1em;
          }
          .navbar .navbar-nav .nav-link {
            padding: 0.5em 1em;
          }
          .search-and-icons {
            width: 30%;
          }
          .search-and-icons form {
            flex: 1;
          }
        }
        @media screen and (min-width: 768px) {
          .navbar .navbar-brand img {
            max-width: 4em;
          }
          .navbar .navbar-collapse {
            display: flex;
            flex-direction: column-reverse;
            align-items: flex-end;
          }
          .search-and-icons {
            display: flex;
            align-items: center;
          }
        }
        .search-and-icons form input {
          border-radius: 0;
          height: 2em;
          background: #fff
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='grey' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E")
            no-repeat 95%;
        }
        .search-and-icons form input:focus {
          background: #fff;
          box-shadow: none;
        }
        .search-and-icons .user-icons div {
          padding-right: 1em;
        }
        .contact-info p,
        .contact-info a {
          font-size: 0.7em;
          padding-right: 2em;
          // color: grey;
        }
        .contact-info a {
          padding-right: 0;
        }
        .small-font {
          font-size: 0.8rem; /* Adjust the size as needed */
          font-weight:bolder;

        }
     .bull{
          list-style-type:disc
        }
    @import url('https://fonts.googleapis.com/css2?family=Basic&family=Doppio+One&display=swap')
        
      `}</style>
      <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
        <div className="container-xl">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="contact-info d-md-flex">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>Academics</b>
                  </a>
                  <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                    <a className="dropdown-item" href="#">
                      {" "}
                      <b style={{ color: "black" }}>Academic Calendar</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>Study Materials</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>Scholarship</b>
                    </a>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b> Schools & Department</b>
                  </a>
                  <div
                    className={`dropdown-menu ${isOpen2 ? "show" : ""}`}
                    style={{ width: "200%", marginLeft: "-60px" }}
                  >
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        {" "}
                        Department Of Engineering & Technology{" "}
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        Department Of Computer Science & Application
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        Department Of Mathematics & Computing
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        {" "}
                        Department Of Science & Life Sciences
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        Department Of Polytechnic
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        {" "}
                        Department Of Humanities & Language
                      </b>{" "}
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Education & Physical Education
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Management</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Hospitality Management
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Design</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Planning & Architecture
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Commerce</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Law</b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Agriculture</b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Pharmacy</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Nursing</b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Ayurveda & Siddha Studies (BAMS)
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Homeopathy (BHMS)
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>School Of Paramedical</b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        School Of Vocational & Bridge Learning
                      </b>
                    </a>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>UG Department</b>
                  </a>
                  <div
                    className={`dropdown-menu ${isOpen3 ? "show" : ""}`}
                    style={{
                      width: "950%",
                      marginLeft: "-498px",
                      height: "80vh",
                      //  backgroundColor: "aliceblue",
                    }}
                  >
                    <div style={{ marginLeft: "20px" }}>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}> </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF ENGINEERING & TECHNOLOGY
                          </span>
                          <ul className="bull">
                            <li>Aeronautical Engineering</li>
                            <li>Chemical Engineering</li>
                            <li> Civil Engineering</li>
                            <li> Computer Science Engineering</li>
                            <li>Electrical And Electronics Engineering</li>
                            <li> Eletrical Engineering</li>
                            <li> Electronics And Communication Engineering</li>
                            <li> Information Technology</li>
                            <li> Mechanical Engineering</li>
                            <li> Mining Engineering</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF COMPUTER SCIENCE & APPLICATION{" "}
                          </span>
                          <ul className="bull">
                            <li> Bachelor of Computer Application (B.C.A) </li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF POLYTECHNIC
                          </span>
                          <ul className="bull">
                            <li> Computer Science Engineering </li>
                            <li>Electrical Engineering</li>
                            <li> Civil Engineering</li>
                            <li>Mechanical Engineering </li>
                            <li>Chemical Engineering</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            DEPARTMENT OF MATHEMATICS AND COMPUTING SCIENCES
                          </span>
                          <ul className="bull">
                            <li> Bachelor Of Science (B.Sc.) In Mathematics</li>
                            <li>
                              {" "}
                              Bachelor Of Science (B.Sc.) In Computer
                              Application
                            </li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF LAW
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Law</li>
                          </ul>
                        </b>
                      </a>
                    </div>

                    <div style={{ marginLeft: "36%", marginTop: "-570px" }}>
                      <a
                        className="dropdown-item"
                        href="#"
                        style={{ marginTop: "125px" }}
                      >
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF SCIENCE AND LIFE SCIENCES
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Science (B.Sc.)in Biology </li>
                            <li>Bachelor Of Science (B.Sc.)in Biochemistry</li>
                            <li>
                              {" "}
                              Bachelor Of Science (B.Sc.) in Microbiology
                            </li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF COMMERCE
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Commerce (B.Com.)</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF HUMANITIES AND LIFE SCIENCES
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Arts (B.A.)</li>
                            <li>Bachelor Of Arts With Computer Application</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF PHARMACY
                          </span>
                          <ul className="bull">
                            <li> Bachelor Of Pharmacy</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF NURSING
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Science (B.Sc) in Nursing</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF AYURVEDA AND SIDDHA STUDIES
                          </span>
                          <ul className="bull">
                            <li>B.A.M.S</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            SCHOOL OF HOMEOPATHY
                          </span>
                          <ul className="bull">
                            <li>B.H.M.S</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            SCHOOL OF PARAMEDICAL
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Physiotherapy (BPT)</li>
                            <li>Bachelors In Medical Lab Technology (BMLT)</li>
                            <li>Diploma In Medical Lab Technology (DMLT)</li>
                          </ul>
                        </b>
                      </a>
                    </div>
                    <div style={{ marginLeft: "65%", marginTop: "-417px" }}>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF EDUCATION & PHYSICAL EDUCATION
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Education(B.Ed.)</li>
                            <li>
                              Bachelor Of Arts & Bachelor Of Education (BA &
                              B.Ed.)
                            </li>
                            <li>Bachelor Of Physical Education(B.P.Ed.)</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            SCHOOL OF MANAGEMENT
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Business Administration (BBA)</li>
                          </ul>
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF HOSPITALITY MANAGEMENT{" "}
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Hotel Management and Catering</li>
                          </ul>
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            SCHOOL OF DESIGN AND ARCHITECTURE
                          </span>
                          <ul className="bull">
                            <li>
                              Bachelor Of Design (B.Des in Industrial Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Communication Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Textile Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Interior Design)
                            </li>
                            <li>
                              Bachelor Of Design (B.Des in Product Design)
                            </li>
                          </ul>
                        </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF PLANNING & ARCHITECTURE
                          </span>
                          <ul className="bull">
                            <li>Bachelor Of Architecture (B.Arch)</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            School Of Vocational & Bridge Learning
                          </span>
                        </b>
                      </a>
                    </div>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>PG Department</b>
                  </a>
                  <div
                    className={`dropdown-menu ${isOpen4 ? "show" : ""}`}
                    style={{
                      width: "670%",
                      marginLeft: "-400px",
                      height: "100vh",
                      // backgroundColor: "aliceblue",
                    }}
                  >
                    <div style={{ marginLeft: "25px" }}>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}> </b>
                      </a>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF ENGINEERING & TECHNOLOGY
                          </span>
                          <ul className="bull">
                            <li>Computer Science and Engineering</li>
                            <li>Computer Technology & Applications</li>
                            <li>Digital Communication</li>
                            <li>Electrical Power System</li>
                            <li>Industrial Design</li>
                            <li>Information Technology</li>
                            <li>Power Electronics</li>
                            <li>Software Engineering</li>
                            <li>Structural Design</li>
                            <li>Thermal Engineering</li>
                            <li>VLSI</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF COMPUTER SCIENCE & APPLICATION{" "}
                          </span>
                          <ul className="bull">
                            <li>Master of Computer Application (M.C.A) </li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            DEPARTMENT OF MATHEMATICS AND COMPUTING SCIENCES
                          </span>
                          <ul className="bull">
                            <li> Master Of Science (M.Sc.) In Mathematics</li>
                            <li>
                              {" "}
                              Master Of Science (M.Sc.) In Computer Application
                            </li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            DEPARTMENT OF SCIENCE AND LIFE SCIENCES
                          </span>
                          <ul className="bull">
                            <li>Master Of Science (M.Sc.)in Biology </li>
                            <li>Master Of Science (M.Sc.)in Biochemistry</li>
                            <li> Master Of Science (M.Sc.) in Microbiology</li>
                          </ul>
                        </b>
                      </a>
                    </div>
                    <div style={{ marginLeft: "55%", marginTop: "-385px" }}>
                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF COMMERCE
                          </span>
                          <ul className="bull">
                            <li>Master Of Commerce (M.Com.)</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF HUMANITIES AND LIFE SCIENCES
                          </span>
                          <ul className="bull">
                            <li>Master Of Arts (M.A.) in Hindi</li>
                            <li>Master Of Arts (M.A.) in English</li>
                            <li>Master Of Arts (M.A.) in History</li>
                            <li>Master Of Arts (M.A.) in Political Science </li>
                            <li>Master Of Arts (M.A.) in Sociology</li>
                            <li>Master Of Arts (M.A.) in Psychology</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            SCHOOL OF PHARMACY
                          </span>
                          <ul className="bull">
                            <li>
                              {" "}
                              Master Of Pharmacy (M. Pharm.) in Pharmaceutics
                            </li>
                            <li>
                              {" "}
                              Master Of Pharmacy (M. Pharm.) in Pharmacology
                            </li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            School Of Management
                          </span>
                          <ul className="bull">
                            <li>Master Of Commerce (M.Com.)</li>
                          </ul>
                        </b>
                      </a>

                      <a className="dropdown-item" href="#">
                        <b style={{ color: "black" }}>
                          <span
                            style={{
                              color: "brown",
                              textDecoration: "underline",
                            }}
                          >
                            {" "}
                            School Of Vocational & Bridge Learning
                          </span>
                        </b>
                      </a>
                    </div>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter5}
                  onMouseLeave={handleMouseLeave5}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>Events</b>
                  </a>
                  <div className={`dropdown-menu ${isOpen5 ? "show" : ""}`}>
                    <a className="dropdown-item" href="#">
                      Department 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Department 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Department 3
                    </a>
                  </div>
                </li>

                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter12}
                  onMouseLeave={handleMouseLeave12}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>Students</b>
                  </a>
                  <div className={`dropdown-menu ${isOpen12 ? "show" : ""}`}>
                    <a className="dropdown-item" href="#">
                      Department 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Department 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Department 3
                    </a>
                  </div>
                </li>
                {/* 
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>Alumni</b>
                  </a>
                </li> */}

                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ color: "#dd2d4a" }}
                  >
                    <b>For Recruiters</b>
                  </a>
                </li>

                {/* <Link to="/erp/studentregister">
            <a style={{ color: 'whitesmoke', animation: 'blink 1s infinite' }}>
              E-Pravesh 
              <style>
                {`
           @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
            }
          `}
              </style>
            </a>
           
          </Link> */}

                <Link to="/Epravesh/Student/Register">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{
                        color: "#4B0082",

                        fontSize: "inherit",
                      }}
                    >
                      <b> E-Pravesh </b>
                    </a>
                  </li>
                </Link>

                <Link to="/entrance/form">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{
                        color: "#4B0082",
                        animation: "blink 1s infinite",
                        fontSize: "inherit",
                      }}
                    >
                      <b> Entrance Exam</b>
                    </a>
                    <style>
                      {`
      @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
    `}
                    </style>
                  </li>
                </Link>
              </ul>
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <b>Home</b>
                  </a>
                </li>
              </Link>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter8}
                onMouseLeave={handleMouseLeave8}
              >
                <a className="nav-link dropdown-toggle" href="#">
                  <b>About</b>
                </a>

                <div className={`dropdown-menu ${isOpen8 ? "show" : ""}`}>
                  <a className="dropdown-item small-font" href="#">
                    History & Milestones
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Vision & Mission
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Leadership
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Committee & Cell
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    MOU & Collaboration
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Statues
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Best Practices
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Press Media
                  </a>
                </div>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter9}
                onMouseLeave={handleMouseLeave9}
              >
                <a className="nav-link dropdown-toggle" href="#">
                  <b>Examination</b>
                </a>
                <div className={`dropdown-menu ${isOpen9 ? "show" : ""}`}>
                  <a className="dropdown-item small-font" href="#">
                    Results
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Apply for Exam
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Exam Schedule
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    {" "}
                    Exam Notification
                  </a>

                  <a className="dropdown-item small-font" href="#">
                    {" "}
                    Apply for Certificates
                  </a>
                </div>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter10}
                onMouseLeave={handleMouseLeave10}
              >
                <a className="nav-link dropdown-toggle" href="#">
                  <b>Research</b>
                </a>
                <div className={`dropdown-menu ${isOpen10 ? "show" : ""}`}>
                  <a className="dropdown-item small-font" href="#">
                    Research & Promotion Policy
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Doctoral Programs PhD
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Centre Of Excellence
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Consultancy Services{" "}
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    MOU & Collaboration
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Centre For Development Of Entreprenurship
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Best Practices
                  </a>
                  <a className="dropdown-item small-font" href="#">
                    Press Media
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <b>Placement</b>
                </a>
              </li>
              <Link to="/contact">
                <li className="nav-item">
                  <a className="nav-link">
                    <b>Contact</b>
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link">
                  <b>Campus</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  {" "}
                  <b>Activities</b>
                </a>
              </li>
              {/* <Link to="/erp">
                <li className="nav-item">
                  <button
                    type="button"
                    class="btn btn-danger"
                    style={{ color: "white", marginLeft: "10px" }}
                  >
                    {" "}
                    <b> ERP</b>
                  </button>
                </li>
              </Link> */}

              <Link to="/erp">
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "8px",
                      height: "35px", // Adjust the height as needed
                      width: "60px", // Adjust the width as needed
                    }}
                  >
                    <b style={{ margin: "0" }}>Erp</b>
                  </button>
                </li>
              </Link>

              {/* <Link to="/erp">
  <li className="nav-item">
    <button
      type="button"
      class="btn btn-danger"
      style={{ 
        color: "white",
        marginLeft: "8px",
        height: "35px", // Adjust the height as needed
        width: "120px"  // Adjust the width as needed
      }}
    >
      <b>ADMISSION</b>
    </button>
  </li>
</Link> */}

              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "8px",
                    height: "35px", // Adjust the height as needed
                    width: "120px", // Adjust the width as needed
                  }}
                >
                  <b style={{ margin: "0" }}>ADMISSION</b>
                </button>
              </li>

              {/* <li className="nav-item" style={{ color: "" }}>
                <button
                  type="button"
                  class="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  <b>ADMISSION</b>
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>

      {/*MENU*/}
      {/* <menu id="menu" className="side_menu" >
        <a href="javascript:void(0)" className="close">
          <i className="fa fa-times" />
        </a>
        <strong className="fixed_flex logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/94/SSSUTMS_Logo.png"
            alt="Summit"
            loading="lazy"
          />
        </strong>
        <br />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#"> EXAMINTION</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li className="dropdown">
            <a href="javascript:void(0)">Mandatory Disclosure</a>
            <aside>
              <a href="#">Society registration</a>
              <a href="#">NOC</a>
            </aside>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <Link to="/erp"><a href="#">ERP</a></Link>
          </li>
          <li className="fixed_flex">
            <a href="javascript:void(0)" className="btn btn_1 chat_popup">
              SignUp/LogIn
            </a>{" "}
            <a href="#" className="btn btn_2 chat_popup">
              Admission
            </a>{" "}
          </li>
        </ul>
      </menu> */}
      {/*HEADER*/}
      <header className="custom-header">
        <article>
          <h1 className="title big">
            Welcome to <br />
            <em>Sri Satya Sai</em> University of Technology & Medical Science
          </h1>
          <p>
            SSSUTMS: Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States,
            due to the quality of education at an affordable cost, without any hidden fees policy.
            In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions
            were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to
            worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
          </p>
          <a href="#" className="btn btn_3">
            Explore more
          </a>
        </article>
        <section className="flex">
          <aside className="padding_1x">
            <h2 className="sub_title">Admission</h2>
            <p>
              Admissions to various Technical, Professional & General Courses will be made in accordance with the guidelines provided by University
            </p>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </aside>
          <aside className="padding_1x">
            <h2 className="sub_title">Prospectus</h2>
            <p>
              This prospectus is for students interested in applying for undergraduate, postgraduate and ... These ethics and morals form the undercurrent of every subject ..
            </p>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </aside>
          <aside className="padding_1x">
            <h2 className="sub_title">Features</h2>
            <p>
              Promote and facilitate collaborative and/or interdisciplinary research and enhancement
              of research networking capacity and infrastructure.

            </p>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </aside>
        </section>
      </header>
      {/*MAIN*/}
      <main>
        {/*division_2*/}
        <div className="divisions division_2 flex">
          <section className="flex_content padding_2x">
            <div className="title_header">
              <h2 className="title medium">Notifications</h2>
              <p>
                Coming soon new website www.sssutms.ac.in. Examination Form Notification B.H.M.S. & Paramedical
                Courses December - 2023 · APPOINTMENT (School of Homoeopathy).
              </p>
              <span className="bar_blue" />
            </div>
            <marquee
              direction="up"
              id="notification"
              onmouseover="this.stop();"
              onmouseleave="this.start();"
            >
              {/*notification begining*/}
              <Link to="/notification">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={sacn}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      BHMS and BAMS Notificaton{" "}
                    </h3><br />
                    <p>
                      BAMS vs BHMS - Full form. BAMS is commonly
                      abbreviated as a Bachelor of Ayurvedic Medicine and Surgery (BAMS)...
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        01-01-2024
                      </span>

                    </aside>
                  </article>
                </a>
              </Link>
              <Link to="/imp">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={Imp}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai  &amp; University Medical & Science{" "}
                    </h3><br />
                    <p>
                      Important information related to examination
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        18-01-2024
                      </span>

                    </aside>
                  </article>
                </a></Link>
              {/*notification ends*/}
              {/*notification begining*/}
              <Link to="/off">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={Off}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai  &amp; University Medical & Science{" "}
                    </h3><br />
                    <p>
                      Office Order
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        18-01-2024
                      </span>

                    </aside>
                  </article>
                </a></Link>
              {/*notification ends*/}
              {/*notification begining*/}
              <Link to="/not">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={Not}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai  &amp; University Medical & Science{" "}
                    </h3><br />
                    <p>
                      Notification Ph.D. Course Work Examination 2023-24
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        12-01-2024
                      </span>

                    </aside>
                  </article>
                </a></Link>
              {/*notification ends*/}
              {/*notification begining*/}
              <Link to="/exam">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={ex}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai  &amp; University Medical & Science{" "}
                    </h3><br />
                    <p>
                      Important information related to examination
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        05-01-2024
                      </span>

                    </aside>
                  </article>
                </a></Link>
              {/*notification ends*/}
            </marquee>
          </section>
          <section className="flex_content padding_2x" id="event">
            <div className="title_header">
              <h2 className="title medium">Events</h2>
              {/* <p>
                With a passion and zeal for the lost and hurting world, our
                church is looking for ways to build bridges to a cynical and
                jaded society.
              </p> */}
              {/* <span className="bar_white" /> */}
              <ul className="logo-slider event-slider">
                <li>
                  <h3 className="title small">
                    Sri Satya Sai University of Technology and Medical Sciences
                  </h3>
                  <p>
                    IPR Awareness Program.
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      {/* 16th June, 2023 (03:00 PM) */}
                      16<sub>June</sub>
                    </span>
                    <span>
                      2023
                    </span>
                    <span>
                      03<sub>PM</sub>
                    </span>
                    <span>
                      00<sub>Min</sub>
                    </span>
                  </aside>
                  {/* <Link to ="/evantdetails"> <a href="" className="btn btn_2">
                    Event details
                  </a></Link> */}

                </li>
                <li>
                  <h3 className="title small">

                    Sri Satya Sai University of Technology and Medical Sciences
                  </h3>
                  <p>
                    Introduction to COMSOL Multiphysics.
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      03<sub>July</sub>
                    </span>
                    <span>
                      2023
                    </span>
                    <span>
                      03<sub>PM</sub>
                    </span>
                    <span>
                      00<sub>Min</sub>
                    </span>
                  </aside>
                  {/* <a href="#" className="btn btn_2">
                    Event details
                  </a> */}
                </li>
                <li>
                  <h3 className="title small">
                    Sri Satya Sai University of Technology and Medical Sciences
                  </h3>
                  <p>
                    Workshop on Mendeley, Powered by Elsevier.
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      05<sub>August</sub>
                    </span>
                    <span>
                      2023
                    </span>
                    <span>
                      02<sub>PM</sub>
                    </span>
                    <span>
                      00<sub>Min</sub>
                    </span>
                  </aside>
                  {/* <a href="#" className="btn btn_2">
                    Event details
                  </a> */}
                </li>

                <br />
                <Link to="/eventss">
                  <h5 style={{ color: "white", textDecorationLine: "underline" }}> View Details</h5>
                </Link>


              </ul>
            </div>
          </section>
        </div>
        <div>
          <About />
        </div><br/>
        <div>
          <Our />
        </div><br />
        <div>
          <Facilities />
        </div><br /><br />
        <div>
          <Counter />
        </div><br /><br />
        {/*division_3*/}

        {/*division_4*/}
        <>
        <style>{`
   
        #gallery{
          -webkit-column-count:4;
          -moz-column-count:4;
          column-count:4;
          
          -webkit-column-gap:20px;
          -moz-column-gap:20px;
          column-gap:20px;
        }
        @media (max-width:1200px){
          #gallery{
          -webkit-column-count:3;
          -moz-column-count:3;
          column-count:3;
            
          -webkit-column-gap:20px;
          -moz-column-gap:20px;
          column-gap:20px;
        }
        }
        @media (max-width:800px){
          #gallery{
          -webkit-column-count:2;
          -moz-column-count:2;
          column-count:2;
            
          -webkit-column-gap:20px;
          -moz-column-gap:20px;
          column-gap:20px;
        }
        }
        @media (max-width:600px){
          #gallery{
          -webkit-column-count:1;
          -moz-column-count:1;
          column-count:1;
        }  
        }
        #gallery img,#gallery video {
          width:100%;
          height:auto;
          margin: 4% auto;
          box-shadow:-3px 5px 15px #000;
          cursor: pointer;
          -webkit-transition: all 0.2s;
          transition: all 0.2s;
        }
        .modal-img,.model-vid{
          width:100%;
          height:auto;
        }
        .modal-body{
          padding:0px;
        }`}</style>
  <h1 style={{marginLeft:"40%"}}> Image Gallery</h1>
  <hr />
  <div id="gallery" className="container-fluid">
    <img
      src={PosI}
      className="img-responsive"
    />
    <img
      src={PosI1}
      className="img-responsive"
    />
    <img
      src={PosI2}
      className="img-responsive"
    />
  <img
      src={PosI3}
      className="img-responsive"
    />
    <img
      src={PosI4}
      className="img-responsive"
    />
    <img
      src={PosI5}
      className="img-responsive"
    />
    <img
      src={PosI6}
      className="img-responsive"
    />
    <img
      src={PosI7}
      className="card img-responsive"
    />
    <img
      src={PosI8}
      className="img-responsive"
    />
    <img
      src={PosI9}
      className="img-responsive"
    />
    <img
      src={PosI10}
      className="img-responsive"
    />
    <img
      src={PosI11}
      className="img-responsive"
    />
    <img
      src={PosI12}
      className="img-responsive"
    />
    <img
      src={PosI13}
      className="img-responsive"
    />
    <img
      src={PosI14}
      className="img-responsive"
    />
    <img
      src={PosI15}
      className="img-responsive"
    />
  </div>
  <div id="myModal" className="modal fade" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-body"></div>
      </div>
    </div>
  </div>
</>

      </main><br /><br />

      <div style={{ marginTop: "70px" }}>
        <SliderRequiter />
      </div>
      {/*FOOTER*/}
      <>
      <style>
        {`
     ul {
        margin: 0px;
        padding: 0px;
    }
    .footer-section {
      background: #151414;
      position: relative;
    }
    .footer-cta {
      border-bottom: 1px solid #373636;
    }
    .single-cta i {
      color: #ff5e14;
      font-size: 30px;
      float: left;
      margin-top: 8px;
    }
    .cta-text {
      padding-left: 15px;
      display: inline-block;
    }
    .cta-text h4 {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 2px;
    }
    .cta-text span {
      color: #757575;
      font-size: 15px;
    }
    .footer-content {
      position: relative;
      z-index: 2;
    }
    .footer-pattern img {
      position: absolute;
      top: 0;
      left: 0;
      height: 330px;
      background-size: cover;
      background-position: 100% 100%;
    }
    .footer-logo {
      margin-bottom: 30px;
    }
    .footer-logo img {
        max-width: 380px;
    }
    .footer-text p {
      margin-bottom: 14px;
    //   font-size: 14px;
          color: #7e7e7e;
      line-height: 28px;
    }
    .footer-social-icon span {
      color: #fff;
      display: block;
      font-size: 20px;
      font-weight: 700;
      font-family: 'Poppins', sans-serif;
      margin-bottom: 20px;
    }
    .footer-social-icon a {
      color: #fff;
      font-size: 16px;
      margin-right: 15px;
    }
    .footer-social-icon i {
      height: 40px;
      width: 40px;
      text-align: center;
      line-height: 38px;
      border-radius: 50%;
    }
    .facebook-bg{
      background: #3B5998;
    }
    .twitter-bg{
      background: #55ACEE;
    }
    .google-bg{
      background: #DD4B39;
    }
    .footer-widget-heading h3 {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 40px;
      position: relative;
    }
    .footer-widget-heading h3::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -15px;
      height: 2px;
      width: 50px;
      background: #ff5e14;
    }
    .footer-widget ul li {
    //   display: inline-block;
    //   float: left;
      width: 50%;
      margin-bottom: 12px;
    }
    .footer-widget ul li a:hover{
      color: #ff5e14;
    }
    .footer-widget ul li a {
      color: #878787;
      text-transform: capitalize;
    }
    .subscribe-form {
      position: relative;
      overflow: hidden;
    }
    .subscribe-form input {
      width: 100%;
      padding: 14px 28px;
      background: #2E2E2E;
      border: 1px solid #2E2E2E;
      color: #fff;
    }
    .subscribe-form button {
        position: absolute;
        right: 0;
        background: #ff5e14;
        padding: 13px 20px;
        border: 1px solid #ff5e14;
        top: 0;
    }
    .subscribe-form button i {
      color: #fff;
      font-size: 22px;
      transform: rotate(-6deg);
    }
    .copyright-area{
      background: #202020;
      padding: 25px 0;
    }
    .copyright-text p {
      margin: 0;
      font-size: 14px;
      color: #878787;
    }
    .copyright-text p a{
      color: #ff5e14;
    }
    .footer-menu li {
      display: inline-block;
      margin-left: 20px;
    }
    .footer-menu li:hover a{
      color: #ff5e14;
    }
    .footer-menu li a {
      font-size: 14px;
      color: #878787;
    }

    





    .copyright-area {
        background-color: #2E2E2E;
        padding: 20px 0;
      }
      .container {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 20px;
      }
      .footer-menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .footer-menu ul li {
        display: inline-block;
        margin-right: 15px;
      }
      .footer-menu ul li:last-child {
        margin-right: 0;
      }
      .copyright-text {
        text-align: center;
        margin-top: 15px;
      }
    
      /* Responsive styles */
      @media only screen and (max-width: 991px) {
        .container {
          margin-left: 0;
        }
      }



      .footer-section {
        background: #151414;
        position: relative;
      }
      .footer-cta {
        border-bottom: 1px solid #373636;
      }

      .single-cta i {
        color: #ff5e14;
        font-size: 30px;
        float: left;
        margin-top: 8px;
      }
      .cta-text {
        padding-left: 15px;
        display: inline-block;
      }
      .cta-text h4 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2px;
      }
      .cta-text span {
        color: #757575;
        font-size: 15px;
      }
      .footer-content {
        position: relative;
        z-index: 2;
      }
      .footer-pattern img {
        position: absolute;
        top: 0;
        left: 0;
        height: 330px;
        background-size: cover;
        background-position: 100% 100%;
      }
      .footer-logo {
        margin-bottom: 30px;
      }
      .footer-logo img {
          max-width: 300px;
      }
      .footer-text p {
        margin-bottom: 14px;
        font-size: 14px;
            color: #7e7e7e;
        line-height: 28px;
        // font-family:sans-serif;
        font-family: helvetica;
      }


      .footer-social-icon {
        display: flex;
        align-items: center;
      }

      .footer-social-icon span {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        margin-right: 10px;
      }

      .footer-social-icon a {
        color: #fff;
        font-size: 16px;
        margin-right: 15px;
      }
      .footer-div{
        margin-left:200px;
      }

      .footer-social-icon i {
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 38px;
        border-radius: 50%;
      }

      .facebook-bg{
        background: #3B5998;
      }
      .instagram-bg{
        background: #966b9d;
      }
      .email-bg{
        background: #DD4B39;
      }

      .whatsapp-bg{
        background: #4f772d;
      }

      .ankita{
        display : flex ;
    }


      .youtube-bg{
        background: #d90429;
      }
      .footer-widget-heading h3 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 40px;
        position: relative;
      }
      .footer-widget-heading h3::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -15px;
        height: 2px;
        width: 50px;
        background: #ff5e14;
      }
      .footer-widget ul li {

        width: 100%;

      }
      .footer-widget ul li a:hover{
        color: #ff5e14;
      }
      .footer-widget ul li a {
        color: #878787;
        text-transform: capitalize;
      }

      .copyright-area{
        background: #202020;
        padding: 25px 0;
      }
      .copyright-text p {
        margin: 0;
        font-size: 14px;
        color: #878787;
      }
      .copyright-text p a{
        color: #ff5e14;
      }
      .footer-menu li {
        display: inline-block;
        margin-left: 20px;
      }
      .footer-menu li:hover a{
        color: #ff5e14;
      }
      .footer-menu li a {
        font-size: 14px;
       
      }
      .logos{
        display: flex;
        justify-content:center;
        gap: 20px;
        margin-left:400px;
        align-items:center;
        height: 70px;

      }
     .logoheight{
        height:100%;
     }
      @media screen and (max-width: 1024px) {
        .footer-div{
          // margin-left:300px
        }
      }


      @media screen and (max-width: 768px) {
        .col-xl-4.col-md-4 {
          // margin-right: 400px;
        }


        .footer-social-icon{
          margin-right:800px;
        }

        .footer-menu li{
           display:inline;
        }
        .footer-menu{
          margin-right:300px;

        }



      }
      @media screen and (max-width: 480px){
       .footer-widget{
         display:inline;
       }
       .ankita ul li a{
       display:block;
      }
       .ankita{
        display:inline;
        // text-align:center;
        // justify-content:center;
       }
      //  .ankita ul li a{
      //   display:column;
      //  }

        .footer-menu ul{
            display:flex;
            width: 20%;
            // justify-content:center;
        }

        .footer-div  {
          margin-left: 0;
          text-align: center;
          // width: 100%;
        }

        .logos{
          display: flex;
          justify-content:center;
          gap: 20px;
          margin-left:0px;
          align-items:center;
        }
        .logoheight{
          height:50%;
       }
      .logo{
        display:block;
      }
      .logo img{
        margin-bottom:10px;
        margin-left:150px;
      }

      .title{
        margin-left:50px;
      }
}}
@media screen and (max-width: 768px) {
    .footer-widget {
      text-align: center;
    }
    .ankita {
      flex-wrap: wrap;
      justify-content: center;
    }
    .footer-widget ul li {
      width: 100%;
      margin-bottom: 10px;
    }
    .footer-div {
      margin-left: 0;
    }
    .footer-menu ul li {
      display: block;
      margin: 0;
    }
    .footer-menu {
      text-align: center;
      margin-top: 20px;
    }
  }
  
  @media screen and (max-width: 480px) {
    .ankita {
      flex-direction: column;
      align-items: center;
    }
    .footer-menu ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  
  @media only screen and (max-width: 768px) {
    .footer-menu {
      text-align: center;
    }
    .footer-menu ul {
      padding-left: 0;
    }
    .footer-menu ul li {
      display: inline-block;
      margin-right: 10px;
    }
    .copyright-text {
      margin-top: 20px;
    }
  }
  .footer-menu {
    text-align: center;
  }
  
  .footer-menu ul {
    padding: 0;
    list-style: none;
  }
  
  .footer-menu ul li {
    display: inline-block;
    margin-right: 20px;
  }
  
  @media (max-width: 768px) {
    .footer-menu ul li {
      margin-right: 10px;
    }
  }
  .ddd{
    color: white;
  }
  
    `}
      </style>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5"></div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src={SSSLOGOALL} className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      <h6 style={{ color: "#DC143C" }}>
                        <b>
                          {" "}
                          Sri Satya Sai University of Technology & Medical
                          Science
                        </b>
                      </h6>
                      <h6 style={{ color: "white" }}>
                        Opp.Oilfed Plant, Bhopal-Indore Road, Sehore (M.P), Pin
                        - 466001 <br />
                        (+91) 07562-292740 | 7562292720 <br />
                        (+91) 7748900027 | 7748900028 <br />
                        (From 10:00 AM to 5:00 PM only)
                      </h6>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-8 col-lg-8 col-md-8 mb-30 ankita"
                style={{ justifyContent: "space-between" }}
              >
                <div className="footer-widget" style={{ marginLeft: "70px" }}>
                  <div className="footer-widget-heading">
                    <h3 style={{ color: "#DC143C" }}>Information</h3>
                  </div>
                  <ul style={{ color: "white" }}>
                    <li>
                      <a style={{ color: "white" }}>About University</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Vision & Mission</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Blog</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Infrastructure</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Academic Calendar</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Virtual Tour</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Press & Media</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 style={{ color: "#DC143C" }}>Quick Links</h3>
                  </div>
                  <ul style={{ color: "white" }}>
                    <li>
                      <a style={{ color: "white" }}>AICTE </a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Pay Fees</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Notifications</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Approvals</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Home Page</a>
                    </li>

                    <li>
                      <a style={{ color: "white" }}>Announcements</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 style={{ color: "#DC143C" }}>Others</h3>
                  </div>
                  <ul style={{ color: "white" }}>
                    <li>
                      <a style={{ color: "white" }}>NIRF</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Digi Locker</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Career</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Counselling</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>NPTEL</a>
                    </li>

                    <li>
                      <a style={{ color: "white" }}>NAAC</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 style={{ color: "#DC143C" }}>Resources</h3>
                  </div>
                  <ul style={{ color: "white" }}>
                    <li>
                      <a style={{ color: "white" }}>Monthly Magazine</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}>Brochure</a>
                    </li>
                    <li>
                      <a style={{ color: "white" }}> Study Material</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-6 text-center text-lg-left">
                <div className="footer-menu">
                  <ul>
                    <Link to = "/">
                    <li>
                      <a style={{ color: "white" }}>Home</a>
                    </li>
                    </Link>
                    <li>
                      <a style={{ color: "white" }}>Security</a>
                    </li>
                    <Link to="/contact">
                      <li>
                        <a style={{ color: "white" }}>Contact us</a>
                      </li>
                    </Link>
                    <Link to="/terms-conditions">
                      <li>
                        <a style={{ color: "white" }}>Terms & Conditions</a>
                      </li>
                    </Link>
                    <Link to="/privacy-policy">
                      <li>
                        <a style={{ color: "white" }}>Privacy-Policy</a>
                      </li>
                    </Link>
                    <Link to="/refound-cancellation">
                      <li>
                        <a style={{ color: "white" }}>Refund & Cancellation</a>
                      </li>
                    </Link>
                    <li>
                      <a style={{ color: "white" }}>Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-11 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p style={{ color: "white" }}>
                    ©2024, SSSUTMS. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
      {/*ADDITIONAL*/}
      <div className="overlay" />
      <div className="cursor" />
    </>
  );
};

export default Website;