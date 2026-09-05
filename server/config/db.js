import mongoose from "mongoose";    
let connectionPromise;

const connectDB=async()=>{
    if (mongoose.connection.readyState === 1) {
        return;
    }

    if (connectionPromise) {
        return connectionPromise;
    }

    try {
        connectionPromise = mongoose.connect(process.env.MONGODB_URI);
        await connectionPromise;
        console.log("Database connected successfully")
    } 
    catch (e) {
        connectionPromise = undefined;
        console.log("Database connection failed")       
        console.error("Database connection failed 11:", e.message);
        throw e;
    }
}

export default connectDB;