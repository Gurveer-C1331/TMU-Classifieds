const Ad = require('../models/adModel');
const Category = require('../models/categoryModel');
const User = require('../models/userModel');

const asyncHandler = require("express-async-handler");

// Return all listings.
exports.allListings_get = asyncHandler(async (req, res, next) => {

  //retrieve url params
  const categories = {
    'wanted': 'items_wanted',
    'forSale': 'items_for_sale',
    'academicService': 'academic_services'};
  const searchParams = req.params.search === 'null' ? '' : req.params.search;
  const categoryParams = req.params.category === 'null' ? [] : req.params.category.split(',');
  const categoryFilter = [];
  const priceParams = {
    min: req.params.minPrice === 'null' ? 0 : parseInt(req.params.minPrice),
    max: req.params.maxPrice === 'null' ? 100000 : parseInt(req.params.maxPrice)
  };
  const page = req.params.page === 'null' ? 1 : req.params.page;
  const maxItemsPerPage = 20;

  categoryParams.forEach(category => {
    categoryFilter.push(categories[category])
  });

  //build queries based on url params
  let query = {}
  if (priceParams.min == 0) {
    query = { $or: [{price: {$eq: null}}, {price: { $lte: priceParams.max }}]};
  }
  else {
    query.price = { $gte: priceParams.min, $lte: priceParams.max};
  }
  if (categoryFilter.length != 0) {
    query.category = { $in: categoryFilter };
  }
  query.adName = {$regex: searchParams, $options: 'i'};

  try {
    const ads = await Ad.find(query).skip(maxItemsPerPage * (page - 1)).limit(maxItemsPerPage);
    const totalAds = await Ad.find(query).count();
    const categories = await Category.find({ });
    const categoryObj = {};
    
    categories.forEach(category => {
      categoryObj[category.category_id] = category.category_type[0]
    });
 
    const response = []
    ads.forEach(ad => {
      response.push({
        ad,
        category: categoryObj[ad.category[0]]
      });
    });

    res.json({count: totalAds, ads: response});
  } catch (err) {
    console.log(err);
    res.status(500).send({error: "Error occurred retrieving the ad."});
  }
});

//Return a listing item
exports.listingItem_get = asyncHandler(async (req, res, next) => {

  const listingId = req.params.id;

  try {
    const ad = await Ad.findOne({ _id: listingId });
    const category = await Category.findOne({ category_id: ad.category[0] });
    const user = await User.findOne({ userId: ad.userId[0] }, 'username');
    res.json({ad, category: category.category_type, user});
  } catch (err) {
    console.log(err);
    res.status(500).send({error: "Error occurred retrieving the ad."});
  }
});

//Delete a listing item
exports.listingItem_delete = asyncHandler(async (req, res, next) => {

  const listingId = req.params.id;

  try {
    const ad = await Ad.deleteOne({ _id: listingId });
    res.status(200).send({message: "Ad " + listingId + " was deleted successfully."});
  } catch (err) {
    console.log(err);
    res.status(500).send({error: "Error occurred deleting the ad."});
  }
});
