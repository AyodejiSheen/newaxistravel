import React from 'react'
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';


import '../css/logistics.css';


//pictures
import uae from '../picture/newrefine/mbg12.jpg'
import greet from '../picture/newrefine/mbg13.jpg'
import globally from '../picture/newrefine/mbg14.jpg'
import insurance from '../picture/newrefine/mbg15.jpg'
import lounge from '../picture/newrefine/mbg16.jpg'
import rental from '../picture/newrefine/mbg17.jpg'
import passport from '../picture/newrefine/mbg18.jpg'
import executive from '../picture/newrefine/mbg19.jpg'


export const Logistics = () => {
    return (
        <>
                    {/* Hero section */}
        <section>
                <div className="container-fluid hero-logistics">

                    <div className="col-md-6 hero-content-logistics                     animate__animated animate__fadeInLeft">
                                <h1 className="font-weight-bold text-white">Add essential services for your traveler’s convenience<span style={{color:"#0275d8"}}> </span></h1>
                            
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center mb-5 ">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>




{/* pave the way */}
<section className=" ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5 column-note mt-4 mb-4">
            <h1 className="head-tag adjust-head">UAE<span style={{color:'#0275d8'}}> Entry Visa </span></h1>
        <p className=" text-justify heading-note adjust-note">We share your vision and help make your mission possible. Whenever business brings you to the UAE, we assist you through the process of obtaining a UAE visa from wherever you are. We leverage on our existing influence to save you time and money, making it easier for you or your travelers to legally obtain a visa valid for the required period you desire.</p>

        <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
    </div>

        <div className="col-md-7 p-0 ">
                    <img src={uae} className="img-fluid"/>
        </div>
            </div>
        </div>
</section>


<section className="booking-section">
    <div className="container-fluid">
        <div className="row">

        <div className="col-md-7 p-md-0 order-2 order-md-1">
        <img src={greet} className="img-fluid"/>
        </div>


            <div className="col-md-5 p-5 order-1 order-md-2 column-note mt-4 mb-4">
            <h1 className="head-tag">Airport Meet & <span style={{color:'#0275d8'}}>Greet Service</span></h1>
            <p className=" text-justify heading-note">We arrange for trusted, insurance covered drivers and agents to meet you at the airport and securely park your car until you are ready to reclaim it on your return. When your business is done, your car is returned to you without hassles and you can drive straight home. Our service is topnotch, with our drivers always professional and helpful. We partner with numerous airports so that our meet and greet service is widely available. Above all, we put your car’s safety first and have foolproof security measures, so you can confidently go on with your business, assured that your car is in safe hands and ready to be reclaimed by you.</p>
        </div>


            </div>
        </div>
</section>



<section className="">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5 column-note mt-4 mb-4">
            <h1 className="head-tag">Limousine transfers  <span style={{color:'#0275d8'}}> globally</span></h1>
        <p className=" text-justify heading-note">We make sure that your arrival is as grand as you want it to be and that you experience the red carpet feeling as well as complete comfort that make you happier you made the trip. No matter where you are in the world, we provide premium limousine services that are professional, reliable and will smoothly take you wherever you need to go. Put your best foot forward in an exclusive and stylish limousine arrival.</p>

        <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
    </div>

        <div className="col-md-7 p-0">
        <img src={globally} className="img-fluid"/>
        </div>
            </div>
        </div>
</section>



<section className="booking-section">
    <div className="container-fluid">
        <div className="row">

        <div className="col-md-7 p-md-0 order-2 order-md-1">
        <img src={insurance} className="img-fluid"/>
        </div>


            <div className="col-md-5 p-5 order-1 order-md-2 column-note mt-4 mb-4">
            <h1 className="head-tag adjust-head">Travel<span style={{color:'#0275d8'}}> Insurance</span></h1>
            <p className=" text-justify heading-note adjust-note">Protect your travelers and keep your business flourishing. Your travelers are at their best when they have security and peace of mind, so we have travel insurance services customized to your organization’s preference. Breathe easier knowing that you have short or long term coverage of medical expenses and losses incurred while travelling.</p>

            <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
        </div>


            </div>
        </div>
</section>



<section className="">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5 column-note mt-4 mb-4">
            <h1 className="head-tag adjust-head ">   <span style={{color:'#0275d8'}}> Airport Lounge</span>&nbsp; &nbsp; access</h1>
        <p className=" text-justify heading-note adjust-note">We make sure that your arrival is as grand as you want it to be and that you experience the red carpet feeling as well as complete comfort that make you happier you made the trip. No matter where you are in the world, we provide premium limousine services that are professional, reliable and will smoothly take you wherever you need to go. Put your best foot forward in an exclusive and stylish limousine arrival.</p>
    </div>

    <div className="col-md-7 p-0">
        <img src={lounge} className="img-fluid"/>
        </div>
            </div>
        </div>
</section>



<section className="booking-section">
    <div className="container-fluid">
        <div className="row">

        <div className="col-md-7 p-md-0 order-2 order-md-1">
        <img src={rental} className="img-fluid"/>
        </div>


            <div className="col-md-5 p-5 order-1 order-md-2 column-note mt-4 mb-4">
            <h1 className="head-tag adjust-head"><span style={{color:'#0275d8'}}> Car rentals</span></h1>
            <p className=" text-justify heading-note adjust-note">From wherever you are, get access to affordable and dependable car rental services. Our global partners have a wide variety of vehicles that suit your taste and style. Also, get a professional driver that knows their way around and will confidently navigate road networks to take you anywhere you need to go.
            
            
            </p>

            <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
        </div>


            </div>
        </div>
</section>



<section className="">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5 column-note mt-4 mb-4">
            <h1 className="head-tag adjust-head">   <span style={{color:'#0275d8'}}> Passport Assistance</span> </h1>
        <p className=" text-justify heading-note adjust-note">Experience the ultimate convenience with our passport assistant service. Our professional team guides you through all required documents and procedures in applying for, or renewing your passport to cancel unwanted delays.</p>

        <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
    </div>

    <div className="col-md-7 p-0">
        <img src={passport} className="img-fluid"/>
        </div>
            </div>
        </div>
</section>



<section className="booking-section" id="vip-executives">
    <div className="container-fluid">
        <div className="row">

        <div className="col-md-7 p-md-0 order-2 order-md-1">
        <img src={executive} className="img-fluid"/>
        </div>


            <div className="col-md-5 p-5 order-1 order-md-2 column-note mt-4 mb-4">
            <h1 className="head-tag">VIP & Executive<span style={{color:'#0275d8'}}> &nbsp; &nbsp; &nbsp;Travel</span></h1>
            <p className=" text-justify heading-note">We are the best at organizing travel luxury and executive travel arrangements. Whatever the purpose of the travelling is, we know it’s important. We also know that your executives or VIPs need to arrive looking like they have their act together – because they do! We will go above and beyond to ensure that they get all they need to own whatever meeting or event they are attending.</p>

            <p className=" text-justify heading-note">Your security and safety remain our priority. Our security network and support teams provide safety to your travelers 24/7 and keep your data constantly protected. Enjoy supreme comfort, relaxing calm and the invigorating drive that comes with being on our VIP list.</p>
        </div>


            </div>
        </div>
</section>



















        </>
    )
}


