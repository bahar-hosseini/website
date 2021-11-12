import React from "react"


function Portfolio(){
return(
  <div id='portfolio'>
        <div className=" bg-light py-5">
            <div className="text-center  animate__animated animate__bounce titleGroup">
                <h2> <span>MY</span> PORTFILIO</h2>
                <h4>Click on a product to learn more</h4>
                <h1><i className="fas fa-inbox "></i></h1>
            </div>
        </div>

        <div className="container-fluid text-center ">
            <div className="row bgPortfolio">
                <div className="text-center my-5">
                    <img className="img-fluid rounded col-lg-4" src={"/images/portfolio.jpg"} alt="coming soon"/>
                </div>
            </div>
        </div>
  </div>
);
}

export default Portfolio;
