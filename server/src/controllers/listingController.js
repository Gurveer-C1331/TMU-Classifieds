const Listing = require('../models/listing');

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const testData = [
  {id: 1, listing_title: 'Dune: Part Two poster', image: '', listing_type: 'Item for sale', location: 'Toronto, ON', price: 20, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', listing_user: {first_name: 'John', last_name: 'Doe'}},
  {id: 2, listing_title: 'MTH110 tutoring', image: '', listing_type: 'Academic service', location: 'Toronto, ON', price: 10, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', listing_user: {first_name: 'Jane', last_name: 'Doe'}},
  {id: 3, listing_title: 'PS3 controller', image: '', listing_type: 'Item for sale', location: 'Toronto, ON', price: 9.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', listing_user: {first_name: 'Nick', last_name: 'Doe'}},
  {id: 4, listing_title: 'Two pears', image: '', listing_type: 'Item for sale', location: 'Toronto, ON', price: 5.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', listing_user: {first_name: 'Mike', last_name: 'Doe'}},
  {id: 5, listing_title: 'Oppenheimer IMAX poster', image: '', listing_type: 'Item wanted', location: 'Toronto, ON', price: null, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', listing_user: {first_name: 'Cassie', last_name: 'Doe'}},
  {id: 6, listing_title: '24in monitor', image: '', listing_type: 'Item for sale', location: 'Toronto, ON', price: 80, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', listing_user: {first_name: 'Sabrina', last_name: 'Doe'}},
  {id: 7, listing_title: 'CPS109 textbook', image: '', listing_type: 'Item wanted', location: 'Toronto, ON', price: null, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', listing_user: {first_name: 'Jonathan', last_name: 'Doe'}},
  {id: 8, listing_title: 'CPS209 extra help', image: '', listing_type: 'Academic service', location: 'Toronto, ON', price: 12, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', listing_user: {first_name: 'Bryan', last_name: 'Doe'}},
]

// Return all listings.
exports.allListings_get = asyncHandler(async (req, res, next) => {

  res.json(testData);
  // try {
  //   const listings = await Listing.find({});
  //   res.json(listings);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send({error: "Error occurred retrieving listings."});
  // }
});

//Return a listing item
exports.listingItem_get = asyncHandler(async (req, res, next) => {

  const listingId = req.params.id;
  testData.map((listing) => {
    if (listing.id == listingId) {
      res.json(listing);
    }
  });
});
