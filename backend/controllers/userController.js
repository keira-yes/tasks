const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Generate token
const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
}

// @desc   Register new user
// @route  POST /api/users
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
    const user = await User.create({
        name,
        email,
        password: hashPassword
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400)
        throw new Error("Invalid user data");
    }
});

// @desc   Login user
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // Check password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(401)
        throw new Error("Invalid email or password");
    }
});

// @desc   Get current user
// @route  POST /api/users/current
// @access Private
const getCurrentUser = asyncHandler(async (req, res) => {
    const { user: { _id, name, email }} = req;

    const user = {
        id: _id,
        name,
        email
    }

    res.status(200).json(user);
});

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
}