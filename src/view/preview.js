import React from 'react'
import '../css/preview.css'
import {Link} from 'react-router-dom'



//pictures
import scroll from '../picture/Scroll.png';
import carousel from '../picture/preview-bg.png'
import carousel1 from '../picture/leisure-hero.png'
import carousel2 from '../picture/contact-bg.png'
import travels1 from '../picture/travels1.png';
import travels2 from '../picture/travels2.png';
import travels3 from '../picture/travels3.png';
import preview1 from '../picture/preview1.png';
import preview2 from '../picture/preview2.png';







export const Preview = () => {
    return(
        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid p-0 hero-terms">
                <div id="carouselExampleSlidesOnly67" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel} className="d-block terms1 w-100 img-fluid"  alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={carousel1} className="d-block terms1 w-100 img-fluid" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={carousel2} className="d-block terms1 w-100 img-fluid" alt="..."/>
                    </div>
                </div>
                </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


<section className="full-details mt-5">
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <h1 className="head-tag text-left">Bangkok Tour,<span style={{color:'#0275d8'}}>Thailand.</span> </h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam
malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus.
Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam
malesuada. Maecenas pharetra convallis posuere morbi leo urna molestie at
elementum. Morbi enim nunc faucibus a pellentesque. Quam nulla porttitor massa
id neque aliquam vestibulum morbi. Ac felis donec et odio pellentesque. Aenean
sed adipiscing diam donec adipiscing tristique. Eget velit aliquet sagittis id.
Platea dictumst vestibulum rhoncus est pellentesque. Risus quis varius quam
quisque id diam vel quam elementum. Quis ipsum suspendisse ultrices gravida
dictum. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat
est. A erat nam at lectus.</p>


<div className="highlight mt-5">
<h1 className="head-tag text-left">Highlists</h1>
<div className="row">
    <div className="col-md-6">
        <ul>
            <li>Wat Trimit</li>
            <li>The famous Golden Buddha</li>
            <li>Chinatown</li>
            <li>Flower market at Pak Klong Talad</li>
            <li>Wat Po</li>
        </ul>
    </div>

    <div className="col-md-6">
        <ul>
            <li>Temple of the reclining</li>
            <li>Buddha</li>
            <li>Democracy Monument</li>
            <li>Royal Plaza</li>
            <li>Gem factory</li>
        </ul>
    </div>
</div>
</div>


<div className="get-book"> 
    <h5 className="font-weight-bold">To get Booked for the destination</h5> 
    <button className="btn btn-lg button ">CONTACT US</button>
</div>
            </div>

            <div className="col-md-4">
            <h4 className="font-weight-bold">Awesome Places</h4>

            <img src={preview1} className="img-fluid"/> 
            <img src={preview2} className="img-fluid"/> 
            </div>
        </div>
    </div>
</section>


<section className="our-travel-preview  mb-5">
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