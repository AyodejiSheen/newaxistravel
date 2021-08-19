// import React, {useState} from 'react'
// import {Baseurl} from '../baseurl';
// import {Link, useHistory} from 'react-router-dom';
// import axios from 'axios';

// export const Contact = () => {


//     let [details, setDetails] = useState({ fullname: "", email: "", phone: "", message: ""});

//     let[usercontact, Setusercontact] = useState([]);

//     const handleChange = (e) => {
//         let name = e.target.name;
//         let value = e.target.value;
//         setDetails({ ...details, [name]: value });
//     }

//     const submit = (e) => {
//          e.preventDefault();
//         Setusercontact([...usercontact, details]);

//         //to send to backend then to database  sweetalert2, aos-animation, skeleton-loader
//         axios.post(`${Baseurl}contact.php`, JSON.stringify(details)).then(res => {
//             let contResponse = res.data;
//             console.log(res.data)
//             if(res.data.Success){
//                 alert("submitted")
//             }
//         })


//         setDetails({ fullname: "", email: "", phone: "", message: ""});
//     }



//     return (
//         <>
//           <div>
//               <form onSubmit={submit}>
//                   <input type="text" name="fullname" className="form-control" onChange={handleChange} placeholder="Full Name" value={details.fullname}/>
//                   <input type="text" name="email" className="form-control" onChange={handleChange} placeholder="Email Address" value={details.email}/>
//                   <input type="number" name="phone" className="form-control" onChange={handleChange} placeholder="Phone Number" value={details.phone}/>
//                   <textarea type="text" name="message" className="form-control" row="3" onChange={handleChange} value={details.message}></textarea>

//                   <button className="btn btn-danger mt-2 shadow"> SUBMIT </button>
//               </form>
//         </div>  
//         </>
//     )
// }


import React, {useState} from 'react';
import {Baseurl} from '../baseurl';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import '../css/contact.css'

import emailjs from 'emailjs-com';



//pictures
import scroll from '../picture/Scroll.png';
import map from '../picture/map.png';
import location from '../picture/location.png';
import email from '../picture/email.png';
import call from '../picture/call.png';







export const Contact = () => {



    let [msg, setMsg] = useState("");

    let[usercontact, Setusercontact] = useState([]);

    // const handleChange = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     setMessage({ ...message, [name]: value });
    // }

    // const submit = (e) => {
    //      e.preventDefault();
    //     Setusercontact([...usercontact, message]);

    //     //to send to backend then to database  sweetalert2, aos-animation, skeleton-loader
    //     axios.post(`${Baseurl}contact.php`, JSON.stringify(message)).then(res => {
    //         let contResponse = res.data;
    //         console.log(res.data)
    //         if(res.data.Success){
    //             alert("submitted")
    //         }
    //     })


    //     setMessage({ fullname: "", email: "", phone: "", message: ""});
    



    function submitemail (e) {
        e.preventDefault();

            emailjs.sendForm('Axistravel', 'template_oc110dk', e.target, 'user_zoHbWkfzksp87vx5j6L1k')
              .then((result) => {
                  console.log(result.text);
                  setMsg("Your Message has been recieved!");
                }, (error) => {
                    console.log(error.text);
                    setMsg("Message not submitted!");
              });

              e.target.reset()

    }











    return (
        <>

                    {/* Hero section */}
                    <section>
                <div className="container-fluid hero-contact img-fluid">

                    <div className="col-md-6 hero-content-contact animate__animated animate__fadeInLeft">
                    <h1 className="heading text-white"><b>Talk<span style={{color:"#0275d8"}}> To Us</span></b></h1>
                                <p className="text-white text-justify heading-note">Why not drop in to see us or give us a call to see what a difference we can make to your business travel management function. Tell us a bit about your business and your travel requirements and we can tell you how we can help you save time and money by providing a tailored travel booking solution for you. </p>
                    </div>
                </div>
        </section>



{/* scroll */}
<div className="text-center">
    <img src={scroll} className="scroll animate__animated animate__bounce"/>
</div>





{/* form and address */}
<section className="form pt-4 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-5 mt-5 order-2 order-md-1">
                <div className="row pt-5 mt-5 location-details ">
                    <div className="col-md-3" >
                        <img src={location} className="contact-icon "/>
                    </div>
                    <div className="col-md-9">
                        <h5 className="font-weight-bold">Find us at the Office</h5>
                        <p>115, Office Court Building,
                            Oud Metha P.O.Box 23240
                            Dubai, United Arab Emirates</p>
                    </div>
                </div>

                <div className="row mt-5 detail">
                    <div className="col-md-3 ">
                        <img src={call} className="contact-icon "/>
                    </div>
                    <div className="col-md-9">
                        <h5 className="font-weight-bold">Give us a call</h5>
                        <p>+971 4 399 9332 <br>
                        </br>+971 4 399 9335</p>
                    </div>
                </div>


                <div className="row mt-5 detail">
                    <div className="col-md-3">
                        <img src={email} className="contact-icon "/>
                    </div>
                    <div className="col-md-9">
                        <h5 className="font-weight-bold">Send us an Email</h5>
                        <p>bookings@axistravel.ae</p>
                    </div>
                </div>


            </div>



            <div className="col-md-7 order-1 order-md-2">
                <div className="contact-form p-5 shadow">
                    <h4 className="font-weight-bold">Send us a message</h4>
                    <p className="heading-note">You can contact us with anything related to our Products. We'll get in touch with you as soon as possible</p>


                    <form onSubmit={submitemail}>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="label-note">Full Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="label-note">Email Address </label>
                        <input type="email" class="form-control" id="exampleInputPassword1" name="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="label-note">Subject</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" name="subject" required/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" className="label-note">Your Message</label>
                        <textarea type="text" rows="4" class="form-control" id="exampleInputPassword1" name="message" required/>
                    </div>

                    <button className="btn btn-lg button mt-4">SUBMIT</button>
                    </form>
    <p className="text-center font-weight-bold mb-0 mt-2" style={{color:"#0275d8"}}>{msg}</p>

                </div>
            </div>
        </div>
    </div>
</section>



{/* map section */}
<section className="map mb-5">
    <div className="container-fluid">
        <img src={map} className="img-fluid shadow" data-aos="zoom-in" loading="lazy"></img>
    </div>
</section>































        </>
    )
}




