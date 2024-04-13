import React from 'react'
import FooterContanct from '../../FooterContanct'
import Navbarcontanct from '../../Navbarcontanct'

const Contact = () => {
  return (
<>
<Navbarcontanct/>
<style>
    {
        ` 
        
        
        :root {
            margin-top:-60px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {}
        a,
        a:hover,
        a:focus,
        a:active {
            text-decoration: none;
            // outline: none;
        }
        
        a,
        a:active,
        a:focus {
            color: #333;
            text-decoration: none;
            transition-timing-function: ease-in-out;
            -ms-transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out;
            -webkit-transition-timing-function: ease-in-out;
            -o-transition-timing-function: ease-in-out;
            transition-duration: .2s;
            -ms-transition-duration: .2s;
            -moz-transition-duration: .2s;
            -webkit-transition-duration: .2s;
            -o-transition-duration: .2s;
        }
        
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        img {
    max-width: 100%;
    height: auto;
}


.sec-title-style1 {
    position: relative;
    display: block;
    margin-top: -9px;
    padding-bottom: 50px;
}
.sec-title-style1.max-width{
    position: relative;
    display: block;
    max-width: 770px;
    margin: -9px auto 0;
    padding-bottom: 52px;    
}
.sec-title-style1.pabottom50 {
    padding-bottom: 42px;
}
.sec-title-style1 .title {
    position: relative;
    display: block;
    color: #131313;
    font-size: 36px;
    line-height: 46px;
    font-weight: 700;
    text-transform: uppercase;
}
.sec-title-style1 .title.clr-white{
    color: #ffffff;
}
.sec-title-style1 .decor {
    position: relative;
    display: block;
    width: 70px;
    height: 5px;
    margin: 19px 0 0;
}
.sec-title-style1 .decor:before{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 5px;
    height: 5px;
    background: #FFA500;
    border-radius: 50%;
    content: "";
}
.sec-title-style1 .decor:after{
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 5px;
    height: 5px;
    background: #FFA500;
    border-radius: 50%;
    content: "";
}
.sec-title-style1 .decor span {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 1px;
    background: #FFA500;
    margin: 2px 0;
}


.sec-title-style1 .text{
    position: relative;
    display: block;
    margin: 7px 0 0;
}
.sec-title-style1 .text p{
    position: relative;
    display: inline-block;
    padding: 0 15px;
    color: #131313;
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
}
.sec-title-style1 .text.clr-yellow p{
    color: #FFA500;
}
.sec-title-style1 .text .decor-left{
    position: relative;
    top: -2px;
    display: inline-block;
    width: 70px;
    height: 5px;
    background: transparent;
}
.sec-title-style1 .text .decor-left span {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 1px;
    background: #FFA500;
    content: "";
    margin: 2px 0;
}
.sec-title-style1 .text .decor-left:before{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 5px;
    height: 5px;
    background: #FFA500;
    border-radius: 50%;
    content: "";
}
.sec-title-style1 .text .decor-left:after{
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 5px;
    height: 5px;
    background: #FFA500;
    border-radius: 50%;
    content: "";
}

.sec-title-style1 .text .decor-right{
    position: relative;
    top: -2px;
    display: inline-block;
    width: 70px;
    height: 5px;
    background: transparent;
}
.sec-title-style1 .text .decor-right span {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50px;
    height: 1px;
    background: #FFA500;
    content: "";
    margin: 2px 0;
}
.sec-title-style1 .text .decor-right:before{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 5px;
    height: 5px;
    background: #FFA500;
    border-radius: 50%;
    content: "";
}
.sec-title-style1 .text .decor-right:after{
    position: absolute;
    top: 0;
    left: 10px;
    bottom: 0;
    width: 5px;
    height: 5px;
    background: #FFA500;
    border-radius: 50%;
    content: "";
}

.sec-title-style1 .bottom-text{
    position: relative;
    display: block;
    padding-top: 16px;
}
.sec-title-style1 .bottom-text p{
    color: #848484;
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    margin: 0;
}
.sec-title-style1 .bottom-text.clr-gray p{
    color: #cdcdcd;    
}
.contact-address-area{
    position: relative;
    display: block;
    background: #ffffff;
    padding: 100px 0 120px;
}
.contact-address-area .sec-title-style1.max-width {
    padding-bottom: 72px;
}
.contact-address-box{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;    
}
.single-contact-address-box {
    position: relative;
    display: block;
    background: #131313;
    padding: 27px 30px 50px;
}
.single-contact-address-box .icon-holder{
    position: relative;
    display: block;
    padding-bottom: 24px;
}
.single-contact-address-box .icon-holder span:before{
    font-size: 75px;
}
.single-contact-address-box h3{
    color: #ffffff;
    margin: 0px 0 9px;
}
.single-contact-address-box h2{
    color: #FFA500;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 19px;
}
.single-contact-address-box a{
    color: #ffffff;
}

.single-contact-address-box.main-branch {
    background: #FFA500;
    padding: 34px 30px 51px;
    margin-top: -20px;
    margin-bottom: -20px;
}
.single-contact-address-box.main-branch h3{
    color: #131313;
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 38px;
    text-transform: uppercase;
    text-align: center;
}
.single-contact-address-box.main-branch .inner{
    position: relative;
    display: block;
    
}
.single-contact-address-box.main-branch .inner ul{
    position: relative;
    display: block;
    overflow: hidden;
}
.single-contact-address-box.main-branch .inner ul li{
    position: relative;
    display: block;
    padding-left: 110px;
    border-bottom: 1px solid #737373;
    padding-bottom: 23px;
    margin-bottom: 24px;
}
.single-contact-address-box.main-branch .inner ul li:last-child{
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
}
.single-contact-address-box.main-branch .inner ul li .title{
    position: absolute;
    top: 2px;
    left: 0;
    display: inline-block;
}
.single-contact-address-box.main-branch .inner ul li .title h4{
    color: #131313;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;
    border-bottom: 2px solid #a5821e;
}

.single-contact-address-box.main-branch .inner ul li .text{
    position: relative;
    display: block;
}
.single-contact-address-box.main-branch .inner ul li .text p{
    color: #131313;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin: 0;
}

.contact-info-area {
    position: relative;
    display: block;
    background: #ffffff;
}
.contact-form {
    position: relative;
    display: block;
    background: #ffffff;
    padding: 100px 60px 80px;
    -webkit-box-shadow: 0px 3px 8px 2px #ededed; 
    box-shadow: 0px 3px 8px 2px #ededed;
    z-index: 3;
}
.contact-form .sec-title-style1{
    position: relative;
    display: block;
    padding-bottom: 51px;
    width: 50%;
}
.contact-form .text-box{
    position: relative;
    display: block;
    margin-top: 19px;
    width: 50%;    
}
.contact-form .text p{
    color: #848484;
    line-height: 26px;
    margin: 0;
}

.contact-form .inner-box{
    position: relative;
    display: block;
    background: #ffffff;
}
.contact-form form{
    position: relative;
    display: block;
}
.contact-form form .input-box{
    position: relative;
    display: block;
}

.contact-form form input[type="text"],
.contact-form form input[type="email"],
.contact-form form textarea{
    position: relative;
    display: block;   
    background: #ffffff;
    border: 1px solid #eeeeee;
    width: 100%;
    height: 55px;
    font-size: 16px;
    padding-left: 19px;
    padding-right: 15px;
    border-radius: 0px;
    margin-bottom: 20px;
    transition: all 500ms ease;
}
.contact-form form textarea {
    height: 130px;
    padding-left: 19px;
    padding-right: 15px;
    padding-top: 14px;
    padding-bottom: 15px;
}
.contact-form form input[type="text"]:focus{
    color: #222222;
    border-color: #d4d4d4; 
}
.contact-form form input[type="email"]:focus{
    color: #222222;
    border-color: #d4d4d4;
}
.contact-form form textarea:focus{
    color: #222222;
    border-color: #d4d4d4;
}
.contact-form form input[type="text"]::-webkit-input-placeholder {
    color: #848484;
}
.contact-form form input[type="text"]:-moz-placeholder {
    color: #848484;
}
.contact-form form input[type="text"]::-moz-placeholder {
    color: #848484;
}
.contact-form form input[type="text"]:-ms-input-placeholder {
    color: #848484;
}
.contact-form form input[type="email"]::-webkit-input-placeholder {
    color: #848484;
}
.contact-form form input[type="email"]:-moz-placeholder {
    color: #848484;
}
.contact-form form input[type="email"]::-moz-placeholder {
    color: #848484;
}
.contact-form form input[type="email"]:-ms-input-placeholder {
    color: #848484;
}
.contact-form form button {
    position: relative;
    display: block;
    width: 100%;
    background: #FFA500;
    border: 1px solid #FFA500;
    color: #131313;
    font-size: 16px;
    line-height: 55px;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
    transition: all 200ms linear;
    transition-delay: 0.1s;
    cursor: pointer;
}

.contact-form form button:hover{
    color: #ffffff;
    background: #131313;
}`
    }
</style>
  <section className="contact-address-area" >
    <div className="container">
      <div className="sec-title-style1 text-center max-width">
        <div className="title">Contact Us</div>
        <div className="text">
          <div className="decor-left">
            <span />
          </div>
          <p>Quick Contact</p>
          <div className="decor-right">
            <span />
          </div>
        </div>
        <div className="bottom-text">
          <p>
           
          </p>
        </div>
      </div>
      <div className="contact-address-box row">
      
        <div className="col-sm-4 single-contact-address-box text-center">
          <div className="icon-holder">
            <span className="icon-clock-1">
              <span className="path1" />
              <span className="path2" />
              <span className="path3" />
              <span className="path4" />
              <span className="path5" />
              <span className="path6" />
              <span className="path7" />
              <span className="path8" />
              <span className="path9" />
              <span className="path10" />
              <span className="path11" />
              <span className="path12" />
              <span className="path13" />
              <span className="path14" />
              <span className="path15" />
              <span className="path16" />
              <span className="path17" />
              <span className="path18" />
              <span className="path19" />
              <span className="path20" />
            </span>
          </div>
          <h3>Lorem Ipsum</h3>
          <h2>Lorem Ipsum is simply dummy</h2>
        </div>
       
        <div className="col-sm-4 single-contact-address-box main-branch">
          <h3 >SSSUTMS</h3>
          <div className="inner">
            <ul>
              <li>
                <div className="title">
                  <h4>Address:</h4>
                </div>
                <div className="text">
                  <p>
                 
Opp.Oilfed Plant, Bhopal-Indore Road,
                    <br /> Sehore (M.P), Pin - 466001
                  </p>
                </div>
              </li>
              <li>
                <div className="title">
                  <h4>Ph &amp; Fax:</h4>
                </div>
                <div className="text">
                  <p>
                  +91-7562292740 |<br></br> +91-07562-292204 ,<br></br> 07562-292205 <br />Fax :- +91-07562-292201
                  </p>
                </div>
              </li>
              <li>
                <div className="title">
                  <h4>Office Hrs:</h4>
                </div>
                <div className="text">
                  <p>
                    Mon-Sat: 10:00am - 5:00pm
                    
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      
        <div className="col-sm-4 single-contact-address-box text-center">
       
          <div className="inner">
            <ul>
              <li>
                <div className="title" style={{color:'white',marginRight:'240px'}}>
                  <h4> Email :</h4>
                </div>
                <div className="text" style={{color:'#ffa500'}}>
                  <p style={{marginLeft:'-120px'}}>
              
                  info@sssutms.co.in</p>
                   <p style={{marginTop:'-20px'}}>srisatyasaiuniversity2013@gmail.com
                  </p>



                </div>

<br></br>


                <div className="title" style={{color:'white',marginRight:'200px'}}>
                  <h4> Visit us at :</h4>
                </div>
                <div className="text" style={{color:'#ffa500'}}>
                  <p style={{marginLeft:'-120px'}}>
                 {/* <p> */}
                 www.sssutms.co.in,</p>
                   <p style={{marginTop:'-20px',marginLeft:'-120px'}}> www.sssutms.ac.in
                  </p>


                  
                </div>
              </li>
            
            
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  </section>
 
  <section className="contact-info-area" >
    <div className="container" style={{marginTop:'-100px'}}>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="contact-form">
            <div className="row">
              <div className="col-xl-12">
                <div className="sec-title-style1 float-left">
                  <div className="title" style={{marginTop:'-40px'}}>Send Your Message</div>
                  <div className="text">
                    <div className="decor-left">
                      <span />
                    </div>
                    <p>Contact Form</p>
                  </div>
                </div>
                <div className="text-box float-right">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="inner-box">
              <form
                id="contact-form"
                name="contact_form"
                className="default-form"
                action="inc/sendmail.php"
                method="post"
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-12">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_name"
                            defaultValue=""
                            placeholder="Name"
                            required=""
                          />
                        </div>
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_phone"
                            defaultValue=""
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="email"
                            name="form_email"
                            defaultValue=""
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_website"
                            defaultValue=""
                            placeholder="Website"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="input-box">
                          <input
                            type="text"
                            name="form_subject"
                            defaultValue=""
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="input-box">
                      <textarea
                        name="form_message"
                        placeholder="Your Message..."
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="button-box">
                      <input
                        id="form_botcheck"
                        name="form_botcheck"
                        className="form-control"
                        type="hidden"
                        defaultValue=""
                      />
                      <button type="submit" data-loading-text="Please wait...">
                        Send Message
                        <span className="flaticon-next" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterContanct/>
</>

  )
}

export default Contact