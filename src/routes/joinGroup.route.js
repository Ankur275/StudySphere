import { Router } from "express";
import { joinGroup } from '../controllers/joinGroup.Controller.js'

const router = Router()

// POST /api/groups/join
router.route('/join').post(joinGroup);

export default router;