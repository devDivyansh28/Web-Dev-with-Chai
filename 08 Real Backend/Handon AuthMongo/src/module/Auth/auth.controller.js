import * as authservice from "./auth.service.js"
import ApiResponse from "../../common/utils/api.response.js"

const register = async (req,res)=>{
    const user = await authservice.register(req.body);
    ApiResponse.created(
        res,
        "Registraion successfull. Please Verify your Email.",
        user
    )
}

export {register}