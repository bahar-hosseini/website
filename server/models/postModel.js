import mongoose from "mongoose"
import timestamps from 'mongoose-timestamp';

const postSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
        index:true,
        sparse:true,
    },
    subject:{
        type:String,
       
    },
    message:{
        type:String,
    }
})
postSchema.plugin(timestamps)

const Post=mongoose.model('Post',postSchema)
export default Post