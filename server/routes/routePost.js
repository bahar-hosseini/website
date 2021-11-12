import express from 'express'


const router = express.Router()

//Model
import Post from '../models/postModel.js'




const routePost =router.post('/',(req, res)=>{
    const post = new Post ({
      email: req.body.email,
      subject: req.body.subject,
      message:req.body.message
    });
 
    post.save(
      (err)=>{
      if(!err){
        res.json("successfully Sent")
        // res.redirect("/")
      }else{
        res.send(`the err is : ${err}`)
      }
    }
    );


  });

 

  export default routePost
