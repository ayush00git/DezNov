const mongoose = require('mongoose');
const { randomBytes, createHmac } = require('crypto');

// User Schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    salt: {
        type: String
    },

    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },

}, {timestamps: true})

// defining the model
const User = mongoose.model("users", userSchema);

module.exports = User;