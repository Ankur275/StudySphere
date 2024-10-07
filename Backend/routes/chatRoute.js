import express from 'express';
import { createChat, createGroupChat } from '../controllers/chatController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/one-on-one', verifyJWT, createChat);
router.post('/group', verifyJWT, createGroupChat);

export default router;
