import React from "react"
// import {HashLink as Link } from 'react-router-hash-link';
// import {BrowserRouter as Router} from 'react-router-dom'





function Navbar() {
 

    return ( 




        <div className = "container">   
        <nav id = "mainNavbar"
        class = "navbar navbar-expand-md py-0 fixed-top " >
        <a  href = "/"
        className = "navbar-brand" > BH </a>
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
        <a smooth href="#home"
        className = "nav-link"> HOME </a>
        </li>
        <li className = "nav-item">
        <a smooth href= "#about" 
        className = "nav-link"> ABOUT </a>
        </li>
        <li className = "nav-item" >
        <a smooth href="#resume"
        className = "nav-link" > RESUME </a>
        </li>
        <li className = "nav-item" >
        <a smooth href="#portfolio"
        className = "nav-link" > PORTFOLIO </a> </li>
        <li className = "nav-item" >
        <a  smooth href= "#contacts"
        className = "nav-link" > CONTACTS </a>
        </li>
        </ul>
        </div>
        </nav>
        </div>


        )
    }
    

    export default Navbar;


////////////////////////////

