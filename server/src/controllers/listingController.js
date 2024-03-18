const Listing = require('../models/listing');

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Return all listings.
exports.allListings_get = asyncHandler(async (req, res, next) => {
    try {
        const listings = await Listing.find({});
        res.json(listings);
      } catch (err) {
        console.log(err);
        res.status(500).send({error: "Error occurred retrieving listings."});
      }
});
