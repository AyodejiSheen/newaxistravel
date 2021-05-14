import React from 'react';
import {Link} from 'react-router-dom';
import '../css/ourcompany.css';



//pictures
import scroll from '../picture/Scroll.png';
import leadership from '../picture/ourcompany-bg2.png';
import ourprofile from '../picture/ourcompany-bg3.png';
import ourhistory from '../picture/ourcompany-bg4.png';



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

                    <div className="col-md-5 hero-content-ourcompany">
                                <h1 className="heading text-white"><b>Our <span style={{color:'#0275d8'}}>Company</span></b></h1>
                                <p className="text-white text-justify heading-note">We ’re shaping the future of business travel with our award-winning corporate travel management and booking platform – built on the foundations of trust, choice and great people.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link>                    </div>
                </div>
        </section>


{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>


{/* Note section */}
<section className="note">
    <div className="container p-4 page-note">
    <h1 className="head-tag text-center">Our<span style={{color:'#0275d8'}}> Team</span></h1>
        <p className="text-center heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium 
        vulputate sapien nec sagittis aliquam malesuada.</p>
    </div>
</section>


{/* our leadership */}
<section className="leadership pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={leadership} className="img-fluid"/>
                </div>

                <div className="col-md-6 p-5 mt-5 leader-note ">
                <h1 className="head-tag text-left">Our<br></br><span style={{color:'#0275d8'}}>Leadership</span></h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. </p>
                </div>
            </div>
        </div>
</section>


{/* Our profile */}

<section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-5 mt-5 order-2 order-md-1 profile-note">
                <h1 className="head-tag text-left">Our<br></br><span style={{color:'#0275d8'}}>Profile</span></h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.  </p>
                </div>

                <div className="col-md-6 order-1 p-0 order-md-2">
                <img src={ourprofile} className="img-fluid"/>
                </div>
            </div>
        </div>
</section>


{/*our history */}
<section className="history pt-5 pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 p-0">
                    <img src={ourhistory} className="img-fluid"/>
                </div>

                <div className="col-md-6 p-5 history-note mt-5 ">
                <h1 className="head-tag text-left">Our<br></br><span style={{color:'#0275d8'}}>History</span></h1>
                <p className="text-justify heading-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. </p>
                </div>
            </div>
        </div>
</section>


{/* faq */}
<section className="faq mt-5 mb-5">
        <div className="container">
        <h1 className="head-tag text-center">Frequently Asked <span style={{color:'#0275d8'}}>Question</span></h1>


<div className="mt-4">
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="accordion text-white"
        >
          <Typography>What is Axis Travel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="accordion text-white"
        >
          <Typography > What are Axis Travel Benefits?</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. 
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className="accordion text-white"
        >
          <Typography>How Do I Make A Booking With Axis Travel?</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className="accordion text-white"
        >
          <Typography >How long does it takes To Make A Booking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="heading-note">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. 
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          className="accordion text-white"
        >
          <Typography  >What Happens After Booking?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="heading-note">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. 
          </Typography>
        </AccordionDetails>
      </Accordion>
  
    </div>


        
        </div>
</section>


<div className="text-center">
<Link to="/contact-us" className="link" ><button className="btn btn-lg button mt-4">CONTACT US</button></Link></div>


























        </>
    )
}