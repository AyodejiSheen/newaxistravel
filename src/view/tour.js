import React from 'react';
import '../css/tour.css';
import {Link} from 'react-router-dom'


//pictures
import scroll from '../picture/Scroll.png';
import world from '../picture/world.png';
import location from '../picture/clocation.png';
import enjoy from '../picture/enjoy.png';
import tour3 from '../picture/tour-3.png';
import tour2 from '../picture/tour-2.png';
import tour1 from '../picture/tour-1.png';
import tourp1 from '../picture/tourp1.png';
import tourp2 from '../picture/tourp2.png';
import tourp3 from '../picture/tourp3.png';
import tourp5 from '../picture/tourp5.png';
import tourp4 from '../picture/tourp4.png';
import tourp6 from '../picture/tourp6.png';
import travels1 from '../picture/travels1.png';
import travels2 from '../picture/travels2.png';
import travels3 from '../picture/travels3.png';


export const Tour = () => {

    return (

        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid hero-tour">

                    <div className="col-md-5 hero-content-tour">
                                <h1 className="heading text-white"><b>Tour</b></h1>
                                <p className="text-white text-justify heading-note">Axis Travel offers VIP tours across Dubai and the Emirates. We
cater for both individual trips and corporate team building
tours. Your dedicated Tour Consultant will work closely with
you to deliver the perfect tour at the best possible price. Same
day booking is available, with pick up and drop off at your hotel
or accommodation.</p>
<Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>

                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* worldwide */}
<section className="tours mt-5">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card tour-options">
                <img src={world} class="card-img-top img-fluid tour-img"/>
                <div className="card-body tour-note">
                    <h5 className="card-title tour-title text-center">Worldwide Connected</h5>
                    <p className="heading-note text-center  mb-0">Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna
aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4">
            <div className="card tour-options">
                <img src={location} class="card-img-top img-fluid tour-img"/>
                <div className="card-body">
                    <h5 className="card-title tour-title text-center">Choose Location</h5>
                    <p className="heading-note text-center  mb-0">Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna
aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4">
            <div className="card tour-options">
                <img src={enjoy} class="card-img-top img-fluid tour-img"/>
                <div className="card-body">
                    <h5 className="card-title tour-title text-center">Enjoy Destination</h5>
                    <p className="heading-note text-center  mb-0">Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna
aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>



{/* enjoy feeling */}
<section className="c-travel mt-5 pb-5 pt-5 enjoy-section">
    <div className="container pb-5">
        <div className="row">
            <div className="col-md-6">
                <div className=" c-travel-sub pt-5 p-3">
                <h1 className="head-tag">Enjoy <br></br> <span style={{color:'#0275d8'}}>Wonderful </span>Feelings</h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. </p>

                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                </div>
            </div>

            <div className="col-md-6">
                <div className="stack-rect">
                    <img src={tour3} className="position-absolute stack3"/>
                    <img src={tour2} className="position-absolute stack2"/>
                    <img src={tour1} className="position-absolute stack1"/>
                </div>
            </div>
        </div>
    </div>

    

    {/* Awesome Destination */}

        <div className="container-fluid mt-5 p-4">
        <h1 className="head-tag text-center">Awesome <span style={{color:'#0275d8'}}>Destinations</span></h1>
        <p className="text-center mx-auto col-md-6 heading-note">Axis Travel, we promise our guest with the standard</p>

        <div className="row t-img-box">
            <div className="col-6 col-md-2 img-box">
            <img src={tourp1} class="img-fluid dest-img"/>
            </div>

            <div className="col-6 col-md-2 img-box">
            <img src={tourp2} class="img-fluid  dest-img"/>
                
            </div>

            <div className="col-6 col-md-2 img-box">
            <img src={tourp3} class="img-fluid  dest-img"/>
                
            </div>

            <div className="col-6 col-md-2 img-box">
            <img src={tourp4} class="img-fluid  dest-img"/>
                
            </div>

            <div className="col-6 col-md-2 img-box">
            <img src={tourp5} class="img-fluid  dest-img"/>
                
            </div>

            <div className="col-6 col-md-2 img-box">
            <img src={tourp6} class="img-fluid dest-img "/>
                
            </div>
        </div>
        </div>
</section>


<section className="our-travels  mb-5">
<h1 className="head-tag text-center">Our <span style={{color:'#0275d8'}}>Travels</span></h1>
        <p className="text-center mx-auto col-md-6 heading-note">Axis Travel, we promise our guest with the standard</p>
    <div className="container">
        <div className="row">
            <div className="col-md-4 travel-dest">
            <div className="card border-0 shadow">
                <img src={travels1} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                    <h5 className="card-title tour-title ">Bangkok Tour, Thailand</h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna
aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla.</p>
<Link to="/bangkok-tour"><button className="btn tour-button shadow p-2 pl-3 pr-3" >READ MORE </button></Link>
                </div>
                </div>
            </div>


            <div className="col-md-4 travel-dest">
            <div className="card border-0 shadow ">
                <img src={travels2} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                    <h5 className="card-title tour-title ">Siam Paragon, Australia</h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna
aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla.</p>
<a href="#"><button className="btn tour-button shadow p-2 pl-3 pr-3" >READ MORE </button></a>
                </div>
                </div>
            </div>


            <div className="col-md-4 travel-dest">
                <div className="card border-0 shadow">
                <img src={travels3} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                    <h5 className="card-title tour-title ">Siam Paragon, Australia</h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna
aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla.</p>
<a href="#"><button className="btn tour-button shadow p-2 pl-3 pr-3" >READ MORE </button></a>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>




























        </>
    )
}