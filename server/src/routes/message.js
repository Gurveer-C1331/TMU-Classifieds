const express = require('express');
const router = express.Router();

//Controller modules.
const message_controller = require('../controllers/messageController');

/* GET all Listing. */
router.put('/post', message_controller.postMessage);
router.get('/get', message_controller.getMessage);


module.exports = router;