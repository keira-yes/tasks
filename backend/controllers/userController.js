const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc   Register new user
// @route  /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("One of the fields is empty");
    }

    // Check if a user already exists
    const userEmail = await User.findOne({ email });
    if (userEmail) {
        res.status(400);
        throw new Error("User with this email already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = User.create({
        name,
        email,
        password: hashPassword
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400)
        throw new Error("Invalid user data");
    }
});

// @desc   Login user
// @route  /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.send("Login route");
});

module.exports = {
    registerUser,
    loginUser
}