import React from 'react';
import {Link} from 'react-router-dom';
import '../css/footer.css';

//picture
import logo from '../picture/logo-light.png';
import iata from '../picture/newrefine/iata.png';
import index from '../picture/index.png';
import abta from '../picture/abta.png';
import atoc from '../picture/atoc.png';
import atol from '../picture/atol.png';
import eurostar from '../picture/eurostar.png';


export const Footer = () => {
    return (
        <>
            <div className="container-fluid mt-4 footer-partner mb-4">
                <div className="container p-2">
                <h1 className="head-tag col-12 p-0 col-md-6 text-center mx-auto"> Testimonial <span style={{color:'#0275d8'}}> or Companies we work with. </span></h1>
                <p className="text-center content-why">There are many ways to travel and these companies have chosen us as their travel partners </p>

                <div className="row text-center align-items-baseline">

                    <div className="col-6 col-md-2 order-1 mb-4">
                        <img src={iata} className="img-fluid partners-logo" data-aos="fade-left"></img>
                    </div>

                    <div className="col-6 col-md-2 order-4 mb-4">
                        <img src={abta} className="img-fluid partners-logo" data-aos="zoom-in-down"></img>
                    </div>                    
                    
                    <div className="col-6 col-md-2 order-3 mb-4">
                        <img src={index} className="img-fluid partners-logo" data-aos="zoom-in-up"></img>
                    </div>                    
                    
                    <div className="col-6 col-md-2 order-6 mb-4">
                        <img src={atoc} className="img-fluid partners-logo" data-aos="fade-right"></img>
                    </div>                    
                    
                    <div className="col-6 col-md-2 order-2 mb-4">
                        <img src={atol} className="img-fluid partners-logo" data-aos="zoom-in-down"></img>
                    </div>
                    <div className="col-6 col-md-2 order-5 mb-4 ">
                        <img src={eurostar} className="img-fluid partners-logo" data-aos="zoom-in-up"></img>
                    </div>
                </div>
  </div>
            </div>



            <div className="container-fluid footer pb-0 p-3 ">
                <div className="container pb-3">
                    <div className="row">
                        <div className="col-md-4">
                        <a className="navbar-brand" href="/"><img className="logo-footer" src={logo}/></a>
                        <p className="text-white text-justify foot-note mt-2">Find us on social media</p>


                        <div className="row">
                            <div className="twitter">
                                <i className="fab fa-twitter"></i>
                            </div>

                            <div className="facebook">
                                <i class="fab fa-facebook"></i>
                            </div>

                            <div className="linkedin">
                                <i className="fab fa-linkedin"></i>
                            </div>

                            <div className="instagram">
                                {/* <i className="fab fa-instagram"></i> */}
                            </div>
                        </div>


                        </div>


                        <div className="col-md-8 pt-5 mt-2 pl-5 foot-link">
                            <div className="row">
                                <div className=" col-6 col-md-4 col-lg-3">
                                <h6>Resources</h6>
                                <ul className="footer-list">
                                <a href="/#testimonials" className="footer-link"><li>Testimonials</li></a>
                                <a href="/#why-choose-us" className="footer-link"><li>Why Choose Us</li></a>
                                    <Link to="/terms-and-conditions" className="footer-link"><li>Terms & Services</li></Link>
                                    <Link to="/privacy-policy" className="footer-link"><li>Privacy Policy</li></Link>
                                </ul>
                                </div>

                                <div className=" col-6 col-md-4 col-lg-3">
                                <h6>Quick Link</h6>
                                <ul className="footer-list">
                                <Link to="/corporate-travel" className="footer-link"><li>Corporate Travel</li></Link>
                                <Link to="/leisure-travel" className="footer-link"><li>Leisure Travel</li></Link>
                                <Link to="/meetings-and-events" className="footer-link"><li>Meetings and Events</li></Link>
                                <Link to="/our-company" className="footer-link"><li>About Us</li></Link>
                                <Link to="/contact-us" className="footer-link"><li>Contact Us</li></Link>
                                </ul>
                                </div>

                                <div className=" col-md-4 col-lg-3">
                                <h6>Services</h6>
                                <ul className="footer-list">
                                <Link to="/flight" className="footer-link "> <li>Flight</li></Link>
                                <Link to="/visas-and-passport" className="footer-link "> <li>Visas</li></Link>
                                <Link to="/hotel" className="footer-link "> <li>Hotel Reservation</li></Link>
                                    <Link to="/tour" className="footer-link "> <li>Tours</li></Link>
                                    <Link to="/insurance" className="footer-link "> <li>Insurance</li></Link>
                                    <Link to="/transport" className="footer-link "><li>Transport</li></Link>
                                    <Link to="/packages" className="footer-link "><li>Packages</li></Link>
                                    <Link to="/meetings-and-events#conferences" className="footer-link "><li>Conferences</li></Link>
                                </ul>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                <h6>Contact</h6>
                                <ul className="footer-list">115 Office Court Building, Oud Metha P.O.Box 23240 Dubai, United Arab Emirates.
                                <br></br>Office: +971 4 399 9332
                                <br></br>Fax: +971 4 399 9335
                                <br></br>Email: bookings@axistravel.ae
                                </ul>
                                </div>
                            </div>
                        </div>

 

                    </div>
                </div>

                <hr className="footer-line mt-0 " ></hr>

                <p className="text-center pb-0 mb-0 watermark">Designed and Developed By iBuild</p>
            </div>
        </>
    )
}

