const User = require('../models/userModel');
const Message = require('../models/messageModel');

const asyncHandler = require("express-async-handler");

// Register
exports.postMessage = asyncHandler(async (req, res) => {
  try {
    const message = req.params.msg;
    const newMessage = new Message({
        message_id: 3,
        sender_id : 3,
        receiver_id: 3,
        ad_id: 3,
        message_text : message,
        date_sent: new Date()
    })
    await newMessage.save();
    res.status(201).json({message: "successful"})
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


