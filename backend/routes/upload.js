const express = require("express");
const route = express.Router();
const { protectedRoute } = require('../services/security');
const Upload = require("../models/upload");
// GET request for upload
route.get('/upload', protectedRoute, (req, res) => {
    try {
        return res.status(200).json({ message: 'Upload page loaded successfully!' })
    } catch (error) {
        return res.status(500).json({ message: `Server error: ${error}` });
    }
})

// POST request for upload
route.post('/upload', protectedRoute, async (req, res) => {
    try {

        const { title, description, category, tags, githubLink, demoLink } = req.body;

        if( !title || !description || !category ){
            return res.status(400).json({ message: 'Title, description and category are required fields' });
        }
        // const createdBy = req.user._id;
        await Upload.create({
            title,
            description,
            category,
            tags,
            githubLink,
            demoLink,
            createdBy: req.user.userId
        })
        return res.status(200).json({ message: 'Uploaded successfully!' })
    } catch (error) {
        return res.status(500).json({ message: `${error}` });
    }
})

module.exports = route;