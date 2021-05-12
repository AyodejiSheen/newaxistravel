import React from 'react';
import {Link} from 'react-router-dom';
import '../css/footer.css';

//picture
import logo from '../picture/logo-light.png';


export const Footer = () => {
    return (
        <>
            <div className="container-fluid footer-partner mb-4">
                <div className="container p-2">
                <div className="row">
                    <div className="col-4 col-md-3 border-right">
                    <h1 className="head mb-0">Our <br></br><span style={{color:'#0275d8'}}> Partners</span></h1>
                    </div>

                    <div className="col-md-8">

                    </div>
                </div>
                </div>
            </div>

            <div className="container-fluid footer pb-0 p-3 ">
                <div className="container pb-3">
                    <div className="row">
                        <div className="col-md-4">
                        <a className="navbar-brand" href="#"><img className="logo-footer" src={logo}/></a>
                        <p className="text-white text-justify foot-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu.</p>


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
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>


                        </div>


                        <div className="col-md-8 pt-5 mt-2 pl-5 foot-link">
                            <div className="row">
                                    <div className=" col-6 col-md-4 col-lg-3">
                                <h6>Resources</h6>
                                <ul className="footer-list">
                                    <li>Testimonials</li>
                                    <li>Why Choose Us</li>
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
                                    <li>Hotel Reservation</li>
                                    <Link to="/tour" className="footer-link "> <li>Tours</li></Link>
                                    <Link to="/insurance" className="footer-link "> <li>Insurance</li></Link>
                                    <li>Transport</li>
                                    <li>Packages</li>
                                    <li>Conferences</li>
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

                <hr className="footer-line" ></hr>

                <p className="text-center pb-0 mb-0 watermark">Designed and Developed By iBuild</p>
            </div>
        </>
    )
}

