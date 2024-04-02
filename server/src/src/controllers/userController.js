const User = require('../models/user');

const asyncHandler = require("express-async-handler");

const registerUser = async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      console.log('User registered successfully')
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  
  module.exports = {
    registerUser,
  };