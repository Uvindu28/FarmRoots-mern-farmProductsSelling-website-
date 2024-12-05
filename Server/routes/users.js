import express from 'express';
import { update, deleteUser, getUser, like, dislike} from '../controllers/user.js';
import { verifyToken, verifyRole } from "../verifyToken.js";

const router = express.Router();

router.put("/:id",verifyRole(["Farmer"]),update)

router.delete("/:id",verifyRole, deleteUser)

router.get("/find/:id", getUser)

router.put("/like/:userId",verifyToken, like)

router.put("/dislike/:userId",verifyToken, dislike)

router.get("/farmer/dashboard", verifyToken, verifyRole(["Farmer"]), (req, res) => {
    res.status(200).send("Welcome to the Farmer Dashboard");
  });
  
  router.get("/buyer/dashboard", verifyToken, verifyRole(["Buyer"]), (req, res) => {
    res.status(200).send("Welcome to the Buyer Dashboard");
  });
  
  router.get("/admin/panel", verifyToken, verifyRole(["Admin"]), (req, res) => {
    res.status(200).send("Welcome to the Admin Panel");
  });

export default router;