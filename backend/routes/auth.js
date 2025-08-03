const express = require('express');
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const route = express.Router();

// GET requests for signup page
route.get('/signup', (req, res) => {
    try {
        return res.status(200).json({ 'msg': 'Signup page loaded successfully' });
    } catch (error) {
        return res.status(400).json({ 'err': 'Error signup page not loaded' });
    }
})

// GET requests for login page
route.get('/login', (req, res) => {
    try {
        return res.status(200).json({ 'msg': 'Login page loaded successfully' });
    } catch (error) {
        return res.status(400).json({ 'err': 'Error login page not loaded' });
    }
})

// POST request for singup route
route.post('/signup', async(req, res) => {
    try {
        const { fullName, userName, email, password } = req.body;

        if( !fullName || !userName || !email || !password ){
            return res.status(400).json({ message: 'All fields are required' });
        }

        if(!email.endsWith("@nith.ac.in")){
            return res.status(400).json({ message: 'Enter you NITH email, rest emails are not valid for registration' });
        }

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(409).json({ message: 'User already exists, login first!' });
        }

        
        // temp token for email verification
        const token = jwt.sign(
            { fullName, userName, email, password },
            process.env.EMAIL_SECRET,
            { expiresIn: '10m' }
        );
        // creating a transporter
        const verificationURL = `http://localhost:8000/auth/verify-email?token=${token}`;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // send email
        await transporter.sendMail({
            from: `"DezNov Team" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "🚀 Welcome to DezNov - Verify Your Account",
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; background-color: #0D0E11; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #1A1B23; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                    
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #2A9F8D 0%, #3DD3BC 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 32px; font-weight: bold; letter-spacing: -1px;">DezNov</h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">Welcome to the future</p>
                    </div>

                    <!-- Content -->
                    <div style="padding: 40px 30px;">
                    <h2 style="color: #FFFFFF; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">Hey ${fullName || userName}! 👋</h2>
                    
                    <p style="color: #B0B3B8; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                        You're just one click away from joining the DezNov community. Let's get your account verified and ready to go!
                    </p>

                    <!-- CTA Button -->
                    <div style="text-align: center; margin: 40px 0;">
                        <a href="${verificationURL}" 
                        style="display: inline-block; background: linear-gradient(135deg, #2A9F8D 0%, #3DD3BC 100%); 
                                color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; 
                                font-weight: 600; font-size: 16px; transition: all 0.3s ease;
                                box-shadow: 0 4px 15px rgba(42, 159, 141, 0.3);">
                        ✨ Verify My Account
                        </a>
                    </div>

                    <div style="background-color: #2A2D37; border-radius: 8px; padding: 20px; margin: 30px 0;">
                        <p style="color: #8B949E; font-size: 14px; margin: 0; text-align: center;">
                        <strong style="color: #F79009;">⚡ Quick verification link:</strong><br>
                        <a href="${verificationURL}" style="color: #2A9F8D; text-decoration: none; word-break: break-all; font-size: 13px;">
                            ${verificationURL}
                        </a>
                        </p>
                    </div>

                    <!-- Security Note -->
                    <div style="border-left: 3px solid #F79009; padding-left: 16px; margin: 30px 0;">
                        <p style="color: #8B949E; font-size: 14px; margin: 0;">
                        <strong style="color: #F79009;">🔒 Security Note:</strong> This verification link expires in <strong style="color: #FFFFFF;">10 minutes</strong> for your security.
                        </p>
                    </div>

                    <p style="color: #8B949E; font-size: 14px; line-height: 1.5; margin: 30px 0 0 0;">
                        If you didn't create a DezNov account, you can safely ignore this email.
                    </p>
                    </div>

                    <!-- Footer -->
                    <div style="background-color: #16181D; padding: 30px; text-align: center; border-top: 1px solid #2A2D37;">
                    <p style="color: #6B7280; font-size: 14px; margin: 0 0 10px 0;">
                        Made with ❤️ by the DezNov Team
                    </p>
                    <p style="color: #4B5563; font-size: 12px; margin: 0;">
                        This is an automated message, please do not reply to this email.
                    </p>
                    </div>

                </div>
                </body>
                </html>
            `,
});

    return res.status(200).json({ message: 'Email sent for verification, data sent to mongoDB' });

    } catch (error) {
        return res.status(500).json({ message: 'Error in creating the user' });
    }
});

// get route for the verification
route.get('/verify-email', async (req, res) => {
  const { token } = req.query;
  try {
    const payload = jwt.verify(token, process.env.EMAIL_SECRET);

    // create the user once it is verified
    const { fullName, userName, email, password } = payload;
    await User.create({
        fullName,
        userName,
        email,
        password,
        isVerified: true
    });

    res.status(200).json({ message: 'Email verified successfully! Account created' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token.' });
  }
});



module.exports = route;