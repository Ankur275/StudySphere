import express from 'express';
import { login, logout, refreshToken, register, resetPassword, resetPasswordRequest } from '../controllers/userController.js';
import { verifyJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.route('/register').post( register );
router.route('/login').post( login );
router.route('/refresh').post( refreshToken );
router.route('/resetPasswordRequest').post(resetPasswordRequest)
router.route('/resetPassword/:resetToken').post(resetPassword)
router.route('/logout').post(verifyJWT, logout)

export default router;