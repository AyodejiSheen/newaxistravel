import React from 'react'
import '../css/group.css'
import {Link} from 'react-router-dom'


import '../css/delegate.css';


//pictures
import scroll from '../picture/Scroll.png';


import delegate from '../picture/newrefine/mbg46.jpg'




//reactbootstrap
import { Carousel } from 'react-bootstrap'






export const Delegate = () => {
    return(
        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid hero-delegate p-0">

                    <div className="col-12 text-center hero-content-delegate animate__animated animate__fadeInLeft">
                    <h1 className="heading text-white font-weight-bold"> DELEGATE TRAVEL<span style={{color:'#0275d8'}}>  MANAGEMENT</span></h1>
                    <Link to="/contact-us" className="link " ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                      </div>
                </div>
        </section>



 


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



<section className="delegate-travel mt-5">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 mx-auto p-5">
            <h1 className="head-tag adjust-head">Delegate<span style={{color:'#0275d8'}}> Management </span></h1>
        <p className=" text-justify heading-note adjust-note">Our integrated travel and event technology keeps your delegates connected and engaged at every stage of the event experience, from registration to post-event reviews and everything in between.</p>

        <p className=" text-justify heading-note adjust-note">Our innovative tools support maximum efficiency, safety and engagement from the very first communication to returning your travelers safely home, ensuring your teams are highly productive and motivated throughout the experience.</p>

        
    </div>

    <div className="col-md-7 p-0">
        <img src={delegate} className="img-fluid"/>
    </div>


    </div>
    </div>
</section>


<section className="tech-haves pt-5 pb-5">
<h1 className="font-weight-bold text-center">Key Features</h1>

<div className="container">
    <div className="row">
        <div className="col-md-6">
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Bespoke branded website and registration technology</span> </p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Seamless integration with our travel technology</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>End to end delegate experience</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Online delegate registration</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Secure online payment collection</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Delegate onsite app</span></p>
        </div>

        <div className="col-md-6">

        <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Speaker support and abstract management</span></p>
        
        <p  data-aos="fade-down" className="pave-list rounded p-3 "> <i className="fa fa-check-circle mr-3"></i><span style={{  fontWeight:'bold'}}>Travel management before, during and after the event</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Accommodation booking and management</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Sponsorship and exhibition management</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Meeting matching</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Live session polling, session scoring and survey management</span></p>

           
        </div>
    </div>
</div>

</section>




















        </>
    )
    }