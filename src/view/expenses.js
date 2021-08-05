import React from 'react';
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';

import '../css/expenses.css';


//pictures
import meetincentices from '../picture/refine/mbg25.jpg'
import plane from '../picture/refine/plane.png'
import techpics from '../picture/refine/mockup1.png'





export const Expenses = () => {
    return(
        <>

                 {/* Hero section */}
                 <section>
                <div className="container-fluid hero-expense">

                    <div className="col-md-6 hero-content-expense                     animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Your finance team’s dream</b></h1>
                                <p className="text-white  heading-note">Mysterious expenses and untraceable payments are a thing of the past. Leave behind clunky platforms and embrace the easy way to manage travel expenses and payments.</p>


                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* pave the way */}
<section className="pave mt-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
            <h1 className="head-tag text-left">Payments made simple - worldwide</h1>
                <p className="text-justify heading-note">Forget company credit cards and time-consuming reconciliation. All your traveller’s bills can now be settled without costing you headaches or time.</p>

                <div>
        
            <p  data-aos="fade-down" className="pave-list rounded  pl-3 pr-2 pt-2 pb-2"> <i className="fa fa-check-circle mr-3"></i>Set up dedicated business travel credit lines that handle seasonal shifts and 24/7 authorisations.</p>
            <p  data-aos="fade-down" className="pave-list rounded pl-3 pr-2 pt-2 pb-2"> <i className="fa fa-check-circle mr-3"></i>Access detailed reporting that holds the secrets to reducing your travel spend.</p>
            <p  data-aos="fade-down" className="pave-list rounded  pl-3 pr-2 pt-2 pb-2"> <i className="fa fa-check-circle mr-3"></i>Pay globally and prevent fraud with secure, worldwide payment solutions.</p>

            </div>


    </div>

        <div className="col-md-6 ">
        <img src={techpics} className="img-fluid"/>
        </div>


            </div>
        </div>
</section>


{/* Meetings and incentives */}
<section className="meet-incent pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0 order-2 order-md-1">
                    <img src={meetincentices} className="meet"/>
                </div>

                <div className="col-md-6 p-5 mt-5 meeting-col order-1 order-md-2 expense-report" data-aos="fade-right">
                <h1 className="head-tag text-left">Expense reporting + travel bookings =<span style={{color:'#0275d8'}}> a match made in heaven </span></h1>
                <p className="text-justify heading-note">Our travel and expense management tools kick tedious reconciliation processes to the curb. We have combined travel bookings and expense reporting into one simple process.</p>

                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla.</p>

                <p className="text-justify heading-note">Make the most of blending your travel expenses and booking processes with an all-in-one system, designed to make your life easier.</p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                </div>
            </div>
        </div>
</section>




























</>
    )

}