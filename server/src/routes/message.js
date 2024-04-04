const express = require('express');
const router = express.Router();

//Controller modules.
const message_controller = require('../controllers/messageController');

/* GET all Listing. */
router.get('/post/:msg', message_controller.postMessage);
router.get('/post/get', message_controller.getMessage);


module.exports = router;