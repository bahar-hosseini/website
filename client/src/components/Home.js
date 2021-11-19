import React from "react"
import AnimateText from "./animate/Animate";
import TypeAnimation from "./animate/TypeAnimation";


// block title on small screen : d-none d-lg-block

function Home() {

    
    return (<div >
       
        <div className = "row align-items-center mt-5 pt-5" >
        <div className = "col-lg-4 col-md-6 col-sm-6" >
        <div id = "headingGroup" className = " text-center  animate__animated animate__bounce" >
       
        <AnimateText><h2> <span> I'm </span> Bahar Hosseini</h2> </AnimateText>
        
        {/* <AnimateText><h4> A FULL - STACK SOFTWARE ENGINEER </h4> </AnimateText> */}
        </div>
        </div>
        <div className = "col-lg-8 col-sm-4 col-md-4 mt-5">
        <img className = "float-end homeBg " src={'/images/web.gif'} alt='home page' />
        </div>
        <div id = "typewrite" className = "text-center my-3 py-3" >
        <TypeAnimation/>
        </div>
        {/* <img className = "float-start float-start col-lg-4 col-md-3 col-sm-3 pl-4" src={'/images/web.gif'} alt='robot' /> */}
        {/* <img className = "float-end float-start col-lg-4 col-md-3 col-sm-3 pl-4" src={'/images/monophy.gif'} alt='robot' /> */}
        </div>
        </div> );
}

export default Home;