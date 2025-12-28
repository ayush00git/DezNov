const jwt = require('jsonwebtoken'); 
const User = require("../models/auth");

const protectedRoute = async(req, res, next) => {
    const token = res.cookies?.auth_token;
    if(!token){
        return res.status(401).json({ message: 'User not authenticated' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_LOGIN_SECRET);  // token has a payload _id(userId) and email
 
        const user = await User.findById({ _id: decoded.userId });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        
        req.user = user;
        next();
    } catch (error) {
        console.log(`Error: ${error}`)
        return res.status(401).json({ message: 'Invalid or expired token!' });
    }
}

module.exports = { protectedRoute };