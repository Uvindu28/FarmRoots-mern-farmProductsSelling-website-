import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false, // Optional, set to true if name must be unique
    },
    email: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validates email format
    },
    password: {
      type: String,
      required: true, // Ensure it is hashed before saving
    },
    image: {
      type: String,
      default:"", // URL or Base64 string for image
    },
    role: {
      type: String,
      enum: ["Farmer", "Buyer", "Admin"], // Define valid roles
      required: true, // Ensure every user has a role
    },
    about:{
      type: String,
    },
    farmtype: {
      type: String,
    },
    location:{
      type: String,
    },
    phone:{
      type: String,
    },

    experince:{
      type: String,
    },
    likes:{
      type:[String],
      default:[],
    },
    dislikes:{
      type:[String],
      default:[],
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

export default mongoose.model("User", UserSchema);
