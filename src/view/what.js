import React from 'react';
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';

import '../css/what.css';


//pictures
import booking from '../picture/newrefine/mbg47.jpg'
import advance from '../picture/newrefine/mbg27.jpg'

import tech from '../picture/refine/tech.png'
import safety from '../picture/refine/safety.png'
import account from '../picture/refine/account.png'

import logic from '../picture/newrefine/smbg8.jpg'
import vip from '../picture/newrefine/smbg9.jpg'
import offshore from '../picture/newrefine/smbg10.jpg'
import special from '../picture/newrefine/smbg11.jpg'






export const Whatwedo = () => {
    return (
        <>

                 {/* Hero section */}
        <section>
                <div className="container-fluid hero-what">

                    <div className="col-md-6 hero-content-what                     animate__animated animate__fadeInLeft">
                                <h1 className="font-weight-bold text-white"><b>Building powerful <span style={{color:"#0275d8"}}>corporate connections</span></b></h1>
                                <p className=" text-white heading-note">Choose Axis always, achieve more always. </p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



<section className="mt-5 seamless-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5 p-5 column-note">
                <h1 className="head-tag text-left adjust-head"> Experience Business and Corporate Travel  <span style={{color:'#0275d8'}}>more than ever </span> </h1>
                <p className="text-justify heading-note adjust-note">With flexible, scalable teams available 24/7, you can count on us to get you where you need to go, whenever you need to get there.

                Paired with market-leading technology, you’ll unlock a travel programme that finally puts you in control — letting you travel at the speed of business.</p>  

                <p className="text-justify heading-note adjust-note">Discover a new type of corporate travel. Discover the alternative.</p>
                </div>

                <div className="col-md-7 p-0">
                <img src={booking} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>





<section className="mb-5 what-we p-5 ">
    <h1 className="font-weight-bold text-center">What <span style={{color:'#0275d8'}}>We Do </span></h1>

        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="text-center">
                        <img src={tech} className="wedo-icon" />
                        <h3 className="mt-3"><b>Travel Technology</b></h3>
                        <Link to="/travel-technology" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>
                    </div>
                </div>

                <div className="col-md-4 mt-4">
                <div className="text-center">
                        <img src={safety} className="wedo-icon" />
                        <h3 className="mt-3"><b>Safety and Risk</b></h3>
                        <Link to="/safety-risks" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>
                    </div>
                </div>

                <div className="col-md-4 mt-4">
                <div className="text-center">
                        <img src={account} className="wedo-icon" />
                        <h3 className="mt-3"><b>Account Management</b></h3>
                        <Link to="/account-management" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
</section>


<section className="division mb-5">
    <div className="container-fluid pl-5 pr-5 division-container">
    <h1 className="head-tag text-center mb-0">Other  <span style={{color:'#0275d8'}}>specialized Divisions</span></h1>
    <p className="text-justify heading-note text-center">Introducing our other Specialized Business Travel division to suite your travel experience.</p>  
        <div className="row mt-4">

            <div className="col-md-4 col-lg-3">
                    <div className="card corporate-division">
                        <img src={logic} class="card-img-top img-fluid card-image rounded-0"/>
                        <div className="card-body p-4">
                            <h3 className="card-title tour-title " style={{fontWeight:'bold'}}>Logistics & Travel Essential</h3>
                            <p className="heading-note div-note text-justify">Add essential services for your traveler’s convenience. Here at Axis Travel we will take care of your visas, passport, airport meetings and all the messy paperwork.</p>

                            <Link to="/logistics-travel-essentials" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>

                        </div>
                    </div>
            </div>

            <div className="col-md-4 col-lg-3">
                    <div className="card corporate-division">
                        <img src={vip} class="card-img-top img-fluid card-image rounded-0"/>
                        <div className="card-body p-4">
                            <h3 className="card-title tour-title " style={{fontWeight:'bold'}}>VIP & Executives Travel</h3>
                            <p className="heading-note div-note text-justify">Do your travellers expect a travel experience that goes above and beyond? We make sure your executives travel in luxury with our VIP travel services.</p>

                            <a href="/logistics-travel-essentials/#vip-executives" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></a>

                        </div>
                    </div>
            </div>

            <div className="col-md-4 col-lg-3">
                    <div className="card corporate-division">
                        <img src={offshore} class="card-img-top img-fluid card-image rounded-0"/>
                        <div className="card-body p-4">
                            <h3 className="card-title tour-title " style={{fontWeight:'bold'}}>Marine & Offshore Travel</h3>
                            <p className="heading-note div-note text-justify">Looking for marine and offshore travel experts? Our maritime experts here at Axis Travel have decades of experience in your industry.</p>

                            <Link to="/marine-offshore-travel" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>

                        </div>
                    </div>
            </div>

            <div className="col-md-4 col-lg-3">
                    <div className="card corporate-division">
                        <img src={special} class="card-img-top img-fluid card-image rounded-0"/>
                        <div className="card-body p-4">
                            <h3 className="card-title tour-title " style={{fontWeight:'bold'}}>Specialized Travel</h3>
                            <p className="heading-note div-note text-justify">We also offer specialized services in Exclusive International and local hotel booking, International and UAE Visa Assistance, Covid-19 Assistance.</p>

                            <Link to="/specialized-services" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>

                        </div>
                    </div>
            </div>

        </div>
    </div>
</section>
































        </>
    )
}


