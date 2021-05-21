import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../css/leisure.css'


//pictures
import scroll from '../picture/Scroll.png';
import leisuredest from '../picture/leisure-bg2.png';
import leisurestack1 from '../picture/leisure-stack1.png';
import leisurestack2 from '../picture/leisure-stack4.png';
import leisurestack3 from '../picture/leisure-stack2.png';
import leisurestack4 from '../picture/leisure-stack3.png';
import space from '../picture/space.png';
import adventure from '../picture/adventure.png';
import rail from '../picture/rail.png';
import cruise from '../picture/cruise.png';
import family from '../picture/family.png';
import honeymoon from '../picture/honeymoon.png';


export const Leisure = () => {
    return(
        <>

                    {/* Hero section */}
        <section>
                <div className="container-fluid hero-leisure">

                    <div className="col-md-5 hero-content-leisure">
                                <h1 className="heading text-white"><b>Leisure<span style={{color:"#0275d8"}}> Travel</span></b></h1>
                                <p className="text-white text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.</p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* Note section */}
<section className="note">
    <div className="container p-3 page-note">
        <p className="text-center heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium 
        vulputate sapien nec sagittis aliquam malesuada.</p>
    </div>
</section>


{/* leisure travel Destination */}
<section className="leisure-dest pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0" data-aos="fade-up">
                    <img src={leisuredest} className="meet"/>
                </div>

                <div className="col-md-6 p-5 mt-5 dest-note" data-aos="fade-right">
                <h1 className="head-tag text-left">Leisure Travel<br></br><span style={{color:'#0275d8'}}>Destinations.</span></h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. </p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                </div>
            </div>
        </div>
</section>


{/* luxury travel expert */}
<section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-5 mt-5 lux-note order-2 order-md-1" data-aos="fade-down">
                <h1 className="head-tag text-left">Luxury Travel<br></br><span style={{color:'#0275d8'}}>Expert</span></h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. </p>
                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>
                </div>

                <div className="col-md-6 order-1 order-md-2">
                        <div className="row">
                        <div className="col-6 p-1" data-aos="flip-left">
                            <img src={leisurestack1} className="img-fluid"/>
                        </div>

                        <div className="col-6 p-1" data-aos="flip-right">
                            <img src={leisurestack2} className="img-fluid"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 p-1" data-aos="flip-left">
                            <img src={leisurestack3} className="img-fluid"/>
                        </div>

                        <div className="col-6 p-1" data-aos="flip-right">
                            <img src={leisurestack4} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>


{/* travel ideas */}
<section className="leisure-idea mt-5 mb-5 pb-5">
        <div className="container-fluid">
        <h1 className="head-tag text-center">Leisure Travel <span style={{color:'#0275d8'}}>Ideas</span></h1>
        <p className="text-center mx-auto col-md-6 heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id.</p>

        <div className="row">
            <div className="col-md-4" data-aos="fade-down">
            <img src={space} className="img-fluid ideas"/>
            </div>

            <div className="col-md-4" data-aos="fade-down">
            <img src={adventure} className="img-fluid ideas"/>
            </div>

            <div className="col-md-4" data-aos="fade-down">
            <img src={honeymoon} className="img-fluid ideas"/>
            </div>

            <div className="col-md-4" data-aos="fade-down">
            <img src={rail} className="img-fluid ideas"/>
            </div>

            <div className="col-md-4" data-aos="fade-down">
            <img src={family} className="img-fluid ideas"/>
            </div>

            <div className="col-md-4 mt-1" data-aos="fade-down">
            <img src={cruise} className="img-fluid ideas"/>
            </div>
        </div>
        </div>
</section>



























        </>
    )
}