# 📘 Day 3 – CRUD for Users (Create, Read, Update, Delete)

In this session, we build the full CRUD API for user management using Express and MySQL.

---

## ✅ Goals

- Create a `users` table in MySQL.
- Implement user CRUD API:
  - `POST /users` – Create a user
  - `GET /users` – Get all users
  - `PUT /users/:id` – Update user by ID
  - `DELETE /users/:id` – Delete user by ID
- Test routes using Postman or browser.

---

## 🧱 Step-by-Step Implementation

### 1. ✅ Create `users` table (MySQL)

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🎯 Goals

- Create MySQL table for users
- Implement REST API:
  - POST `/api/users` → Create new user
  - GET `/api/users` → List all users
  - PUT `/api/users/:id` → Update user
  - DELETE `/api/users/:id` → Delete user
- Test API using Postman

---

## 🛠 SQL Table

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
```
