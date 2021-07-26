const express = require('express');
const router = express.Router(); 
const controller = require('../controller/test.controller');

router.get('/test-data', controller);

module.exports = router;