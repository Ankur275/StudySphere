import express from "express"
import router from express.Router()
const { updateProfile } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

// Route to update user profile
router.put('/profile', protect, updateProfile);

module.exports = router;