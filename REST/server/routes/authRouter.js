const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

router.post('/login', authController.userLogin)

module.exports = router;


// websocket, socket io
// graphQL
// React