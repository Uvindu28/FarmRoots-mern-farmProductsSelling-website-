import express from "express";
import { addCategory, getCategories, getProductsByCategoryName } from "../controllers/category.js";
import { verifyRole } from "../verifyToken.js";
const router = express.Router();

// Only admins can add categories
router.post("/", verifyRole(["Admin"]), addCategory);
router.get("/getall", getCategories);

// Fetch products by category ID
router.get("/category-name/:categoryName", getProductsByCategoryName);

export default router;
