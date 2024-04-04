const User = require('../models/userModel');

const asyncHandler = require("express-async-handler");

/*
exports.registerUser = asyncHandler(async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

*/

exports.registerUser = asyncHandler(async (req, res, next) =>
{
    const uname = req.params.username;
    const fname = req.params.firstName;
    const lname = req.params.lastName;
    const gender = req.params.sex;
    const addr = req.params.homeAddress;
    const dob = req.params.DOB;
    const phone = req.params.phoneNumber;
    const email = req.params.email;
    const password = req.params.password;

    console.log("commit")
    try
    {
      /*
        console.log("commit")
        await userModel.save(
            {
                    username: "andre.simoes",
                    firstName: "fname",
                    lastName: "lname",
                    sex: "M",
                    homeAddress: "addr",
                    DOB: new Date(),
                    phoneNumber: 647,
                    email: "email",
                    password: "password",
                    is_admin: false
            })
        return;
        */
        const newuser = new User(
          {
            username: uname,
            firstName: fname,
            lastName: lname,
            sex: gender,
            homeAddress: addr,
            DOB: dob,
            phoneNumber: phone,
            email: email,
            password: password,
            is_admin: false
          })
        await newuser.save()
        res.status(201).json({message: "successful"})
  
    } catch (err)
    {
        console.log(err);
        res.status(569).send({ error: "Error occurred adding use." });
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
  res.cookie('user_id', user.userId);
  res.cookie('username',user.username);
  res.cookie('is_admin', user.is_admin);

  res.status(200).json(user);
});

exports.currentUser = asyncHandler(async (req, res) => {

  const username = req.cookies.username;

  res.status(200).json(username)
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
