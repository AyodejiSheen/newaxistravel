import React from 'react';
import '../css/corporate.css';


//pictures
import qualities from '../picture/corporate qualities.png'
import scroll from '../picture/Scroll.png';



export const Corporate = () => {
    return (
        <>
        {/* Hero section */}
        <section>
                <div className="container-fluid hero-corporate">

                    <div className="col-md-5 hero-content-corporate">
                                <h1 className="heading text-white"><b>Corporate<span style={{color:"#0275d8"}}> <br></br>Travel</span></b></h1>
                                <p className="text-white text-justify heading-note">Whether it’s exploring new wonders in places beyond or taking trips to bring your business to grander heights, Axis Travel & Tourism offers first-rate travel and tour solutions to make each journey a worry-free experience. From booking flight tickets and accommodation to organizing leisure tours, we have expertly tailored our menu of services to cover travel needs at a very competitive cost.</p>
                                <button className="btn btn-lg button mt-4">CONTACT US</button>
                    </div>
                </div>
        </section>



<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* Note section */}
<section className="note">
    <div className="container p-5">
        <p className="text-center">At <b>Axis Travel & Tourism,</b> we know how impeccable our clients prefer their trips to be. For this, our friendly and professional agents who truly understand customer care stand by to respond to client queries and arrange travel requirements promptly. Further, we give high regard to our clients’ safety and peace of mind as we prepare their vacation trips or book their hotels.

        With a roster of credible partners in the local and global tourism industry, we ensure that our clients get the best service that they deserve.

        Journeys have never been this easy with <b>Axis Travel & Tourism.</b>Axis Travel & Tourism.</p>
    </div>
</section>


{/* preimer Corporate */}
<section className="priemer-section pb-4">
        <div className="container-fluid priemer">
            <div className="container pt-5 pb-5">
            <div className="col-md-6">
            <h1 className="head-tag text-white">A Premier Corporate<span style={{color:'#0275d8'}}> Travel Management Agency</span></h1>
            
            <p className="text-justify text-white heading-note">We're big enough to handle the largest multinationals; small enough to understand the needs of small businesses. We're proud to say that we treat each and every customer with the same high standard of care.
            <br></br>
            Businesses can schedule a demo with Forest Travel and see the benefit of working with a skilled corporate travel company. Between perks that businesses can’t access on their own and the ease of booking trips through a company that takes care of all of the details, business trips will be a breeze. </p>

            <button className="btn btn-lg button mt-4">READ MORE</button>
            </div>
            </div>
        </div>
</section>


{/* corporate travel qualities */}

<section className="corporate-qualities mt-5">
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-6 p-0 order-2 order-md-1">
                    <img src={qualities} className="qualities-pics"/>
                </div>

                <div className="col-md-6 p-5 order-1 order-md-2">
                <h1 className="head-tag">Corporate Travel <span style={{color:'#0275d8'}}>Qualities With Axis Travel</span></h1>
                <p className="text-justify heading-note">We're big enough to handle the largest multinationals; small enough to understand the needs of small businesses. We're proud to say that we treat each and every customer with the same high standard of care.</p>
                </div>
            </div>
        </div>
</section>












        </>
    )
}