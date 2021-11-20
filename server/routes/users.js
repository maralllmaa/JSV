const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/register', userController.registerUser)
router.get('/users', userController.getUsers)


module.exports = router