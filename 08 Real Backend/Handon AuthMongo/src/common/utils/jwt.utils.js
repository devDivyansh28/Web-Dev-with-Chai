import jwt from "jsonwebtoken";
import crypto from "crypto"


const generateVerificationToken = ()=>{
    const rawToken = crypto.randomBytes(32).toString("hex");
    const hashToken = crypto.createHash("sha256").update(rawToken).digest("hex")

    return {rawToken , hashToken};
}

const generateAccessToken = (payload)=>{
    return jwt.sign(payload,process.env.JWT_ACCESS_SECRET,{
        expiresIn : process.env.JWT_ACCESS_EXPIRES_IN || "15m"
    })
}
const generateRefreshToken = (payload)=>{
    return jwt.sign(payload,process.env.JWT_REFRESH_SECRET,{
        expiresIn : process.env.JWT_ACCESS_REFRESH_IN || "7d"
    })
}

const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
};

const createHash = (token)=>{
    return crypto.createHash("sha256").update(token).digest("hex")
}

export {generateVerificationToken,generateRefreshToken,generateAccessToken,verifyAccessToken,verifyRefreshToken,createHash};