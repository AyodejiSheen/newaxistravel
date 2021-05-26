import React from 'react';
import {Link} from 'react-router-dom';
import '../css/onestop.css'



//pictures
import scroll from '../picture/Scroll.png';
import book from '../picture/booking.png';
import approve from '../picture/approval.png';
import save from '../picture/saving.png';
import s247 from '../picture/247.png';
import disflight from '../picture/flight-cancel.png';


//video
import movie from '../picture/tour vid.mp4';




export const Onestop = () => {
    return(
        <>

        {/* Hero section */}
        <section>
                <div className="container-fluid hero-onestop">

                    <div className="col-md-5 hero-content-onestop">
                                <h1 className="heading text-white"><b>One-Stop<span style={{color:"#0275d8"}}> <br></br>Travel </span></b></h1>
                                <p className="text-white text-justify heading-note">Business travel is a great way to grow your business. We’re with you every step of the way, delivering all the essentials of a well-managed travel program.We are always ready to help and assist you during your travel.
                                Just to make sure you have an awesome travel experience</p>
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
        <p className="text-center heading-note">An effective travel program works for you on all levels. You’ll be able to manage the high costs of travel, look out for your travelers, and support your duty of care requirements. But if you don’t have a program that’s ok because all the components are here with this one-stop solution.
</p>
    </div>
</section>







<section className="make-most pb-5">
    <div className="container">
        <div   className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div data-aos="flip-right" class="card p-4  bg-light mt-3 most-offer-onestop">
                    <div className="time-saving-cont">
                    <img src={book} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class=" font-weight-bold">BETTER BOOKING</h5>
                        <p class="card-text text-justify">Travelers will have a choice of all major airlines, ground transportation providers and over 2 million overnight stay options so there’s no need to search elsewhere.1. They can book a door-to-door trip in minutes with our AI-driven booking platform.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 ">
            <div  data-aos="flip-left" class="card p-4 bg-light mt-3 most-offer-onestop">
                    <div className="time-saving-cont">
                    <img src={approve} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class=" font-weight-bold">PRE-TRIP APPROVAL SYSTEM</h5>
                        <p class="card-text text-justify">Getting travelers to book economical trips is easier when you have our booking approval system that notifies a manager of bookings before they’re ticketed. Set it up the way that works best for you.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 ">
            <div data-aos="flip-right" class="card p-4 bg-light mt-3 most-offer-onestop">
                    <div className="time-saving-cont">
                    <img src={save} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class=" font-weight-bold">MAXIMIZING SAVINGS</h5>
                        <p class="card-text text-justify ">Discounts on flights, hotel, and car rentals are already negotiated for you. And with airfares and hotel rates changing all the time, it’s good to know you’ll never the miss the lowest price with our reshopping technology.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 ">
            <div data-aos="flip-right" class="card p-4 bg-light mt-3 most-offer-onestop">
                    <div className="time-saving-cont">
                    <img src={s247} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class=" font-weight-bold">24/7 PERSONALIZED SERVICE</h5>
                        <p class="card-text text-justify ">Travelers get the know-me support of travel counselors. With access to a traveler’s preferences, they’ll know where they’ve been, where they’re going and what they like.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 ">
            <div data-aos="flip-left" class="card p-4 bg-light mt-3 most-offer-onestop">
                    <div className="time-saving-cont">
                    <img src={disflight} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class=" font-weight-bold">FLIGHT DISRUPTION SERVICE</h5>
                        <p class="card-text text-justify ">Cancelled and delayed flights are bound to happen. But now travelers will be notified and assisted so they can get booked on an alternate flight.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>




{/* Effortlessly */}
<section className="effortless mt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6 p-0 mb-3">
                <video width="100%" controls className="video ">
                    <source src={movie} type="video/mp4"/>
                </video>
            </div>

            <div className="col-md-6">
                <div className="manage-trip rounded p-4">
                    <h5 className="text-white"><span style={{color:"#0275d8"}}>Manage the trip effortlessly</span></h5>

                    <p className="heading-note text-white">From booking to traveling to reporting, every part of the trip becomes easier with tools and services that work together seamlessly. Travelers will have a centralized booking platform and proactive assistance when flights cancel.

                    Managers can run reports on your travel spend and uncover opportunities for program improvement. Unused flight tickets? You’ll have a way to regain the value and apply it to a new one. With so many complex details linked to the travel experience, it’ll be great to have efficient ways to manage it all.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

</section>





























        </>
    )
}