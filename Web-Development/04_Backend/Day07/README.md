# 📘 Day 7 – JWT Protected Routes

---

## 🎯 Objective

Secure backend routes using **JWT authentication**, so only logged-in users can access them.

---

## 🔐 Why Protect Routes?

- Some endpoints (like user profiles or dashboards) must only be accessed by authenticated users.
- We use JWT tokens to verify a user’s identity before allowing access.

---

## 🔧 Required Files

```bash
controllers/
├── protectedController.js
middlewares/
├── authMiddleware.js
routes/
├── protectedRoutes.js
```
