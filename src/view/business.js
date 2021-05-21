import React from 'react';
import {Link} from 'react-router-dom';
import '../css/business.css'



//pictures
import scroll from '../picture/Scroll.png';
import visas from '../picture/Passport icon.png';
import conference from '../picture/conference.png';
import tour from '../picture/tour.png';
import hotel from '../picture/hotel.png';



export const Business = () => {
    return(
        <>

        {/* Hero section */}
        <section>
                <div className="container-fluid hero-business">

                    <div className="col-md-5 hero-content-business">
                                <h1 className="heading text-white"><b>Business<span style={{color:"#0275d8"}}> <br></br>Travel </span></b></h1>
                                <p className="text-white text-justify heading-note">With you wherever you need to be
                                When it comes to managing travel, what works for some companies doesn’t work for others. Supporting your needs is what we’re all about. We are always ready to help and assist you during your travel.
                                Just to make sure you have an awesome travel experience</p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                    </div>
                </div>
        </section>



<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* pave the way */}
<section className="pave mt-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
            <h1 className="head-tag"><span style={{color:'#0275d8'}}> Pave the </span> Way</h1>
        <p className=" text-justify heading-note pave-note">Whether your company is just starting to travel or you’re looking to enhance your current travel program, you’ll have solutions. If you need better rates on flights and hotels, you can get them. When your travelers face massive flight cancellations, we’ll help them. Explore some of the benefits of partnering with us.</p>
    </div>

        <div className="col-md-6 pl-5 pr-5 pave-way-list">
            <div className="">
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Maximize</span> your Travel Investment</p>
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Get</span> a travel policy that engages travelers</p>
            <p  data-aos="fade-down" className=" pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Keep</span> travelers suppported 24/7</p>
            <p  data-aos="fade-down" className="pave-list rounded p-3"> <i className="fa fa-check-circle mr-3"></i><span style={{color:'#0275d8', fontWeight:'bold'}}>Identify</span> new saving opportunities</p>
            </div>
        </div>
            </div>
        </div>
</section>



{/* Make the most */}
<section className="make-most pb-5 mt-5 ">
    <div className="container">
    <h1 className="head-tag text-center"><span style={{color:'#0275d8'}}> Make the most of  <br></br></span>every travel opportunity</h1>
    <p className="text-center col-md-8 mx-auto heading-note p-0">World travels or local conference, wherever you’re headed, you’ll have the tools and resources to book, manage and look out for your travelers.</p>
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3" data-aos="flip-left">
                <div class="card p-4 bg-light most-offer">
                    <div className="time-saving-cont">
                    <img src={visas} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class=" font-weight-bold">Time Saving Tools</h5>
                        <p class="card-text text-justify">Do more in less time with technology that streamlines booking, simplifies reporting, and searches best available rates.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="flip-right">
            <div class="card p-4 bg-light most-offer">
                    <div className="time-saving-cont">
                    <img src={conference} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class=" font-weight-bold">Personalized travel</h5>
                        <p class="card-text text-justify">Meet the individual needs of your travelers and support them 24/7 through our travel counselors.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="flip-left">
            <div class="card p-4 bg-light most-offer">
                    <div className="time-saving-cont">
                    <img src={tour} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class=" font-weight-bold">Managing risk</h5>
                        <p class="card-text text-justify ">Minimize travel risk through technology and services that prioritize traveler safety and support your duty of care obligations.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="flip-right">
            <div class="card p-4 bg-light most-offer">
                    <div className="time-saving-cont">
                    <img src={hotel} class="card-img-top time-saving-icon"/>
                    </div>
                    <div class="card-body p-0 mt-3">
                        <h5 class="font-weight-bold w-100" >Assured accommodations</h5>
                        <p class="card-text text-justify">Get booking technology that includes over 2 million overnight stay options.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


{/* have nice stay */}
<section className="mt-5 mb-5 assured-stay">
        <div className="col-md-6 p-5" style={{backgroundColor:"#010e1b", opacity:'0.9'}}>
        <h1 className="head-tag text-white">Have a nice stay<span style={{color:'#0275d8'}}> </span></h1>
        <p className="text-white text-justify">Accommodations involve lots of planning and resources. You need diverse options at cost-efficient rates as well as payment and reporting solutions. Where do you start?</p>

        <Link to="/hotel"className="link"><button className="btn btn-lg button mt-4">LEARN MORE</button></Link>
        </div>

</section>


{/* Explain yourself */}
<section className="explain mt-5 pb-5">
    <div className="container">

    <h1 className="head-tag text-center"><span style={{color:'#0275d8'}}> Tell Us About </span>Yourself</h1>
    <p className="text-center col-md-8 mx-auto heading-note p-0">To get a better idea of how we can help you manage travel, let us know which best describes your company and we’ll point you in the right direction.</p>

    <p data-aos="fade-right"  className="col-md-8 mx-auto pave-list rounded p-3">Does your business need a <span style={{color:'#0275d8', fontWeight:'bold'}}>customized approach?</span></p>

    <p data-aos="fade-right"className="col-md-8 mx-auto pave-list rounded p-3">Does your business need a <span style={{color:'#0275d8', fontWeight:'bold'}}>one-stop solution?</span></p>

    <p data-aos="fade-right" className="col-md-8 mx-auto pave-list rounded p-3">Does your business need a <span style={{color:'#0275d8', fontWeight:'bold'}}>super-simple way to manage travel?</span></p>

    <p data-aos="fade-right" className="col-md-8 mx-auto pave-list rounded p-3">Does your business need a <span style={{color:'#0275d8', fontWeight:'bold'}}>Consultant Service?</span></p>


    </div>
</section>














        </>
    )
}