import { Category } from "../models/Category.js";
import  Product  from "../models/Product.js";
import { createError } from "../error.js";

// Add a new category
export const addCategory = async (req, res, next) => {
    try {
        const newCategory = new Category(req.body); // Body should include { name: "CategoryName" }
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        next(err);
    }
};

// Get all categories
export const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        next(err);
    }
};

// Get products by category name
export const getProductsByCategoryName = async (req, res, next) => {
    try {
        const { categoryName } = req.params;

        // Find the category using the name
        const category = await Category.findOne({ name: categoryName });

        if (!category) {
            return res.status(404).json({ 
                success: false, 
                message: "Category not found" 
            });
        }

        // Find products with the matching categoryId
        const products = await Product.find({ categoryId: category._id });

        res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: products
        });
    } catch (err) {
        next(err);
    }
};

