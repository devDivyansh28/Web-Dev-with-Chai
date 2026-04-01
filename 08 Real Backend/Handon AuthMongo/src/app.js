import express from "express"
import authRoute from "./module/Auth/auth.route.js"
import ApiError from "./common/utils/api.error.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/auth",authRoute)

app.all("{*path}",(req,res)=>{
    throw ApiError.notfound(`Route ${req.originalUrl} not found`)
})

export default app;

