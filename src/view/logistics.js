import React from 'react'
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';


import '../css/logistics.css';


//pictures
import consult from '../picture/refine/consult-mbg.jpg'
import meeting from '../picture/refine/meeting.jpg'
import business from '../picture/refine/business.jpg'


export const Logistics = () => {
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
            <h1 className="head-tag">UAE<span style={{color:'#0275d8'}}> Entry Visa </span></h1>
        <p className=" text-justify heading-note">We share your vision and help make your mission possible. Whenever business brings you to the UAE, we assist you through the process of obtaining a UAE visa from wherever you are. We leverage on our existing influence to save you time and money, making it easier for you or your travelers to legally obtain a visa valid for the required period you desire.</p>
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
            <h1 className="head-tag">Airport Meet & <span style={{color:'#0275d8'}}>Greet Service</span></h1>
            <p className=" text-justify heading-note">We arrange for trusted, insurance covered drivers and agents to meet you at the airport and securely park your car until you are ready to reclaim it on your return. When your business is done, your car is returned to you without hassles and you can drive straight home. Our service is topnotch, with our drivers always professional and helpful. We partner with numerous airports so that our meet and greet service is widely available. Above all, we put your car’s safety first and have foolproof security measures, so you can confidently go on with your business, assured that your car is in safe hands and ready to be reclaimed by you.</p>
        </div>


            </div>
        </div>
</section>



<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5">
            <h1 className="head-tag">Limousine transfers  <span style={{color:'#0275d8'}}> globally</span></h1>
        <p className=" text-justify heading-note">We make sure that your arrival is as grand as you want it to be and that you experience the red carpet feeling as well as complete comfort that make you happier you made the trip. No matter where you are in the world, we provide premium limousine services that are professional, reliable and will smoothly take you wherever you need to go. Put your best foot forward in an exclusive and stylish limousine arrival.</p>
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
            <h1 className="head-tag">Travel<span style={{color:'#0275d8'}}> Insurance</span></h1>
            <p className=" text-justify heading-note">Protect your travelers and keep your business flourishing. Your travelers are at their best when they have security and peace of mind, so we have travel insurance services customized to your organization’s preference. Breathe easier knowing that you have short or long term coverage of medical expenses and losses incurred while travelling.</p>
        </div>


            </div>
        </div>
</section>



<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5">
            <h1 className="head-tag">   <span style={{color:'#0275d8'}}> Airport Lounge</span>&nbsp; &nbsp; access</h1>
        <p className=" text-justify heading-note">We make sure that your arrival is as grand as you want it to be and that you experience the red carpet feeling as well as complete comfort that make you happier you made the trip. No matter where you are in the world, we provide premium limousine services that are professional, reliable and will smoothly take you wherever you need to go. Put your best foot forward in an exclusive and stylish limousine arrival.</p>
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
            <h1 className="head-tag"><span style={{color:'#0275d8'}}> Car rentals</span></h1>
            <p className=" text-justify heading-note">From wherever you are, get access to affordable and dependable car rental services. Our global partners have a wide variety of vehicles that suit your taste and style. Also, get a professional driver that knows their way around and will confidently navigate road networks to take you anywhere you need to go.</p>
        </div>


            </div>
        </div>
</section>



<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5">
            <h1 className="head-tag">   <span style={{color:'#0275d8'}}> Passport Assistance</span> </h1>
        <p className=" text-justify heading-note">Experience the ultimate convenience with our passport assistant service. Our professional team guides you through all required documents and procedures in applying for, or renewing your passport to cancel unwanted delays.</p>
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


