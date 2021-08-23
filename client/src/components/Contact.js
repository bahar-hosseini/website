import React,{useState,useEffect} from "react"
import axios from 'axios'



function Contact(){
    const[mouseOver,setMouseOver]=useState(false)
    const [name,setName]=useState("Send")
    const[postItem,setPostItem]=useState([])
function handleMouseOver(){
setMouseOver(true)
}
function handleClick(event){
setName("Thank You")
}
useEffect((e) => {

    const post={text:'React Hooks POST Request Example',done:false}
    axios.post(`http://bahosseini.com`,post)
        .then(response => (setPostItem(response.data.id)))
}, []);

  return(
    <div id='contacts'>
    <div className="bg-light py-5">
    <div className=" row text-center d-lg-block animate__animated animate__bounce titleGroup">
        <h2> <span>CONTACT</span> ME</h2>
        <h4>GET IN TOUCH</h4>
        <i className="fas fa-envelope "></i>
    </div>
</div>

<div className=" bg-dark pt-3 rounded-3">
    <form action='http://localhost:5000' method='post' className="text-center row justify-content-center ">
        <div className="form-group col-lg-7 col-md-8 col-sm-8">
            <label for="inputEmail "></label>
            <input className="form-control " id="inputID " type="text " name="emailTitle" placeholder="Email "></input>
            <label for="col-form-label "></label>
            <input className="form-control " id="inputID " type="text " name="subjectBody" placeholder="Subject "></input>
            <label for="postID "></label>
            <textarea className="form-control mb-3"  placeholder="Message " name="messageBody" rows="8 " cols="80 "></textarea>
            <button className="btn btn-warning rounded-pill px-5 mb-2 " type="submit " name="button" onMouseOver={handleMouseOver} onClick={handleClick} style={{backgroundColor:mouseOver?"black":"gold"}}>{name}</button>
            <p>{postItem}</p>
        </div>
    </form>
    <p className="text-white text-center py-2"><small>© copyright 2021 designed with &#129505; by BAHAR</small></p>
</div>
    </div>
  )
}
export default Contact;
