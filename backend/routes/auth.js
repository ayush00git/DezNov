const express = require("express");
const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const route = express.Router();
const dotenv = require("dotenv");
const { sendEmail } = require("../services/sendEmail");
const { changePass } = require("../services/password-Email");
const { generateSalt, hashPass } = require("../services/hash");

dotenv.config();

route.get("/signup", (req, res) => {
  try {
    return res.status(200).json({ msg: "Signup page loaded successfully" });
  } catch (error) {
    return res.status(400).json({ err: "Error signup page not loaded" });
  }
});

route.get("/login", (req, res) => {
  try {
    return res.status(200).json({ msg: "Login page loaded successfully" });
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(400).json({ err: "Error login page not loaded" });
  }
});

route.post("/signup", async (req, res) => {
  try {
    const { fullName, userName, email, password } = req.body;
    if ( !fullName || !userName || !email || !password ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { userName }],
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with that email or userName already exists" });
    }

    const salt = generateSalt();
    const newHashPass = hashPass(password, salt);

    const token = jwt.sign(
      { fullName, userName, email, newHashPass, salt },
      process.env.JWT_LOGIN_SECRET,
      { expiresIn: "10m" }
    );
    sendEmail(token);
    return res
      .status(200)
      .json({ message: "Email sent for verification, Check your inbox" });
  } catch (error) {
    console.log(`${error}`)
    return res.status(500).json({ message: "Error in creating the user" });
  }
});

// get route for the verification
route.get("/verify-email", async (req, res) => {
  const { token } = req.query;
  try {
    const payload = jwt.verify(token, process.env.JWT_LOGIN_SECRET);

    // create the user once it is verified
    const { fullName, userName, email, newHashPass, salt } = payload;
    await User.create({
      fullName,
      userName,
      email,
      password: newHashPass,
      salt,
      isVerified: true,
    });
    res
      .status(200)
      .json({ message: "Email verified successfully! Account created" });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ message: "Invalid or expired token." });
  }
});

// POST request for login
route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // all fields are required
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // validation of password
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User does not exist or check your email" });
    }

    const inputHash = hashPass(password, user?.salt);
    if( inputHash !== user.password ) {
      return res.status(400).json({ message: `Password is incorrect` });
    }

    // if password gets matched, we'll be generating a token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_LOGIN_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({
      message: "Login Successfull!",
      user: {
        _id: user._id,
        userName: user.userName,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(`Login Error: ${error}`);
    return res
      .status(500)
      .json({ message: "Error in logging in the user, please try again" });
  }
});

route.post("/change-password/oldpass", async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User is not registered" });
    }

    const oldHash = hashPass(oldPassword, user.salt);
    if( oldHash !== user.password ) {
      return res.status(400).json({ message: `Your old password isn't correct` });
    }
    
    const salt = generateSalt();
    const newHashPass = hashPass(newPassword, salt);
    user.salt = salt;
    user.password = newHashPass,
    await user.save();

    console.log("Password changed successfully");
    return res
      .status(200)
      .json({
        messgae:
          "Password changed successfully, you can login to your account now",
      });
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(400).json({ message: `Error: ${error}` });
  }
});

route.post('/change-password/email', async(req, res) => {
  const { email } = req.body;
  try {
    const registeredUser = await User.findOne({ email });
    if( !registeredUser ) {
      return res.status(400).json({ message: "Your email is not registered to any account" });
    }
    const payload = {
      email: registeredUser.email,
      fullName: registeredUser.fullName,
    };
    const token = jwt.sign(payload, process.env.JWT_LOGIN_SECRET, {expiresIn: "10m"});
    changePass(token);
    return res.status(200).json({ message: `Check your email for the reset password link` });
  } catch(error) {
    console.log(`${error}`);
    return res.status(500).json({ message: `Internal server error` });
  }
})

route.post('/change-password', async(req, res) => {
  const { token } = req.query;
  const { newPassword } = req.body;
  if(!token) {
    return res.status(400).json({ message: `Invalid token` });
  }
  if(!newPassword) {
    return res.status(400).json({ message: `All the fields are required` });
  }

  const decoded = jwt.verify(token, process.env.JWT_LOGIN_SECRET);

  try {
    const currentUser = await User.findOne({ email: decoded.email });
    if(!currentUser) {
      return res.status(400).json({ message: "Invalid token" });
    }
    const salt = generateSalt();
    const newHashPass = hashPass(newPassword, salt);
    currentUser.salt = salt;
    currentUser.password = newHashPass;  
    await currentUser.save();
    return res.status(200).json({ message: "Password changed successfully! You can now login to your account" });
  } catch(error) {
    console.log(`${error}`);
    return res.status(500).json({ message: `Internal server error` });
  }
})

module.exports = route;
