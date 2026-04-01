import User from "./auth.model.js"
import ApiError from "../../common/utils/api.error.js"
import { generateVerificationToken } from "../../common/utils/jwt.utils.js"
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