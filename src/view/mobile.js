import React from 'react';
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';

import '../css/mobile.css';






export const Mobile = () => {
    return(
        <>

                             {/* Hero section */}
        <section>
                <div className="container-fluid hero-mice">

                    <div className="col-md-6 hero-content-mice                     animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Your travel programme in<span style={{color:"#0275d8"}}> your hand</span> </b></h1>
                                <p className="text-white  heading-note">What’s the point of great travel tech if you can’t take it with you?
Access all your travel needs on the go with Axis Travel.</p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">Explore our tech</button></Link>
                    </div>
                </div>
        </section>





{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


<div className="mb-5">
    
</div>

































        </>
    )
}