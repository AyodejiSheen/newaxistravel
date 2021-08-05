import React from 'react'
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';


import '../css/specialist.css';


//pictures
import consult from '../picture/refine/consult-mbg.jpg'
import meeting from '../picture/refine/meeting.jpg'
import business from '../picture/refine/business.jpg'


export const Specialist = () => {
    return (
        <>
                    {/* Hero section */}
        <section>
                <div className="container-fluid hero-account">

                    <div className="col-md-6 hero-content-account                     animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Added essential services for your traveler’s convenience<span style={{color:"#0275d8"}}> </span></b></h1>
                            
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


<div className="container-fluid d-none">
    <div className="row anchor">
        <div className="anchor-item col-md-4">UAE Entry Visa</div>
        <div className="anchor-item col-md-4">Airport Meet & Greet Service</div>
        <div className="anchor-item  col-md-4">Limousine transfers globally </div>
        <div className="anchor-item col-md-4">Travel Insurance</div>
        <div className="anchor-item col-md-4">Airport Lounge access</div>
        <div className="anchor-item col-md-4">Car rentals </div>
        <div className="anchor-item col-md-4">Passport Assistance </div>
        <div className="anchor-item col-md-4">VIP & Executive travel</div>
    </div>
</div>


{/* pave the way */}
<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5">
            <h1 className="head-tag">International and UAE <span style={{color:'#0275d8'}}> Visa Assistance </span></h1>
        <p className=" text-justify heading-note">We are your only go-to travel company for easy and fast visa arrangements for any country in the world including the UAE. </p>

        <p className=" text-justify heading-note">You and your workforce get to enjoy the convenience of our 24-hour Express Visa processing service that issues UAE 7 to 90-day visas ideal for corporate travel, straight from the Axis office. Our professional visa team will guide you on all required documents. </p>

        <p className=" text-justify heading-note">We also provide expert advice to visa applicants, helping them avoid common mistakes in the process. By assisting with the processing of UAE and worldwide visas, as well as helping you apply for and obtain visas for other countries, we make your travel experience easy as a gentle breeze.</p>
    </div>

        <div className="col-md-7 ">
            
        </div>
            </div>
        </div>
</section>


<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">

        <div className="col-md-7">
            
        </div>


            <div className="col-md-5 p-5">
            <h1 className="head-tag"><span style={{color:'#0275d8'}}>Covid-19 Assistance</span></h1>
            <p className=" text-justify heading-note">The pandemic has changed travelling slightly. Not just for individuals but also organizations. We are here to ensure that this doesn’t affect your business adversely. We will help you plan business travel to protect your traveler’s health and keep your business safe. </p>

            <p className=" text-justify heading-note">In addition, while it seems that Covid-19 certificates will become mandated as a travel pass, we will help your travelers with Covid-19 certificates, facilitating the process of vaccination to ensure that business activities are not stifled or put on hold.</p>


        </div>


            </div>
        </div>
</section>



<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5">
            <h1 className="head-tag">Exclusive International   <span style={{color:'#0275d8'}}> and local hotel bookings </span></h1>
        <p className=" text-justify heading-note">At Axis Travel, we partner with leading hotel groups like Marriott, IHG, Hilton and Starwoods; this gives us access to thousands of properties and rooms across the globe, allowing us to offer you excellent accommodation at the best rates. Thanks to our intuitive and modern booking system, we can locate and secure accommodation based on your preferences, in seconds. We make the reservations while you look forward to a comfortable and secure home away from home.</p>
    </div>

        <div className="col-md-7 ">
            
        </div>
            </div>
        </div>
</section>



<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">

        <div className="col-md-7">
            
        </div>


            <div className="col-md-5 p-5">
            <h1 className="head-tag">Travel experts in your <span style={{color:'#0275d8'}}> industry</span></h1>
            <p className=" text-justify heading-note">Whatever your industry, get targeted and personalized travel industry insight from our experts. We know that no organization is the same, even if they belong to the same industry, so we make personalized insight delivery a priority. We provide essential services that fit your business needs. Whether your industry is pharmaceutical, marine, technology, oil and gas, agriculture, etc. we constantly update our industry knowledge to ensure that we can attend to all of your travel worries or needs at any point in time</p>
        </div>


            </div>
        </div>
</section>





















        </>
    )
}


