import React from "react"
import AnimateText from "./animate/Animate";
import TypeAnimation from "./animate/TypeAnimation";


// block title on small screen : d-none d-lg-block

function Home() {

    
    return (<div >
        <section className=''>
        <div className = "row align-items-center mt-5 pt-4" >
        <div className = "col-lg-4 col-md-6 col-sm-6" >
        <div id = "headingGroup" className = " text-center  animate__animated animate__bounce pt-5" >
       
        <AnimateText><h2 > <span> I'm </span> Bahar Hosseini</h2> </AnimateText>
        
        {/* <AnimateText><h4> A FULL - STACK SOFTWARE ENGINEER </h4> </AnimateText> */}
        </div>
        </div>
        <div className = "col-lg-8 col-sm-6 col-md-6 p-3">
        <img className = "img-fluid homeBg " src={'/images/programming-img.png'} alt='home page' />
        </div>
        <div id = "typewrite" className = "text-center mt-5" >
        <TypeAnimation/>
        </div>
        <img className = "float-start float-start col-lg-4 col-md-3 col-sm-3 pl-4" src={'/images/female.png'} alt='robot' />
        </div>
        </section>
        </div> );
}

export default Home;