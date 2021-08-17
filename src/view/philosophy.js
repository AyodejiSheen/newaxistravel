import React from 'react';
import {Link} from 'react-router-dom';
import '../css/philosophy.css'


//pictures
import scroll from '../picture/Scroll.png';


//material ui
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




export const Philosophy = () => {


    
    const [expanded, setExpanded] = React.useState(true);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : true);
    };



    return(
        <>

                    {/* Hero section */}
        <section>
                <div className="container-fluid hero-philosophy p-0">

                    <div className="col-12 text-center hero-content-philosophy animate__animated animate__fadeInLeft">
                                <h1 className="heading text-white"><b>Our <br></br><span style={{color:'#0275d8'}}> Corporate Values</span></b></h1>
                                <p className="text-white heading-note">We are guided by the following corporate values:
                                </p>
                      </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>




{/* corporate values */}
<section className="corporate-value mt-4 mb-5">
    <div className="container">




        {/* Values */}

        <div className="values">

        <Accordion expanded={expanded} onChange={handleChange('panel2')} className="animate__animated animate__bounceInDown">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="accordion-philosophy text-white"
        >
        <Typography className="font-weight-bold tag">Excellence</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note accordion-note">
          Our commitment to our clients inspires us to go the extra mile every time. We firmly believe that mediocrity has no place in your business so we strive to always exceed your expectations. To achieve this, we constantly seek innovative and creative ways to set new standards and surpass them. We enhance our processes by encouraging feedback from our clients because your feedback brings us a step closer to perfection.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="animate__animated animate__bounceInDown">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="accordion-philosophy text-white"
        >
        <Typography className="font-weight-bold tag">Integrity</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note accordion-note">
          In business, you learn a different standard of integrity. Integrity is not who you are but what you do when no one is watching. While dealing with our clients, partners and authority, we make sure to bring to the table a complete dose of honesty and transparency knowing that this will earn us trust and good standing in the industry.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="animate__animated animate__bounceInDown">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="accordion-philosophy text-white"
        >
        <Typography className="font-weight-bold tag">Respect</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note accordion-note">
          No matter the religion or creed, we respect everyone, recognizing this as our responsibility. We promote cultural sensitivity in the workplace and are impartial while dealing with clients.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="animate__animated animate__bounceInDown">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="accordion-philosophy text-white"
        >
        <Typography className="font-weight-bold tag">Teamwork</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note accordion-note">
          We believe that our fellowship of ideas will yield more brilliant results so we strive to maintain teamwork and open communication.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="animate__animated animate__bounceInDown">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="accordion-philosophy text-white"
        >
        <Typography className="font-weight-bold tag">Social Responsibility</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note accordion-note">
          Extending our ethics beyond the workplace, we are happy to work agreeably alongside everyone we cross paths with. We ensure that we pursue financial stability without causing harm to society.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="animate__animated animate__bounceInDown">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="accordion-philosophy text-white"
        >
        <Typography className="font-weight-bold tag">Human Resource Development</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note accordion-note">
          We make it a point to cultivate an environment that encourages growth for every employee. We foster a sense of ownership among our staff by allowing them effectively contribute to shaping the company. We ensure that they not only possess competence, but also the right character to serve.
          </Typography>
        </AccordionDetails>
      </Accordion>

        </div>
    </div>
</section>



{/* offerring best Destination */}
<section className="offering pb-4 mb-4">
        <div className="container-fluid offering-note" >
            <div className="container pt-5 pb-5">
            <div className="col-md-7" data-aos="fade-right">
            <h1 className="head-tag text-white text-left">We want to offer you the best travel to any of your <span style={{color:'#0275d8'}}> destination worldwide.</span></h1>
            
            <p className="text-justify  text-white heading-note">You can mail us or click here to fill out an online enquiry form and one of our team will give you a call.</p>

            <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">TALK TO US</button></Link>            </div>
            </div>
        </div>
</section>

















        </>
    )
}