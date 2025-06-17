# 📘 Day 2 – Folder Structure & DB Connection

Today we clean up the project by creating a proper structure and establishing a working connection to the MySQL database using `mysql2`.

---

## 🗂️ Step 1: Create Folder Structure

Run the following commands in your terminal:

```bash
mkdir controllers
mkdir routes
touch db.js
```

### Why?

- `controllers/` → for handling logic
- `routes/` → to define API routes
- `db.js` → for DB connection logic

---

## 🌐 Step 2: Configure `.env`

Update your `.env` file to store MySQL credentials:

```env
HOST=localhost
PORT=7000
DB_PORT=3306
DB_USER=cool
DB_PASS=C00l0n3
DB_NAME=blog
```

> ✅ **Note:** You can replace `cool` and `C00l0n3` with your MySQL username and password.

---

## 🔌 Step 3: Create `db.js`

```js
// db.js
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

## 🚀 Step 4: Connect DB in `server.js`

In your `server.js`, just import `db.js` to make the connection run:

```js
require("./db");
```

This automatically establishes the DB connection when the server runs.

---

## 🧪 Step 5: Test DB Connection

Run:

```bash
npm start
```

Expected output:

```bash
🔍 DB Config: { host: 'localhost', port: '3306', ... }
✅ Connected to MySQL database.
Server is running on port 7000
```

---

## 🧰 Bonus: MySQL Setup (via phpMyAdmin)

1. Visit: `http://localhost/phpmyadmin`
2. Create a new database `blog`
3. Add a new user `cool` with password `C00l0n3` (or whatever you're using)

---

## ✅ Git Commit

```bash
git add .
git commit -m "🚧 Day 2: Added folder structure and DB connection"
git push origin main
```

---

Let me know when you're ready for Day 3 🚀
