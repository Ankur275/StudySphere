import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { resetPassword } from "../controllers/resetPass.Controller.js";

const router = Router()

router.route("/resetPassowrd").patch(verifyJWT,resetPassword)

export default router