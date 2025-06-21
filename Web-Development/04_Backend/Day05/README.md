# 📘 Day 5 – MVC Pattern (Model-View-Controller)

---

## 🎯 Objective

To cleanly organize the project using the **MVC architecture** for scalability and maintenance.

---

## 🔍 What is MVC?

- **Model** – Handles the database logic (optional in our project).
- **View** – Not used in backend API (used in full-stack apps).
- **Controller** – Processes requests, handles logic.
- **Routes** – Defines API endpoints and connects to controllers.

---

## 📁 Refactored Folder Structure

---

## ✨ Changes Made

- Removed all logic from `server.js` except basic setup
- Moved all route logic to `controllers/userController.js`
- Added validations as middleware
- Used centralized error handler

---

## 🔧 Benefits of MVC

| Benefit                | Description                                |
| ---------------------- | ------------------------------------------ |
| Clean Code             | Easier to navigate and debug               |
| Scalability            | Add new features easily                    |
| Reusability            | Same controller logic reused across routes |
| Separation of Concerns | Logic, routing, and DB are independent     |

---

## ✅ Final Task

- Ensure your server is still working
- Test all CRUD routes via Postman again
- Push refactored code to GitHub

---

## ✅ Tested CRUD after Refactor

| API                 | Status | Notes              |
| ------------------- | ------ | ------------------ |
| `POST /users`       | ✅     | Uses validation    |
| `GET /users`        | ✅     | Lists users        |
| `PUT /users/:id`    | ✅     | Updates with check |
| `DELETE /users/:id` | ✅     | Clean delete       |

---
