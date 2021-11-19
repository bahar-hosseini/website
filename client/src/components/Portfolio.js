import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



function Portfolio(){
    const slideImages = [
        '/images/portfolio.jpg',
        '/images/portfolio.jpg',
        '/images/portfolio.jpg'
      ];
return(
  <div>
        <div className="bg-light py-3">
            <div className="text-center  animate__animated animate__bounce titleGroup">
                <h2> <span>MY</span> PORTFILIO</h2>
                {/* <h6>Click on a product to learn more</h6> */}
                <h1><i className="fas fa-inbox "></i></h1>
            </div>
        </div>

         <div className="container-fluid bgPortfolio">
          <div className="align-self-center text-center">
               <div className='row'>
               
          <div className="text-center titleGroup p-5">
              <h2><span>Click on a product to learn more</span></h2>
         </div>
        <Slide easing="ease" className='slider'>
          <div className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
            <button className="btn text-center rounded-pill my-3" type="submit " name="button ">
            <a style={{color: 'inherit'}} href='https://www.google.com/'>View</a>
               </button>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
                 <button className="btn text-center rounded-pill my-3" type="submit " name="button ">
            <a style={{color: 'inherit'}} href='https://www.google.com/'>View</a>
               </button>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
            <button className="btn text-center rounded-pill my-3" type="submit " name="button ">
            <a style={{color: 'inherit'}} href='https://www.google.com/'>View</a>
               </button>
          </div>
        </Slide>
        
      </div>
     </div>
    </div>
    </div>
  


);
}

export default Portfolio;
