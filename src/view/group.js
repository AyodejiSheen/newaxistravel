import React from 'react'
import '../css/group.css'
import {Link} from 'react-router-dom'

import '../css/group.css';


//pictures
import scroll from '../picture/Scroll.png';
import group from '../picture/newrefine/mbg28.jpg'







//reactbootstrap
import { Carousel } from 'react-bootstrap'






export const Group = () => {
    return(
        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid hero-group p-0">

                    <div className="col-12 text-center hero-content-group animate__animated animate__fadeInLeft">
                    <h1 className="heading text-white font-weight-bold"> GROUP<span style={{color:'#0275d8'}}> TRAVEL</span></h1>
                    <Link to="/contact-us" className="link " ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                      </div>
                </div>
        </section>



 


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



<section className="group-travel mt-5">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 mx-auto p-5">
            <h1 className="head-tag adjust-head">Group<span style={{color:'#0275d8'}}> Travel </span></h1>
        <p className=" text-justify heading-note adjust-note">We specialize in servicing large group travel needs (10 to 10,000 travelers), providing complex logistical event support, discounted airfares with flexible conditions* and group check-in facilities.</p>

        <p className=" text-justify heading-note adjust-note">Our Group Travel Team manage inbound and outbound group travel programs, and our global network is underpinned by compatible systems and processes in every market driving efficiency, consistency and peace of mind.</p>
    </div>

    <div className="col-md-7 p-0">
        <img src={group} className="img-fluid"/>
    </div>


    </div>
    </div>
</section>


<section className="tech-haves pt-5 pb-5">
<h1 className="font-weight-bold text-center">Key Features</h1>

<div className="container">
    <div className="row">
        <div className="col-md-6">
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Discount group airfares with flexible conditions* – including changes, payment schedules, return of unused seats without penalty</span> </p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Group registration services tailored to your needs</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Capped costs – control your budget with set fares</span></p>



            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Secure availability – have the exact number of airline seats you need held in advance</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Seamless and convenient transfer coordination, allowing you to reduce costs</span></p>
        </div>

        <div className="col-md-6">

        <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Volume discounts – competitively priced fares for your travelers when booking large numbers</span></p>

        <p  data-aos="fade-down" className="pave-list rounded p-3 "> <i className="fa fa-check-circle mr-3"></i><span style={{  fontWeight:'bold'}}>Detailed flight studies according to policies and route deals</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Onsite travel desk</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>24-hour support for all programs</span></p>

           
        </div>
    </div>
</div>

</section>




















        </>
    )
    }