const mongoose = require('mongoose');
const { randomBytes, createHmac } = require('crypto');
const { type } = require('os');
const { resolve } = require('path');

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

userSchema.pre("save", function(next) {
    if(!this.isModified("password")) return next();

    const salt = randomBytes(16).toString("hex");
    const hashedPassword =  createHmac("sha-256", salt).update(this.password).digest("hex");
    
    this.password = hashedPassword;
    this.salt = salt;
    next();

})

// userSchema.methods.validatePassword = function(inputPass) {
//     return new Promise((resolve) => {
//         const hashedPassword = createHmac("sha-256", this.salt).update(inputPass).digest("hex");
//         resolve(hashedPassword === this.password);
//     });
// }

userSchema.methods.validatePassword = function(inputPass) {
    const hashedPassword = createHmac("sha-256", this.salt).update(inputPass).digest("hex");
    return (hashedPassword === this.password);
}


// defining the model
const User = mongoose.model("user", userSchema);

module.exports = User;