import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../css/leisure.css'


//pictures
import scroll from '../picture/Scroll.png';
import leisuredest from '../picture/refine/mbg8.jpg';
import leisurestack1 from '../picture/refine/lbg1.jpg';
import leisurestack2 from '../picture/refine/lbg2.jpg';
import leisurestack3 from '../picture/refine/lgb3.jpg';
import leisurestack4 from '../picture/refine/lgb4.jpg';
import space from '../picture/refine/idea3.jpg';
import adventure from '../picture/refine/idea4.jpg';
import rail from '../picture/refine/idea6.jpg';
import family from '../picture/refine/idea2.jpg';
import honeymoon from '../picture/refine/idea5.jpg';
import cruise from '../picture/refine/idea1.jpg';


export const Leisure = () => {
    return(
        <>

                    {/* Hero section */}
        <section>
                <div className="container-fluid hero-leisure">

                    <div className="col-md-6 hero-content-leisure animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Leisure<span style={{color:"#0275d8"}}> Travel</span></b></h1>
                                <p className="text-white heading-note"></p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5 p-5">
            <h1 className="head-tag">Cruises  <span style={{color:'#0275d8'}}>  and Vessels</span></h1>
                <p className=" text-justify heading-note">We facilitate fast and reliable ticket bookings for clients who wish to reach local destinations via ocean liners. Know the latest promo rates through our travel agents who are always happy to assist you.</p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
          
      </div>

      <div className="col-md-7">

      </div>
    </div>
  </div>
</section>


<section>
  <div className="container-fluid">
    <div className="row">

    <div className="col-md-7">

</div>


      <div className="col-md-5 p-5">
            <h1 className="head-tag">Tours  <span style={{color:'#0275d8'}}></span></h1>
                <p className=" text-justify heading-note">We offer both regular and VIP tours across Dubai and the Emirates. We cater for corporate team building and tours as well as tours for guests and delegates. Same day booking is available with comfortable pick-up and drop-off at your hotel or accommodation.</p>
                <a href="https://indextours.axistravel.ae" className="link" ><button className="btn btn-lg button tour-but">BOOK A TOUR</button></a>
          
      </div>


    </div>
  </div>
</section>


<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5 p-5">
            <h1 className="head-tag">Travel    <span style={{color:'#0275d8'}}> Insurance</span></h1>
                <p className=" text-justify heading-note">You enjoy trips best when you have security and peace of mind, so we have travel insurance services customized to your preference. Breathe easier knowing that your company has temporary or long term coverage of medical expenses and losses incurred while travelling.</p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
          
      </div>

      <div className="col-md-7">

      </div>
    </div>
  </div>
</section>



<section>
  <div className="container-fluid">
    <div className="row">

    <div className="col-md-7">

</div>


      <div className="col-md-5 p-5">
            <h1 className="head-tag">Car/Van    <span style={{color:'#0275d8'}}>Rental</span></h1>
                <p className=" text-justify heading-note">Finally at your destination? Show up in style and comfort with our variety of quality and luxury cars and vans that meet any business travelling need to ensure travelers’ comfort and safety on the road.</p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
          
      </div>


    </div>
  </div>
</section>


<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5 p-5">
            <h1 className="head-tag">International and     <span style={{color:'#0275d8'}}> Local Tour Packages</span></h1>
                <p className=" text-justify heading-note">Planning a business holiday trip or a destination office party? Choose from a variety of vacation destinations around the world as we efficiently cater to the preparations</p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
          
      </div>

      <div className="col-md-7">

      </div>
    </div>
  </div>
</section>



























        </>
    )
}