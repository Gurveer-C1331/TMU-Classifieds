const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message_id: { type: [Number], required: true },
    sender_id: { type: [Number], required: true },
    receiver_id: { type: [Number], required: true },
    ad_id: { type: [Number], required: true },
    message_text: { type: [String], required: true },
    date_sent: { type: [Date], required: true }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;