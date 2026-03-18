const express = require("express");


// see notes in detail you can see how to create middleware
const app = express()

app.use((req,res,next)=>{

    // Business Logic

    next() // we have created our own Winston by using this
})


app.use((req,res,next)=>{
    req.startTime = Date.now();
    res.on('finish',()=>{
        const duration = Date.now()-req.startTime;
    })
    next()
})


function authMe(req,res,next){
    const token = req.headers['x-auth-token'];
    if(!token){
        return res.status(401).json({
            error:"No Token,Please Wait"
        })
    }
    if(token!=="secret-Divyansh"){
        return res.status(403).json({
            error : "Invalid Token"
        })
    }

    req.user = {id:1 , name : "Divyansh" , role : "Admin"}

    next()
}

app.get('/profile',authMe,()=>{})

function getRole(role){
    return (req,res,next)=>{
        if(!req.user || req.user.role!==role){
            return res.status(403).json({
                error:"Role does not exist"
            })

        }
        next()
    }
}


// We can also use Buildin MiddleWares 
app.use(express.json({limit:'50kb'}))  // This is called Zero-trust architecture

app.use(express.urlencoded({extended:true}));


app.use(express.static) // It has also options like root , dotfiles and *maxage