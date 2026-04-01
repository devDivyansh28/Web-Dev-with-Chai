import mongoose from "mongoose";

const connectDB = ()=>{
    const conn = mongoose.connect(process.env.MONGO_URI)

    console.log("Data Base connected Sucessfully...")
}

export default connectDB;