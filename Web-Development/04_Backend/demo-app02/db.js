// db.js
const mysql = require("mysql2");
require("dotenv").config(); // Load .env variables

// Optional debug log
console.log("🔍 DB Config:", {
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB connection error:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL database.");
});

module.exports = db;
