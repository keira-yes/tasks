const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello world!");
});

// Routes
app.use("/api/users", require("./routes/usersRoute"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));