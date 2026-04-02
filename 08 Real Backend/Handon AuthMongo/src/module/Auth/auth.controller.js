import * as authservice from "./auth.service.js"
import ApiResponse from "../../common/utils/api.response.js"
import cookie from "cookie"

const register = async (req,res)=>{
    const user = await authservice.register(req.body);
    ApiResponse.created(
        res,
        "Registraion successfull. Please Verify your Email.",
        user
    )
}

const login = async (req,res)=>{
    const {user,acccesToken,refreshToken} = await authservice.login(req.body);

    res.cookie("refreshToken",refreshToken,{
        httpOnly : true,
        secure: process.env.NODE_ENV==="production",
        sameSite : "strict",
        maxAge : 7*24*60*60*1000
    })

    ApiResponse.ok(res,"Login successfulll",{user,acccesToken})
    
}

const refresh = async (req,res)=>{
    const token = req.cookies?.refreshToken;
    const accessToken = await authservice.refresh(token);
    ApiResponse.ok(res,"Token Refreshed",{accessToken});
}

const logout = async (req,res)=>{
    await authservice.logout(req.user.id);
    res.clearCookie("refreshToken");
    ApiResponse.ok(res,"LoggedOut succesfully")
}

const verifyEmail = async (req,res)=>{
    await authservice.verifyEmail(req.params.token);
    ApiResponse.ok(res,"Email Verified Successfully")
}

const forgotPassword = async (req,res)=>{
    await authservice.forgotPassword(req.body.email);
    ApiResponse.ok(res,"Password Reset Email Sent")
}

const resetPassword  = async (req,res)=>{
    await authservice.resetPassword(req.params.token,req.body.password);
    ApiResponse.ok(res,"Password reset Successfull");
}

export {register,login,refresh,logout , verifyEmail , forgotPassword,resetPassword}