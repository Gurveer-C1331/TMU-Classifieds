const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: [Number], required: true },
  username: { type: [String], required: true },
  firstName: { type: [String], required: true },
  lastName: { type: [String], required: true },
  sex: { type: [String], required: true },
  homeAddress: { type: [String], required: true },
  DOB: { type: [Date], required: true },
  phoneNumber: { type: [Number], required: true },
  email: { type: [String], required: true },
  password: { type: [String], required: true },
  is_admin: { type: [Boolean], required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
