import ApiError from "../utils/api.error.js";

const validate = (dtoclass)=>{
    return (req,res,next)=>{
        const {errors,value}= dtoclass.validate(req.body)
        if(errors){
            throw ApiError.badRequest(errors.join("; "))
        }
        req.body = value
        next()
    }
}

export default validate