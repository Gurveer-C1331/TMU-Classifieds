const express = require('express');
const router = express.Router();

//Controller modules.
const listing_controller = require('../controllers/listingController');

/* GET all Listing. */
router.get('/', listing_controller.allListings_get);

/* GET a Listing Item. */
router.get('/:id', listing_controller.listingItem_get);

module.exports = router;
