const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/register/:username-:firstName-:lastName-:sex-:homeAddress-:DOB-:phoneNumber-:email-:password-:is_admin', userController.registerUser);
router.get('/login/:username-:password', userController.loginUser);
router.get('/isSignedIn/:user', userController.isSignedIn);
router.get('/isAdmin/:user', userController.isAdmin);
router.get('/currentUser/:user', userController.currentUser);

module.exports = router;
