import React from 'react';
import {Link} from 'react-router-dom';
import '../css/mice.css'


//pictures
import scroll from '../picture/Scroll.png';
import meetincentices from '../picture/mice-bg2.png'
import meetincentices2 from '../picture/mice-bg3.png'
import meetincentices3 from '../picture/mice-bg4.png'




export const Mice = () => {
    return (
        <>

        {/* Hero section */}
        <section>
                <div className="container-fluid hero-mice">

                    <div className="col-md-5 hero-content-mice">
                                <h1 className="heading text-white"><b>Meetings And<span style={{color:"#0275d8"}}> <br></br>Events</span></b></h1>
                                <p className="text-white text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.</p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



{/* Note section */}
<section className="note">
    <div className="container p-5 page-note">
        <p className="text-center heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium 
        vulputate sapien nec sagittis aliquam malesuada.</p>
    </div>
</section>


{/* Meetings and incentives */}
<section className="meet-incent pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={meetincentices} className="meet"/>
                </div>

                <div className="col-md-6 p-5 mt-5">
                <h1 className="head-tag text-left">Meetings And  <br></br><span style={{color:'#0275d8'}}>Incentives</span></h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. </p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                </div>
            </div>
        </div>
</section>

{/* Events*/}
<section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-5 mt-5 order-2 order-md-1">
                <h1 className="head-tag text-left">Events</h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. </p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                </div>

                <div className="col-md-6 p-0 order-1 order-md-2">
                    <img src={meetincentices2} className="events"/>
                </div>
            </div>
        </div>
</section>


{/* conferences*/}
<section className="meet-incent pt-5 pb-5" id="conferences">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={meetincentices3} className="events"/>
                </div>

                <div className="col-md-6 p-5 mt-5">
                <h1 className="head-tag text-left">Conference  <br></br><span style={{color:'#0275d8'}}>Meetings</span></h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. </p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                </div>
            </div>
        </div>
</section>


{/* Mice services */}
<section className="mice-services mt-5 mb-5">
    <div className="container">
    <h1 className="head-tag text-center">Our <span style={{color:'#0275d8'}}>MICE</span> Services</h1>
    <p className="text-center mx-auto heading-note">Axis Travel MICE Services includes</p>

        <div className="row mice-services-row">
            <div className="col-md-6 col-lg-4">
                <div className="mice-project shadow">
                <h4 className="font-weight-bold text-white"><span style={{color:'#0275d8'}}>Project</span> Management</h4>
                <p className="text-white">Axis Travel Project Management Includes:</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Registration Management </p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Rate Negotation</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Time Management</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Quality Management</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Venue Finding</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Appointment Management </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-4">
            <div className="mice-project shadow ">
                <h4 className="font-weight-bold text-white"><span style={{color:'#0275d8'}}>Destination</span> Management</h4>
                <p className="text-white">Axis Travel Destination Management Includes:</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Air Travel Management</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Visa Processing</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Accomodation Management</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Cost Management</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Activities Management</p>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 for-tab">
            <div className="mice-project shadow ">
                <h4 className="font-weight-bold text-white"><span style={{color:'#0275d8'}}>Event</span> Management</h4>
                <p className="text-white">Axis Travel Event Management Includes:</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Concept Development</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Safety & Security</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Event Catering & Protocols</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Venue & Site Finding</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>On-Site Management</p>
                <p className="text-white "> <i className="fa fa-check-circle mr-3"></i>Cost Management</p>
                </div>
            </div>
        </div>
    </div>
</section>





























        </>
    )
}