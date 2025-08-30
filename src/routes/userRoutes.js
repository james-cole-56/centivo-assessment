const express = require('express');
const router = express.Router();
const { getUserById } = require('../controllers/userController');

// GET user by ID route
router.get('/:id', getUserById);

module.exports = router;
