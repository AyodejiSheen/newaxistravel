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
              <li className="nav-item">
                    <a className="nav-link" href="#">TIME TRAVEL</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">LEISURE TRAVEL</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">MEETINGS AND EVENTS</a>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    SERVICES
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Flight</a>
                    <a className="dropdown-item" href="#">Visas</a>
                    <a className="dropdown-item" href="#">Insurances</a>
                    <a className="dropdown-item" href="#">Tours</a>
                    <a className="dropdown-item" href="#">Hotel Reservation</a>
                    <a className="dropdown-item" href="#">Transport</a>
                    <a className="dropdown-item" href="#">Packages</a>
                    <a className="dropdown-item" href="#">Conferences</a>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">ABOUT US</a>
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

