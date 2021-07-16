const express = require('express');
const router = express.Router(); 

const userController = require('../app/controllers/UserController');

router.get('/login', userController.login);

router.post('/login', userController.loginpost);

module.exports = router;