const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db"); // ✅ this connects the DB

const app = express();

const PORT = process.env.PORT || 70000;

// Middleware
app.use(cors());
app.use(express.json());

// Import and use routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
