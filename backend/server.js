const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

// Routes
app.use("/api/users", require("./routes/usersRoute"));

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));