import { Router } from "express";
// import { verifyJWT } from "../middleware/auth.middleware.js";
import { loginUser } from "../controllers/login.Controller.js";

const router = Router()

router.route("/login").post(loginUser)

export default router