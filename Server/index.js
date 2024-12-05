import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import videoRoutes from './routes/videos.js'
import commentRoutes from './routes/comments.js'
import productRoutes from './routes/products.js'
import categoryRoutes from './routes/categories.js'
import cookieParser from 'cookie-parser'
import cors from "cors";

const app = express()
dotenv.config()

const connect =() => {

    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("MongoDB Connected...");
    }).catch((err) => {
        throw err;
    });
};

app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));

app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);


app.use((err, req,res, next)=>{

    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
})

app.listen(8800,()=>{
    connect()
    console.log("FarmRoot Server is running !");
})


