const User = require('./userModel');

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
  res.status(200).json(user);

  res.cookie('user_id', user._id);
  res.cookie('is_admin', user.is_admin);
});
