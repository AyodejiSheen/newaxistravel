import React from 'react'
import {Link} from 'react-router-dom'


import '../css/safety.css';



//picture
import scroll from '../picture/Scroll.png';
import easy from '../picture/newrefine/mbg32.jpg'
import covid from '../picture/newrefine/mbg31.jpg'
import insurance from '../picture/newrefine/mbg33.jpg'




export const Safety = () => {
    return (
        <>

                        {/* Hero section */}
                        <section>
                <div className="container-fluid hero-safety">

                    <div className="col-md-6 hero-content-safety                     animate__animated animate__fadeInLeft">
                                <h1 className="font-weight-bold text-white">Keep your travelers safe. <span style={{color:'#0275d8'}}>Protect your business. </span></h1>


                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center ">
    <img src={scroll} className="scroll animate__animated animate__bounce "/>
</div>


<section className="mt-5">
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-5 p-5 column-note">
                <h1 className="head-tag text-left" > TRAVEL EASY, <span style={{color:'#0275d8'}}>ARRIVE SAFELY</span> </h1>
                <p className="text-justify heading-note">Enjoy the serenity and peace of mind that comes with knowing that you’re in the safest hands.  As one of the world’s leading corporate travel companies, we are duty bound to ensure that you arrive safely and peacefully. Not to sound cliché, but the safety of your travelers is our top priority and responsibility.</p>  

                <p className="text-justify heading-note">We have a dedicated team who is constantly mapping out the safest travelling routes whether inter-country or intra-city, checking out the most reliable travel alternatives and always have a dependable plan B ready in case of unprecedented events. Asides from this, our rapid response system and highly advanced technology are sensitive and proactive to your security needs.</p>  

                </div>


                <div className="col-md-7 p-md-0 ">
                <img src={easy} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>



<section className="">
        <div className="container-fluid">
            <div className="row">

            <div className="col-md-7 p-md-0 order-2 order-md-1">
                <img src={covid} className="img-fluid"/>
            </div>

                <div className="col-md-5 p-5 order-1 order-md-2 column-note mt-5 mb-5">
                <h1 className="head-tag text-left " > COVID-19  <span style={{color:'#0275d8'}}>PROTOCOLS</span> </h1>
                <p className="text-justify heading-note">Travel has changed slightly, so we had to. In line with the demands of the pandemic, we have put in place everything required to ensure that even as we transit to the new normal, it remains business as usual for your organization with no adverse implications whatsoever.</p>  

                <p className="text-justify heading-note">We help you with the necessary information you need to stay at peak of your business activities, especially travelling. From getting a Covid-19 pass, keeping up to date with restricted countries and Covid-19 updates, we are with you at every step, even in quarantine.</p>  

                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>

                </div>
            </div>
        </div>
</section>


<section className="">
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-5 p-5 column-note mt-5 mb-5">
                <h1 className="head-tag text-left" > TRANSPARENT <span style={{color:'#0275d8'}}> TRAVEL INSURANCE </span> </h1>
                <p className="text-justify heading-note">We are a world class travelling company so you can trust us to keep our word. Our insurance package ensures that any loss or mishap to your organization will be fully covered and refunded without undue paperwork, delay or stress. </p>  
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                </div>


                <div className="col-md-7 p-md-0 ">
                <img src={insurance} className="img-fluid"/>
                </div>



            </div>
        </div>
</section>















        </>
    )
}

