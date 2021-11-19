import React from "react"



function About() {
    return (<div id="about" className='about'>
        <div className=" container-fluid px-2 about-container py-5">
            <div className="row align-items-center">
                <img className="img-fluid col-lg-4 col-sm-3 profileBahar p-5" src={"/images/bahar.png"} alt=" Home IMG "/>
                <div className="col-lg-8 col-sm-9">
                    <div className=" row text-center justify-content-start d-lg-inline-block animate__animated animate__bounce titleGroup ">
                        <div className="mb-5 titleGroup">
                            <h2 className="text-center text-light py-3 "> <span>ABOUT</span> ME</h2>
                            <p className="text-light lead ">I am a passionate full-stack software engineer who loves solving real-world problems using software. I have experience working for small, mid-size and large companies and this experience helps me to look at problems from different angles. My goal is not only to grow as an individual but also help my team grow and succeed.</p>
                            <hr className="about-line text-center "></hr>
                            <div className="text-white row ">
                                <div className="col ">
                                    <h4>Location</h4>
                                    <p>Ontario, Canada </p>
                                </div>
                                <div className="col">
                                    <h4>Email</h4>
                                    <p>Bahar.Hosseini@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
</div>
    )
}

export default About;
