import React from "react"
import AnimateText from "./animate/Animate";




function Home() {
    return (<div id='home'>
        <section className = "container-fluid px-0 py-5" >
        <div className = "row align-items-center " >
        <div className = "col-lg-4" >
        <div id = "headingGroup" className = " text-center d-none d-lg-block animate__animated animate__bounce" >
        <h2 > <span> I'm </span> Bahar Hosseini</h2> 
        <AnimateText><h4> A FULL - STACK SOFTWARE ENGINEER </h4> </AnimateText>
        </div>
        </div>
        <div className = "col-lg-8 py-5">
        <img className = "img-fluid py-5" src={'/images/programming-img.png'} alt='home page' />
        </div>
        </div>
        </section>
        </div> );
}

export default Home;