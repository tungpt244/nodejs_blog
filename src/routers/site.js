const express = require('express');
const router = express.Router(); 
const siteController = require('../app/controllers/SiteController');


router.get('/test-data/search', siteController.search);
router.get('/test-data', siteController.testdata);
router.get('/test-data/:testid', siteController.testid);
router.get('/', siteController.home);

module.exports = router;