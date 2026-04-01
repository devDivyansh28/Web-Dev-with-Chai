import app from "./src/app.js";
import "dotenv/config"
import connectDB from "./src/common/config/connectDB.js";

const PORT = process.env.PORT || 4000;

const startServer = async ()=>{
    await connectDB

    app.listen(PORT,()=>{
        console.log(`Server is Running on PORT ${PORT} in ${process.env.NODE_ENV} mode `)
    })
    
}

startServer().catch((err)=>{
    console.log(err)
    process.exit(1);
})