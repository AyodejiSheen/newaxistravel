import React from 'react'
import '../css/homepage.css';
import {Link, useHistory} from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from 'swiper/core';

// Import Swiper styles
import "swiper/swiper.min.css";







//pictures
import scroll from '../picture/Scroll.png';
// import flight from '../picture/Airport icon.png';
// import visas from '../picture/Passport icon.png';
// import conference from '../picture/conference.png';
// import tour from '../picture/tour.png';
// import hotel from '../picture/hotel.png';
// import car from '../picture/car.png';
// import packages from '../picture/packages.png';
import stack3 from '../picture/tour-3.png';
import stack2 from '../picture/refine/stack2.jpg';
import stack1 from '../picture/refine/stack1.jpg';
import meet1 from '../picture/refine/poly1.png';
import meet2 from '../picture//refine/poly2.png';
import meet3 from '../picture//refine/poly3.png';
import leisure from '../picture/refine/leisure.jpg';
import leisure1 from '../picture/refine/leisure1.jpg';
import leisure2 from '../picture/refine/leisure2.jpg';
import leisure3 from '../picture/refine/leisure3.jpg';
import W01 from '../picture/01.png';
import W02 from '../picture/02.png';
import W03 from '../picture/03.png';
import W04 from '../picture/04.png';
import W05 from '../picture/05.png';
import W06 from '../picture/06.png';


//video
import movie from '../picture/tour vid.mp4';



//reactbootstrap
import { Carousel } from 'react-bootstrap'

SwiperCore.use([Autoplay]);


export const Homepage = () => {
    return (
        <>

        {/* Hero section */}
        <section>
                <div className="container-fluid hero-main">
                    <div className="col-md-6 hero-content animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"> Travel You <span style={{color:"#0275d8"}}>Can Trust</span> </h1>
                                <p className="text-white heading-note text-justify">Axis Travel is a world class travel management company that offers excellent and premium corporate travel services to a full range of companies. Headquartered in Dubai, UAE, Axis Travel provides round the clock, high-quality business travel management that leaves a powerful impression on our clients.   </p>
                                <Link to="/contact-us"className="link"><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>




{/* Our Services New */}
<section className="our-services mt-1 pb-5">

<div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-6 order-md-1 order-2">
            <h1 className="head-tag">Let's get down  <span style={{color:'#0275d8'}}> <br></br> to business</span></h1>
                    <p className="text-justify heading-note pr-5">We can help you book hotel rooms and flights, while also arranging insurance and visas. Axis also offers a range of amazing travel and corporate conference packages that give the best travel deals. </p>

                    <p className="text-justify heading-note pr-5">Our modern user platform, combined with the best customer service in the industry, keeps you moving swiftly and with ease.

                    From enhanced traveller experiences, to saving strategies, spend control, data visibility and more – we’re here to help you travel differently.

                    And by differently, we mean better.</p>
        </div>

        <div className="col-md-6 order-md-2 order-1">
        <video width="100%" controls autoPlay className="video mb-4">
                    <source src={movie} type="video/mp4"/>
                </video>
        </div>
    </div>
</div>

    <div className="container-fluid pb-4">
<div className="row">
    <div className="col-md-4 flight">
    <div className="text-white services-note pt-4 pl-4 pr-4">
                    <h2 className="font-weight-bold">What We Do</h2>
                    <p className="heading-note">As one of the world’s leading corporate travel companies, we are duty bound to ensure that you arrive safely and peacefully. Not to sound cliché, but the safety of your travelers is our top priority and responsibility.</p>
                    <Link to="/what-we-do" className="link text-dark"><button className="bg-white btn text-dark rounded-0 shadow  font-weight-bold pl-4 pr-4 home-explore">Explore</button></Link>
                </div>
    </div>

    <div className="col-md-4 visas">
    <div className="text-white services-note pt-4 pl-4 pr-4">
                    <h2 className="font-weight-bold">Travel Technology</h2>
                    <p className="heading-note">Cutting edge booking technology makes every travel arrangement a stroll in the park. We never have to guess; our booking technology system remembers you and streamlines your booking process, saving time and money.</p>
                    <Link to="/visas-and-passport" className="link text-dark"><button className="bg-white btn text-dark rounded-0 shadow font-weight-bold pl-4 pr-4 home-explore">Explore</button></Link>
                </div>
    </div>


    <div className="col-md-4 tour">
    <div className="text-white services-note pt-4 pl-4 pr-4">
                    <h2 className="font-weight-bold">Why Choose Axis Travel?</h2>
                    <p className="heading-note">At Axis Travels, we know that your company is unique and so are your trips, this is why we ensure that every trip you make is not just travelling, but achieving your travel goals. </p>
                    <Link to="/tour" className="link text-dark"><button className="bg-white btn text-dark rounded-0 shadow font-weight-bold pl-4 pr-4 home-explore">Explore</button></Link>
                </div>
    </div>

</div>

    </div>
</section>


{/* Corporate Service */}
<section className="c-travel  pb-5">
    <div className="container pb-5">
        <div className="row">
            <div className="col-md-6">
                <div className=" c-travel-sub pt-5 p-3">
                <h1 className="head-tag"> Business & Corporate <span style={{color:'#0275d8'}}>  Travel Solution</span></h1>
                <p className="text-justify heading-note">We source the best travel deals for you wherever in the world you’re headed, skillfully offering premium comfort and safety at great rates. Thanks to our tools and resources, your travelers enjoy 24/7 support and personalized travel that make every business trip a perfect landing in the right place and at the right time.</p>
                
                <p className="heading-note text-justify">Avoid the chaos and complexity of planning corporate travel for each trip and enjoy simplified, seamless service and tools that attends to your people’s most basic travel and accommodation need plus more!</p>

                <Link to="/travel-management" className="link" ><button className="btn btn-lg button mt-4">READ MORE</button></Link>
                </div>
            </div>

            <div className="col-md-6" >
                <div className="stack-rect" >
                    <img src={stack3} className="position-absolute stack3" data-aos="fade-up"/>
                    <img src={stack2} className="position-absolute stack2" data-aos="fade-down"/>
                    <img src={stack1} className="position-absolute stack1" data-aos="fade-up"/>
                </div>
            </div>
        </div>
    </div>


{/* Meetings and events */}
    <div className="container mt-5 pt-3  pb-5 meeting">
        <div className="row">
            <div className="col-md-6 order-2 order-md-1">
                <div className="stack-poly">
                    <img src={meet1} className="position-absolute poly1 " data-aos="flip-left"/>
                    <img src={meet2} className="position-absolute poly2" data-aos="flip-right"/>
                    <img src={meet3} className="position-absolute poly3" data-aos="flip-down"/>
                </div>
            </div>

            <div className="col-md-6 order-1 order-md-2" data-aos="zoom-in">
                <h1 className="head-tag">Meetings And <br></br> <span style={{color:'#0275d8'}}>Events</span></h1>
                <p className=" text-justify heading-note">Plan international meetings, conferences and events with us. We have the team, tools and technical capacity to make your meetings interactive and engaging - whether virtual, face-to-face or hybrid. Your attendees enjoy seamless connection and lively conversations no matter what part of the world they are connected from.</p>

        <p className=" text-justify heading-note">
        We provide you with complete end-to-end event management from venue sourcing, agenda planning, event theming, delegate travel and transfers, accommodation and meals, innovative event technology, entertainment and post-event reporting and evaluation. Let our team take care of every aspect of your event, so you can focus on your business.</p>
                    <Link to="/meetings-and-events" className="link" ><button className="btn btn-lg button mt-4">READ MORE</button></Link>
            </div>
        </div>
    </div>
</section>


{/* Leisure travel */}
<section className="leisure-travel mb-4">
    <div className="container-fluid ">
        <div className="row">
        <div className="col-md-6 p-0 order-2 order-md-1" >
            <img src={leisure} className="leisure-pic img-fluid" />
        </div>

        <div className="col-md-6 leisure-content p-5 order-1 order-md-2">
                <h1 className="head-tag text-white text-left"> We Know & Understand Your Great Choice of <span style={{color:'#0275d8'}}><br></br>Leisure Travel</span></h1>
                    <p className="text-justify text-white heading-note">We know your vacation time is precious and we are committed to creating beautiful moments for lifetime memories. Our travel experts have the insider knowledge and experience to create an authentic vacation you’ll never forget.

                    We understand leisure travel. We live it. We know where you want to go and how to get you there. </p>

                <Link to="leisure-travel" className="link"><button className="btn btn-lg button mt-4">READ MORE</button></Link>
                <div className="trip-idea">

            <p className="font-weight-bold mt-5 mb-0 text-secondary">Ideals for your next Trip</p>

             <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicator"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" class="indicator"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" class="indicator"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={leisure1} className="leisure-car"/>
                <img src={leisure2} className="leisure-car"/>
                <img src={leisure3} className="leisure-car"/>
                </div>
                <div class="carousel-item">
                <img src={leisure2} className="leisure-car"/>
                <img src={leisure1} className="leisure-car"/>
                <img src={leisure3} className="leisure-car"/>
                </div>
                <div class="carousel-item">
                <img src={leisure3} className="leisure-car"/>
                <img src={leisure1} className="leisure-car"/>
                <img src={leisure2} className="leisure-car"/>
                </div>
            </div>
            </div> 
                </div>
        </div>

        </div>
    </div>
</section>


{/* Why choose Us */}
<section className="mt-5 why-us" id="why-choose-us">
     

{/* About Us */}
<section className="about-us mt-5 mb-5 pb-5">
        <div className="container">
            <div className="row">
            <div className="col-md-6 about p-5">
                <h1 className="head-tag text-white">About<span style={{color:'#0275d8'}}> Us</span></h1>

                <p className="text-justify text-white heading-note">Axis Travel is a world class travel management company that offers excellent and premium corporate travel services to a full range of companies. Headquartered in Dubai, UAE, Axis Travel provides round the clock, high-quality business travel management that leaves a powerful impression on our clients. We can help you book hotel rooms and flights, while also arranging insurance and visas. Axis also offers a range of amazing travel and corporate conference packages that give the best travel deals. </p>

                <p className="text-white text-justify heading-note">Axis Travel & Tourism makes each experience refreshingly easy and hassle-free. 
                                We worry about and attend to your company’s travel plans, bookings and accommodations so that you don’t have to. 
                                </p>

                <Link to="/who-we-are" className="link"><button className="btn btn-lg button mt-4">READ MORE</button></Link>
            </div>

            <div className="col-md-6 mt-4 about-us-video">

                <div className="ml-2" data-aos="fade-up">
                <h1 className="head-tag mt-4">Travel & Tour<span style={{color:'#0275d8'}}> Inspiration</span></h1>

                <p className="text-justify heading-note ">Finding yourself the world's most intriguing destinations starts here. It's where you'll access the essentials to create authentic experiences from the most trusted source in travel. Whether it's trip that's specific or one that's spontaneous - these are the dynamic deals and stunning splurges that make seeing the world not only possible, but incredible.</p>
                <a href="https://indextours.axistravel.ae" className="link" ><button className="btn btn-lg button tour-but">BOOK A TOUR</button></a>
                </div>

                <div >
        <video width="100%" controls autoPlay className="video mb-4">
                    <source src={movie} type="video/mp4"/>
                </video>
        </div>


            </div>
            </div>
        </div>
</section>




</section>

<div className="partner-quote col-10 col-md-5 text-center mx-auto mb-5">
            <p className="text-justify heading-note mb-0 text-center font-weight-bold" style={{color:"#0275d8"}}><i>We are excited to welcome you aboard. Make us your travel partner and let’s take you to grander heights!</i></p>
</div>







        </>
    )
}

