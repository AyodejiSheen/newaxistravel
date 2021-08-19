import React from 'react'
import {Link} from 'react-router-dom';
import scroll from '../picture/Scroll.png';


import '../css/choose.css';


//pictures
import committed from '../picture/newrefine/mbg39.jpg'
import improve from '../picture/newrefine/mbg40.jpg'
import global from '../picture/newrefine/mbg41.jpg'
import care from '../picture/newrefine/mbg42.jpg'



export const Choose = () => {
    return (
        <>
                    {/* Hero section */}
        <section>
                <div className="container-fluid hero-choose">

                    <div className="col-md-6 hero-content-choose                     animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Why you should choose <span style={{color:"#0275d8"}}> Aixs Travel</span></b></h1>
                            
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



{/* pave the way */}
<section className=" mt-5   ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5 column-note">
            <h1 className="head-tag adjust-head">You’ll enjoy a <span style={{color:'#0275d8'}}> committed team</span></h1>
        <p className=" text-justify heading-note adjust-note">Our teams are led by strategic account managers who understand the complex travel needs of large enterprise and global businesses, across industries and regions. Importantly, we know that no two businesses are the same, and no one program fits all. Your Axis account manager partners with you, understands your company and ensures that we provide you with a bespoke travel management program that meets your needs and unique travel objectives. </p>
        <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>
    </div>

    <div className="col-md-7 p-0">
        <img src={committed} className="img-fluid" loading="lazy"/>
    </div>
            </div>
        </div>
</section>


<section className="">
    <div className="container-fluid">
        <div className="row">

        <div className="col-md-7 p-0 order-2 order-md-1">
        <img src={improve} className="img-fluid" loading="lazy"/>
    </div>


            <div className="col-md-5 p-5 order-1 order-md-2 column-note mt-5 mb-5">
            <h1 className="head-tag adjust-head"><span style={{color:'#0275d8'}}>We’re committed to </span>continued improvement</h1>
            <p className=" text-justify heading-note adjust-note">At Axis, we’re at the cutting edge of travel technology and service delivery. With innovative systems and solutions, our strategic account managers gather valuable insights for identifying opportunities to reduce costs, manage compliance and mitigate risk. Working on your behalf, our team continues to monitor, develop and refine your travel management program to make travel simpler for you, and deliver a measurable return on your investment.</p>


        </div>


            </div>
        </div>
</section>



<section className="">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-5 p-5 column-note mt-5 mb-5">
            <h1 className="head-tag">We provide global     <span style={{color:'#0275d8'}}>support </span></h1>
        <p className=" text-justify heading-note">Unlike many travel management companies, we also provide 24/7 global travel support managed locally and never outsourced. That means you and your travelling workforce can enjoy peace of mind, knowing that we’ve got you covered anywhere, anytime.</p>

        <h4 className="font-weight-bold">    <span style={{color:'#0275d8'}}> Access to our Global network </span></h4>
        <p className=" text-justify heading-note">You can leverage our global influence and partnerships to give you the best travel deals and amazing discounts, proof that you don’t have to raise your travel budget to get the best travel service. Our global network of solid and dependable partners across every industry makes us easily one of the world-leading travel management companies.</p>
    </div>

    <div className="col-md-7 p-0">
        <img src={global} className="img-fluid" loading="lazy"/>
    </div>
            </div>
        </div>
</section>



<section className="">
    <div className="container-fluid">
        <div className="row">

        <div className="col-md-7 p-0 order-2 order-md-1">
        <img src={care} className="img-fluid"/>
        </div>


            <div className="col-md-5 p-5 order-1 order-md-1 column-note mt-5 mb-5">
            <h1 className="head-tag">We care about your people  <span style={{color:'#0275d8'}}> and your business</span></h1>
            <p className=" text-justify heading-note">Wouldn’t you rather journey with a company that knows how to make every trip an outstanding success? At Axis Travels, we know that your company is unique and so are your trips, this is why we ensure that every trip you make is not just travelling, but achieving your travel goals. </p>

            <p className=" text-justify heading-note mb-0">Our global range of reputable partners - including airlines and hotels - plus our 24/7 customer care service mean that we can always give you the highest quality of service that suits your needs anywhere you are in the world. And most of all, you are never kept waiting. We will ensure that you are kept at the top of every queue, line or booking list, so your business trip will be off to a very great start! </p>
        </div>


            </div>
        </div>
</section>





















        </>
    )
}


