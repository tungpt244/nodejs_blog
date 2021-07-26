const express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads/' })
const router = express.Router(); 
const userController = require('../app/controllers/UserController');


router.get('/login', userController.login);

router.post('/login', userController.loginpost);

router.get('/create', userController.create);

router.post('/create', upload.single('avatar'), userController.postCreate);

module.exports = router;