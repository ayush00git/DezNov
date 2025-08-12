const express = require("express");
const mongoose = require("mongoose");
const Profile = require("../models/profile");
const route = express.Router();
const User = require('../models/user');


// GET request for profileSetup
route.get('/profileSetup', (req, res) => {
    try {
        return res.status(200).json({ message: 'Setting up a profile (page loaded)' });
    } catch (error) {
        return res.status(400).json({ message: `Error: ${error}` });
    }
})

// POST request for profileSetup
route.post('/profileSetup', async(req, res) => {
    try {

        const { userName, fullName, email } = req.user;
        const { title, aboutText, github, linkedin, portfolio } = req.body;

        await Profile.create({
            userName,
            fullName,
            email,
            title, 
            aboutText,
            github,
            linkedin,
            portfolio,
        })
        return res.status(200).json({ message: 'Profile information get in' });
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error}` })
    }
})


module.exports = route;