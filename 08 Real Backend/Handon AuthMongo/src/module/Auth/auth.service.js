import User from "./auth.model.js"
import ApiError from "../../common/utils/api.error.js"
import { generateVerificationToken ,generateAccessToken,generateRefreshToken , createHash , verifyRefreshToken} from "../../common/utils/jwt.utils.js"
import { sendVerificationEmail } from "../../common/config/email.js"



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

export {register , login , refresh}