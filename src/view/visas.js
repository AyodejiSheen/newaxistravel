import React from 'react';
import {Link} from 'react-router-dom';
import '../css/visas.css'


//pictures
import scroll from '../picture/Scroll.png';
import united from '../picture/united.png';
import dubai from '../picture/dubaipics.png';
import dubaiFlag from '../picture/dubai-flag.png';
import china from '../picture/china.png';
import chinaFlag from '../picture/china-flag.png'
import southFlag from '../picture/south-Africa.png';
import south from '../picture/south.png';
import austraFlag from '../picture/Flag-Australia.png';
import australia from '../picture/australia.png';
import unitedFlag from '../picture/usa flag.png';

import visa1 from '../picture/visa1.png';
import visa2 from '../picture/visa2.png';


export const Visas = () => {
    return(

        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid hero-visa">

                    <div className="col-md-5 hero-content-visa">
                    <h1 className="heading text-white"><b>Visas &<span style={{color:"#0275d8"}}> <br></br>Passport</span></b></h1>

                                <p className="text-white text-justify heading-note">Axis Travel offers a 24 hour Express Visa processing
service, issuing UAE visas for periods from 7 to 90 days
directly from our office; ideal for corporate travel. We can
also offer advice and assistance in processing Schengen
Visas, or obtaining visas for travel to other countries.</p>
<Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>

                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* countries and flag */}
<section className="mb-5 country">
    <div className="container mt-4">
        <div className="mx-auto col-md-8 ">
        <h1 className="head-tag text-center">Get Your Travel Visa for Any<span style={{color:'#0275d8'}}> Global Destination</span></h1>
        <p className="text-center heading-note ">We process visas for all the 5 contineunts. Find out up-to-dateentry requirements and apply in minutes by contact us.</p>
        </div>

        <div className="row mt-4 pt-2 desktop-country">
            <div className="col-md-2">
                <div className="card country-card">
                <img src={unitedFlag} className="flag"/>
                <img src={united} class="card-img-top img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title country-name">United State</h5>
                </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card country-card">
                <img src={austraFlag} className="flag"/>
                <img src={australia} class="card-img-top img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title country-name">Australia</h5>
                </div>
                </div>
            </div>

            <div className="col-md-2">
            <div className="card country-card">
                <img src={chinaFlag} className="flag"/>
                <img src={china} class="card-img-top img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title country-name">China</h5>
                </div>
                </div>
            </div>

            <div className="col-md-2">
            <div className="card country-card">
                <img src={southFlag} className="flag"/>
                <img src={south} class="card-img-top img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title country-name">South Africa</h5>
                </div>
                </div>
            </div>

            <div className="col-md-2">
            <div className="card country-card">
                <img src={unitedFlag} className="flag"/>
                <img src={united} class="card-img-top img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title country-name">Dubai</h5>
                </div>
                </div>
            </div>

            <div className="col-md-2">
            <div className="card country-card">
                <img src={dubaiFlag} className="flag"/>
                <img src={dubai} class="card-img-top img-fluid"/>
                <div className="card-body">
                    <h5 className="card-title country-name">Dubai</h5>
                </div>
                </div>
            </div>
        </div>



        <div className="mobile-country">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="1000">
                    <div className="row p-3">
                        <div className="col-6">
                        <div className="card country-card">
                            <img src={dubaiFlag} className="flag"/>
                            <img src={dubai} class="card-img-top img-fluid"/>
                            <div className="card-body">
                                <h5 className="card-title country-name">Dubai</h5>
                            </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card country-card">
                            <img src={unitedFlag} className="flag"/>
                            <img src={united} class="card-img-top img-fluid"/>
                            <div className="card-body">
                                <h5 className="card-title country-name">USA</h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="carousel-item">

                <div className="row p-3">
                        <div className="col-6">
                    <div className="card country-card">
                        <img src={chinaFlag} className="flag"/>
                        <img src={china} class="card-img-top img-fluid"/>
                        <div className="card-body">
                            <h5 className="card-title country-name">China</h5>
                        </div>
                        </div>
                    </div>

                    <div className="col-6">
                    <div className="card country-card">
                        <img src={southFlag} className="flag"/>
                        <img src={south} class="card-img-top img-fluid"/>
                        <div className="card-body">
                            <h5 className="card-title country-name">S/Africa</h5>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>


                <div className="carousel-item">
                <div className="row p-3">
                        <div className="col-6">
                    <div className="card country-card">
                        <img src={unitedFlag} className="flag"/>
                        <img src={united} class="card-img-top img-fluid"/>
                        <div className="card-body">
                            <h5 className="card-title country-name">Dubai</h5>
                        </div>
                        </div>
                    </div>

                    <div className="col-6">
                    <div className="card country-card">
                        <img src={dubaiFlag} className="flag"/>
                        <img src={dubai} class="card-img-top img-fluid"/>
                        <div className="card-body">
                            <h5 className="card-title country-name">Dubai</h5>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>



{/* online visa */}
<section className="online-visa mt-4 pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={visa1} className="img-fluid"/>
                </div>

                <div className="col-md-6 p-5 mt-5 visa-note">
                <h1 className="head-tag text-left"><span style={{color:'#0275d8'}}>Online Visa</span> Services</h1>
                <p className="text-justify heading-note">Applying for visas online has never been easier than it is with
                Axis Travel. Our team of travel experts has relationships with
                embassies and consulates across the globe, making it easy for
                our clients to apply for business visas, tourist visas and more to
                any number of countries like Russia, India, China, and Brazil.
                Even if you need visa service within the week you’re traveling,
                we will work with you from start to finish, ensuring your
                paperwork will conform to the requirements of foreign
                embassies. Choose only trusted online visa services by
                contactin us now.</p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>

                </div>
            </div>
        </div>
</section>



{/* Expedited passport` */}
<section className="passport">
<div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-5 mt-5 order-2 passport-section order-md-1">
                <h1 className="head-tag text-left"><span style={{color:'#0275d8'}}>Expedited Passport</span> Passport</h1>
                <p className="text-justify heading-note">If you’re looking for the best service to apply for a passport
                online, Travel Visa Pro is the way to go. From expediting
                new passports to getting a second passport to applying for
                visas, our travel experts will assist you in every step of the
                process for our passport services. </p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                </div>

                <div className="col-md-6 p-0 order-1 order-md-2">
                    <img src={visa2} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>




































        </>
    )
}
