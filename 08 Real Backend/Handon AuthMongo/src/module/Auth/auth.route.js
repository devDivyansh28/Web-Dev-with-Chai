import { Router } from "express";
import validate from "../../common/middleware/validate.middleware.js";
import RegisterDto from "./dto/register.dto.js";
import * as controller from "./auth.controller.js"
import LoginDto from "./dto/login.dto.js";
import authenticate from "./auth.middleware.js"
import ForgotPasswordDto from "./dto/forgot-password.dto.js";
import ResetPasswordDto from "./dto/reset-password.dto.js";

const router = Router();

router.post("/register",validate(RegisterDto),controller.register)

router.post("/login",validate(LoginDto),controller.login)

router.post("/refresh",authenticate,controller.refresh)

router.post("/logout",authenticate,controller.logout)

router.post("/verify-email/:token",controller.verifyEmail);

router.post("forgot-password",validate(ForgotPasswordDto),controller.forgotPassword);

router.post("reset-password",validate(ResetPasswordDto),controller.resetPassword)

export default router;