import mongoose from "mongoose"


const connectDB = async ()=>{
    //  ****Rembember this important note : 
    //  ->  Data base connection fail hotey HTMLHeadingElement
    //  ->  Database are always in another continent iska mtlb 
    //    await use krna hoga hrr baar isme

    const conn = await mongoose.connect(process.env.MONGODB_URI);
    // console.log(conn)
    // we can also apply try catch here what if database is not connected...so that will be handled by try-catch
    console.log(`MONGODB connected : ${conn.connection.host}`)

}

export default connectDB;


