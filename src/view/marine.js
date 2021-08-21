import React, {useState} from 'react'
import '../css/group.css'
import {Link} from 'react-router-dom'
import emailjs from 'emailjs-com';
import Recaptcha from 'react-recaptcha';




import '../css/marine.css';


//pictures
import scroll from '../picture/Scroll.png';
import cruise from '../picture/newrefine/mbg20.jpg'



import email from '../picture/email.png';
import call from '../picture/call.png';
import location from '../picture/location.png';

import tech from '../picture/refine/tech.png'
import safety from '../picture/refine/safety.png'
import account from '../picture/refine/account.png'






//reactbootstrap
import { Carousel } from 'react-bootstrap'






export const Marine = () => {


    let [msg, setMsg] = useState("");

    let [auth, setAuth] = useState(true);



    function submitemail (e) {
        e.preventDefault();

        emailjs.sendForm('service_fv5fobp', 'template_75o6bxo', e.target, 'user_s6suYiiLQDxXNLuT8jDZ5')
              .then((result) => {
                  console.log(result.text);
                  setMsg("Your Message has been recieved!");
                }, (error) => {
                    console.log(error.text);
                    setMsg("Message not submitted!");
              });

              e.target.reset()

    }



    function callback () {
        console.log("recaptcha has loaded")
    }

    var verifyCallback = function (response) {
        if (response){
            setAuth(false);
        }
      };

    return(
        <>

                    {/* Hero section */}
        <section>
                <div className="container-fluid hero-marine p-0">

                    <div className="col-12 text-center hero-content-marine animate__animated animate__fadeInLeft">
                    <h1 className="heading text-white font-weight-bold"> MARINE AND<span style={{color:'#0275d8'}}> OFFSHORE TRAVEL</span></h1>
                    <Link to="/contact-us" className="link " ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                      </div>
                </div>
        </section>



 


{/* scroll */}
<div className="text-center mb-5">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



<section className="group-travel">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 mx-auto p-5  column-note">
            <h1 className="head-tag">MARINE AND OFFSHORE TRAVEL<span style={{color:'#0275d8'}}> - LUXURY CRUISES? </span></h1>
        <p className=" text-justify heading-note">We specialize in servicing large group travel needs (10 to 10,000 travelers), providing complex logistical event support, discounted airfares with flexible conditions* and group check-in facilities.</p>

        <p className=" text-justify heading-note">Our Group Travel Team manage inbound and outbound group travel programs, and our global network is underpinned by compatible systems and processes in every market driving efficiency, consistency and peace of mind.</p>
    </div>

    <div className="col-md-7 p-0">
        <img src={cruise} className="img-fluid" loading="lazy"/>
    </div>

    
    </div>
    </div>
</section>


{/* form and address */}
<section className="form pt-4 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-5 mt-5 order-2 order-md-1">
                <div className="row pt-5 mt-5 location-details ">
                    <div className="col-md-3" >
                        <img src={location} className="contact-icon "/>
                    </div>
                    <div className="col-md-9">
                        <h5 className="font-weight-bold">Find us at the Office</h5>
                        <p>115, Office Court Building,
                            Oud Metha P.O.Box 23240
                            Dubai, United Arab Emirates</p>
                    </div>
                </div>

                <div className="row mt-5 detail">
                    <div className="col-md-3 ">
                        <img src={call} className="contact-icon "/>
                    </div>
                    <div className="col-md-9">
                        <h5 className="font-weight-bold">Give us a call</h5>
                        <p>+971 4 399 9332 <br>
                        </br>+971 4 399 9335</p>
                    </div>
                </div>


                <div className="row mt-5 detail">
                    <div className="col-md-3">
                        <img src={email} className="contact-icon "/>
                    </div>
                    <div className="col-md-9">
                        <h5 className="font-weight-bold">Send us an Email</h5>
                        <p>bookings@axistravel.ae</p>
                    </div>
                </div>


            </div>



            <div className="col-md-7 order-1 order-md-2">
                <div className="contact-form p-5">
                    <h4 className="font-weight-bold">Send us a message</h4>
                    <p className="heading-note">You can contact us with anything related to our Products. We'll get in touch with you as soon as possible</p>


                    <form onSubmit={submitemail}>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="label-note">Full Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="label-note">Email Address </label>
                        <input type="email" class="form-control" id="exampleInputPassword1" name="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="label-note">Subject</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="subject" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="label-note">Your Message</label>
                        <textarea type="text" rows="4" class="form-control" id="exampleInputPassword1" name="message" required/>
                    </div>

                    <Recaptcha
                        sitekey="6LeZuxIcAAAAAKPluVHQy9ZzWWAuhP_7PLO0alxe"
                        render="explicit"
                        onloadCallback={callback}
                        verifyCallback={verifyCallback}
                    />,


                    <button className="btn btn-lg button mt-4" disabled={auth}>SUBMIT</button>
                    </form>
    <p className="text-center font-weight-bold mb-0 mt-2" style={{color:"#0275d8"}}>{msg}</p>

                </div>
            </div>
        </div>
    </div>
</section>

<section className="mb-5 specialist pt-0 pb-5 px-5">
    <h1 className="font-weight-bold text-center">What We Do</h1>

        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="text-center">
                        <img src={tech} className="wedo-icon" loading="lazy"/>
                        <h3 className="mt-3"><b>Travel Technology</b></h3>
                        <Link to="/travel-technology" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>
                    </div>
                </div>

                <div className="col-md-4 mt-4">
                <div className="text-center">
                        <img src={safety} className="wedo-icon" loading="lazy"/>
                        <h3 className="mt-3"><b>Safety and Risk</b></h3>
                        <Link to="/safety-risks" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>
                    </div>
                </div>

                <div className="col-md-4 mt-4">
                <div className="text-center">
                        <img src={account} className="wedo-icon" loading="lazy"/>
                        <h3 className="mt-3"><b>Account Management</b></h3>
                        <Link to="/account-management" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
</section>




















        </>
    )
    }