import React from 'react'
import {Link, useHistory} from 'react-router-dom';


import '../css/navbar.css'
import logo from '../picture/logo-light.png';

export const Navbar = () => {
    return(
        <>

           <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
           <a className="navbar-brand" href="/"><img className="logo" src={logo}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active ">
                <Link to="/" className="link" ><a className="nav-link font-weight-bold">HOME <span className="sr-only">(current)</span></a></Link>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle font-weight-bold" id="navbarDropdownMenuLink" role="button" data-toggle=  "dropdown" aria-haspopup="true" aria-expanded="false">
                    WHAT WE DO
                    </a>

                    <div className="dropdown-menu pt-0 pb-0" aria-labelledby="navbarDropdownMenuLink">
                    
                    <li><Link to="/what-we-do" className="link"><a className="dropdown-item ">Travel Management</a></Link></li>

                    <li><Link to="/account-management" className="link"><a className="dropdown-item ">Strategic Account Management</a></Link></li>

                    <li><Link to="/corporate-travel" className="link"><a className="dropdown-item ">Business & Corporate Travel </a></Link></li> 

                    <li><Link to="/meetings-and-events" className="link"><a className="dropdown-item ">Meetings & Events</a></Link></li> 

                    <li><Link to="/logistics-travel-essentials" className="link"><a className="dropdown-item ">Logistics & Travel Essential</a></Link></li> 

                    <li><Link to="/specialized-services" className="link"><a className="dropdown-item ">Specialized Services</a></Link></li> 
                    </div>
                </li>



                     <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle font-weight-bold" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    TECHNOLOGY
                    </a>
                    <div className="dropdown-menu pt-0 pb-0" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/travel-technology" className="link"><a className="dropdown-item ">Travel Technology</a></Link>
                    
                    <Link to="/safety-risks" className="link"><a className="dropdown-item ">Safety & Risk</a></Link>
                    </div>
                </li> 


                <li className="nav-item">
                    <Link to="/leisure-travel" className="link"><a className="nav-link font-weight-bold">LEISURE TRAVEL</a></Link>
                </li>


                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle font-weight-bold" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    SERVICES
                    </a>
                    <div className="dropdown-menu pt-0 pb-0" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/flight" className="link"><a className="dropdown-item ">Flight</a></Link>
                    <Link to="/visas-and-passport" className="link"><a className="dropdown-item ">Visas</a></Link>
                    <Link to="/insurance" className="link"><a className="dropdown-item ">Insurances</a></Link>
                    <Link to="/tour" className="link"><a className="dropdown-item ">Tours</a></Link>
                    <Link to="/hotel" className="link"><a className="dropdown-item ">Hotel Reservation</a></Link>
                    <Link to="/transport" className="link"> <a className="dropdown-item ">Transport</a></Link>
                    <Link to="/packages" className="link"><a className="dropdown-item">Packages</a></Link>
                    <Link to="/meetings-and-events" className="link"><a className="dropdown-item">Conferences</a></Link>
                    </div>
                </li> */}

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle  font-weight-bold" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ABOUT US
                    </a>
                    <div className="dropdown-menu pt-0 pb-0" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/who-we-are" className="link"><a className="dropdown-item">Who We Are</a></Link>
                    <Link to="/our-corporate-values" className="link"><a className="dropdown-item ">Our Corporate Values</a></Link>

                    <Link to="/why-choose-us" className="link"><a className="dropdown-item ">Why Choose Us?</a></Link>
                    </div>
                </li>
                <li className="nav-item">
                   <Link to="/contact-us" className="link" ><a className="nav-link font-weight-bold">TALK TO US</a></Link> 
                </li>

                </ul>
            </div>
            </nav>


            
        </>
    )
}

