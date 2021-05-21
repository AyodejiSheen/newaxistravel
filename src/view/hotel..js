import React from 'react';
import {Link} from 'react-router-dom';
import '../css/hotel.css'


//pictures
import scroll from '../picture/Scroll.png';
import hotel11 from '../picture/hotel11.png';
import hotel12 from '../picture/hotel12.png';
import hotel13 from '../picture/hotel13.png';
import hotel14 from '../picture/hotel14.png';
import hotel2 from '../picture/hotel2.png';
import hotel3 from '../picture/hotel3.png';
import marrothotel from '../picture/marrothotel.png';
import hiltonhotel from '../picture/hiltonhotel.png';
import avidhotel from '../picture/avidhotel.png';

import img from '../picture/img.png';
import hilton from '../picture/hilton1.png';
import marrot from '../picture/marrot.png';




export const Hotel = () =>{
    return(
        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid hero-hotel">

                    <div className="col-md-5 hero-content-hotel">
                    <h1 className="heading text-white"><b>Hotel<span style={{color:"#0275d8"}}> <br></br>Reservation</span></b></h1>

                                <p className="text-white text-justify heading-note">Whatever your budget, whenever you need to book,
wherever you need to go, our platform puts you and your
team in pole position to find the right hotel for your next
business trip.</p>
<Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>

                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



{/* hotel booking */}
<section className="hotel-book mt-4 pt-5 pb-5">
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-6 order-2 order-md-1">
            <div className="row">
                <div className="col-6 p-1">
                    <img src={hotel11} className="img-fluid" data-aos="flip-right"/>
                </div>

                <div className="col-6 p-1">
                    <img src={hotel12} className="img-fluid" data-aos="flip-left"/>
                </div>
            </div>

            <div className="row">
                <div className="col-6 p-1">
                    <img src={hotel13} className="img-fluid" data-aos="flip-right"/>
                </div>

                <div className="col-6 p-1">
                    <img src={hotel14} className="img-fluid" data-aos="flip-left"/>
                </div>
            </div>
        </div>

        <div className="col-md-6 p-5 mt-5 hotel-book-note order-1 order-md-2" data-aos="fade-right"> 
        <h1 className="head-tag text-left">Hotel Booking with<span style={{color:'#0275d8'}}> more choice, better rates, total control.</span></h1>  
                <p className="text-justify heading-note">Axis Travel has access to thousands of hotels and properties,
both within the UAE and across the globe. Our team has the
expertise to find and book accommodation that meets your
needs within seconds, offering on-hand inventory during key
exhibition periods. We constantly review the market to ensure
that our clients' hotel bookings offer the highest quality at the
best price.</p>
<Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>

        </div>
        </div>
    </div>
</section>



{/* hotel partner  */}
<section className="hotel-partner" >
<div className="container-fluid ">
            <div className="row">
                <div className="col-md-6  p-5 hotel-partner-note">

                <p className="text-justify heading-note">Our partnerships with leading hotel groups such as Hilton,
Marriott and IHG allow us to offer you the highest quality
accommodation at the best rates – with savings of up to 50%
on the published price – while also offering last minute
upgrades with minimal or no additional charges. </p>

            <div className="row justify-content-center hotel-all-screen">
                <div className="col-6">
                    <img src={marrot} className="img-fluid partner-logo" data-aos="fade-up"/>
                </div>

                <div className="col-6">
                    <img src={hilton} className="img-fluid partner-logo" data-aos="fade-down"/>
                </div>

                <div className="col-6">
                    <img src={img} className="img-fluid partner-logo" data-aos="fade-up"/>
                </div>
            </div>

            <div className="hotel-tab-screen">
                <div >
                    <img src={marrot} className="img-fluid partner-logo"/>
                </div>

                <div >
                    <img src={hilton} className="img-fluid partner-logo"/>
                </div>

                <div>
                    <img src={img} className="img-fluid partner-logo"/>
                </div>
            </div>

                </div>

                <div className="col-md-6 p-0">
                    <img src={hotel2} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>


    {/* benefit */}
    <section className="hotel-benefit pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0 order-2 order-md-1">
                    <img src={hotel3} className="img-fluid"/>
                </div>

                <div data-aos="fade-down" className="col-md-6 p-5 mt-5 smooth-book-note order-1 order-md-2">
                <h1 className="head-tag text-left"><span style={{color:'#0275d8'}}> Benefits of Booking</span> With Us</h1>  
                <div className="text-justify heading-note">
          
          <p><i className="fa fa-check-circle mr-3"> </i><span>Flexible Flight travel policy controls, this gives you complete flexibility and &nbsp; &nbsp;&nbsp; &nbsp; control of your travel budget.</span></p>
          <p><i className="fa fa-check-circle mr-3"> </i><span>24/7 Customer support service.</span></p>
          <p><i className="fa fa-check-circle mr-3"> </i><span>Access to Luxury Hotels for selection.</span></p>
          <p><i className="fa fa-check-circle mr-3"> </i><span>Preferential rates for hotel booking and room reservation.</span></p>
          <p><i className="fa fa-check-circle mr-3"> </i><span>IATA Licensed.</span></p>
  </div>
  <Link to="/contact-us" className="link" ><button data-aos="fade-left" className="btn btn-lg button mt-4 mb-4">CONTACT US</button></Link>

                </div>
            </div>
        </div>
</section>


<section className="popular-hotel mt-5 mb-5">
    <div className="container-fluid">
    <h1 className="head-tag text-center">Popular<span style={{color:'#0275d8'}}> Hotels</span></h1>  
                
        <div className="row">
            <div className="col-md-4">
            <img src={marrothotel} className="img-fluid" data-aos="fade-down"/>
            </div>

            <div className="col-md-4">
            <img src={hiltonhotel} className="img-fluid" data-aos="fade-down"/>
            </div>

            <div className="col-md-4">
            <img src={avidhotel} className="img-fluid" data-aos="fade-down"/>
            </div>
        </div>
    </div>
</section>


















        </>
    )
}