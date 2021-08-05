import React from 'react'
import {Link} from 'react-router-dom'


import '../css/report.css';



//picture
import scroll from '../picture/Scroll.png';
import analytics from '../picture/refine/mbg24.jpg'

export const Report = () => {
    return (
        <>

                {/* Hero section */}
                <section>
                <div className="container-fluid hero-report">

                    <div className="col-md-6 hero-content-report                     animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Turning your reporting and analytics into action</b></h1>
                                <p className="text-white  heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla.</p>


                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center ">
    <img src={scroll} className="scroll animate__animated animate__bounce newscroll"/>
</div>



{/* Meetings and incentives */}
<section className="meet-incent pt-5 pb-5 report-main">
        <div className="container-fluid">
            <div className="row report-row">
                <div className="col-md-6 p-0 order-2 order-md-1">
                    <img src={analytics} className="img-fluid"/>
                </div>

                <div className="col-md-6 p-5 meeting-col report-row-note order-1 order-md-2" data-aos="fade-right">
                <h1 className="head-tag text-left">Access Data Insights Quickly And Easily</h1>
                <p className="text-justify heading-note">If you want to improve your travel programmes, you’re going to need some data first. Data is what paints a picture of your travel management habits. The secrets to where you’re overspending, which travel policies are falling short, how you can improve safety and where you can save time and money are all hidden in your travel data.</p>

                <p className="text-justify heading-note">Our reporting and analytics team has the expertise to interpret and translate your data into savings, improvements, and travel-wide benefits. Get on-demand reporting and detailed overviews of your travel activity, reservations and financial expenditure.</p>

                <p className="text-justify heading-note">Let us take a deep dive into your travel management data and pull up actionable insights that will lead to big results.</p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                </div>
            </div>
        </div>
</section>






<section>
    <div className="container-fluid reporting p-5">
        <h1 className=" head-tag text-center report-head">24/7 Online Access To Business  <span style={{color:'#0275d8'}}>Travel Reporting</span></h1>
        <p className="text-justify heading-note">Our innovative business travel reporting command center is your key to compliance. We’ll help you gather all your data worldwide in one place to give you full visibility across your entire travel program. With amazing flexibility and power, our platform lets you change your view from worldwide to country to business unit to traveler with just a few clicks.</p>
        <p className="text-justify heading-note">
In addition to standard business travel reporting, our platform provides rich business intelligence capabilities:</p>

<div className=" pl-4">
            <p className="text-justify heading-note" > <i className="fa fa-check-circle mr-3"></i>Custom queries to allow you to get exactly the right business travel reporting information for your organization’s key stakeholders</p>
            <p className="text-justify heading-note"> <i className="fa fa-check-circle mr-3"></i>Built-in benchmarking helps you know how your travel program stacks up to others.</p>
            <p className="text-justify heading-note"> <i className="fa fa-check-circle mr-3"></i>Analysis of your business travel reporting data lets us identify recommended actions you can take to improve your results.</p>
            <p className="text-justify heading-note"> <i className="fa fa-check-circle mr-3"></i>Graphic dashboards and charts—with drill-through clicks to the detailed data behind them—help you easily understand your data and share it with stakeholders.</p>
            </div>

            <p className="text-justify heading-note">
            With our business intelligence platform, you have more power than ever to manage your travel program effectively, monitor your travelers and identify ways to save even more money.</p>
<div className="container">

<div className="row">
    <div className="col-md-6 p-5 shadow report-inner">
        <h1 className=" head-tag">Near Real-Time Business <span style={{color:'#0275d8'}}>Travel Reporting</span></h1>
            <p className="text-justify heading-note">Data is sent to our business travel reporting system as each booking is made, so you get near real-time access to your travel spend. This helps you and your organization identify non-compliant bookings as well as provides the most current data possible to our traveler tracking services. When combined with our automated messaging services, you can instantly take action when needed to improve compliance and alert travelers to helpful or important information.</p>
    </div>

    <div className="col-md-6 p-5 report-inner">
    <h1 className=" head-tag">Share Reporting on <span style={{color:'#0275d8'}}>Corporate Travel Easily</span></h1>
            <p className="text-justify heading-note">Once you’ve reviewed your company’s data, you’ll want to share it with your key stakeholders to gather support for your plans. Our platform makes that easy, too. Once you’ve accessed the data you need, and created the specific charts and visuals you need, it’s simple to export your business travel reporting into a shareable format and even schedule those to send automatically at a time of your choosing.</p>
    </div>
</div>
</div>

    </div>

</section>

<section className="talk-report">
<div className="container text-center">
    <h1 className="font-weight-bold text-center">TAKE YOUR CORPORATE TRAVEL REPORTING TO THE NEXT LEVEL.</h1>
    <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
</div>
</section>






















        </>
    )
}


