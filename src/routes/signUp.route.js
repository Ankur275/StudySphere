import { Router } from "express";
// import { verifyJWT } from "../middleware/auth.middleware.js";
import { registerUser } from "../controllers/signUp.Controllers.js";

const router = Router()

router.route("/register").post(registerUser)

export default router