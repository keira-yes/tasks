// @desc   Register new user
// @route  /api/users
// @access Public
const registerUser = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("One of the fields is empty");
    }
}

// @desc   Login user
// @route  /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.send("Login route");
}

module.exports = {
    registerUser,
    loginUser
}