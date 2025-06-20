# 📘 Day 4 – Input Validation & Error Handling

Today we implemented basic validation logic to check for valid user input and wrote reusable error-handling middleware.

---

## 🎯 Goals

- Validate incoming data before inserting/updating users
- Return proper HTTP status codes and messages
- Use Express middleware to handle errors cleanly

---

## ✅ What is Validation?

Validation ensures that incoming data is safe and meets expectations before it’s saved to the database.

Examples:

- Name and email must not be empty
- Email must be in a valid format

---

## 🧠 What is Middleware?

Middleware in Express is a function that gets access to:

- `req` (request)
- `res` (response)
- `next()` function to pass control

Used for:

- Validation
- Error handling
- Authentication

---

## ✨ Example Validation Middleware

### `middlewares/validateUser.js`

```js
module.exports = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  // Simple email format check
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  next(); // If everything is fine, continue to controller
};
```
