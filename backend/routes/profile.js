const express = require("express");
const mongoose = require("mongoose");
const Profile = require("../models/profile");
const route = express.Router();
const User = require('../models/user');


// GET request for profileSteup
route.get('/profileSetup', (req, res) => {
    try {
        return res.status(200).json({ message: 'Setting up a profile (page loaded)' });
    } catch (error) {
        return res.status(400).json({ message: `Error: ${error}` });
    }
})


module.exports = route;