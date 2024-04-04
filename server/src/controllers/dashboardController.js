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

exports.updateUser = asyncHandler(async (req, res, next) =>
{
    const uname = req.params.uname;
    const fname = req.params.fname;
    const lname = req.params.lname;
    const gender = req.params.gender;
    const email = req.params.email;
    const phone = req.params.phone;
    const addr = req.params.addr;
    const dob = req.params.dob;

    try
    {
        await userModel.updateOne({ "email": email },
            {
                $set:
                {
                    username: uname,
                    firstName: fname,
                    lastName: lname,
                    sex: gender,
                    homeAddress: addr,
                    DOB: dob,
                    phoneNumber: phone,
                    email: email
                }
            })
        return;
    } catch (err)
    {
        console.log(err);
        res.status(500).send({ error: "Error occurred retrieving users." });
    }
});

exports.deleteUser = asyncHandler(async (req, res, next) =>
{
    const id = req.params.id;

    try
    {
        await userModel.deleteOne({ "email": id });
    } catch (err)
    {
        console.log(err);
        res.status(500).send({ error: "Error occurred retrieving users." });
    }
});