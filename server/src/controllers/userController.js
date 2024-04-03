const User = require('../models/userModel');

const asyncHandler = require("express-async-handler");

// Register
exports.registerUser = asyncHandler(async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.cookie('user_id', user._id);
  res.cookie('is_admin', user.is_admin);

  res.status(200).json(user);
});

// Check user is signed in
exports.isSignedIn = asyncHandler(async (req, res) => {

  const userId = req.cookies.user_id;

  if (userId) {
    res.status(200).send({message: 'Unauthorized'});
  }
  else {
    res.status(401).send({message: 'Unauthorized'});
  }
});

// Check user is an admin user
exports.isAdmin = asyncHandler(async (req, res) => {

  const isAdmin = req.cookies.is_admin === true;

  if (isAdmin) {
    res.status(200).send({message: 'Authorized'});
  }
  else {
    res.status(401).send({message: 'Unauthorized'});
  }
});
