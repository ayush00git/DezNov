const express = require("express");
const route = express.Router();
const Upload = require("../models/upload");

// GET request for upload
route.get('/', (req, res) => {
    try {
        return res.status(200).json({ message: 'Upload page loaded successfully!' })
    } catch (error) {
        return res.status(500).json({ message: `Server error: ${error}` });
    }
})

// POST request for upload
route.post('/new-post', async (req, res) => {
    try {
        const { title, description, category, tags, githubLink, demoLink } = req.body;

        if( !title || !description ){
            return res.status(400).json({ message: 'Title and description are required fields' });
        }
        await Upload.create({
            title,
            description,
            category,
            tags,
            githubLink,
            demoLink,
            createdBy: req.user._id
        })
        return res.status(200).json({ message: 'Uploaded successfully!' })
    } catch (error) {
        return res.status(500).json({ message: `${error}` });
    }
})

route.get('/feed', async (req, res) => {
    try {
        const posts = await Upload.find({}).populate("createdBy", "userName fullName");
        return res.status(200).json({ uploads: posts});
    } catch(error) {
        console.log(`${error}`);
        return res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = route;