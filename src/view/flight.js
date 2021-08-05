import React from 'react';
import {Link} from 'react-router-dom';
import '../css/flight.css'


//pictures
import scroll from '../picture/Scroll.png';
import smooth from '../picture/refine/mbg9.jpg';
import partner from '../picture/refine/mbg5.jpg';
import flight3 from '../picture/airline part.png';

 

export const Flight = () => {
    return(

        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid hero-flight">

                    <div className="col-md-6 hero-content-flight animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Flight</b></h1>
                                <p className="text-white text-justify heading-note">Axis Travel works closely with large number of partner
                                airlines from around the globe, allowing us to book flight
                                tickets quickly on any flight around the world.</p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



{/* smooth booking */}
<section className="smooth-book mt-4 pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={smooth} className="img-fluid"/>
                </div>

                <div className="col-md-6 p-5 mt-5 smooth-book-note" data-aos="fade-right">
                <h1 className="head-tag text-left">Smoother Booking With<br></br><span style={{color:'#0275d8'}}>Direct Connections</span></h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. </p>
                </div>
            </div>
        </div>
</section>



{/* Airlines partners    */}
<section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-5 mt-5 order-2 order-md-1 partner-note">
                <h1 className="head-tag text-left">Our <span style={{color:'#0275d8'}}>Partner Airlines </span>Includes:</h1>
                <p className="text-justify heading-note">Here are the list of some airline companies that we partner with
                in other to make booking quick and easy for you.</p>
                <div className="row text-justify heading-note">
                    <div className="col-6">
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>Emirates</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>Fly Dubai</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>Etihad Airways</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>British Airways</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>American Airlines</span></p>
                    </div>

                    <div className="col-6">
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>Qatar Airways</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>Oman Air</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>Air Arabia</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>Virgin Atlantic</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>Cathay Pacific</span></p>
                    </div>
                </div>
                </div>

                <div className="col-md-6 order-1 p-0 order-md-2">
                <img src={partner} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>


{/* benefit booking */}
<section className="benefit-book pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={flight3} className="img-fluid"/>
                </div>

                <div className="col-md-6 benefit-book-note p-5 mt-5">
                <h1 className="head-tag text-left"><span style={{color:'#0275d8'}}>Benefits of Booking </span>With Us</h1>
                <div className="text-justify heading-note">
          
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>Flexible Flight travel policy controls, this gives you complete flexibility and &nbsp; &nbsp;&nbsp; &nbsp; control of your travel budget.</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>Preferential rates for airlines booking and flight seat reservation.</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>24/7 Customer support service</span></p>
                        <p data-aos="fade-down"><i className="fa fa-check-circle mr-3"> </i><span>IATA Licensed.</span></p>
                </div>
                </div>
            </div>
        </div>
</section>























        </>
    )
}