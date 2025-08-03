const jwt = require('jwtwebtoken');

const protectedRoute = (req, res, next) => {
    const token = res.cookie('auth-token', token);
    if(!token){
        console.log('expired token');
        return res.status(401).json({ message: 'User not authenticated' });
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_LOGIN_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        console.log(`Error: ${error}`)
        return res.status(401).json({ message: 'Invalid or expired token!' });
    }
}

module.exports = { protectedRoute };