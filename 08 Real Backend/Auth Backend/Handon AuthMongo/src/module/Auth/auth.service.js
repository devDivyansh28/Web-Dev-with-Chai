import User from "./auth.model.js"
import ApiError from "../../common/utils/api.error.js"
import { generateVerificationToken ,generateAccessToken,generateRefreshToken , createHash , verifyRefreshToken} from "../../common/utils/jwt.utils.js"
import { sendVerificationEmail , sendResetPasswordEmail } from "../../common/config/email.js"



const register = async ({name,email,password,role})=>{

    const existing = await User.findOne({email})
    if(existing) throw ApiError.unauthorized("Email Already Exist...")

    const {rawToken,hashToken} = generateVerificationToken();
  

    const user = await User.create({
        name,
        email,
        password,
        role,
        verificationToken:hashToken,
    })

    try {
        await sendVerificationEmail(email,rawToken)
    } catch (err) {
        console.error("Failed to send verification email:",err.message)
    }

    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.verificationToken;
    return userObj;
} 

const login = async({email,password})=>{
    const user = await User.findOne({email}).select("+password");
    if(!user) throw ApiError.unauthorized("Invalid Email or password")
    
    const isMatch = await user.comparePassword(password);
    if(!isMatch) throw ApiError.unauthorized("Invalid Email or password")

    if(!user.isVerified){
        throw ApiError.forbidden("Please verify your email before logging in")
    }
    
    const accessToken = generateAccessToken({id:user._id,role:user.role});
    const refreshToken = generateRefreshToken({id:user._id})
    

    user.refreshToken = createHash(refreshToken);

    await user.save({validateBeforeSave:false});

    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.refreshToken;
    
    return {user:userObj , accessToken , refreshToken};

}

const refresh = async (token)=>{
    if(!token) throw ApiError.unauthorized("Refresh Token Missing");

   const decoded = verifyRefreshToken(token)

   const user = await User.findById(decoded.id).select("+refreshToken");

   if(!user) throw ApiError.unauthorized("User No Longer Exists")

    if(user.refreshToken!==hashToken(token)){
        throw ApiError.unauthorized("Invalid Refresh Token Please Login Again...")
    }

    const accessToken = generateAccessToken({id:user._id,role:user.role});

    return {accessToken};
}

const logout = async (userId)=>{
    // Clear stored refresh token so that it can't be reused
    await User.findByIdAndUpdate(userId,{refreshToken : null});
}

const verifyEmail = async (token)=>{
    const trimmed = String(token).trim();
    if(!trimmed){
        throw ApiError.badRequest("Invalid or expired verification Token");
    }

    const hashedInput = hashToken(trimmed);
    let user = await User.findOne({verificationToken:hashedInput}).select("+verificationToken")

    if(!user) user =  await User.findOne({verificationToken:trimmed}).select("+verificationToken")

    if(!user) throw ApiError.badRequest("Invalid or expired verification Token");

    await User.findByIdAndUpdate(user._id, {
      $set: { isVerified: true },
      $unset: { verificationToken: 1 },
    });

    return user;
}

const forgotPassword = async (email)=>{
    const user = await User.findOne({email});
    if(!user) throw ApiError.notfound("No Account with that Email");
    const {rawToken,hashToken} = generateVerificationToken()

    user.resetPasswordToken = hashToken;
    user.resetPasswordExpires = Date.now() + 15*60*1000;
    await user.save();

    try {
        await sendResetPasswordEmail(email,rawToken);
    } catch (error) {
        console.error("Failed to send reset Email : ",error.message)
    }
}


const resetPassword = async(token,newPassword)=>{
    const hashedToken = hashedToken(token);
    const user = await User.findOne({
        resetPasswordToken:hashedToken,
        resetPasswordExpires:{$gt:Date.now()},
    }).select("+resetPasswordToken +resetPasswordExpires");

    if(!user) throw ApiError.badRequest("invalid or expired resete Token");

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
}

const getMe = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw ApiError.notFound("User not found");
  return user;
};
export {register , login , refresh,logout , verifyEmail , forgotPassword , resetPassword,getMe}