import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { updateUser } from "../controllers/updateProfile.Controller.js";

const router = Router()

router.route("/updateProfile").patch(verifyJWT,updateUser)

export default router