const express = require("express");
const { protectedRoute } = require("../services/security");
const route = express.Router();

// HomePage GET request
route.get('/', (req, res) => {
    try {
        return res.status(200).json({message: 'Backend running file, request receieved on homepage'});
    } catch (error) {
        return res.status(400).json({message : `Error: ${error}`});
    }
})

// GET request for Explore Page
route.get('/explore', (req, res) => {
    try {
        // backend functionalities to add - search bar, notifications, profile, projects
        return res.status(200).json({ message: 'Backend running smooth, request received on explore page'});
    } catch (error) {
        return res.status(500).json({message: `Error: ${error}`});
    }
})

// GET requests for chats
route.get('/chats', (req, res) => {
    try {
        // chats from the database
        return res.status(200).json({ message: 'Chats page loaded successfully' });
    } catch (error) {
        return res.status(500).json({ message: `Request failed: ${error}` });
    }
})



module.exports = route; 