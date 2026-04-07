import app from "./src/app.js"
import "dotenv/config"

const PORT = process.env.PORT!

const startServer = async ()=>{
    
    // await dbstart

    app.listen(PORT,()=>{
        console.log(`Server is up and Running on PORT ${PORT} in ${process.env.NODE_ENV} mode`)
    })
}

startServer().catch((err)=>{
    console.error(`There is some Problem connecting to server ${err}`)
    process.exit(1);
})