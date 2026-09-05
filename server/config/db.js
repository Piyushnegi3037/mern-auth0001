import mongoose from "mongoose";    
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully 1")
    } 
    catch (e) {
  console.log("Database connection failed")       
        console.error("Database connection failed 11:", e.message);
    }
}

export default connectDB;