const User = require('../models/userModel');
const Message = require('../models/messageModel');

const asyncHandler = require("express-async-handler");

// Register
exports.postMessage = asyncHandler(async (req, res) => {
  try {
    const message = req.body.message;
    const user = await User.findOne({ username: req.body.user[0] });

    const newMessage = new Message({
        message_id: 3,
        sender_id : user.userId,
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
        const users = {};
        (await User.find({})).forEach(user => {
          users[user.userId] = user.username;
        });
        
        const response = [];
        messages.forEach(message => {
          response.push({
            content: message,
            user: users[message.sender_id]
          });
        });
        res.json(response);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


