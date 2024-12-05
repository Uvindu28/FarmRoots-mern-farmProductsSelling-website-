import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true,
        unique:true,
    },
    videoUrl:{
        type:String,
        required:true,

    },
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    },
    

},{timestamps:true})

export default mongoose.model("Video", VideoSchema);