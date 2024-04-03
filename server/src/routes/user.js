const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/isSignedIn', userController.isSignedIn);
router.get('/isAdmin', userController.isAdmin);

module.exports = router;
