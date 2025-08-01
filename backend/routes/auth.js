const express = require('express');

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



module.exports = route;