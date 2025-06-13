const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
