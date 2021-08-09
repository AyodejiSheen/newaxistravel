import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../css/leisure.css'


//pictures
import scroll from '../picture/Scroll.png';

import carousel from '../picture/newrefine/bg24.jpg'
import carousel1 from '../picture/refine/bg21.jpg'
import carousel2 from '../picture/newrefine/bg26.jpg'

import carousel3 from '../picture/newrefine/smbg4.jpg'
import carousel4 from '../picture/newrefine/smbg5.jpg'
import carousel5 from '../picture/newrefine/smbg7.jpg'


import vessel from '../picture/newrefine/mbg34.jpg'
import tour from '../picture/newrefine/mbg35.jpg'
import insur from '../picture/newrefine/mbg36.jpg'
import rental from '../picture/newrefine/mbg37.jpg'
import local from '../picture/newrefine/mbg38.jpg'






//reactbootstrap
import { Carousel } from 'react-bootstrap'





export const Leisure = () => {
    return(
        <>

                    {/* Hero section */}
                    <section className="lg-screen">
                <div className="container-fluid p-0 hero-terms">
                <Carousel className="preview">

<Carousel.Item>
<img src={carousel} className="d-block terms1 w-100 img-fluid"  alt="..."/>
</Carousel.Item>

<Carousel.Item>
<img src={carousel1} className="d-block terms1 w-100 img-fluid" alt="..."/>
</Carousel.Item>

<Carousel.Item>
<img src={carousel2} className="d-block terms1 w-100 h-50 img-fluid" alt="..."/>
</Carousel.Item>

</Carousel>
                </div>
        </section>


                            {/* Hero section */}
                            <section className="sm-screen">
                <div className="container-fluid p-0 hero-terms">
                <Carousel className="preview">

<Carousel.Item>
<img src={carousel3} className="d-block  img-fluid"  alt="..."/>
</Carousel.Item>

<Carousel.Item>
<img src={carousel4} className="d-block img-fluid" alt="..."/>
</Carousel.Item>

<Carousel.Item>
<img src={carousel5} className="d-block img-fluid" alt="..."/>
</Carousel.Item>

</Carousel>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


<section className="mt-5">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5 p-5" data-aos="fade-down">
            <h1 className="head-tag adjust-head">Cruises  <span style={{color:'#0275d8'}}>  and Vessels</span></h1>
                <p className=" text-justify heading-note adjust-note">We facilitate fast and reliable ticket bookings for clients who wish to reach local destinations via ocean liners. Know the latest promo rates through our travel agents who are always happy to assist you.</p>
                <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
          
      </div>

      <div className="col-md-7 p-0">
        <img src={vessel} className="img-fluid"/>
    </div>
    </div>
  </div>
</section>


<section className="booking-section">
  <div className="container-fluid">
    <div className="row">

    <div className="col-md-7 p-0 order-2 order-md-1">
        <img src={tour} className="img-fluid"/>
    </div>


      <div className="col-md-5 p-5 order-1 order-md-2" data-aos="zoom-in-out">
            <h1 className="head-tag adjust-head">Tours  <span style={{color:'#0275d8'}}></span></h1>
                <p className=" text-justify heading-note adjust-note">We offer both regular and VIP tours across Dubai and the Emirates. We cater for corporate team building and tours as well as tours for guests and delegates. Same day booking is available with comfortable pick-up and drop-off at your hotel or accommodation.</p>
                <a href="https://indextours.axistravel.ae" className="link adjust-btn" ><button className="btn btn-lg button tour-but">BOOK A TOUR</button></a>
          
      </div>


    </div>
  </div>
</section>


<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5 p-5" data-aos="fade-down">
            <h1 className="head-tag adjust-head">Travel    <span style={{color:'#0275d8'}}> Insurance</span></h1>
                <p className=" text-justify heading-note adjust-note">You enjoy trips best when you have security and peace of mind, so we have travel insurance services customized to your preference. Breathe easier knowing that your company has temporary or long term coverage of medical expenses and losses incurred while travelling.</p>
                <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
          
      </div>

      <div className="col-md-7 p-0">
        <img src={insur} className="img-fluid"/>
    </div>
    </div>
  </div>
</section>



<section className="booking-section">
  <div className="container-fluid">
    <div className="row">

    <div className="col-md-7 p-0 order-2 order-md-1">
        <img src={rental} className="img-fluid"/>
    </div>


      <div className="col-md-5 p-5 order-1 order-md-2" data-aos="fade-right">
            <h1 className="head-tag adjust-head">Car/Van    <span style={{color:'#0275d8'}}>Rental</span></h1>
                <p className=" text-justify heading-note adjust-note">Finally at your destination? Show up in style and comfort with our variety of quality and luxury cars and vans that meet any business travelling need to ensure travelers’ comfort and safety on the road.</p>
                <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
          
      </div>


    </div>
  </div>
</section>


<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5 p-5">
            <h1 className="head-tag adjust-head">International and     <span style={{color:'#0275d8'}}> Local Tour Packages</span></h1>
                <p className=" text-justify heading-note adjust-note">Planning a business holiday trip or a destination office party? Choose from a variety of vacation destinations around the world as we efficiently cater to the preparations</p>
                <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
          
      </div>

      <div className="col-md-7 p-0">
        <img src={local} className="img-fluid"/>
    </div>
    </div>
  </div>
</section>



























        </>
    )
}