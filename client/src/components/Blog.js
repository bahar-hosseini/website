import React from "react"
import blog from "../images/cloud.png";

function Blog(){
return(
  <div id='blog'>
  <div className="bg-light py-5">
    <div className="text-center  animate__animated animate__bounce titleGroup">
        <h2> <span>BLOG </span> POSTS</h2>
        <h4>LATEST ARTICLES</h4>
        <h1><i className="fas fa-comments pt-2 "></i></h1>
    </div>
</div>
<div className="container-fluid text-center py-5">
    <div className="row">
        <div className="col-lg-4 col-md-10">
            <img className="img-fluid" src={blog} alt="blog1 "></img>
            <p className="py-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio molestiae possimus rem, aut provident inventore reprehenderit saepe eius soluta.0</p>
        </div>
        <div className="col-lg-4 col-md-10 ">
            <img className="img-fluid " src={blog} alt="blog2 "></img>
            <p className="py-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio molestiae possimus rem, aut provident inventore reprehenderit saepe eius soluta.0</p>
        </div>
        <div className="col-lg-4 col-md-10 ">
            <img className="img-fluid " src={blog} alt="blog3 "></img>
            <p className="py-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio molestiae possimus rem, aut provident inventore reprehenderit saepe eius soluta.0</p>
        </div>
    </div>
    <button className="btn btn-warning rounded-pill align-self-center mb-2" type="submit " name="button ">SEE ALL POSTS</button>
</div>
  </div>
)
}

export default Blog;
