import { Router } from "express";
const { joinGroup } = require('../controllers/joinGroup.Controller');

const router = Router()

// POST /api/groups/join
router.route('/join').post(joinGroup);

export default router;