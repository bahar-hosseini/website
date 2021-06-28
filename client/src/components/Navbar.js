import React from "react"
import {HashLink as Link } from 'react-router-hash-link';
import {BrowserRouter as Router} from 'react-router-dom'





function Navbar() {
 

    return ( 
        <Router>
        <div className = "container-fluid">   
        <nav id = "mainNavbar"
        class = "navbar navbar-expand-md py-0 fixed-top " >
        <Link  to = "/#"
        className = "navbar-brand" > BH </Link>
        <button className = "navbar-toggler sm"
        dataToggle = "collapse"
        dataTarget = "#navLinks"
        ariaLabel = "Toggle navigation" >
        <i className = "fas fa-bars " > </i>
        </button>
        <div className = "collapse navbar-collapse"
        id = "navLinks" >
        <ul className = "navbar-nav" >
        <li className = "nav-item" >
        <Link smooth activeClass="active" to="#home"
        className = "nav-link" > HOME </Link>
        </li>
        <li className = "nav-item">
        <Link smooth to = "#about" 
        className = "nav-link"> ABOUT </Link>
        </li>
        <li className = "nav-item" >
        <Link smooth to="#resume"
        className = "nav-link" > RESUME </Link>
        </li>
        <li className = "nav-item" >
        <Link  smooth to = "#blog"
        className = "nav-link" > BLOG </Link> </li>
        <li className = "nav-item" >
        <Link  smooth to= "#contacts"
        className = "nav-link" > CONTACTS </Link>
        </li>
        </ul>
        </div>
        </nav>
        </div>
  </Router>
        )
    }
    

    export default Navbar;