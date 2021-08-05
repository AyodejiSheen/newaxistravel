import React from 'react'
import '../css/group.css'
import {Link} from 'react-router-dom'



//pictures
import scroll from '../picture/Scroll.png';
import carousel from '../picture/refine/bg36.jpg'
import carousel1 from '../picture/refine/bg37.jpg'
import meetincentices from '../picture/refine/mbg4.jpg'

import email from '../picture/email.png';
import call from '../picture/call.png';
import location from '../picture/location.png';






//reactbootstrap
import { Carousel } from 'react-bootstrap'






export const Marine = () => {
    return(
        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid p-0 hero-terms">
                <Carousel className="preview">

<Carousel.Item>
<img src={carousel} className="d-block terms1 w-100 img-fluid"  alt="..."/>
</Carousel.Item>

<Carousel.Item>
<img src={carousel1} className="d-block terms1 w-100 img-fluid" alt="..."/>

</Carousel.Item>

</Carousel>
                </div>
        </section>



 


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



<section className="group-travel">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 mx-auto p-5">
            <h1 className="head-tag">MARINE AND OFFSHORE TRAVEL<span style={{color:'#0275d8'}}> - LUXURY CRUISES? </span></h1>
        <p className=" text-justify heading-note">We specialize in servicing large group travel needs (10 to 10,000 travelers), providing complex logistical event support, discounted airfares with flexible conditions* and group check-in facilities.</p>

        <p className=" text-justify heading-note">Our Group Travel Team manage inbound and outbound group travel programs, and our global network is underpinned by compatible systems and processes in every market driving efficiency, consistency and peace of mind.</p>
    </div>

    <div className="col-md-7">


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
                        <img src={location} className="contact-icon img-fluid"/>
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
                        <img src={call} className="contact-icon img-fluid"/>
                    </div>
                    <div className="col-md-9">
                        <h5 className="font-weight-bold">Give us a call</h5>
                        <p>+971 4 399 9332 <br>
                        </br>+971 4 399 9335</p>
                    </div>
                </div>


                <div className="row mt-5 detail">
                    <div className="col-md-3">
                        <img src={email} className="contact-icon img-fluid"/>
                    </div>
                    <div className="col-md-9">
                        <h5 className="font-weight-bold">Send us an Email</h5>
                        <p>bookings@axistravel.ae</p>
                    </div>
                </div>
            </div>



            <div className="col-md-7 order-1 order-md-2">
                <div className="contact-form p-5 shadow">
                    <h4 className="font-weight-bold">Send us a message</h4>
                    <p className="heading-note">You can contact us with anything related to our Products. We'll get in touch with you as soon as possible</p>


                    <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="label-note">Full Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="label-note">Email Address</label>
                        <input type="email" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="label-note">Phone Number</label>
                        <input type="number" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="label-note">Your Message</label>
                        <textarea type="text" rows="4" class="form-control" id="exampleInputPassword1"/>
                    </div>

                    <button className="btn btn-lg button mt-4">SUBMIT</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</section>




















        </>
    )
    }