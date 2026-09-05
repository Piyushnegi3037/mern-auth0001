 import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import connectDB from './config/db.js';
// import router from './routes/user.js';
import mongoose from "mongoose";    

const app= express();

const allowedOrigins = [
    'http://localhost:5173',
    'https://project-00000.vercel.app',
    process.env.FRONTEND_URL,
].filter(Boolean);
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(async (_req, res, next) => {
    try {
        await connectDB();
        next();
    } catch {
        res.status(503).json({ success: false, message: 'Database unavailable' });
    }
});
const port=process.env.PORT || 8000;
// API endpoints
app.get('/',(req,res)=>{ res.send("Hello from server") })
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
const startServer=async()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        });
    }
  catch(error){
        console.log("Database connection failed")
        console.log(error)
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        });
    }
}

if (!process.env.VERCEL) {
    startServer();
}

export default app;
