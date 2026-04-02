import { Router } from "express";
import validate from "../../common/middleware/validate.middleware.js";
import RegisterDto from "./dto/register.dto.js";
import * as controller from "./auth.controller.js"
import LoginDto from "./dto/login.dto.js";
import authenticate from "./auth.middleware.js"

const router = Router();

router.post("/register",validate(RegisterDto),controller.register)

router.post("/login",validate(LoginDto),controller.login)

router.post("/refresh",authenticate,controller.refresh)

export default router;