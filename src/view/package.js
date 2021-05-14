import React from 'react';
import '../css/package.css';
import {Link} from 'react-router-dom'


//pictures
import scroll from '../picture/Scroll.png';
import dpworld from '../picture/dp-world.png';
import shopping from '../picture/dubai-shop.png';
import emirate from '../picture/emirate.png';
import fashion from '../picture/fashion.png';
import film from '../picture/film.png';
import horse from '../picture/horse-race.png';
import gitex from '../picture/gitex.png';
import omega from '../picture/omega.png';



export const Package = () => {
    return (

        <>


                    {/* Hero section */}
                    <section>
                <div className="container-fluid hero-package">

                    <div className="col-md-5 hero-content-package">
                                <h1 className="heading text-white"><b>Packages</b></h1>
                                <p className="text-white text-justify heading-note">At Axis Travel we offer a range of travel packages. A typical
package will include air travel, visas, accommodation and
tickets for an event or tour. The duration of each package
can be tailored to fit your schedule. Group packages are
available at preferential rates.</p>
<Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


<section className="our-travels  mb-5">
<h1 className="head-tag text-center">Our <span style={{color:'#0275d8'}}>UAE Packages</span></h1>
        <p className="text-center mx-auto col-md-6 heading-note">Axis Travel UAE packages cover you in the following</p>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4 travel-dest mt-4">
            <div className="card border-0 shadow">
                <img src={shopping} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                    <h5 className="card-title tour-title ">Dubai Shopping <span style={{color:'#0275d8'}}>Festival</span></h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla. Vulputate
sapien nec sagittis aliquam malesuada bibendum
arcu.</p>

                </div>
                </div>
            </div>


            <div className="col-md-4 travel-dest mt-4">
            <div className="card border-0 shadow ">
                <img src={omega} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                <h5 className="card-title tour-title ">Omega <span style={{color:'#0275d8'}}>Desert Classic</span></h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla. Vulputate
sapien nec sagittis aliquam malesuada bibendum
arcu.</p>

                </div>
                </div>
            </div>


            <div className="col-md-4 travel-dest mt-4">
                <div className="card border-0 shadow">
                <img src={horse} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                <h5 className="card-title tour-title ">Dubai World Cup <span style={{color:'#0275d8'}}>Horse Race</span></h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla. Vulputate
sapien nec sagittis aliquam malesuada bibendum
arcu.</p>

                </div>
                </div>
            </div>


            <div className="col-md-4 travel-dest mt-4">
                <div className="card border-0 shadow">
                <img src={gitex} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                <h5 className="card-title tour-title ">GITEX  Shopper</h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla. Vulputate
sapien nec sagittis aliquam malesuada bibendum
arcu.</p>

                </div>
                </div>
            </div>


            <div className="col-md-4 travel-dest mt-4">
                <div className="card border-0 shadow">
                <img src={fashion} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                <h5 className="card-title tour-title ">Fashion Forward</h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla. Vulputate
sapien nec sagittis aliquam malesuada bibendum
arcu.</p>

                </div>
                </div>
            </div>


            <div className="col-md-4 travel-dest mt-4">
                <div className="card border-0 shadow">
                <img src={dpworld} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                <h5 className="card-title tour-title "><span style={{color:'#0275d8'}}>DP World Tour</span> Championship</h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla. Vulputate
sapien nec sagittis aliquam malesuada bibendum
arcu.</p>

                </div>
                </div>
            </div>


            <div className="col-md-4 travel-dest mt-4">
                <div className="card border-0 shadow">
                <img src={emirate} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                <h5 className="card-title tour-title ">Emirates Airline<span style={{color:'#0275d8'}}>Dubai Rugby Sevens</span></h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla. Vulputate
sapien nec sagittis aliquam malesuada bibendum
arcu.</p>

                </div>
                </div>
            </div>


            <div className="col-md-4 travel-dest mt-4">
                <div className="card border-0 shadow">
                <img src={film} class="card-img-top img-fluid travels-pic"/>
                <div className="card-body ">
                <h5 className="card-title tour-title ">Dubai International <span style={{color:'#0275d8'}}>Film Festival</span></h5>
                    <p className="heading-note text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Tortor at auctor urna nunc id.
Commodo sed egestas egestas fringilla. Vulputate
sapien nec sagittis aliquam malesuada bibendum
arcu.</p>

                </div>
                </div>
            </div>



        </div>
    </div>
</section>



<section className="package-contact p-4 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <p className="text-white">Our team will also be happy to discuss and plan bespoke
packages for other events, both in UAE and elsewhere in the
world.</p>
                </div>

                <div className="col-md-4 text-center">
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                </div>
            </div>
        </div>
</section>










        </>
    )
}