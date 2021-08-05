import React from 'react';
import {Link} from 'react-router-dom'
import '../css/insurance.css'


//pictures
import scroll from '../picture/Scroll.png';
import accident from '../picture/ijury.png';
import ambulance from '../picture/mc.png';
import passport from '../picture/lost-visa.png';
import flightCancel from '../picture/flight-cancel.png';
import bag from '../picture/bag.png';

import insurance1 from '../picture/refine/mbg23.jpg';
import insurance2 from '../picture/refine/mbg13.jpg';
import insurance3 from '../picture/refine/mbg15.jpg';
import insurance4 from '../picture/refine/mbg22.jpg';
import insurance5 from '../picture/refine/mbg14.jpg';


export const Insurance = () => {
    return(
        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid hero-insurance">

                    <div className="col-md-6 hero-content-insurance animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Insurance</b></h1>
                                <p className="text-white text-justify heading-note">At Axis Travel we offer tailored insurance, which can be
                                issued immediately. Our individual trip option covers you for
                                between 5 and 92 days, while multi-trip coverage can
                                protect you for up to one year.</p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>

                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* insurance packages */}
<section className="mb-5 country">
    <div className="container-fluid mt-4">
        <div className="mx-auto col-md-8" >
        <h1 className="head-tag text-center">Our <span style={{color:'#0275d8'}}> Packages</span></h1>
        <p className="text-center heading-note ">Our insurances packages cover you in the event of:</p>
        </div>

        <div className="row mt-4 pt-2 desktop-pack justify-content-center">

            <div className="col-md-2 col-6  text-center packs">
            <a href="#personal-accident" className="link">    <div className="card insurance-pack" data-aos="flip-left">
                <div className="card-body">
                    <div className="inc-icon mx-auto">
                        <img src={accident} className="pack-icon img-fluid"/>
                    </div>
                    <h5 className="card-title pack-title">Accidents and Injury</h5>
                    <p className="pack-note">Coverage for personal accidents and injuries..</p>
                </div>
                </div></a>
            </div>


            <div className="col-6 col-md-2 text-center packs">
            <a href="#medical" className="link"> <div className="card insurance-pack" data-aos="flip-right">
                <div className="card-body">
                    <div className="inc-icon mx-auto">
                        <img src={ambulance} className="pack-icon img-fluid"/>
                    </div>
                    <h5 className="card-title pack-title">Medical Treatment</h5>
                    <p className="pack-note">Coverage for emergency medical treatments.</p>
               </div>
                </div></a>
            </div>

            <div className="col-6 col-md-2 text-center packs">
            <a href="#lost-bag" className="link"><div className="card insurance-pack" data-aos="flip-left">
                <div className="card-body">
                    <div className="inc-icon mx-auto">
                        <img src={bag} className="pack-icon img-fluid"/>
                    </div>
                    <h5 className="card-title pack-title">Lost Baggage</h5>
                    <p className="pack-note">Coverage for lost, stolen or misplaced luggages.</p>
                </div>
                </div></a>
            </div>

            <div className="col-6 col-md-2 text-center packs">
            <a href="#lost-passport" className="link"> <div className="card insurance-pack" data-aos="flip-right">
                <div className="card-body">
                    <div className="inc-icon mx-auto">
                        <img src={passport} className="pack-icon img-fluid"/>
                    </div>
                    <h5 className="card-title pack-title">Lost Passports </h5>
                    <p className="pack-note">Coverage for lost or stolen travel documents.</p>
                </div>
                </div></a>
            </div>

            <div className="col-6 col-md-2 text-center packs">
            <a href="#missed-flight" className="link"> <div className="card insurance-pack" data-aos="flip-right">
                <div className="card-body">
                    <div className="inc-icon mx-auto">
                        <img src={flightCancel} className="pack-icon img-fluid"/>
                    </div>
                    <h5 className="card-title pack-title">Missed Flight</h5>
                    <p className="pack-note">Coverage for cancelled or interrupted trips</p>
                </div>
                </div></a>
            </div>
        </div>



        <div className="row justify-content-center mt-4 pt-2 mobile-pack">

<div className="col-md-2 col-6  text-center packs">
<a href="#personal-accident" className="link"><div data-aos="flip-left" className="card text-dark insurance-pack">
    <div className="card-body">
        <div className="inc-icon mx-auto">
            <img src={accident} className="pack-icon img-fluid"/>
        </div>
        <h5 className="card-title pack-title text-decoration-none">Accidents and Injury</h5>
        <p className="pack-note">Coverage for personal accidents and injuries..</p>

       <button className="btn pack-button" >Learn More </button>
    </div>
    </div></a>
</div>


<div className="col-6 col-md-2 text-center packs">
<a href="#medical" className="link"><div data-aos="flip-right" className="card insurance-pack text-dark">
    <div className="card-body">
        <div className="inc-icon mx-auto">
            <img src={ambulance} className="pack-icon img-fluid"/>
        </div>
        <h5 className="card-title pack-title text-decoration-none">Medical Treatment</h5>
        <p className="pack-note">Coverage for emergency medical treatments.</p>

        <button className="btn pack-button">Learn More </button>
    </div>
    </div></a>
</div>


<div className="col-6 col-md-2 text-center packs">
<a href="#lost-bag" className="link"><div data-aos="flip-left" className="card insurance-pack text-dark">
    <div className="card-body">
        <div className="inc-icon mx-auto">
            <img src={bag} className="pack-icon img-fluid"/>
        </div>
        <h5 className="card-title pack-title text-decoration-none">Lost Baggage</h5>
        <p className="pack-note">Coverage for lost, stolen or misplaced luggages.</p>

        <button className="btn pack-button">Learn More </button>
    </div>
    </div></a>
</div>

<div className="col-6 col-md-2 text-center packs">
<a href="#lost-passport" className="link"><div data-aos="flip-right" className="card insurance-pack text-dark">
    <div className="card-body">
        <div className="inc-icon mx-auto">
            <img src={passport} className="pack-icon img-fluid"/>
        </div>
        <h5 className="card-title pack-title text-decoration-none">Lost Passports </h5>
        <p className="pack-note">Coverage for lost or stolen travel documents.</p>

        <button className="btn pack-button">Learn More </button>
    </div>
    </div></a>
</div>

<div className="col-6 col-md-2 text-center packs">
<a href="#missed-flight" className="link"> <div data-aos="flip-left" className="card insurance-pack text-dark">
    <div className="card-body">
        <div className="inc-icon mx-auto">
            <img src={flightCancel} className="pack-icon img-fluid"/>
        </div>
        <h5 className="card-title pack-title text-decoration-none">Missed Flight</h5>
        <p className="pack-note">Coverage for cancelled or interrupted trips</p>

        <button className="btn pack-button">Learn More </button>
    </div>
    </div></a>
</div>
</div>



    </div>
    </section>

    {/* personal accident */}
<section className="personal-accident mt-4 pt-5 pb-5" id="personal-accident">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={insurance1} className="img-fluid"/>
                </div>

                <div className="col-md-6 p-5 mt-5 smooth-book-note" data-aos="fade-down">
                <h1 className="head-tag text-left">Personal Accidents<span style={{color:'#0275d8'}}> <br></br> and
                Injury</span></h1>  
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. </p>
                </div>
            </div>
        </div>
</section>



{/* Emergency medical */}
<section className="medical" id="medical">
<div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-5 mt-5 order-2 medical-section order-md-1" data-aos="fade-down">
                <h1 className="head-tag text-left">Emergency<span style={{color:'#0275d8'}}> Medical
                Treatment</span> </h1>
                <p className="text-justify heading-note">If you suffer a sudden illness or need a quick medical
                attention on your trip, we will pay you the reasonable and
                necessary cost of emergency medical, hospital, ambulance
                or other treatment you receive overseas during the trip. This
                benefit is available for you with an unlimited maximum
                payout.
                Lost </p>

                </div>

                <div className="col-md-6 p-0 order-1 order-md-2">
                    <img src={insurance2} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>


    {/* lost baggage */}
    <section className="lost-baggage pt-5 pb-5"id="lost-bag">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={insurance3} className="img-fluid"/>
                </div>

                <div className="col-md-6 p-5 mt-5 smooth-book-note" data-aos="fade-down">
                <h1 className="head-tag text-left">Lost<span style={{color:'#0275d8'}}> Baggages</span></h1>  
                <p className="text-justify heading-note">Did your bags and things head for the hills on your trip? Here’s
how Axis Travel will cover your lost, stolen or damaged
luggage, devices and personal belongings.<br></br> It can happen to anyone. Your bag is beside you at the train
station and next minute it’s nicked. Or, you’re happily sunning
yourself at the pool when your phone gets stomped on by a
clumsy waiter. Not Happy. Whether you’ve lost your
sunglasses, handbag and gear, had them stolen, or
accidentally damaged, Axis Travel has you covered. </p>
                </div>
            </div>
        </div>
</section>



{/* lost passport */}
<section className="passport" id="lost-passport">
<div className="container-fluid">
            <div className="row">
                <div data-aos="fade-down" className="col-md-6 p-5 mt-5 order-2 medical-section order-md-1">
                <h1 className="head-tag text-left">Lost Passports & <span style={{color:'#0275d8'}}> Travel Documents</span> </h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Tortor at auctor urna nunc id. Commodo sed egestas
                egestas fringilla. Vulputate sapien nec sagittis aliquam
                malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit
                amet risus. Scelerisque eleifend donec pretium vulputate
                sapien nec sagittis aliquam malesuada. Maecenas pharetra
                convallis posuere morbi leo urna molestie at elementum.</p>

                </div>

                <div className="col-md-6 p-0 order-1 order-md-2">
                    <img src={insurance4} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>


    {/* missed flights */}
    <section className="missed-flight pt-5 pb-5" id="missed-flight">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={insurance5} className="img-fluid"/>
                </div>

                <div className="col-md-6 p-5 mt-5 smooth-book-note" data-aos="fade-down">
                <h1 className="head-tag text-left">Missed<span style={{color:'#0275d8'}}> Flights</span></h1>  
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Tortor at auctor urna nunc id. Commodo sed egestas
                egestas fringilla. Vulputate sapien nec sagittis aliquam
                malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit
                amet risus. Scelerisque eleifend donec pretium vulputate
                sapien nec sagittis aliquam malesuada. Maecenas pharetra
                convallis posuere morbi leo urna molestie at elementum.</p>
                </div>
            </div>
        </div>
</section>



<div className="text-center mb-5">
<Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>

</div>



















        </>
    )
}