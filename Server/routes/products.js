import express from 'express';
import { addProduct, updateProduct,deleteProduct,getProduct,search,getProductsByUserId,getallProduct,getRelatedProducts} from "../controllers/product.js";
import { verifyRole,verifyToken } from "../verifyToken.js";
import upload from '../middleware/multer.js';

const router = express.Router();

router.post("/", upload.single("imgUrl"), verifyToken, addProduct)
router.put("/:id", verifyRole(["Farmer"]), updateProduct)
router.delete("/delete/:id", verifyRole(["Farmer"]), deleteProduct)
router.get("/find/:id", getProduct)
router.get("/search", search)
router.get('/user/:userId', getProductsByUserId);
router.get("/getall", getallProduct)
router.get("/related/:categoryId", getRelatedProducts);



export default router;