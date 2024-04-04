const User = require('../models/userModel');
const postAd = require('../models/adModel');

const asyncHandler = require("express-async-handler");

// Register
exports.postAd = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const category = req.params.category;
    const title = req.params.title;
    const description = req.params.description;
    const price = req.params.price;
    const location = req.params.location;
    await postAd.insertMany({
        sender_id: id,
        category: category,
        adName: title,
        description: description,
        price: price,
        location: location
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
