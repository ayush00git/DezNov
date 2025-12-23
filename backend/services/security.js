const jwt = require('jsonwebtoken'); 
const User = require("../models/auth");
const protectedRoute = async(req, res, next) => {
    const token = req.cookies['auth-token'];
    if(!token){
        return res.status(401).json({ message: 'User not authenticated' });
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_LOGIN_SECRET);
        const user = await User.findById(payload.userId);
        if (!user) return res.status(401).json({ message: 'User not found' });
        req.user = payload;
        next();
    } catch (error) {
        console.log(`Error: ${error}`)
        return res.status(401).json({ message: 'Invalid or expired token!' });
    }
}

module.exports = { protectedRoute };