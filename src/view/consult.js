import React from 'react';
import {Link} from 'react-router-dom';
import '../css/consult.css'



//pictures
import scroll from '../picture/Scroll.png';
import data from '../picture/data.png';
import enacting from '../picture/enacting.png';
import brain from '../picture/brain.png';

import location from '../picture/location.png';
import email from '../picture/email.png';
import call from '../picture/call.png';


export const Consult = () => {
    return(
        <>


        {/* Hero section */}
        <section>
                <div className="container-fluid hero-consult">

                    <div className="col-md-5 hero-content-consult">
                                <h1 className="heading text-white"><b>Consulting<span style={{color:"#0275d8"}}> <br></br>Services </span></b></h1>
                                <p className="text-white text-justify heading-note">Gain a competitive advantage with our deep expertise in global travel to create a roadmap for your travel managers to follow. Whether you need a professional travel consultant or consulting on how to build your travel program internally, our team of experts is at your service.</p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                    </div>
                </div>
        </section>



<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>





{/* Note section */}
<section className="note">
    <div className="container p-5 page-note">
    <h2 className="text-center">Optimizing your travel<span style={{color:"#0275d8"}}> program with you </span></h2>
        <p className="text-center heading-note">We’ve worked with thousands of companies to help them create travel programs tailored to achieve specific goals. Our extensive deep expertise capabilities and results-oriented approach allow us to build and implement strategies that can help streamline operations, improve the traveler experience, reduce risk, and increase savings.
</p>
    </div>
</section>


<section className="consult-option p-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div data-aos="flip-right" class="card p-4  bg-light mt-3 most-offer-consult">
                        <div className="time-saving-cont">
                        <img src={data} class="card-img-top time-saving-icon"/>
                        </div>
                        <div class="card-body p-0 mt-3">
                            <h5 class=" font-weight-bold">Data & Analytics Insight</h5>
                            <p class="card-text text-justify">Maximize efficiency with our policy evaluation, peer benchmarking, and system integration.</p>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 col-lg-4">
                <div data-aos="flip-right" class="card p-4  bg-light mt-3 most-offer-consult">
                    <div className="time-saving-cont">
                    <img src={enacting} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class=" font-weight-bold">Enacting Change</h5>
                        <p class="card-text text-justify">Implement the right travel programs to meet your objectives and increase your traveler’s satisfaction.</p>
                    </div>
                </div>
                </div>


                <div className="col-md-6 col-lg-4">
                <div data-aos="flip-right" class="card p-4  bg-light mt-3 most-offer-consult">
                    <div className="time-saving-cont">
                    <img src={brain} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class=" font-weight-bold">Insights & Strategy</h5>
                        <p class="card-text text-justify">Our consulting services can also help you better manage, track, and predict your travel spend using research, reporting, and insights.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
</section>




{/* form and address */}
<section className="consult-form pt-4 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-5 mt-5">
                <div className="row pt-5 mt-5 location-details ">
                    <div className="col-md-3">
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



            <div className="col-md-7">
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