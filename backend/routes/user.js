const express = require("express");
const protectedRoute = require("../services/security");
const route = express.Router();

// HomePage GET request
route.get('/', (req, res) => {
    try {
        return res.status(200).json({'msg': 'Backend running file, request receieved on homepage'});
    } catch (error) {
        return res.status(400).json({'err' : 'Client side error probably network issues'});
    }
})

// GET request for Explore Page
route.get('/explore', (req, res) => {
    try {
        // backend functionalities to add - search bar, notifications, profile, projects
        return res.status(200).json({ 'msg': 'Backend running smooth, request received on explore page'});
    } catch (error) {
        return res.status(500).json({'err': 'Backend overloaded, maybe a server-side issue'});
    }
})

// GET request for MyProfile page
route.get('/myProfile', (req, res) => {
    try {
        // profile data will come from database
        return res.status(200).json({ 'msg': 'Profile page loaded success!' });
    } catch (error) {
        return res.status(500).json({ 'err': 'Server overloaded' })
    }
})

// GET requests for chats
route.get('/chats', (req, res) => {
    try {
        // chats from the database
        return res.status(200).json({ 'msg': 'Chats page loaded successfully' });
    } catch (error) {
        return res.status(500).json({ 'err': 'Request failed, server overloaded' });
    }
})

// GET request for upload
route.get('/upload', protectedRoute, (req, res) => {
    try {
        return res.status(200).json({ 'msg': 'Upload page loaded successfully!' })
    } catch (error) {
        return res.status(400).json({ 'err': 'Client side error, maybe due to slow internet' });
    }
})

// GET request for profileSteup
route.get('/profileSetup', (req, res) => {
    try {
        return res.status(200).json({ 'msg': 'create a profile page loaded successfully! ' });
    } catch (error) {
        return res.status(400).json({ 'err': 'Client side error, maybe due to slow internet' });
    }
})

module.exports = route; 