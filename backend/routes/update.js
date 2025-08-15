const express = require('express');
const route = express.Router();
const { protectedRoute } = require('../services/security');
const Update = require('../models/update');

// POST request for showing updates on the website, only allowed for admins
route.post('/we_are_admins', protectedRoute, async (req, res) => {
    try {
        const { title } = req.body;

        if( !title ){
            return res.status(201).json({ message: 'Update cannot be sent empty' });
        }

        await Update.create({
            title,
            createdBy: req.user.userId,
        })
        return res.status(200).json({ message: 'Update pushed on the website' });
    } catch (error) {
        return res.status(500).json({ message: `Error occured: ${error}` });
    }
})

module.exports = route;