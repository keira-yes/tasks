const jwt = require("jsonwebtoken");
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");

const authToken = asyncHandler(async (req, res, next) => {
   let token;

   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
       try {
            // Get token from headers authorization
           token = req.headers.authorization.split(" ")[1];
           // Decode token
           const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
           // Get user by token
           req.user = await User.findById(decodedToken.id).select("-password");

           next();
       } catch (error) {
           res.status(401);
           throw new Error("User is not authorized");
       }
   }

   if (!token) {
       res.status(401);
       throw new Error("User is not authorized");
   }
});

module.exports = { authToken };