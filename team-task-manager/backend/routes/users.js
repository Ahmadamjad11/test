const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const { getUsers } = require('../controllers/userController');

router.get('/', authMiddleware, adminMiddleware, getUsers);

module.exports = router;
