const adModel = require('../models/adModel');
const userModel = require('../models/userModel');

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.allListings_get = asyncHandler(async (req, res, next) =>
{
    try
    {
        const listings = await adModel.find({});
        res.json(listings);
    } catch (err)
    {
        console.log(err);
        res.status(500).send({ error: "Error occurred retrieving listings." });
    }
});

exports.allUsers_get = asyncHandler(async (req, res, next) =>
{
    try
    {
        const users = await userModel.find({});
        res.json(users);
    } catch (err)
    {
        console.log(err);
        res.status(500).send({ error: "Error occurred retrieving users." });
    }
});