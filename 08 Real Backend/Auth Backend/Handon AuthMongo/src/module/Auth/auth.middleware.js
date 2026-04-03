import ApiError from "../../common/utils/api.error.js";
import { verifyRefreshToken } from "../../common/utils/jwt.utils.js";
import User from "./auth.model.js"
import hashToken from "../../common/utils/jwt.utils.js"

const authenticate = async (req,res,next)=>{
    let token;

    token = req.headers.authorization.split(" ")[1];
    if(!token) throw ApiError.unauthorized("Not Authenticated")

    const decoded = verifyRefreshToken(token);
    const user = await User.findById(decoded.id)

    if(!user) throw ApiError.unauthorized("User No longer Exists")
    
    req.user = {
        id:user_id,
        role:user.role,
        name:user.name,
        email:user.email
    };

    next();

}

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw ApiError.forbidden(
        "You do not have permission to perform this action",
      );
    }
    next();
  };
};

export {authenticate , authorize}