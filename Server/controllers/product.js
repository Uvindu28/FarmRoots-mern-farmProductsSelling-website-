import User from "../models/User.js";
import Product from "../models/Product.js";
import { createError } from "../error.js";
import uploadImageClodinary from "../utils/uploadImageCloudinary.js";

export const addProduct = async (req, res, next) => {
  try {
      // Log request body and file for debugging
      console.log("Request Body:", req.body);
      console.log("Uploaded File:", req.file);

      // Extract and validate required fields
      const { title, desc, price, location, quantity, categoryId } = req.body;

      if (!title || !desc || !price || !location || !quantity || !categoryId) {
          return res.status(400).json({
              success: false,
              message: "All required fields (title, desc, price, location, quantity, categoryId) must be provided.",
          });
      }

      let imageUrl = null;
      if (req.file) {
          const upload = await uploadImageClodinary(req.file); // Cloudinary upload
          imageUrl = upload.url;
      }

      const newProduct = new Product({
          userId: req.user.id,
          title,
          desc,
          price: Number(price), // Convert price to number
          location,
          quantity,
          categoryId, // Include categoryId here
          imgUrl: imageUrl,
      });

      const savedProduct = await newProduct.save();
      res.status(200).json({
          success: true,
          message: "Product added successfully",
          data: savedProduct,
      });
  } catch (err) {
      next(err);
  }
};




export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return next(createError(404, "product not found!"));
    if (req.user.id === product.userId) {
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateProduct);
    } else {
      return next(createError(403, "You can update only your product!"));
    }
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return next(createError(404, "product not found!"));
    if (req.user.id === product.userId) {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("The product has been deleted.");
    } else {
      return next(createError(403, "You can delete only your product!"));
    }
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("categoryId", "name") // Populate category name
      .populate("userId", "name location phone"); // Populate seller details (name, location, phone)

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

export const search = async (req, res, next) => {
    const query = req.query.q;
    try {
      const products = await Product.find({
        title: { $regex: query, $options: "i" },
      }).limit(40);
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  };


  export const getProductsByUserId = async (req, res, next) => {
    try {
      // Fetch products based on userId and populate categoryId with category name
      const products = await Product.find({ userId: req.params.userId })
        .populate('categoryId', 'name') // Populate categoryId with category name
        .exec();
  
      if (!products || products.length === 0) {
        return res.status(404).json({ message: 'No products found for this user' });
      }
  
      res.status(200).json(products); // Return the found products with populated category data
    } catch (error) {
      next(error); // Forward error to error handling middleware
    }
  };


  export const getallProduct = async (req, res, next) => {
    try {
      const products = await Product.find().populate('categoryId'); 
      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }


  export const getRelatedProducts = async (req, res, next) => {
    try {
      const { categoryId } = req.params;
      console.log("Received categoryId:", categoryId);
      const relatedProducts = await Product.find({ categoryId });
      res.status(200).json({ success: true, data: relatedProducts });
    } catch (err) {
      console.error("Error fetching related products:", err);
      res.status(500).json({ success: false, message: "Failed to fetch related products" });
    }
  };
  
  

  