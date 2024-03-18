const express = require('express');
const router = express.Router();

//Controller modules.
const listing_controller = require('../controllers/listingController');

/* GET all Listing. */
router.get('/', listing_controller.allListings_get);

module.exports = router;
