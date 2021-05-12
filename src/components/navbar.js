import React from 'react'
import {Link, useHistory} from 'react-router-dom';


import '../css/navbar.css'
import logo from '../picture/logo-light.png';

export const Navbar = () => {
    return(
        <>

           <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
           <a className="navbar-brand" href="#"><img className="logo" src={logo}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                <Link to="/" className="link" ><a className="nav-link">HOME <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    TIME TRAVEL
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="corporate-travel" className="link"><a className="dropdown-item">Corporate Travel</a></Link>
                    <a className="dropdown-item" href="#">Business Travel</a>
                    <a className="dropdown-item" href="#">One-Stop Travel solution</a>
                    <a className="dropdown-item" href="#">Simplified Travel Management</a>
                    <a className="dropdown-item" href="#">Consulting Services</a>
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="/leisure-travel" className="link"><a className="nav-link">LEISURE TRAVEL</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/meetings-and-events" className="link"><a className="nav-link">MEETINGS AND EVENTS</a></Link>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    SERVICES
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/flight" className="link"><a className="dropdown-item">Flight</a></Link>
                    <Link to="/visas-and-passport" className="link"><a className="dropdown-item">Visas</a></Link>
                    <Link to="/insurance" className="link"><a className="dropdown-item">Insurances</a></Link>
                    <Link to="/tour" className="link"><a className="dropdown-item">Tours</a></Link>
                    <a className="dropdown-item" href="#">Hotel Reservation</a>
                    <a className="dropdown-item" href="#">Transport</a>
                    <a className="dropdown-item" href="#">Packages</a>
                    <a className="dropdown-item" href="#">Conferences</a>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ABOUT US
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/our-company" className="link"><a className="dropdown-item">Our Company</a></Link>
                    <Link to="/our-philosophy" className="link"><a className="dropdown-item">Philosophy</a></Link>
                    </div>
                </li>
                <li className="nav-item">
                   <Link to="/contact-us" className="link" ><a className="nav-link">CONTACT US</a></Link> 
                </li>

                </ul>
            </div>
            </nav>
        </>
    )
}

