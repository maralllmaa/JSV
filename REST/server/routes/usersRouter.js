const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.post('/register', userController.registerUser);
router.get('/allUsers', userController.getAllUsers);
router.post('/updateUser/:id', userController.updateUser);
router.get('singleUser/:id', userController.singleUser);

module.exports = router;