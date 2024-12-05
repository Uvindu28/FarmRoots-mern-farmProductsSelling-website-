import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    imgUrl:{
        type:String,
        default:"",

    },
    price:{
        type: Number,
        required:true,

    },
    location:{
        type: String,
        required:true,
    },
    quantity:{
        type: String,
        required:true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", // Reference the Category model
    },


   
},{timestamps:true})

export default mongoose.model("Product", ProductSchema);