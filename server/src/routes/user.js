const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/register/:username-:firstName-:lastName-:sex-:homeAddress-:DOB-:phoneNumber-:email-:password-:is_admin', userController.registerUser);
router.get('/login/:username-:password', userController.loginUser);
router.get('/isSignedIn', userController.isSignedIn);
router.get('/isAdmin', userController.isAdmin);

module.exports = router;
