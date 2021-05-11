import React from 'react';
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


    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };



    return(
        <>

                    {/* Hero section */}
        <section>
                <div className="container-fluid hero-philosophy">

                    <div className="col-md-5 hero-content-philosophy">
                                <h1 className="heading text-white"><b>Philosophy</b></h1>
                                <p className="text-white text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. </p>
                                <button className="btn btn-lg button mt-4">CONTACT US</button>
                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>



{/* vision and mission */}


<section className="mission mt-5">
    <div className="container">


    <Accordion  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="accordion-philosophy text-white"
        >
          <Typography className="font-weight-bold tag">Our Mission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note accordion-note">
          We aspire to deliver affordable travel and tours services of superior standards to our clients as we abide by our corporate values of excellence, integrity, respect, teamwork, social responsibility and human resource development.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="accordion-philosophy text-white"
        >
        <Typography className="font-weight-bold tag">Our Vision</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note accordion-note">
          We envision a society where more people can journey to places they love through reasonably-priced and stress-free travel and tours services.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
</section>



{/* corporate values */}
<section className="corporate-value mt-4 mb-5">
    <div className="container">


        {/* Note section */}
        <section className="note">
            <div className="container p-4 page-note-phil">
            <h1 className="head-tag text-center">Our Corporate<span style={{color:'#0275d8'}}> Values</span></h1>
                <p className="text-center heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque 
eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.</p>
            </div>
        </section>


        {/* Values */}

        <div className="values">

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
          Our clients inspire us to go the extra mile. By believing that mediocrity has no place in the business, our company endeavors to exceed expectations by continuously searching for innovative and creative ways to enhance our operations. Part of our drive for excellence is encouraging feedback from our clientele.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
          We believe that integrity will bring us to greater heights in the business. While we deal with clients, partners and authorities, we ensure to carry the value of honesty as this will earn us good standing in the industry.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
          Regardless of religion and creed, our company observes respect for everyone.  We promote culture sensitivity in the work place and make an effort to avoid partiality in dealing with our customers.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
          As we adhere to the fact that our fellowship of ideas will yield more brilliant outputs, we strive to maintain teamwork and open communication.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
          Exercising ethics beyond the worktable, our company believes in working in agreeable relationships with all. In this endeavor, we make sure that we pursue financial stability without causing any hazard to society.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
          We make it a point to cultivate an environment that encourages growth for every employee. Moreover, we foster a sense of pride and ownership among our staff by providing them effective venues for participation in shaping the company. We make certain that they possess not only competence, but the right character to serve.
          </Typography>
        </AccordionDetails>
      </Accordion>

        </div>
    </div>
</section>



{/* offerring best Destination */}
<section className="offering pb-4 mb-4">
        <div className="container-fluid offering-note">
            <div className="container pt-5 pb-5">
            <div className="col-md-7">
            <h1 className="head-tag text-white text-left">We want to offer you the best travel to any of your <span style={{color:'#0275d8'}}> destination worldwide.</span></h1>
            
            <p className="text-justify  text-white heading-note">You can mail us or click here to fill out an online enquiry form and one of our team will give you a call.</p>

            <button className="btn btn-lg button mt-4">CONTACT US</button>
            </div>
            </div>
        </div>
</section>

















        </>
    )
}