import React from 'react'
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';


import '../css/specialist.css';


//pictures
import consult from '../picture/refine/consult-mbg.jpg'
import meeting from '../picture/refine/meeting.jpg'
import business from '../picture/refine/business.jpg'


export const Choose = () => {
    return (
        <>
                    {/* Hero section */}
        <section>
                <div className="container-fluid hero-account">

                    <div className="col-md-6 hero-content-account                     animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Why you should choose Aixs Travel<span style={{color:"#0275d8"}}> </span></b></h1>
                            
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



{/* pave the way */}
<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5">
            <h1 className="head-tag">You’ll enjoy a <span style={{color:'#0275d8'}}> committed team</span></h1>
        <p className=" text-justify heading-note">Our teams are led by strategic account managers who understand the complex travel needs of large enterprise and global businesses, across industries and regions. Importantly, we know that no two businesses are the same, and no one program fits all. Your Axis account manager partners with you, understands your company and ensures that we provide you with a bespoke travel management program that meets your needs and unique travel objectives. </p>

    </div>

        <div className="col-md-7 ">
            
        </div>
            </div>
        </div>
</section>


<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">

        <div className="col-md-7">
            
        </div>


            <div className="col-md-5 p-5">
            <h1 className="head-tag"><span style={{color:'#0275d8'}}>We’re committed to </span>continued improvement</h1>
            <p className=" text-justify heading-note">At Axis, we’re at the cutting edge of travel technology and service delivery. With innovative systems and solutions, our strategic account managers gather valuable insights for identifying opportunities to reduce costs, manage compliance and mitigate risk. Working on your behalf, our team continues to monitor, develop and refine your travel management program to make travel simpler for you, and deliver a measurable return on your investment.</p>


        </div>


            </div>
        </div>
</section>



<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5">
            <h1 className="head-tag">We provide global     <span style={{color:'#0275d8'}}>support </span></h1>
        <p className=" text-justify heading-note">Unlike many travel management companies, we also provide 24/7 global travel support managed locally and never outsourced. That means you and your travelling workforce can enjoy peace of mind, knowing that we’ve got you covered anywhere, anytime.</p>

        <h4 className="font-weight-bold">    <span style={{color:'#0275d8'}}> Access to our Global network </span></h4>
        <p className=" text-justify heading-note">You can leverage our global influence and partnerships to give you the best travel deals and amazing discounts, proof that you don’t have to raise your travel budget to get the best travel service. Our global network of solid and dependable partners across every industry makes us easily one of the world-leading travel management companies.</p>
    </div>

        <div className="col-md-7 ">
            
        </div>
            </div>
        </div>
</section>



<section className="pave mt-5 mb-5 ">
    <div className="container-fluid">
        <div className="row">

        <div className="col-md-7">
            
        </div>


            <div className="col-md-5 p-5">
            <h1 className="head-tag">We care about your people  <span style={{color:'#0275d8'}}> and your business</span></h1>
            <p className=" text-justify heading-note">Wouldn’t you rather journey with a company that knows how to make every trip an outstanding success? At Axis Travels, we know that your company is unique and so are your trips, this is why we ensure that every trip you make is not just travelling, but achieving your travel goals. </p>

            <p className=" text-justify heading-note">Our global range of reputable partners - including airlines and hotels - plus our 24/7 customer care service mean that we can always give you the highest quality of service that suits your needs anywhere you are in the world. And most of all, you are never kept waiting. We will ensure that you are kept at the top of every queue, line or booking list, so your business trip will be off to a very great start! </p>
        </div>


            </div>
        </div>
</section>





















        </>
    )
}


