const User = require('../models/userModel');
const postAd = require('../models/adModel');

const asyncHandler = require("express-async-handler");

// Register
exports.postAd = asyncHandler(async (req, res) => {
  try {
    const category = req.body.category;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const location = req.body.location;
    const user = await User.findOne({ username: req.body.user[0] });

    const newPost = new postAd({
        userId: user.userId,
        adId: 3,
        category: category,
        adName: title,
        description: description,
        price: price,
        datePosted: new Date(),
        location: location,
        image: ''
      })
      await newPost.save();
    res.status(201).json({message: "successful"})
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//