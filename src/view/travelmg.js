import React from 'react';
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';

import '../css/travelmg.css';

//pictures
import meetincentices from '../picture/refine/smbg2.jpg'
import consult from '../picture/refine/consult-mbg.jpg'
import meeting from '../picture/refine/smbg1.jpg'
import tech from '../picture/refine/tech.png'
import safety from '../picture/refine/safety.png'
import account from '../picture/refine/account.png'



export const Travelmg = () => {
    return(
        <>

        {/* Hero section */}
        <section>
                <div className="container-fluid hero-travelmg">

                    <div className="col-md-6 hero-content-travelmg                     animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Travel<span style={{color:"#0275d8"}}> Management</span></b></h1>
                                <p className="text-white text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.</p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


<section className="travelmg pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0 order-2 order-md-1">
                    <img src={meetincentices} className="img-fluid"/>
                </div>

                <div className="col-md-6 pl-5 pr-5 pb-5 pt-3 meeting-col meet-note order-1 order-md-2" data-aos="fade-right">
                <h1 className="head-tag text-left">This is business travel like you’ve never experienced before</h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. </p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                </div>
            </div>
        </div>
</section>


{/* what we do */}
<section className="mb-5 specialist p-5">
    <h1 className="font-weight-bold text-center">What We Do</h1>

        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-4">
                    <div className="text-center">
                        <img src={tech} className="wedo-icon" />
                        <h3 className="mt-3"><b>Travel Technology</b></h3>
                        <Link to="/contact-us" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>
                    </div>
                </div>

                <div className="col-md-4 mt-4">
                <div className="text-center">
                        <img src={safety} className="wedo-icon" />
                        <h3 className="mt-3"><b>Safety and Risk</b></h3>
                        <Link to="/contact-us" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>
                    </div>
                </div>

                <div className="col-md-4 mt-4">
                <div className="text-center">
                        <img src={account} className="wedo-icon" />
                        <h3 className="mt-3"><b>Account Management</b></h3>
                        <Link to="/account-management" className="link" ><button className="btn exp-btn mt-2 pl-4 pr-4">Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
</section>


{/* specialist divisions */}
<section className="bg-light pt-5 pb-5">
    <h1 className="font-weight-bold text-center">Specialist Divisions</h1>
    <p className="text-center">Introducing our specialist business travel divisions.  Travel solutions, tailored to you.</p>

        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="card border-0 pb-3">
                    <img src={consult} class="card-img-top  img-fluid travels-pic"/>
                    <div className="card-body">
                        <h3 className="card-title font-weight-bold">Consulting Services</h3>
                        <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Tortor at auctor urna nunc id.
                        Commodo sed egestas egestas fringilla.</p>
                        <Link to="/consulting-services" className="link" ><button className="btn exp-btn  pl-5 pr-5">Read More</button></Link>
                    </div>
                    </div>
                </div>

                <div className="col-md-6">
                <div className="card border-0 pb-3">
                    <img src={meeting} class="card-img-top img-fluid travels-pic"/>
                    <div className="card-body">
                        <h3 className="card-title font-weight-bold">Meeting & Events Management</h3>
                        <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Tortor at auctor urna nunc id.
                        Commodo sed egestas egestas fringilla.</p>
                        <Link to="/contact-us" className="link" ><button className="btn exp-btn  pl-5 pr-5">Read More</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
</section>




























        </>
    )
}