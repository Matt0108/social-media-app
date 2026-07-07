const express = require("express");
const messageRoutes = require("./routes/messageRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.dbURL)
    .then(() => console.log("DB Connected!!"))
    .catch(error => console.log(error));

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/messages", messageRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});