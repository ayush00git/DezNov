const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const route = express.Router();
const dotenv = require("dotenv");
const { sendEmail } = require("../services/sendEmail");
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

    const token = jwt.sign(
      { fullName, userName, email, password },
      process.env.JWT_LOGIN_SECRET,
      { expiresIn: "5m" }
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
    const { fullName, userName, email, password } = payload;
    await User.create({
      fullName,
      userName,
      email,
      password,
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

    const isMatched = user.validatePassword(password);

    if (!isMatched) {
      return res.status(400).json({ message: "Password does not matched" });
    }

    // if password gets matched, we'll be generating a token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_LOGIN_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("auth-token", token, {
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

    if (!user.validatePassword(oldPassword)) {
      return res
        .status(400)
        .json({ message: "Current password is not correct" });
    }

    user.password = newPassword;
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

module.exports = route;
