import React from 'react';
import {Link} from 'react-router-dom';
import '../css/ourcompany.css';



//pictures
import scroll from '../picture/Scroll.png';
import leadership from '../picture/newrefine/mbg44.jpg';
import ourprofile from '../picture/refine/mbg21.jpg';
import ourhistory from '../picture/newrefine/mbg45.jpg';



//material ui
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';





export const Ourcompany = () => {




    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };



    return(
        <>

        {/* Hero section */}
        <section>
                <div className="container-fluid hero-ourcompany img-fluid">

                    <div className="col-md-6 hero-content-ourcompany
                    animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Premium comfort <span style={{color:'#0275d8'}}>for limitless success</span></b></h1>
                                <p className="text-white text-justify heading-note">The best ideas sprout in a worry-free zone. Whether you’re making business trips to conquer new terrains or you seek to explore new sights in faraway places, Axis Travel & Tourism makes each experience refreshingly easy and hassle-free. 
                                We worry about and attend to your company’s travel plans, bookings and accommodations so that you don’t have to. 
                                </p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-2">TALK TO US</button></Link>                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* Note section */}
<section className="note">
    <div className="container col-md-8  p-4 page-note">
        <p className="text-center heading-note font-weight-bold" style={{color:'#010e1b'}}>Since we understand that your growth and success are tied to calm and comfort, our travel and tour solutions are designed to give you peace of mind. 
We offer first-rate management service for both local and international travels, for any company at a perfectly reasonable cost.  
</p>
    </div>
</section>


{/* our leadership */}
<section className="leadership pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={leadership} className="img-fluid" loading="lazy"/>
                </div>

                <div className="col-md-6 p-5 leader-note " data-aos="zoom-in">
                <h1 className="head-tag text-left">We care <br></br><span style={{color:'#0275d8'}}>about your people</span></h1>
                <p className="text-justify heading-note">Headquartered in the modern and progressive city that is Dubai, Axis Travels comes highly recommended because we instantly recognize the uniqueness of each client and provide highly personalized service specific to your organization. Our efficient and professional agents who fully understand customer care are always at hand to attend to your travel needs and make necessary arrangements immediately, even at the shortest notice. </p>

                <p className="text-justify heading-note">Our rare ability to pay attention to the smallest travel detail, intuitively detect or predict sudden changes and swiftly make excellent alternatives differentiates us. From booking flight and ferry tickets to organizing leisure tours as well as arranging meeting or conference venues and hotel bookings, we know how to guarantee your comfort and safety. 
                With a long list of credible international and local partners, our clients get exclusive treatment and the best service that they deserve.</p>

                <p className="text-justify heading-note">
                Reserve a seat with us and experience a wonderful trip of a lifetime.
                </p>


                </div>
            </div>
        </div>
</section>


{/* Our profile */}

<section className="our-mission">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5 p-5 mt-5 order-2 order-md-1 profile-note" data-aos="zoom-in">
                <h1 className="head-tag text-left adjust-head">Our<br></br><span style={{color:'#0275d8'}}>Mission</span></h1>
                <p className="text-justify heading-note adjust-note">We aim to constantly provide affordable travel and tours services at premium standards, inspired by our corporate values of excellence, integrity, respect, teamwork, social responsibility and human resource development.  </p>

                
                <div className="mb-5" data-aos="flip-right">
                <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link></div>
                </div>

                <div className="col-md-7 order-1 p-0 order-md-2">
                <img src={ourprofile} className="img-fluid" loading="lazy"/>
                </div>
            </div>
        </div>
</section>


{/*our history */}
<section className="history pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7 p-0">
                    <img src={ourhistory} className="img-fluid" loading="lazy"/>
                </div>

                <div className="col-md-5 p-5 history-note mt-5 " data-aos="zoom-in" >
                <h1 className="head-tag text-left adjust-head">Our<br></br><span style={{color:'#0275d8'}}>Vision</span></h1>
                <p className="text-justify heading-note adjust-note">We envision a society where more people can journey to places they love through reasonably priced and stress-free travel and tour solutions.</p>

                
                <div className=" mb-5" data-aos="flip-right">
                <Link to="/contact-us" className="link adjust-btn" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link></div>
                </div>
            </div>
        </div>
</section>





































        </>
    )
}