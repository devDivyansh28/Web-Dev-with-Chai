import app from "./src/app.js"
import "dotenv/config"
import connectDB from "./src/common/utils/config/connectDB.js";


const PORT = process.env.PORT || 4000;

const startServer =  async ()=>{
    
    await connectDB()
    app.listen(PORT,()=>{
        console.log(`Server is Up and running at ${PORT} succesfully  in ${process.env.NODE_ENV} mode`)
    })
}


startServer().catch((err)=>{
    console.error("Failed to start Sever",err)
    process.exit(1)
})

