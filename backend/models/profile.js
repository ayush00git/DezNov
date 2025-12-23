const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({

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
        unique: true,
    }


}, { timestamps: true });

const Profile = mongoose.model('profiles', profileSchema);
module.exports = Profile;