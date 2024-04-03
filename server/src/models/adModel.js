const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    adId: { type: [Number], required: true },
    category: { type: [String], required: true },
    adName: { type: [String], required: true },
    description: { type: [String], required: true },
    price: { type: [Number], required: true },
    datePosted: { type: [Date], required: true },
    location: { type: [String], required: true },
    image: { type: [String], required: true }
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;
