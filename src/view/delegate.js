import React from 'react'
import '../css/group.css'
import {Link} from 'react-router-dom'



//pictures
import scroll from '../picture/Scroll.png';
import carousel from '../picture/refine/bg36.jpg'
import carousel1 from '../picture/refine/bg37.jpg'
import meetincentices from '../picture/refine/mbg4.jpg'






//reactbootstrap
import { Carousel } from 'react-bootstrap'






export const Delegate = () => {
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
            <h1 className="head-tag">Delegate<span style={{color:'#0275d8'}}> Management </span></h1>
        <p className=" text-justify heading-note">Our integrated travel and event technology keeps your delegates connected and engaged at every stage of the event experience, from registration to post-event reviews and everything in between.</p>

        <p className=" text-justify heading-note">Our innovative tools support maximum efficiency, safety and engagement from the very first communication to returning your travelers safely home, ensuring your teams are highly productive and motivated throughout the experience.</p>

        
    </div>

    <div className="col-md-7">
        
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