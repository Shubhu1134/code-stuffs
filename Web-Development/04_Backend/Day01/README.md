# 📘 Day 1 – Backend Setup with Node.js + MySQL

Welcome to Day 1 of our backend learning journey. Today, we'll set up the development environment and configure a basic Node.js + Express + MySQL project.

---

## 🔧 Tools You Need

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MySQL Server](https://dev.mysql.com/downloads/)
- A MySQL GUI like **phpMyAdmin** or **DBeaver** (optional but helpful)
- A code editor like **VS Code**
- Git & GitHub

---

## 📁 Folder Structure (Initial)

```
demo-app02/
├── controllers/
├── routes/
├── node_modules/
├── server.js
├── db.js
├── .env
├── .gitignore
├── package.json
```

---

## 📦 Step 1: Initialize the Project

```bash
npm init -y
```

This generates `package.json` with default values.

---

## 📥 Step 2: Install Required Packages

```bash
npm install express dotenv mysql2 cors
npm install --save-dev nodemon
```

- `express`: Web framework for Node.js
- `dotenv`: Load environment variables from `.env`
- `mysql2`: Driver to connect Node.js with MySQL
- `cors`: Enable CORS (important for frontend-backend communication)
- `nodemon`: Restart server automatically on file change (for development)

---

## 🧠 Step 3: Create Basic Server

**File:** `server.js`

```js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db"); // MySQL connection

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

## 🗄️ Step 4: Setup Environment Variables

**File:** `.env`

```env
HOST=localhost
PORT=7000
DB_PORT=3306
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=your_db_name
```

✅ Remember: Never push real credentials to GitHub.

---

## 🔌 Step 5: Setup MySQL Database Connection

**File:** `db.js`

```js
const mysql = require("mysql2");
require("dotenv").config();

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
```

---

## 🚫 Step 6: Setup `.gitignore`

**File:** `.gitignore`

```gitignore
node_modules/
.env
```

This prevents uploading sensitive info and unnecessary files to GitHub.

---

## 🚀 Step 7: Run the Server

```bash
npx nodemon server.js
```

Visit: [http://localhost:7000](http://localhost:7000)
You should see: `Backend is working!`

---

## ✅ Checklist

- [x] Initialized Node.js project
- [x] Installed required packages
- [x] Created and tested Express server
- [x] Connected MySQL via `mysql2`
- [x] Used `.env` for sensitive info
- [x] Setup `.gitignore`
- [x] Verified server is live

---

## 💡 What You Learned

- How to start a Node.js project
- Setting up Express and middleware
- Using environment variables securely
- Connecting to a MySQL database
- Creating a clean file structure for backend development

---
