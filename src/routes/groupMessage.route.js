import { Router } from "express";
import { createGroup, sendMessage, fetchMessages } from "../controllers/groupMessage.Controller.js";

const router = Router()
// POST /api/messages
router.route('/').post(createGroup)

router.route('/grpupId:id/messages').post(sendMessage)

router.route("/gropuId:id/messages").get(fetchMessages)

export default router
