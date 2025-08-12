const express = require("express");
const mongoose = require("mongoose");
const Profile = require("../models/profile");
const route = express.Router();
const User = require('../models/user');
const { protectedRoute } = require("../services/security");


// GET request for profileSetup
route.get('/profileSetup', (req, res) => {
    try {
        return res.status(200).json({ message: 'Setting up a profile (page loaded)' });
    } catch (error) {
        return res.status(400).json({ message: `Error: ${error}` });
    }
})

// POST request for profileSetup
route.post('/profileSetup', protectedRoute, async(req, res) => {
    try {
        // Get user id from req.user (set by protectedRoute)
        const createdBy = req.user._id;
        const { title, aboutText, github, linkedin, portfolio } = req.body;
        console.log("createdBy:", createdBy);
        await Profile.create({
            title,
            aboutText,
            github,
            linkedin,
            portfolio,
            createdBy
        });
        return res.status(200).json({ message: 'Profile information saved' });
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error}` })
    }
})


module.exports = route;