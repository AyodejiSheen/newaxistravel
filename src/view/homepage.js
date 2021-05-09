import React from 'react'
import '../css/homepage.css';
import {Link, useHistory} from 'react-router-dom';


//pictures
import scroll from '../picture/Scroll.png';
import flight from '../picture/Airport icon.png';
import visas from '../picture/Passport icon.png';
import conference from '../picture/conference.png';
import tour from '../picture/tour.png';
import hotel from '../picture/hotel.png';
import car from '../picture/car.png';
import packages from '../picture/packages.png';
import stack3 from '../picture/stack3.jpeg';
import stack2 from '../picture/stack2.jpeg';
import stack1 from '../picture/stack1.jpeg';
import meet1 from '../picture/meet1.png';
import meet2 from '../picture/meet2.png';
import meet3 from '../picture/meet3.png';
import leisure from '../picture/leisure.jpeg';
import leisure1 from '../picture/leisure1.jpeg';
import leisure2 from '../picture/leisure2.jpeg';
import leisure3 from '../picture/leisure3.jpeg';
import W01 from '../picture/01.png';
import W02 from '../picture/02.png';
import W03 from '../picture/03.png';
import W04 from '../picture/04.png';
import W05 from '../picture/05.png';
import W06 from '../picture/06.png';


//video
import movie from '../picture/tour vid.mp4';





export const Homepage = () => {
    return (
        <>

        {/* Hero section */}
        <section>
                <div className="container-fluid hero-main">
                    <div className="col-md-5 hero-content">
                                <h1 className="heading text-white"><b>A <span style={{color:"#0275d8"}}> Travel Agency</span> Unlike All Others Travel</b></h1>
                                <p className="text-white text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Morbi enim nunc faucibus a pellentesque. </p>
                                <button className="btn btn-lg button mt-4">CONTACT US</button>
                    </div>
                </div>
        </section>


<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* Our Services */}
<section className="our-services mt-5 pb-5">
    <h1 className="head-tag text-center">Our <span style={{color:"#0275d8"}}>Services</span></h1>
    <p className="text-center col-md-6 mx-auto heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>

    <div className="container animate__animated animate__backInUp">
        <div className="row">
            <div className=" col-6 col-md-3">
                <div className="service-box pb-5 pt-5">
                    <div className="icon mx-auto text-center p-3">
                        <img src={flight} className="icon-pic"/>
                    </div>
                        <p className="service-name mt-4 text-center">Flight</p>
                </div>
            </div>

            <div className=" col-6 col-md-3">
            <div className="service-box pb-5 pt-5">
                    <div className="icon mx-auto p-3 text-center ">
                        <img src={visas} className="icon-pic"/>
                    </div>
                        <p className="service-name mt-4 text-center">Visas</p>
                </div>
            </div>

            <div className=" col-6 col-md-3">
            <div className="service-box pb-5 pt-5">
                    <div className="icon mx-auto p-3 text-center">
                        <i className="fa fa-user-shield shield"></i>
                    </div>
                        <p className="service-name mt-4 text-center">Insurances</p>
                </div>
            </div>

            <div className="col-6 col-md-3">
            <div className="service-box pb-5 pt-5">
                    <div className="icon mx-auto p-3 text-center">
                        <img src={tour} className="icon-pic"/>
                    </div>
                        <p className="service-name mt-4 text-center">Tours</p>
                </div>
            </div>
        </div>


        <div className="row mt-4 service-2">
            <div className="col-6 col-md-3">
                <div className="service-box pb-5 pt-5">
                    <div className="icon mx-auto p-3 text-center">
                        <img src={hotel} className="icon-pic"/>
                    </div>
                        <p className="service-name service-name-hotel-1 mt-4 text-center">Hotel Reservation</p>
                        <p className="service-name-hotel mt-4 text-center">Hotel Resv.</p>
                </div>
            </div>

            <div className="col-6 col-md-3 service">
                <div className="service">
                    <div className="service-box pb-5 pt-5">
                            <div className="icon mx-auto p-3 text-center">
                                <img src={car} className="icon-pic"/>
                            </div>
                                <p className="service-name mt-4 text-center">Transport</p>
                    </div>
                </div>
            </div>

            <div className="col-6 col-md-3">
            <div className="service-box pb-5 pt-5">
                    <div className="icon mx-auto p-3 text-center">
                        <img src={packages} className="icon-pic"/>
                    </div>
                        <p className="service-name mt-4 text-center">Packages</p>
            </div>
            </div>

            <div className="col-6 col-md-3">
            <div className="service-box pb-5 pt-5">
                    <div className="icon mx-auto text-center p-3">
                        <img src={conference} className="icon-pic"/>
                    </div>
                        <p className="service-name mt-4 text-center">Conferences</p>
                </div>
            </div>
        </div>
    </div>
</section>



{/* Corporate Service */}
<section className="c-travel mt-5 pb-5">
    <div className="container pb-5">
        <div className="row">
            <div className="col-md-6">
                <div className=" c-travel-sub pt-5 p-3">
                <h1 className="head-tag">Corporate Travel With <span style={{color:'#0275d8'}}>Axis Travel</span></h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. </p>

                <Link to="/corporate-travel" className="link" ><button className="btn btn-lg button mt-4">READ MORE</button></Link>
                </div>
            </div>

            <div className="col-md-6">
                <div className="stack-rect">
                    <img src={stack3} className="position-absolute stack3"/>
                    <img src={stack2} className="position-absolute stack2"/>
                    <img src={stack1} className="position-absolute stack1"/>
                </div>
            </div>
        </div>
    </div>

{/* Meetings and events */}
    <div className="container mt-5 pb-5 meeting">
        <div className="row">
            <div className="col-md-6 order-2 order-md-1">
                <div className="stack-poly ">
                    <img src={meet1} className="position-absolute poly1 animate__animated animate__heartBeat"/>
                    <img src={meet2} className="position-absolute poly2 animate__animated animate__heartBeat"/>
                    <img src={meet3} className="position-absolute poly3 animate__animated animate__heartBeat"/>
                </div>
            </div>

            <div className="col-md-6 order-1 order-md-2">
                <h1 className="head-tag">Meetings And <br></br> <span style={{color:'#0275d8'}}>Events</span></h1>
                    <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Morbi enim nunc faucibus a pellentesque. Quam nulla porttitor massa id neque aliquam vestibulum morbi.</p>

                    <Link to="/meetings-and-events" className="link" ><button className="btn btn-lg button mt-4">READ MORE</button></Link>
            </div>
        </div>
    </div>
</section>


{/* Leisure travel */}
<section className="leisure-travel pb-5">
    <div className="container-fluid ">
        <div className="row">
        <div className="col-md-6 p-0 order-2 order-md-1">
            <img src={leisure} className="leisure-pic"/>
        </div>

        <div className="col-md-6 leisure-content p-5 order-1 order-md-2">
                <h1 className="head-tag text-white text-left"> We Know & Understand Your Great Choice of <span style={{color:'#0275d8'}}>Leisure Travel</span></h1>
                    <p className="text-justify text-white heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Morbi enim nunc faucibus a pellentesque. </p>

                <Link to="leisure-travel" className="link"><button className="btn btn-lg button mt-4">READ MORE</button></Link>
            <p className="font-weight-bold mt-5 mb-0 text-secondary">Ideals for your next Trip</p>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicator"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" class="indicator"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" class="indicator"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={leisure1} className="leisure-car"/>
                <img src={leisure2} className="leisure-car"/>
                <img src={leisure3} className="leisure-car"/>
                </div>
                <div class="carousel-item">
                <img src={leisure2} className="leisure-car"/>
                <img src={leisure1} className="leisure-car"/>
                <img src={leisure3} className="leisure-car"/>
                </div>
                <div class="carousel-item">
                <img src={leisure3} className="leisure-car"/>
                <img src={leisure1} className="leisure-car"/>
                <img src={leisure2} className="leisure-car"/>
                </div>
            </div>
            </div>
        </div>

        </div>
    </div>
</section>


{/* Why choose Us */}
<section className="mt-5 pb-5 why-us">
    <section className="pb-4">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <h1 className="head-tag"> Why Choose Our<span style={{color:'#0275d8'}}> Travel</span></h1>
                    <p className="text-justify content-why">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
                </div>

                <div className="col-md-4">
                    <div className="row">
                    <div className="col-2"><img src={W01} className="numbering"/></div>
                    <div className="col-10">
                    <h5 className="font-weight-bold">Save Time and Money</h5>
                    <p className="text-justify content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-2"><img src={W02} className="numbering"/></div>
                    <div className="col-10">
                    <h5 className="font-weight-bold">Trave Assistance</h5>
                    <p className="text-justify content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-2"><img src={W03} className="numbering"/></div>
                    <div className="col-10">
                    <h5 className="font-weight-bold">Expert Guidance</h5>
                    <p className="text-justify content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                <div className="row">
                    <div className="col-2"><img src={W04} className="numbering"/></div>
                    <div className="col-10">
                    <h5 className="font-weight-bold">Best Travel Experience</h5>
                    <p className="text-justify content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-2"><img src={W05} className="numbering"/></div>
                    <div className="col-10">
                    <h5 className="font-weight-bold">Personalized Service</h5>
                    <p className="text-justify content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-2"><img src={W06} className="numbering"/></div>
                    <div className="col-10">
                    <h5 className="font-weight-bold">Covid-19 Pandemic Response</h5>
                    <p className="text-justify content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


{/* About Us */}
<section className="about-us mt-5 mb-5">
        <div className="container">
            <div className="row">
            <div className="col-md-6 about p-5" >
                <h1 className="head-tag text-white">About<span style={{color:'#0275d8'}}> Us</span></h1>

                <p className="text-justify text-white heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Morbi enim nunc faucibus a pellentesque. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Eget velit aliquet sagittis id. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Luctus venenatis lectus magna fringilla.
                Platea dictumst vestibulum rhoncus est pellentesque. 
                Risus quis varius quam quisque id diam vel quam elementum. Quis ipsum suspendisse ultrices gravida dictum. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. </p>

                <button className="btn btn-lg button mt-4">READ MORE</button>
            </div>

            <div className="col-md-6 mt-4 about-us-video">
                <video width="100%" controls className="video ">
                    <source src={movie} type="video/mp4"/>
                </video>

                <div className="ml-2">
                <h1 className="head-tag mt-4">Travel & Tour<span style={{color:'#0275d8'}}> Inspiration</span></h1>

                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Platea dictumst vestibulum rhoncus est pellentesque. 
                Risus quis varius quam quisque id diam vel quam elementum. Quis ipsum suspendisse ultrices gravida dictum. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. </p>
                </div>
            </div>
            </div>
        </div>
</section>


{/* Testimonials */}

<section className="testimonial mt-5">
        <div className="container">

        <h1 className="head-tag text-center">What Our <span style={{color:'#0275d8'}}> Clients</span> Say</h1>

        <p className="text-center heading-note"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Platea dictumst vestibulum rhoncus est pellentesque. 
        Risus quis varius quam quisque id diam vel quam elementum. </p>

            

            <div id="carouselExampleIndicators3" class="carousel slide" data-interval="30000" data-ride="carousel">
            <ol class="carousel-indicators d-none">
            <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
        </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="row testimonial-row p-4">
                    <div className="col-md-6">
                            <div className=" testimonial-text p-5 shadow rounded box position-relative">
                            <h1 className="colon text-right">"</h1>
                            <p className="text-justify mt-3 heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Platea dictumst vestibulum rhoncus est pellentesque. 
                            Risus quis varius quam quisque id diam vel quam elementum.  Quis ipsum suspendisse ultrices gravida dictum. </p>
                            <h5 className="text-center font-weight-bold heading-note" style={{color:'#0275d8'}}>Phillip Moris</h5>
                            <i className="text-dark text-center d-block heading-note">CEO, Company Name</i>
                            </div>
                        </div>

                        <div className="col-md-6">
                        <div className=" testimonial-text p-5 shadow rounded box position-relative">
                            <h1 className="colon text-right">"</h1>
                            <p className="text-justify mt-3 heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Platea dictumst vestibulum rhoncus est pellentesque. 
                            Risus quis varius quam quisque id diam vel quam elementum.  Quis ipsum suspendisse ultrices gravida dictum. </p>
                            <h5 className="text-center font-weight-bold heading-note" style={{color:'#0275d8'}}>Phillip Moris</h5>
                            <i className="text-dark text-center d-block heading-note">CEO, Company Name</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="row testimonial-row p-4">
                    <div className="col-md-6">
                    <div className=" testimonial-text p-5 shadow rounded box position-relative">
                            <h1 className="colon text-right">"</h1>
                            <p className="text-justify mt-3 heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Platea dictumst vestibulum rhoncus est pellentesque. 
                            Risus quis varius quam quisque id diam vel quam elementum.  Quis ipsum suspendisse ultrices gravida dictum. </p>
                            <h5 className="text-center font-weight-bold heading-note" style={{color:'#0275d8'}}>Phillip Moris</h5>
                            <i className="text-dark text-center d-block heading-note">CEO, Company Name</i>
                            </div>
                        </div>

                        <div className="col-md-6">
                        <div className=" testimonial-text p-5 shadow rounded box position-relative">
                            <h1 className="colon text-right">"</h1>
                            <p className="text-justify mt-3 heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Platea dictumst vestibulum rhoncus est pellentesque. 
                            Risus quis varius quam quisque id diam vel quam elementum.  Quis ipsum suspendisse ultrices gravida dictum. </p>
                            <h5 className="text-center font-weight-bold heading-note" style={{color:'#0275d8'}}>Phillip Moris</h5>
                            <i className="text-dark text-center d-block heading-note">CEO, Company Name</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="row testimonial-row p-4">
                    <div className="col-md-6">
                    <div className=" testimonial-text p-5 shadow rounded box position-relative">
                            <h1 className="colon text-right">"</h1>
                            <p className="text-justify mt-3 heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Platea dictumst vestibulum rhoncus est pellentesque. 
                            Risus quis varius quam quisque id diam vel quam elementum.  Quis ipsum suspendisse ultrices gravida dictum. </p>
                            <h5 className="text-center font-weight-bold heading-note" style={{color:'#0275d8'}}>Phillip Moris</h5>
                            <i className="text-dark text-center d-block heading-note">CEO, Company Name</i>
                            </div>
                        </div>

                        <div className="col-md-6">
                        <div className=" testimonial-text p-5 shadow rounded box position-relative">
                            <h1 className="colon text-right">"</h1>
                            <p className="text-justify mt-3 heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Platea dictumst vestibulum rhoncus est pellentesque. 
                            Risus quis varius quam quisque id diam vel quam elementum.  Quis ipsum suspendisse ultrices gravida dictum. </p>
                            <h5 className="text-center font-weight-bold heading-note" style={{color:'#0275d8'}}>Phillip Moris</h5>
                            <i className="text-dark text-center d-block heading-note">CEO, Company Name</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
                
            </div>
        
</section>

</section>







        </>
    )
}

