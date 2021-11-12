import React,{useState} from "react"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
// import contacts from "../api/api-contact"




function Contact (){
    const[mouseOver,setMouseOver]=useState(false)
    const[email,setEmail]=useState('')
    const[subject,setSubject]=useState('')
    const[message,setMessage]=useState('')

    


    const resetStates=()=>{
      setEmail('')
      setSubject('')
      setMessage('')
    }

    const validateCommment = (comment) => {
      if (!comment.email)
        return toast('please fill out email field');

      if (!comment.subject)
        return toast("please fill out subject field")
        if (!comment.message)
        return toast("please fill out message field")
    };
  
const handleSubmit=(event)=>{
  event.preventDefault();
let comment={
    email,
    subject,
    message
  }
validateCommment({email,subject,message})
axios.post("/",JSON.stringify(comment),{
  headers:{
    "Content-Type":"application/json"
  }
})

.then(({data,status})=>{
  console.log(data);
  if((status===200 )&& (comment.email!=="")){
   toast.success('successfully sent',{closeOnClick:true})
  }else{
    toast.error("Sorry your message wasn't sent")
  }
  resetStates()

})
.catch(ex=>{
  toast.error("Sorry your message wasn't sent")
  console.log(ex)
})

}

function handleMouseOver(){
setMouseOver(true)
}


// const handleClick=()=>{
   
// const comment = {
//     email,
//     subject,
//     message,
//   };
//   validateCommment({email,subject,message})

//   contacts(comment, (isOk, data) => {
//     if (!isOk)
//       return (toast.error("Sorry your message wasn't sent"));
//     toast.success('successfully sent',{closeOnClick:true});
//     localStorage.setItem("email", data.email);
//     localStorage.setItem("subject", data.subject);
//     localStorage.setItem("message", data.message);
//     window.location.reload();
//   })
  
// }

// useEffect(() => {
  

//   const fetchComment=async()=>{


//       const {data}=await axios.post(`/`,fetchComment)
//       .then(response =>(setEmail(response.data.email)))
//       .then(response =>(setSubject(response.data.subject)))
//       .then(response =>(setMessage(response.data.message)))
//       .catch(error=>toast.error(error))

//   // setNewComment(data)
// }
// fetchComment()
// }, []);







  return(
    <div id='contacts'>
    <div className="bg-light py-5">
    <div className=" row text-center d-lg-block animate__animated animate__bounce titleGroup">
        <h2> <span>CONTACT</span> ME</h2>
        <h4>GET IN TOUCH</h4>
        <i className="fas fa-envelope "/>
    </div>
</div>

<div className=" bg-dark pt-3 rounded-3">
    <form action='/' method='POST' className="text-center row justify-content-center " onSubmit={handleSubmit}>
        <div className="form-group col-lg-7 col-md-8 col-sm-8">
            <label for="email"></label>
            <input className="form-control " id="emailID " type="text " name="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <label for="col-form-label "></label>
            <input className="form-control " id="subjectID " type="text " name="subject" placeholder="Subject"  value={subject} onChange={e=>setSubject(e.target.value)} />
            <label for="inputMessage "></label>
            <textarea className="form-control mb-3"  placeholder="Message " name="message" rows="8 " cols="80 "  value={message} onChange={e=>setMessage(e.target.value)} />
            <button className="btn btn-warning rounded-pill px-5 mb-2 " type="submit" name="button" onMouseOver={handleMouseOver} onClick={handleSubmit} style={{backgroundColor:mouseOver?"black":"gold"}}>Send</button>
       
        </div>
    </form>
    
    <div className = "col-xl-12 text-center footer" >
    <a style={{color: 'inherit'}}  href='https://github.com/bahar-hosseini' className = "fab fa-github" target="_blank"></a> 
    <a style={{color: 'inherit'}}  href='https://www.linkedin.com/in/maryam-hosseini-163310192/' className = "fab fa-linkedin" target="_blank" > </a>
    <a style={{color: 'inherit'}}  href="mailto:bahar.hosseini@gmail.com" className = "fas fa-envelope-square"></a>
    </div>
    
    <p className="text-white text-center"><small>© copyright 2021 designed with &#129505; by BAHAR</small></p>
    
    <ToastContainer />
    <br />
</div>
    </div>
  )
}
export default Contact;
