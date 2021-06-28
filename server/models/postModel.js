import mongoose from "mongoose"
import timestamps from 'mongoose-timestamp';

const postSchema=mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    subject:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})
postSchema.plugin(timestamps)

const Post=mongoose.model('Post',postSchema)
export default Post