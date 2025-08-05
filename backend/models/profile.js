const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
    },

    fullName: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    aboutText: {
        type: String,
        required: true,
    },

    github: {
        type: String,
        required: true,
    },

    linkedin: {
        type: String,
        required: true,
    },

    portfolio: {
        type: String,
        required: true,
    },

    profilePicURL : {
        type: String,
        required: true,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }


}, { timestamps: true });

const Profile = mongoose.model('profiles', profileSchema);
module.exports = Profile;