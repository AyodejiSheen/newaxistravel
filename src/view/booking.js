import React from 'react';
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';

import '../css/booking.css';


//pictures
import techpics from '../picture/refine/mockup1.png'



export const Booking = () => {
    return (
        <>

                 {/* Hero section */}
                 <section>
                <div className="container-fluid hero-booking">

                    <div className="col-md-6 hero-content-booking                     animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Seamless travel booking, <span style={{color:"#0275d8"}}> all in one place</span> </b></h1>
                                <p className="text-white  heading-note">Experience travel booking technology that takes the guesswork out of travel management.</p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce newscrol"/>
</div>



<section className=" pb-5 stream-book">
        <div className="container-fluid pl-3 pr-0 stream-note">
            <div className="row mx-auto">
                <div className="col-md-6 p-0 order-md-2 order-1" data-aos="fade-down">
                    <img src={techpics} className="img-fluid mockup"/>
                </div>

                <div className="col-md-6 pl-5 pr-5 pb-5 pt-3 order-md-1 order-2 meeting-col" >
                <h1 className="head-tag text-left">Streamlined Travel <span style={{color:'#0275d8'}}>Booking System</span></h1>
                <p className="heading-note text-justify">It’s time to boost your productivity and increase your Traveller Happiness score with a seamless, end-to-end booking experience. Our systems streamline the booking process to create greater visibility and happier finance teams.</p>

                <p className="heading-note text-justify">Get all your travellers on the same page thanks to our integrated travel booking technology.</p>

                </div>
            </div>
        </div>
</section>



<section className="booking-woes p-2">
        <div className="container-fluid">
            <div className="row">


                <div className="col-md-6 woes-note p-5 bg-light shadow" data-aos="fade-right ">
                <h1 className="head-tag text-left">Leave your travel booking <br></br><span style={{color:'#0275d8'}}>woes behind.</span></h1>
                <p className="text-justify heading-note">Our travel booking system makes every step of your traveller’s journey simple. From competitive airfares and hotel rates to car hire and transfers, we will customise your search results to meet your travel policy.</p>

                <p className="text-justify heading-note">Plan, approve, book, and cancel with ease, whether you’re sitting at your desk or on the move. Integrate your travel policies globally or by location, and view every detail of your company-wide travel bookings in one place.</p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                </div>

                <div className="col-md-6 p-0" data-aos="fade-up">
                    {/* <img src={leisuredest} className="meet"/> */}
                </div>
            </div>
        </div>

</section>


<section className="travelmg-1 pb-5 stream-book">
        <div className="container-fluid pl-3 pr-0 stream-note">
            <div className="row mx-auto">
                <div className="col-md-6 p-0 " data-aos="fade-down">
                    <img src={techpics} className="img-fluid"/>
                </div>

                <div className="col-md-6 pl-5 pr-5 pb-5 pt-3 meeting-col" >
                <h1 className="head-tag text-left">Beyond booking</h1>
                <p className="heading-note text-justify">By booking company travel on one seamless platform, you’ll gain access to valuable insights along the way.   Booking offline? Wherever and however you book, we integrate your booking patterns and travel data for maximum visibility.</p>

                <p className="heading-note text-justify">We analyse all of this mind-boggling data, and hand you simple reports and impactful analytics to elevate your travel programme.</p>
                <Link to="#" className="link" ><button className="btn btn-lg button mt-4">Explore</button></Link>

                </div>
            </div>
        </div>
</section>



































        </>
    )
}