const express = require('express');
const router = express.Router();

//Controller modules.
const dashboard_controller = require('../controllers/dashboardController');

/* GET all Listing. */
router.get('/', dashboard_controller.allListings_get);
router.get('/users', dashboard_controller.allUsers_get);

module.exports = router;
