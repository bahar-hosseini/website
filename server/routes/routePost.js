import express from 'express'

const router = express.Router()


//Model
import Post from '../models/postModel.js'


router.post("/", (req, res)=>{
    const post = new Post ({
      email: req.body.emailTitle,
      subject: req.body.subjectBody,
      message:req.body.messageBody
    });
  
    post.save(
      (err)=>{
      if(!err){
        res.redirect("http://localhost:3000")
      }else{
        res.send(`the err is :${err}`)
      }
    }
    );
 

  });

  export default router