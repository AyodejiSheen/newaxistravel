import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../css/corporate.css';


//pictures
import trip from '../picture/newrefine/mbg7.jpg'
import scroll from '../picture/Scroll.png';
import unique from '../picture/newrefine/mbg8.jpg'
import visibility from '../picture/newrefine/ssbg3.jpg'
import simpler from '../picture/newrefine/ssbg4.jpg'
import industry from '../picture/newrefine/ssbg5.jpg'
import policy from '../picture/newrefine/ssbg6.jpg'



export const Corporate = () => {
    return (
        <>
        {/* Hero section */}
        <section>
                <div className="container-fluid hero-corporate">

                    <div className="col-md-6 hero-content-corporate animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Travel Smarter <span style={{color:"#0275d8"}}> <br></br>with Axis</span></b></h1>
                                <p className="text-white heading-note">Whether it’s exploring new wonders in places beyond or taking trips to bring your business to grander heights, Axis Travel & Tourism offers first-rate travel and tour solutions to make each journey a worry-free experience. From booking flight tickets and accommodation to organizing leisure tours.</p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>



<div className="text-center mb-5 main-scroll">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* Note section */}
<section>
    <div className="container-fluid">
            <div className="row">

                <div className="col-md-7 p-0 order-2 order-md-1">
                <img src={trip} className="img-fluid"/>
                </div>

                <div className="col-md-5 p-5 order-1 order-md-2 column-note">
                <h1 className="head-tag text-left" >When we plan your business trips,  <span style={{color:'#0275d8'}}>we mean business.</span> </h1>
                <p className="text-justify heading-note">We understand that business travel is a big deal for global organizations so we take yours seriously. Our focus is to make your business trips as smooth as possible with zero time wasted on the unnecessary back and forth.</p>  

                <p className="text-justify heading-note">We source the best travel deals for you wherever in the world you’re headed, skillfully offering premium comfort and safety at great rates. Thanks to our tools and resources, your travelers enjoy 24/7 support and personalized travel that make every business trip a perfect landing in the right place and at the right time.</p>  

                </div>
            </div>
        </div>
</section>


{/* preimer Corporate */}
<section className="priemer-section pb-4">
        <div className="container-fluid priemer">
            <div className="">
            <div className="col-md-6 priemer-note" data-aos="fade-down">
            <h1 className="head-tag text-left">Key Features of our <span style={{color:'#0275d8'}}> business travel solutions</span></h1>


            <ul className="feature-list">
                <li><p className="text-justify heading-note mb-0 font-weight-bold" >Grand and exclusive accommodation bookings when you need it</p></li>

                <li><p className="text-justify heading-note mb-0 font-weight-bold" >24/7 traveler support</p></li>
                <li><p className="text-justify heading-note mb-0 font-weight-bold" >Efficient and expert customer care team</p></li>
                <li><p className="text-justify heading-note mb-0 font-weight-bold" >Maximized savings on business trips</p></li>
                <li><p className="text-justify heading-note mb-0 font-weight-bold" >Supreme comfort and safety</p></li>
                <li><p className="text-justify heading-note mb-0 font-weight-bold" >Direct, straight to the point correspondence without unnecessary back and forth</p></li>
                <li><p className="text-justify heading-note mb-0 font-weight-bold" >Grand and exclusive accommodation bookings when you need it</p></li>
            </ul>

            <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
            </div>
            </div>
        </div>
</section>


{/* corporate travel qualities */}

<section className="corporate-qualities">
        <div className="container-fluid">
            <div className="row">
                <div data-aos="fade-up" className="col-md-7 p-0 order-2 order-md-1">
                    <img src={unique} className="qualities-pics img-fluid"/>
                </div>

                <div className="col-md-5 corporate-list p-5 order-1 order-md-2">
                <h1 className="head-tag text-left">Unique travel solutions  <span style={{color:'#0275d8'}}>designed for your company </span></h1>
                <p className="text-justify heading-note ">Whatever the business activity, whether setting goals or travelling, your company does it differently. From the frequency of travel, the number of travelers, travelling budget, time frame, frequently visited countries and so on, your company is unique and special to us.</p>
                <p className="text-justify heading-note">As an industry giant or a dignified SME, enjoy customized travel solutions that resonate with your company’s style and preference.</p>
                </div>
            </div>
        </div>
</section>


{/* partnership section */}
<section className="corporate-part mt-5 pb-5">
        <div className="container">
            <div className="col-md-6 mx-auto p-0 corporate-key">
        <h1 className="head-tag text-center mb-0">Key Features of our  <span style={{color:'#0275d8'}}>Corporate Travel solutions</span></h1>
            </div>

            <div className="row mt-4 ">
                <div className="col-md-4">
                        <div className="card border-0  corporate-feature">
                        <img src={visibility} class="card-img-top card-image img-fluid rounded-0" />
                        <div className="card-body ">
                            <h4 className="card-title tour-title " style={{color:'#0275d8', fontWeight:'bold'}}>Financial visibility for your business</h4>
                            <p className="heading-note text-justify">Get the best travel and accommodation management aligned to your specifications with cost-effective options plus a comprehensive, easy to understand financial report for every trip. </p>
                        </div>
                        </div>
                </div>

                <div className="col-md-4">
                <div className="card border-0  corporate-feature">
                        <img src={simpler} class="card-img-top img-fluid card-image rounded-0" />
                        <div className="card-body ">
                            <h4 className="card-title tour-title " style={{color:'#0275d8', fontWeight:'bold'}}>Simpler business travel for your people</h4>
                            <p className="heading-note text-justify">Avoid the chaos and complexity of planning corporate travel for each trip and enjoy simplified, seamless service and tools that attends to your people’s most basic travel and accommodation need plus more!</p>

                        </div>
                        </div>
                </div>


                <div className="col-md-4">
                <div className="card border-0  corporate-feature">
                        <img src={industry} class="card-img-top img-fluid card-image rounded-0"/>
                        <div className="card-body ">
                            <h4 className="card-title tour-title " style={{color:'#0275d8', fontWeight:'bold'}}>We have advanced industry insight</h4>
                            <p className="heading-note text-justify">Whether healthcare, construction, technology, extraction, etc. We master every industry to understand their trends and avert challenges that may come up before any damage occurs.</p>

                        </div>
                        </div>
                </div>

            </div>


            <div className="row">
                <div className="col-md-4">
                <div className="card border-0  corporate-feature">
                        <img src={policy} class="card-img-top img-fluid card-image rounded-0" style={{height:"200px"}}/>
                        <div className="card-body ">
                            <h4 className="card-title tour-title " style={{color:'#0275d8', fontWeight:'bold'}}>We adhere strongly to your company travel policy</h4>
                            <p className="heading-note text-justify">We ensure that every travel arrangement for your company follows due process and abides by your company’s travel policy.  
                            Don’t have a travel policy? We will create one for you. 
                            </p>

                        </div>
                        </div>
                </div>

                <div className="col-md-8">
                <h1 className="head-tag text-center mt-5" >Other  <span style={{color:'#0275d8'}}> Features</span> </h1>

                <div className="container other-features">
                    <div className="row">
                        <div className="col-md-6 ">
                            <p  data-aos="fade-down" className="pave-list rounded p-3 bg-white" style={{color:'#010e1b'}}> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Online/Offline </span> travel and accommodation support</p>

                            <p  data-aos="fade-down" className="pave-list rounded p-3 bg-white" style={{color:'#010e1b'}}> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Online or Offline</span> Meeting Support</p>

                            <p  data-aos="fade-down" className="pave-list rounded p-3 bg-white" style={{color:'#010e1b'}}> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Wide </span> Booking options</p>
                        </div>

                        <div className="col-md-6">
                            <p  data-aos="fade-down" className="pave-list rounded p-3 bg-white" style={{color:'#010e1b'}}> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Access to our </span> customized resources and tools</p>

                            <p  data-aos="fade-down" className="pave-list rounded p-3 bg-white" style={{color:'#010e1b'}}> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Dicounted </span> travel rates</p>

                            <p  data-aos="fade-down" className="pave-list rounded p-3 bg-white" style={{color:'#010e1b'}}> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Tools and resources </span> that directly address your needs. </p>
                        </div>
                    </div>
                </div>

              <div className="partner-quote col-10 col-md-8 text-center mx-auto mt-4">
            <p className="text-justify heading-note mb-0 text-center font-weight-bold" style={{color:"#0275d8"}}><i>Let Axis plan your business and corporate travels and discover huge travelling benefits you never knew existed.</i></p>
</div>
                </div>
            </div>
        </div>
</section>












        </>
    )
}