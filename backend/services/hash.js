const { randomBytes, createHmac } = require("crypto");

const generateSalt = () => {
    return randomBytes(16).toString("hex");
}

const hashPass = (pass, salt) => {
    const hash = createHmac("sha-256", salt);
    hash.update(pass);
    return hash.digest("hex");
}

module.exports = {
    generateSalt,
    hashPass,
}