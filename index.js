const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("App server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});