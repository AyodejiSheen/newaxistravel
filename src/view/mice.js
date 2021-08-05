import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../css/mice.css'


//pictures
import scroll from '../picture/Scroll.png';
import meetincentices from '../picture/refine/mbg4.jpg'
import meetincentices2 from '../picture/refine/mbg2.jpg'
import meetincentices3 from '../picture/refine/mbg10.jpg'




export const Mice = () => {


    const history = useHistory();

    const group = () => {
        history.push('/group-travel')
    }


    const delegate = () => {
        history.push('/delegate-management')
    }








    return (
        <>

        {/* Hero section */}
        <section>
                <div className="container-fluid hero-mice">

                    <div className="col-md-6 hero-content-mice                     animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Whether physical, virtual or hybrid, we bring your events to life!<span style={{color:"#0275d8"}}> </span></b></h1>

                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



<section className="pave mt-5">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 p-5">
            <h1 className="head-tag">Meetings and <span style={{color:'#0275d8'}}>Event Management </span></h1>
        <p className=" text-justify heading-note">We organize events that bring people together and form powerful corporate bonds. Our team of event specialists deliver a diverse and bespoke range of events, strategic meetings, conferences, incentive travel programs and corporate hospitality events. Your events become a distinctive experience that delegates and guests always look forward to.</p>

        <p className=" text-justify heading-note">Plan international meetings, conferences and events with us. We have the team, tools and technical capacity to make your meetings interactive and engaging - whether virtual, face-to-face or hybrid. Your attendees enjoy seamless connection and lively conversations no matter what part of the world they are connected from.
        We provide you with complete end-to-end event management from venue sourcing, agenda planning, event theming, delegate travel and transfers, accommodation and meals, innovative event technology, entertainment and post-event reporting and evaluation. Let our team take care of every aspect of your event, so you can focus on your business.</p>

        
    </div>

        <div className="col-md-6 p-0">
            <div className="">
            <img src={meetincentices} className="meet"/>
            </div>
        </div>
            </div>
        </div>
</section>


{/* Meetings and incentives */}
<section className="meet-incent ">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7 p-0">
                    <img src={meetincentices} className="meet"/>
                </div>

                <div className="col-md-5 p-5 mt-5 meeting-col" data-aos="fade-right">

                <h1 className="head-tag">Incentive  <span style={{color:'#0275d8'}}> Travel</span></h1>
                <p className=" text-justify heading-note">Axis creates and delivers event management and incentive travel experiences that inspire and motivate both staff and business partners.</p>

                <p className=" text-justify heading-note">Our tailored and cost-effective incentive programs are strategically designed to drive performance and deliver results while enriching connections between participants. From weekend reward experiences to international team-building events that support your CSR strategy, we can design an incentive program that suits your budget and business objectives.</p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                </div>
            </div>
        </div>
</section>



<section className="meet-incent ">
        <div className="container-fluid">
            <div className="row">


                <div className="col-md-5 p-5 mt-5 meeting-col" data-aos="fade-right">

                <h1 className="head-tag">Event  <span style={{color:'#0275d8'}}> Technology</span></h1>
                <p className=" text-justify heading-note">From event registration and travel bookings, to delegate tracking, agenda management, social engagement and budget management, our extensive suite of event technologies are designed to make your event run smoothly and efficiently at all times.</p>

                <p className=" text-justify heading-note">We build customized event apps and registration sites that support your event theme and message and promote maximum attendee engagement. No more paper agendas and invitations!</p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                </div>


                <div className="col-md-7 p-0">
                    <img src={meetincentices} className="meet"/>
                </div>
            </div>
        </div>
</section>

<section>
    <div className="container-fluid">
        <div className="row">
            
            <div className="col-md-6 text-left pl-5 pr-5 pt-4 pb-4 text-white btn rounded-0" style={{backgroundColor:'#0275d8'}} onClick={group}>
            <h1 className="head-tag">Group   Travel</h1>
            <p className=" text-justify heading-note">Read More ➔</p>
            
            </div>

        
            <div className="col-md-6 text-left pl-5 pr-5 pt-4 pb-4 text-white btn rounded-0" style={{backgroundColor:'#010e1b'}} onClick={delegate}>
            <h1 className="head-tag">Delegate Management</h1>
            <p className=" text-justify heading-note">Read More ➔</p>
            </div>
        </div>
        
    </div>
</section>


<section className="tech-haves pt-5 pb-5">
<h1 className="font-weight-bold text-center">Key Features</h1>

<div className="container">
    <div className="row">
        <div className="col-md-6">
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Domestic and international venue finding. </span>With connections to exclusive and exquisite venues, we provide the perfect ambience that sets the right tone for any event. </p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Event Production </span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>	Onsite event management</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>	Brand experience activations</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Pharmaceutical compliant event management</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>Pre and post-event evaluation</span></p>
        </div>

        <div className="col-md-6">

        <p  data-aos="fade-down" className="pave-list rounded p-3 "> <i className="fa fa-check-circle mr-3"></i><span style={{  fontWeight:'bold'}}>End to end event logistics:  </span>You never have to worry about anything; we efficiently manage before, during and after event activities </p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>	Inbound destination management offering</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>	Budget and financial control</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>	Accommodation booking and management</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>	Catering management</span></p>

            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{ fontWeight:'bold'}}>	Follow-up meetings</span></p>
        </div>
    </div>
</div>

</section>































        </>
    )
}