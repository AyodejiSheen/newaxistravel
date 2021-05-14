import React from 'react';
import '../css/transport.css';
import {Link} from 'react-router-dom'


//pictures
import scroll from '../picture/Scroll.png';

import plane from '../picture/plane.png';
import ship from '../picture/ship.png';
import train from '../picture/train.png';
import road from '../picture/road.png';
import air from '../picture/air.png';
import rail from '../picture/railbg.png';
import ocean from '../picture/ocean.png';
import vehicle from '../picture/vehcile.png';




export const Transport = () => {
    return (
        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid hero-transport">

                    <div className="col-md-5 hero-content-transport">
                                <h1 className="heading text-white"><b>Transport</b></h1>
                                <p className="text-white text-justify heading-note">At Axis Travel we offer global transport solutions to meet
all your travel needs. Our fleet of vehicles includes
everything from private chauffeur-driven cars to luxury
coaches, which are perfect for airport transfers. We are
also able to source and book other forms of transport
including trains, planes, helicopters and boats.</p>
<Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>

                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



{/* insurance packages */}
<section className="mb-5 country">
    <div className="container-fluid mt-4">
        <div className="mx-auto col-md-8 ">
        <h1 className="head-tag text-center">Our <span style={{color:'#0275d8'}}> Packages</span></h1>
        <p className="text-center heading-note ">Our insurances packages cover you in the event of:</p>
        </div>

        <div className="row justify-content-center mt-4 pt-2 desktop-pack">

            <div className="col-md-2 col-6  text-center packs">
                <div className="card insurance-pack">
                <div className="card-body">
                    <div className="inc-icon mx-auto">
                        <img src={plane} className="pack-icon img-fluid"/>
                    </div>
                    <h5 className="card-title pack-title pb-2">Air</h5>

                    <a href="#air"><button className="btn pack-button" >Learn More </button></a>
                </div>
                </div>
            </div>


            <div className="col-6 col-md-2 text-center packs">
                <div className="card insurance-pack">
                <div className="card-body">
                    <div className="inc-icon mx-auto">
                        <img src={ship} className="pack-icon img-fluid"/>
                    </div>
                    <h5 className="card-title pack-title pb-2">Ocean</h5>

                    <a href="#ocean"><button className="btn pack-button">Learn More </button></a>
                </div>
                </div>
            </div>

            <div className="col-6 col-md-2 text-center packs">
                <div className="card insurance-pack">
                <div className="card-body">
                    <div className="inc-icon mx-auto">
                        <img src={train} className="pack-icon img-fluid"/>
                    </div>
                    <h5 className="card-title pack-title pb-2">Rail</h5>
                    <a href="#rail"><button className="btn pack-button">Learn More </button></a>
                </div>
                </div>
            </div>

            <div className="col-6 col-md-2 text-center packs">
                <div className="card insurance-pack">
                <div className="card-body">
                    <div className="inc-icon mx-auto">
                        <img src={road} className="pack-icon img-fluid"/>
                    </div>
                    <h5 className="card-title pack-title pb-2">Vehicles </h5>
                    <a href="#vechile"><button className="btn pack-button">Learn More </button></a>
                </div>
                </div>
            </div>

</div>

        <div className="row justify-content-center mt-4 pt-2 mobile-pack">

<div className="col-md-2 col-6  text-center packs">
<a href="#air" className="link"><div className="card text-dark insurance-pack">
    <div className="card-body">
        <div className="inc-icon mx-auto">
            <img src={plane} className="pack-icon img-fluid"/>
        </div>
        <h5 className="card-title pack-title text-decoration-none">Air</h5>

       <button className="btn pack-button" >Learn More </button>
    </div>
    </div></a>
</div>


<div className="col-6 col-md-2 text-center packs">
<a href="#ocean" className="link"><div className="card insurance-pack text-dark">
    <div className="card-body">
        <div className="inc-icon mx-auto">
            <img src={ship} className="pack-icon img-fluid"/>
        </div>
        <h5 className="card-title pack-title text-decoration-none">Ocean</h5>

        <button className="btn pack-button">Learn More </button>
    </div>
    </div></a>
</div>


<div className="col-6 col-md-2 text-center packs">
<a href="#rail" className="link"><div className="card insurance-pack text-dark">
    <div className="card-body">
        <div className="inc-icon mx-auto">
            <img src={train} className="pack-icon img-fluid"/>
        </div>
        <h5 className="card-title pack-title text-decoration-none">Rail</h5>


        <button className="btn pack-button">Learn More </button>
    </div>
    </div></a>
</div>

<div className="col-6 col-md-2 text-center packs">
<a href="#vechile" className="link"><div className="card insurance-pack text-dark">
    <div className="card-body">
        <div className="inc-icon mx-auto">
            <img src={road} className="pack-icon img-fluid"/>
        </div>
        <h5 className="card-title pack-title text-decoration-none">Vehcile </h5>


        <button className="btn pack-button">Learn More </button>
    </div>
    </div></a>
</div>


</div>



    </div>
    </section>



{/* Air */}
    {/* personal accident */}
    <section className="personal-accident mt-4 pt-5 pb-5" id="air">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={air} className="img-fluid"/>
                </div>

                <div className="col-md-6 p-5 mt-5 smooth-book-note">
                <h1 className="head-tag text-left">Air</h1>  
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Tortor at auctor urna nunc id. Commodo sed egestas egestas
fringilla. Vulputate sapien nec sagittis aliquam malesuada
bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus.
Scelerisque eleifend donec pretium vulputate sapien nec
sagittis aliquam malesuada. Maecenas pharetra convallis
posuere morbi leo urna molestie at elementum. Morbi enim
nunc faucibus a pellentesque. Quam nulla porttitor massa id
neque aliquam vestibulum morbi. </p>
                </div>
            </div>
        </div>
</section>



{/* Emergency medical */}
{/* Ocean */}
<section className="medical" id="ocean">
<div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-5 mt-5 order-2 medical-section order-md-1">
                <h1 className="head-tag text-left">Ocean<span style={{color:'#0275d8'}}> Freight</span> </h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Tortor at auctor urna nunc id. Commodo sed egestas egestas
fringilla. Vulputate sapien nec sagittis aliquam malesuada
bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus.
Scelerisque eleifend donec pretium vulputate sapien nec
sagittis aliquam malesuada. Maecenas pharetra convallis
posuere morbi leo urna molestie at elementum. Morbi enim
nunc faucibus a pellentesque. Quam nulla porttitor massa id
neque aliquam vestibulum morbi. </p>

                </div>

                <div className="col-md-6 p-0 order-1 order-md-2">
                    <img src={ocean} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>


    {/* lost baggage */}
    {/* rail */}
    <section className="lost-baggage pt-5 pb-5"id="rail">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={rail} className="img-fluid"/>
                </div>

                <div className="col-md-6 p-5 mt-5 smooth-book-note">
                <h1 className="head-tag text-left">Rail</h1>  
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Tortor at auctor urna nunc id. Commodo sed egestas egestas
fringilla. Vulputate sapien nec sagittis aliquam malesuada
bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus.
Scelerisque eleifend donec pretium vulputate sapien nec
sagittis aliquam malesuada. Maecenas pharetra convallis
posuere morbi leo urna molestie at elementum. Morbi enim
nunc faucibus a pellentesque. Quam nulla porttitor massa id
neque aliquam vestibulum morbi. </p>
                </div>
            </div>
        </div>
</section>



{/* lost passport */}
{/* Vehcile */}
<section className="passport" id="vechile">
<div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-5 mt-5 order-2 medical-section order-md-1">
                <h1 className="head-tag text-left"> <span style={{color:'#0275d8'}}> Vehicle</span> </h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Tortor at auctor urna nunc id. Commodo sed egestas egestas
fringilla. Vulputate sapien nec sagittis aliquam malesuada
bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus.
Scelerisque eleifend donec pretium vulputate sapien nec
sagittis aliquam malesuada. Maecenas pharetra convallis
posuere morbi leo urna molestie at elementum. Morbi enim
nunc faucibus a pellentesque. Quam nulla porttitor massa id
neque aliquam vestibulum morbi.  </p>

                </div>

                <div className="col-md-6 p-0 order-1 order-md-2">
                    <img src={vehicle} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>


<div className="text-center mb-5">
<Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>

</div>














        </>
    )
}