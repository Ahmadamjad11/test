const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const { register, login } = require('../controllers/authController');

router.post('/register', authMiddleware, adminMiddleware, register);
router.post('/login', login);

module.exports = router;
