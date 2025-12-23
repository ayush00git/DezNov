const { randomBytes, createHmac } = require("crypto");

const generateSalt = () => {
    return randomBytes(16).toString("hex");
}

const hashPass = (pass, salt) => {
    return createHmac("sha-256", salt).digest("hex");
}

module.exports = {
    generateSalt,
    hashPass,
}