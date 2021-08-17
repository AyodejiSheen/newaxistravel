import React from 'react';
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';

import '../css/technology.css';


//pictures
import booking from '../picture/newrefine/mbg48.jpg'
import advance from '../picture/newrefine/mbg27.jpg'






export const Technology = () => {
    return (
        <>

                 {/* Hero section */}
        <section>
                <div className="container-fluid hero-tech">

                    <div className="col-md-6 hero-content-tech                     animate__animated animate__fadeInLeft">
                                <h1 className="font-weight-bold text-white">Integrated technology for all your travel needs<span style={{color:"#0275d8"}}></span></h1>
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
                <h1 className="head-tag text-left" > SEAMLESS AND SIMPLIFIED  <span style={{color:'#0275d8'}}>TRAVEL BOOKING </span> </h1>
                <p className="text-justify heading-note">Cutting edge booking technology makes every travel arrangement a stroll in the park. We never have to guess; our booking technology system remembers you and streamlines your booking process, saving time and money.</p>  

                <p className="text-justify heading-note">We provide one booking platform for all your travelers with personalized travel insights to guide you to the best traveling decisions. Our travel technology analyses your complex and complicated travel data and presents you with a much simpler travel report.</p>
                </div>

                <div className="col-md-7 p-md-0">
                <img src={booking} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>







<section className="">
        <div className="container-fluid">
            <div className="row">


            <div className="col-md-7 p-0 order-2 order-md-1">
                <img src={advance} className="img-fluid"/>
                </div>


                <div className="col-md-5 p-5 order-1 order-md-2 column-note mt-4 mb-4">
                <h1 className="head-tag text-left" > ADVANCED TECHNOLOGY   <span style={{color:'#0275d8'}}> WITH A HUMAN TOUCH </span> </h1>
                <p className="text-justify heading-note">Perhaps the only thing better than our cutting edge technology is the dedicated human team behind it. We apply the perfect combination of human touch and innovative technology to constantly provide excellent solutions to your travel needs.  </p>  

                <p className="text-justify heading-note">Your travelers enjoy the warmth and caring empathy of humans to understand their needs while providing all-round support, and the 100% efficiency of intelligent technology to explore the best travel deals for you, incredibly enhance communication and anticipate your needs and attend to them even before you ask.</p>
                </div>



            </div>
        </div>
</section>


<section className="tech-haves pt-5 pb-5">
<h1 className="font-weight-bold text-center">Key Features</h1>

<div className="container">
    <div className="row">
        <div className="col-md-6">
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Access</span> to risk management tools</p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Easy</span> booking technology</p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Best travel, </span> hotel and accommodations deals</p>
        </div>

        <div className="col-md-6">
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>One company</span> account for any kind of travel</p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>All-round safety </span> and security for your traveling workforce</p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Consistent </span> 24/7 traveler engagement </p>
        </div>
    </div>
</div>

</section>

<div className="partner-quote col-10 col-md-5 text-center mx-auto mb-5">
            <p className="text-justify heading-note mb-0 text-center font-weight-bold" style={{color:"#0275d8"}}><i>Plan your travel with a company that knows the best ways to get you moving.</i></p>
</div>



























        </>
    )
}


