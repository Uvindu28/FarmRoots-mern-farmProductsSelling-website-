import mongoose from "mongoose";

// Define a Category schema
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensure no duplicate category names
    },
    
}, { timestamps: true });

export const Category = mongoose.model("Category", CategorySchema);


