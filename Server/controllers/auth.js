import mongoose  from "mongoose";
import User from "../models/User.js"
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken"
import uploadImageClodinary from "../utils/uploadImageCloudinary.js";

export const signup = async (req, res, next) => {
  try {
      const { role } = req.body;

      // Validate role
      if (!["Farmer", "Buyer"].includes(role)) {
          return next(createError(400, "Invalid role! Farmers and Buyers can sign up."));
      }

      // Hash the password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      // Upload image to Cloudinary
      let imageUrl = null;
      if (req.file) {
          console.log('Uploading image to Cloudinary...');
          const upload = await uploadImageClodinary(req.file);
          imageUrl = upload.url; // Get Cloudinary image URL
          console.log('Image uploaded successfully:', imageUrl);
      } else {
          console.log('No image provided for upload');
      }

      // Create new user
      const newUser = new User({
          ...req.body,
          password: hash,
          image: imageUrl, // Save image URL in the database
      });

      await newUser.save();

      res.status(200).send("User has been created.");
  } catch (err) {
      console.error('Error during signup:', err);
      next(err);
  }
};
  

export const signin = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) return next(createError(404, "User not found!"));
  
      const isCorrect = await bcrypt.compare(req.body.password, user.password);
      if (!isCorrect) return next(createError(400, "Invalid credentials!"));
  
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT);
      const { password, ...others } = user._doc;
  
      res.cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(others); // Include role in the response
    } catch (err) {
      next(err);
    }
  };
  