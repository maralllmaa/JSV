const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/register', userController.registerUser)
router.get('/users', userController.getUsers)
router.post('/update', userController.updateInfo)
router.post('/deleteUser/:id', userController.deleteUser)


module.exports = router