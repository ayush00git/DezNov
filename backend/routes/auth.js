const express = require("express");
const route = express.Router();
const user = require('../models/auth')

route.get('/api/signup', async(req, res) => {
    return res.status(201).send({"success": "signup api working"});
})

route.post('/api/signup', async(req, res) => {
    const { username, fullName, email, password } = req.body;
    try {
        const newUser = await user.create({
            username,
            fullName,
            email,
            password,
        });
        return res.status(201).json({ success: true, user: newUser });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
})

module.exports = route