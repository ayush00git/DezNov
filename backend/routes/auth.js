const express = require('express');
const User = require("../models/user");

const route = express.Router();

// GET requests for signup page
route.get('/signup', (req, res) => {
    try {
        return res.status(200).json({ 'msg': 'Signup page loaded successfully' });
    } catch (error) {
        return res.status(400).json({ 'err': 'Error signup page not loaded' });
    }
})

// GET requests for login page
route.get('/login', (req, res) => {
    try {
        return res.status(200).json({ 'msg': 'Login page loaded successfully' });
    } catch (error) {
        return res.status(400).json({ 'err': 'Error login page not loaded' });
    }
})

// POST request for singup route
route.post('/signup', async(req, res) => {
    try {
        const { fullName, userName, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(409).json({ message: 'User already exists, login first!' });
        }

        await User.create({
        fullName,
        userName,
        email,
        password,
    });
    return res.status(200).json({ message: 'Email sent for verification, data sent to mongoDB' });

    } catch (error) {
        return res.status(500).json({ message: 'Error in creating the user' });
    }
})




module.exports = route;