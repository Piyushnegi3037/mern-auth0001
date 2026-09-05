 import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
// import router from './routes/user.js';
import mongoose from "mongoose";    

const app= express();

const allowedOrigins = [
  'https://mern-auth0001-lppt.vercel.app', // Your Vercel frontend URL
  'http://localhost:5173'                  // Your local development URL (if using Vite)
];
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));
const port=process.env.PORT || 8000;
// API endpoints
app.get('/',(req,res)=>{ res.send("Hello from server") })
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
 const startServer=async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URI);
           console.log("Database connected successfully 1")
        
        console.log("Database connected successfully")
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
} ) }
  catch(error){
        console.log("Database connection failed")
        console.log(error)
    app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
} )
}   }
     startServer();
