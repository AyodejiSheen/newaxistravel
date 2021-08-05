import React from 'react';
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';

import '../css/approval.css';


//pictures
import meetincentices2 from '../picture/refine/mbg10.jpg'
import plane from '../picture/refine/plane.png'
import techpics from '../picture/refine/smbg3.jpg'





export const Approval = () => {
    return(
        <>

                 {/* Hero section */}
                 <section>
                <div className="container-fluid hero-approval">

                    <div className="col-md-6 hero-content-approval                     animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Say goodbye to drawn-out<span style={{color:"#0275d8"}}> travel approvals</span> </b></h1>
                                <p className="text-white  heading-note">No more overcomplicated approvals</p>
                                <p className="text-white  heading-note">No more time wasted on getting the green light</p>

                                <p className="text-white  heading-note">No more confusion about being in policy.</p>


                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



{/* pave the way */}
<section className="pave mt-5 ">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
            <h1 className="head-tag text-left">Travel approvals in one touch</h1>
                <p className="text-justify heading-note">Without a system in place, travel approvals can get messy. Nuances are missed, deadlines are pushed, and travel policy can be completely abandoned.</p>

                <p className="text-justify heading-note">You need a streamlined approval system that can be customised to your travel policy, and you need it now.

                Our easy-to-use tools give you the power of instant approvals and accurate information, right in the palm of your hand. <b>On any device you can:</b></p>
    </div>

        <div className="col-md-6 pl-5 pr-5 pave-way-list">
        <div className="font-weight-bold">
            
            <p  data-aos="fade-down" className="pave-list rounded p-2"> <i className="fa fa-check-circle mr-3"></i>Connect with your online booking tools</p>
            <p  data-aos="fade-down" className="pave-list rounded p-2"> <i className="fa fa-check-circle mr-3"></i>Request travel authorisation before booking</p>
            <p  data-aos="fade-down" className="pave-list rounded p-2"> <i className="fa fa-check-circle mr-3"></i>Capture key reporting data</p>
            <p  data-aos="fade-down" className="pave-list rounded p-2"> <i className="fa fa-check-circle mr-3"></i>Easily manage all your pending approvals in one place</p>
            <p  data-aos="fade-down" className="pave-list rounded p-2"> <i className="fa fa-check-circle mr-3"></i>View and approve “my travellers” dashboard with just one click</p>
            </div>
        </div>
            </div>
        </div>
</section>



{/* Events*/}
{/* <section className="stream">
        <div className="container-fluid">
            <div className="row">
                <div data-aos="fade-right" className="col-md-6 p-5 events-col">
                <h1 className="head-tag text-left">Travel approvals in one touch</h1>
                <p className="text-justify heading-note">Without a system in place, travel approvals can get messy. Nuances are missed, deadlines are pushed, and travel policy can be completely abandoned.</p>

                <p className="text-justify heading-note">You need a streamlined approval system that can be customised to your travel policy, and you need it now.

                Our easy-to-use tools give you the power of instant approvals and accurate information, right in the palm of your hand. <b>On any device you can:</b></p>

                <div className="font-weight-bold">
            <p  data-aos="fade-down" className="pave-list rounded p-2"> <i className="fa fa-check-circle mr-3"></i>Connect with your online booking tools</p>
            <p  data-aos="fade-down" className="pave-list rounded p-2"> <i className="fa fa-check-circle mr-3"></i>Request travel authorisation before booking</p>
            <p  data-aos="fade-down" className="pave-list rounded p-2"> <i className="fa fa-check-circle mr-3"></i>Capture key reporting data</p>
            <p  data-aos="fade-down" className="pave-list rounded p-2"> <i className="fa fa-check-circle mr-3"></i>Easily manage all your pending approvals in one place</p>
            <p  data-aos="fade-down" className="pave-list rounded p-2"> <i className="fa fa-check-circle mr-3"></i>View and approve “my travellers” dashboard with just one click</p>
            </div>

            <p className="text-justify heading-note">Whether you’re handling approvals pre or post trip, or across your entire company, we will remove the endless back-and-forth and make approvals simple.</p>





                </div>

                <div className="col-md-6 p-0 ">
                    <img src={meetincentices2} className="img-fluid"/>
                </div>
            </div>
        </div>
</section> */}



<section className="travelmg-1 pt-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 order-2 order-md-1 p-0">
                    <img src={techpics} className="img-fluid"/>
                </div>

                <div className="col-md-6 pl-5 pr-5 pb-5 pt-3 meeting-col order-1 order-md-2" data-aos="fade-right">
                <h1 className="head-tag text-left">Stay on top of your programme</h1>
                <p className="heading-note text-justify">Your travel policy is what guides your company’s entire travel management process. Without it, you could find yourself experiencing spend leakage and out of policy bookings. In saying that, you can have the best travel policy in the world, but it won’t count for much if nobody follows it.</p>

                <p className="heading-note text-justify">Align your travel policy with our approval technology. No matter how complex your travel needs are, we will work with you to seamlessly integrate them into our system. Keep your travellers safe and within policy... and on budget – bonus!</p>

                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>

                </div>
            </div>
        </div>
</section>


<section className="travelmg-1 stream-2 pt-5 mb-2 ">
        <div className="container">
            <div className="row">
                <div className="col-md-6 p-0 order-2 order-md-1">
                    <img src={plane} className="img-fluid"/>
                </div>

                <div className="col-md-6 pl-5 pr-5 pb-5 pt-3 meeting-col order-1 order-md-2" data-aos="fade-right">
                <h1 className="head-tag text-left">Does your travel policy need an upgrade?</h1>
                <p className="heading-note text-justify">Put your travel policy to the test with our Global Policy Benchmarking Tool.</p>

                <p className="heading-note text-justify">Our tool benchmarks travel policies from different customers and industries. See how your current travel policy compares and find out where you can make improvements to take your travel programme to the next level.</p>

                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>

                </div>
            </div>
        </div>
</section>

























        </>
    )
}