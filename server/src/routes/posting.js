const express = require('express');
const router = express.Router();

//Controller modules.
const posting_controller = require('../controllers/postingController');

/* GET all Listing. */
router.get('/post/:category-:title-:description-:price-:location', posting_controller.postAd);


module.exports = router;