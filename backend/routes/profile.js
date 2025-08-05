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

route.post('/profileSetup', async(req, res) => {
    try {

        const { userName, fullName, title, email, aboutText, github, linkedin, portfolio } = req.body;

        const user = await User.findOne({ email });

        if( !userName || !fullName || !title || !email || !aboutText ){
            return res.status(400).json({ message: 'Username, fullname, title, email and about Me are the required fields, please fill them before creating a profile' })
        }

        await Profile.create({
        userName,
        fullName,
        title,
        email,
        aboutText,
        github,
        linkedin,
        portfolio,
    })
    } catch (error) {
        
    }
    
})

module.exports = route;