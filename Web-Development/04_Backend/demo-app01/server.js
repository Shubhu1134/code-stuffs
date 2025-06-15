// server.js
const express = require("express");
require("dotenv").config(); // Load .env variables first

const db = require("./db");

const app = express();
app.use(express.json()); // To parse JSON in POST requests

app.get("/", (req, res) => {
  res.send(`This is the value of SHUBHAM: ${process.env.SHUBHAM}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
