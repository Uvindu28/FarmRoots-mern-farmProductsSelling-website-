import express from 'express';
import {  signin, signup } from '../controllers/auth.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post("/signup", upload.single('image'), signup);

router.post("/signin", signin )

router.post("/google", )

export default router;