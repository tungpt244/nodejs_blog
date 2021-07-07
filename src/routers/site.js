const express = require('express');
const router = express.Router(); 

const siteController = require('../app/controllers/SiteController');


router.get('/search', siteController.search);

router.get('/', siteController.home);

router.post('/search', siteController.searchp);

module.exports = router;