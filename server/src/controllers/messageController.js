const User = require('../models/userModel');
const Message = require('../models/messageModel');

const asyncHandler = require("express-async-handler");

// Register
exports.postMessage = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const message = req.params.msg;
    await Message.insertMany({
        sender_id: id,
        message_text: message
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

exports.getMessage = asyncHandler(async (req, res) => {
    try {
        const messages = await Message.find({});
        res.json(messages);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


