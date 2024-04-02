const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    listing_name: { type: [String], required: true },
    price: { type: [Number], required: true }
});

// Export model
module.exports = mongoose.model("Listing", ListingSchema);
