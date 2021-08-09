import React from 'react'
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';


import '../css/account.css';


//pictures
import employee from '../picture/newrefine/mbg1.jpg'
import booking from '../picture/newrefine/mbg2.jpg'
import ticket from '../picture/newrefine/mbg3.jpg'
import security from '../picture/newrefine/mbg6.jpg'
import accomodation from '../picture/newrefine/mbg5.jpg'


export const Account = () => {
    return (
        <>
                    {/* Hero section */}
        <section>
                <div className="container-fluid hero-account">

                    <div className="col-md-6 hero-content-account                     animate__animated animate__fadeInLeft">
                                <h1 className="font-weight-bold text-white">Partner, Collaborate. Get outstanding results when your trips revolve around Axis<span style={{color:"#0275d8"}}> </span></h1>
                            
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



{/* pave the way */}
<section className="pave mt-5 mb-5 top-note">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
            <h1 className="head-tag"><span style={{color:'#0275d8'}}> With a dedicated account manager by your side.</span></h1>
        <p className=" text-justify heading-note">Get the control you’ve always wanted when you partner with us. We know that the little, thoughtful details matter so we make sure to cover all bases for accounts that we manage. 
Our modern tools help your travelers enjoy travelling even more and make life easier. We effectively keep track of all past, present and future travelling. Say goodbye to complicated booking policies, restricted booking options, and chaotic travel management and discover efficient travel management that puts you in charge.  
</p>
    </div>

        <div className="col-md-7 pl-5 pr-5 pave-way-list">
            <div className="">
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i>We leverage modern technology that generates personalized travel options within the limits of your company’s policy and budget in one single tap</p>
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i>We deliver a direct travel solution that simplifies everything from the booking stage to other changes that may come up.</p>
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i>With these, it is easier to book a trip, a hotel or lodging and wrap up travel plans very quickly.</p>
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i>We provide on-demand and proactive live human support that recognize and resolve issues immediately they come up</p>
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i>We save cost and maximize your savings by efficiently bypassing long, tedious processes that cost more time and money</p>
            </div>
        </div>
            </div>
        </div>
</section>



<section className="">
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-6 pl-5 pr-5 pt-5 column-note">
                <h1 className="head-tag text-left" > EXCLUSIVE EMPLOYEE  <span style={{color:'#0275d8'}}>CARE AND SUPPORT</span> </h1>
                <p className="text-justify heading-note mb-0">Your workforce will never travel alone. </p>  

                <ul className="feature-list">
                <li><p className="text-justify heading-note mb-0" >	We ensure that your employees receive all the care and support they need right from the initiation of the trip to its completion</p></li>

                <li><p className="text-justify heading-note mb-0" >Your travelers enjoy medical, security and other necessary support throughout the duration of their trip</p></li>
                <li><p className="text-justify heading-note mb-0" >	We are quick to locate and respond to your travelers in cases of emergency and urgency</p></li>
                <li><p className="text-justify heading-note mb-0" >	By constantly communicating with them, we keep your travelers up to date about incidences or occurrences that may affect them or cause any damage to the overall business mission or their personal health or safety</p></li>

                <button className="btn btn-lg button mt-4" data-toggle="modal" data-target="#employee-more">READ MORE</button>
            </ul>
                </div>

                <div className="col-md-6 p-0">
                    <img src={employee} className="img-fluid"/>
                </div>

            </div>
        </div>
</section>



<div class="modal fade " id="employee-more" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content modal-bg">
      <div class="modal-header p-0">
      {/* <img src={adventure} className="img-fluid ideas"/> */}
      </div>
      <div class="modal-body blur ">
    <div className="col-md-8 mx-auto">
                <h1 className="font-weight-bold text-left" > EXCLUSIVE EMPLOYEE  <span style={{color:'#0275d8'}}>CARE AND SUPPORT</span> </h1>
                <p className="text-justify heading-note mb-0">Your workforce will never travel alone. </p>  

                <ul className="feature-list">
                <li><p className="text-justify heading-note mb-0" >	We ensure that your employees receive all the care and support they need right from the initiation of the trip to its completion</p></li>

                <li><p className="text-justify heading-note mb-0" >Your travelers enjoy medical, security and other necessary support throughout the duration of their trip</p></li>
                <li><p className="text-justify heading-note mb-0" >	We are quick to locate and respond to your travelers in cases of emergency and urgency</p></li>
                <li><p className="text-justify heading-note mb-0" >	By constantly communicating with them, we keep your travelers up to date about incidences or occurrences that may affect them or cause any damage to the overall business mission or their personal health or safety</p></li>

                <li><p className="text-justify heading-note mb-0" >	24/7 365 days a year traveler care and support</p></li>
                <li><p className="text-justify heading-note mb-0" >Your travelers enjoy easy accommodation bookings of your organization’s or their personal choice</p></li>
                <li><p className="text-justify heading-note mb-0" >No matter the country, city or town, we provide transportation for easy and quick navigation to complete the success of an already productive business trip </p></li>
                <li><p className="text-justify heading-note mb-0" >	We do everything necessary to eliminate risks as well as enhance their care and well being </p></li>
            </ul>
          </div>  

          <div className="modal-footer">
          <button type="button" className="btn btn-lg button" data-dismiss="modal">CLOSE</button>
        </div>   
      </div>
    </div>
  </div>
</div>


<section className="booking-section">
        <div className="container-fluid">
            <div className="row">

            <div className="col-md-6 p-0 order-2 order-md-1 ">
                    <img src={booking} className="img-fluid"/>
                </div>

                <div className="col-md-6 pl-5 pr-5 pt-2 order-1 order-md-2 column-note">
                <h1 className="head-tag text-left" > REMOVE THE COMPLEXITY   <span style={{color:'#0275d8'}}>AND CHAOS OF TRAVEL BOOKINGS</span> </h1>
                <p className="text-justify heading-note mb-0">Your time and money are precious to you so we help you to save both.  </p>  

                <ul className="feature-list">
                <li><p className="text-justify heading-note mb-0" >Get personalized traveler insight delivered straight to you when you need it. We do all the research, sieve out unnecessary information and give what you need to make vital travel decisions</p></li>

                <li><p className="text-justify heading-note mb-0" >Whether airline or hotel bookings, we have powerful tools and intelligent technology that is customized to your organization’s needs. So you enjoy a seamless experience that allows you to make bookings in one single click</p></li>
                <li><p className="text-justify heading-note mb-0" >We make all bookings in advance to avoid last-minute rush and easily make cancellations when plans change with complete refund or funds reversal</p></li>
                <li><p className="text-justify heading-note mb-0" >Your organization is unique so we provide booking options that suit your style, preference and budget.</p></li>

              
            </ul>
                </div>



            </div>
        </div>
</section>



<section className="">
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-5 p-5 column-note">
                <h1 className="head-tag text-left" ><span style={{color:'#0275d8'}}>AIRLINE TICKETS</span> </h1>
                <p className=" text-justify heading-note">Achieve more with one less thing to worry about. Avoid long waiting lines, say goodbye to impromptu flight rescheduling without a backup plan and welcome the ability to obtain travel tickets without the associated hassle. With us as your travel partner, you have one less thing to worry about. We do all the running around and correspondence so that you never have to.</p>
                
                <p className="text-justify heading-note" >	With the best airline ticket deals and surprisingly huge discounts, your travelers enjoy travel management that serves them at every point and makes them truly happy. Our friendly travel consultants always deliver prompt ticketing services for international trips. Since we are regularly updated with the latest promo fares and the cheapest rates, we can accommodate any budget size.</p>
            
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                </div>

                <div className="col-md-7 p-0">
                    <img src={ticket} className="img-fluid"/>
                </div>

            </div>
        </div>
</section>



<section className="hotel-section">
        <div className="container-fluid">
            <div className="row">

            <div className="col-md-7 p-0 order-2 order-md-1">
                    <img src={accomodation} className="img-fluid"/>
                </div>

                <div className="col-md-5 p-5 order-1 order-md-2 column-note">
                <h1 className="head-tag text-left" >PERSONALIZED TRAVEL, <span style={{color:'#0275d8'}}>ACCOMMODATION AND TRANSPORT NEEDS </span> </h1>
                <p className=" text-justify heading-note">We can tell which trip requires a limousine service and which does not. No business trip is similar, even within the same company. As we understand your company’s preference and style as well as your travelling plan, we serve you better and can predict your needs for each business trip. 
                Thanks to our intelligent booking technology that always remembers you and our dedicated support staff, we know what you would prefer for each trip. We organize specific hotel bookings, transport services, travel arrangements, etc. in line with the demands of each trip.
                </p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                </div>

            </div>
        </div>
</section>


<section className="">
        <div className="container-fluid">
            <div className="row">



                <div className="col-md-5 p-5 column-note">
                <h1 className="head-tag text-left" >DATA SECURITY <span style={{color:'#0275d8'}}></span> </h1>
                <p className=" text-justify heading-note">We understand the need for discretion and so we protect your privacy by every means. We keep correspondence secure, ensuring that your travel itinerary remains within the company alone. We build an advanced firewall around your company’s accounts to keep hackers and cybercriminals out and your company information securely locked in.</p>

                <p className=" text-justify heading-note">We constantly update our data security systems to provide a safe online and digital environment to run your business and confidently conduct travel arrangements.  </p>
            
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                </div>


                <div className="col-md-7 p-0">
                    <img src={security} className="img-fluid"/>
                </div>

            </div>
        </div>
</section>

<div className="partner-quote col-10 col-md-8 text-center mx-auto mt-4">
            <p className="text-justify heading-note mb-0 text-center font-weight-bold" style={{color:"#0275d8"}}><i>Our strategic management of your company’s travel account puts you ahead in travelling and a lot more.</i></p>
</div>
















        </>
    )
}


