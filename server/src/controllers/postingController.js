const User = require('../models/userModel');
const postAd = require('../models/adModel');

const asyncHandler = require("express-async-handler");

// Register
exports.postAd = asyncHandler(async (req, res) => {
  try {
    const category = req.params.category;
    const title = req.params.title;
    const description = req.params.description;
    const price = req.params.price;
    const location = req.params.location;
    const newPost = new postAd({
        userId: 3,
        adId: 3,
        category: category,
        adName: title,
        description: description,
        price: price,
        datePosted: 3,
        location: location,
        image: 3
      })
      await newPost.save();
    res.status(201).json({message: "successful"})
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
