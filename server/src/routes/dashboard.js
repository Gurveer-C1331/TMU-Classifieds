const express = require('express');
const router = express.Router();

//Controller modules.
const dashboard_controller = require('../controllers/dashboardController');

/* GET all Listing. */
router.get('/', dashboard_controller.allListings_get);
router.get('/users', dashboard_controller.allUsers_get);
router.get('/users/update/:uname-:fname-:lname-:gender-:email-:phone-:addr-:dob', dashboard_controller.updateUser);
router.get('/users/delete/:id', dashboard_controller.deleteUser);

module.exports = router;
