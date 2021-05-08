import React, {useState} from 'react'
import {Baseurl} from '../baseurl';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

export const Contact = () => {


    let [details, setDetails] = useState({ fullname: "", email: "", phone: "", message: ""});

    let[usercontact, Setusercontact] = useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDetails({ ...details, [name]: value });
    }

    const submit = (e) => {
         e.preventDefault();
        Setusercontact([...usercontact, details]);

        //to send to backend then to database  sweetalert2, aos-animation, skeleton-loader
        axios.post(`${Baseurl}contact.php`, JSON.stringify(details)).then(res => {
            let contResponse = res.data;
            console.log(res.data)
            if(res.data.Success){
                alert("submitted")
            }
        })


        setDetails({ fullname: "", email: "", phone: "", message: ""});
    }



    return (
        <>
          <div>
              <form onSubmit={submit}>
                  <input type="text" name="fullname" className="form-control" onChange={handleChange} placeholder="Full Name" value={details.fullname}/>
                  <input type="text" name="email" className="form-control" onChange={handleChange} placeholder="Email Address" value={details.email}/>
                  <input type="number" name="phone" className="form-control" onChange={handleChange} placeholder="Phone Number" value={details.phone}/>
                  <textarea type="text" name="message" className="form-control" row="3" onChange={handleChange} value={details.message}></textarea>

                  <button className="btn btn-danger mt-2 shadow"> SUBMIT </button>
              </form>
        </div>  
        </>
    )
}




