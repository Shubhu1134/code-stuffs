# ✅ Backend Learning Tracker

This tracker covers a **30-Day Backend Development Journey** using **Node.js**, **Express.js**, **MySQL**, and modern backend principles. Ideal for beginners who want to grow into full backend developers.

---

## 📅 Day-wise Breakdown

### 📘 Day 1 – Environment Setup & Initialization

- ✅ Initialize Node.js Project: `npm init -y`
- ✅ Install Basic Dependencies:

  - `express` – for web framework
  - `dotenv` – for environment variables
  - `mysql2` – for MySQL connection
  - `nodemon` – for development server restart
  - `cors` – to handle cross-origin requests

- ✅ Setup Folder: `mkdir demo-app && cd demo-app`
- ✅ Create `server.js` and verify with simple route `/`
- ✅ Setup `.env` file with DB & PORT variables
- ✅ Connect MySQL DB using `mysql2`
- ✅ Add `.gitignore` to avoid node_modules & .env in Git
- ✅ Initialize Git repo: `git init && git remote add origin <repo>`
- ✅ Push to GitHub

### 📘 Day 2 – Folder Structure & Database Setup

- ✅ Create folders:

  - `mkdir controllers routes`
  - `touch db.js`

- ✅ Create root `/` route to confirm working API
- ✅ Setup and test MySQL connection using `.env`
- ✅ Create MySQL DB via CLI or phpMyAdmin
- ✅ Setup Express JSON and CORS middleware
- ✅ First commit with complete backend skeleton

### 📘 Day 3 – CRUD API for Users

- ✅ Create a `users` table:

  ```sql
  CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- ✅ Create controller: `controllers/userController.js`
- ✅ Define routes: `routes/userRoutes.js`
- ✅ Connect routes to `server.js`
- ✅ Implement API endpoints:

  - `POST /users` – create new user
  - `GET /users` – fetch all users
  - `PUT /users/:id` – update user info
  - `DELETE /users/:id` – delete user

- ✅ Use Postman to test all routes

### 📘 Day 4 – Validation & Error Handling

- ✅ Input validation for POST/PUT using custom middleware
- ✅ Basic error middleware for catching DB and request errors
- ✅ Handle edge cases: duplicate email, missing fields

### 📘 Day 5 – MVC Pattern & Project Refactoring

- ✅ Understand MVC architecture
- ✅ Restructure code into:

  - `models` (optional, can be included later)
  - `controllers`
  - `routes`

- ✅ Clean up `server.js`

### 📘 Day 6 – Authentication (JWT + Password Hashing)

- ⬜ Install: `bcrypt`, `jsonwebtoken`
- ⬜ Create Register and Login API
- ⬜ Store hashed password in DB
- ⬜ Generate JWT token on login

### 📘 Day 7 – Protect Routes with JWT

- ⬜ Create JWT middleware
- ⬜ Apply to private routes
- ⬜ Decode JWT to identify users

### 📘 Day 8 – MySQL Joins & Pagination

- ⬜ Create relational tables (posts, comments)
- ⬜ Write SQL joins inside API
- ⬜ Implement pagination using `LIMIT` and `OFFSET`

### 📘 Day 9 – File Uploads with Multer

- ⬜ Install multer
- ⬜ Upload and serve images
- ⬜ Link uploads to users/posts

### 📘 Day 10 – Hosting & Deployment

- ⬜ Setup production environment variables
- ⬜ Deploy to Render / Railway
- ⬜ Connect to cloud DB (e.g., PlanetScale, Railway DB)

---

## 📊 Progress Tracker

| Day | Topic                       | Completed                    | Notes                  |
| --- | --------------------------- | ---------------------------- | ---------------------- |
| 1   | Environment Setup           | ✅                           | Installed dependencies |
| 2   | Structure & DB Connection   | ✅                           | DB via `.env`          |
| 3   | CRUD Operations             | ✅                           | Tested with Postman    |
| 4   | Validation & Error Handling | ✅                           | Middleware added       |
| 5   | MVC Architecture            | ✅                           | Clean folder structure |
| 5   | MVC Architecture            | ✅                           | Clean folder structure |
| 6   | Auth (JWT + Hashing)        | Login/Register, JWT + bcrypt | ✅                     |
| 7   | JWT Protected Routes        | ⬜                           |                        |
| 8   | MySQL Joins + Pagination    | ⬜                           |                        |
| 9   | File Uploads (Multer)       | ⬜                           |                        |
| 10  | Deployment Basics           | ⬜                           |                        |

---

📁 GitHub Path Suggestion:
Save this tracker as `04_Backend/tracker.md`

Let me know when you’re ready for Day 4 and I’ll generate complete markdown notes for it.
