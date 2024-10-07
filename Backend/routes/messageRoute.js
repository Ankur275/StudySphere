import express from 'express';
import { sendMessage, getAllMessages } from '../controllers/messageController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', verifyJWT, sendMessage);
router.get('/:chatId', verifyJWT, getAllMessages);

export default router;
